package id.ikbal.english90;

import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.content.Context;
import android.content.Intent;
import android.media.AudioAttributes;
import android.media.AudioManager;
import android.net.Uri;
import android.os.Build;
import android.provider.Settings;

import androidx.core.app.NotificationCompat;
import androidx.core.app.NotificationManagerCompat;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

/**
 * Bantuan native untuk notifikasi English Companion:
 * - membuka pengaturan Android (notifikasi app / detail app);
 * - membuat channel dengan suara EKSPLISIT (nada notifikasi default) + getar, importance HIGH;
 * - diagnostik channel/audio untuk Settings (sound terpasang, volume, DND, dll.).
 * Tidak meminta izin apa pun.
 */
@CapacitorPlugin(name = "AppSettings")
public class AppSettingsPlugin extends Plugin {

    private static final long[] VIBRATION = new long[] { 0, 400, 200, 400 };

    @PluginMethod
    public void openNotificationSettings(PluginCall call) {
        Intent intent;
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            intent = new Intent(Settings.ACTION_APP_NOTIFICATION_SETTINGS);
            intent.putExtra(Settings.EXTRA_APP_PACKAGE, getContext().getPackageName());
        } else {
            intent = appDetailsIntent();
        }
        start(intent, call);
    }

    @PluginMethod
    public void openChannelSettings(PluginCall call) {
        String id = call.getString("id");
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O && id != null) {
            Intent intent = new Intent(Settings.ACTION_CHANNEL_NOTIFICATION_SETTINGS);
            intent.putExtra(Settings.EXTRA_APP_PACKAGE, getContext().getPackageName());
            intent.putExtra(Settings.EXTRA_CHANNEL_ID, id);
            start(intent, call);
        } else {
            openNotificationSettings(call);
        }
    }

    @PluginMethod
    public void openAppDetails(PluginCall call) {
        start(appDetailsIntent(), call);
    }

    /** Buat channel (jika belum ada) dengan suara default eksplisit + getar; hapus channel lama bila diminta. */
    @PluginMethod
    public void ensureChannel(PluginCall call) {
        String id = call.getString("id");
        String name = call.getString("name", "English Companion");
        String description = call.getString("description", "");
        if (id == null) {
            call.reject("id wajib diisi");
            return;
        }
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            NotificationManager nm = (NotificationManager) getContext().getSystemService(Context.NOTIFICATION_SERVICE);
            com.getcapacitor.JSArray oldIds = call.getArray("deleteIds", new com.getcapacitor.JSArray());
            for (int i = 0; i < oldIds.length(); i++) {
                String old = oldIds.optString(i, null);
                if (old != null && !old.equals(id)) nm.deleteNotificationChannel(old);
            }
            if (nm.getNotificationChannel(id) == null) {
                NotificationChannel channel = new NotificationChannel(id, name, NotificationManager.IMPORTANCE_HIGH);
                channel.setDescription(description);
                AudioAttributes attrs = new AudioAttributes.Builder()
                    .setUsage(AudioAttributes.USAGE_NOTIFICATION)
                    .setContentType(AudioAttributes.CONTENT_TYPE_SONIFICATION)
                    .build();
                // sound = nama file di res/raw (mis. "greet_morning") -> sapaan suara; kosong -> nada notifikasi default.
                String sound = call.getString("sound");
                Uri soundUri = Settings.System.DEFAULT_NOTIFICATION_URI;
                if (sound != null && !sound.isEmpty()) {
                    int resId = getContext().getResources().getIdentifier(sound, "raw", getContext().getPackageName());
                    if (resId != 0) soundUri = Uri.parse("android.resource://" + getContext().getPackageName() + "/raw/" + sound);
                }
                channel.setSound(soundUri, attrs);
                channel.enableVibration(true);
                channel.setVibrationPattern(VIBRATION);
                channel.enableLights(true);
                channel.setLockscreenVisibility(NotificationCompat.VISIBILITY_PUBLIC);
                channel.setShowBadge(true);
                nm.createNotificationChannel(channel);
            }
        }
        call.resolve(describe(id));
    }

    @PluginMethod
    public void diagnostics(PluginCall call) {
        call.resolve(describe(call.getString("id")));
    }

    private JSObject describe(String id) {
        Context ctx = getContext();
        JSObject r = new JSObject();
        r.put("channelId", id);
        r.put("sdk", Build.VERSION.SDK_INT);
        r.put("manufacturer", Build.MANUFACTURER);
        r.put("model", Build.MODEL);
        r.put("areEnabled", NotificationManagerCompat.from(ctx).areNotificationsEnabled());
        AudioManager am = (AudioManager) ctx.getSystemService(Context.AUDIO_SERVICE);
        if (am != null) {
            r.put("notificationVolume", am.getStreamVolume(AudioManager.STREAM_NOTIFICATION));
            r.put("notificationVolumeMax", am.getStreamMaxVolume(AudioManager.STREAM_NOTIFICATION));
            int mode = am.getRingerMode();
            r.put("ringerMode", mode == AudioManager.RINGER_MODE_NORMAL ? "normal" : mode == AudioManager.RINGER_MODE_VIBRATE ? "vibrate" : "silent");
        }
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            NotificationManager nm = (NotificationManager) ctx.getSystemService(Context.NOTIFICATION_SERVICE);
            int filter = nm.getCurrentInterruptionFilter();
            r.put("doNotDisturb", filter != NotificationManager.INTERRUPTION_FILTER_ALL && filter != NotificationManager.INTERRUPTION_FILTER_UNKNOWN);
            NotificationChannel ch = id == null ? null : nm.getNotificationChannel(id);
            r.put("channelExists", ch != null);
            if (ch != null) {
                Uri sound = ch.getSound();
                r.put("importance", ch.getImportance());
                r.put("soundConfigured", sound != null);
                r.put("soundUri", sound == null ? null : sound.toString());
                r.put("soundUsage", ch.getAudioAttributes() == null ? null : ch.getAudioAttributes().getUsage());
                r.put("vibration", ch.shouldVibrate());
                r.put("lockscreenVisibility", ch.getLockscreenVisibility());
                r.put("blocked", ch.getImportance() == NotificationManager.IMPORTANCE_NONE);
            }
        }
        return r;
    }

    private Intent appDetailsIntent() {
        Intent intent = new Intent(Settings.ACTION_APPLICATION_DETAILS_SETTINGS);
        intent.setData(Uri.fromParts("package", getContext().getPackageName(), null));
        return intent;
    }

    private void start(Intent intent, PluginCall call) {
        try {
            intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            getContext().startActivity(intent);
            call.resolve();
        } catch (Exception e) {
            call.reject("Tidak bisa membuka pengaturan: " + e.getMessage());
        }
    }
}
