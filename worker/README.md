# english-90-hari-push (Cloudflare Worker)

Backend notification untuk English 90 Hari. Tidak ada secret di folder ini.

| Endpoint | Fungsi |
|---|---|
| `GET /health` | Status Worker + KV |
| `POST /subscribe` | Simpan `subscription.toJSON()` ke KV `subscription:primary` |
| `POST /state` | Simpan `{ currentDay, activeStatus, activeQuestionId }` ke KV `state:primary` |
| `POST /send-test` | Kirim 1 Web Push ke `subscription:primary`. Wajib `Authorization: Bearer <ADMIN_TOKEN>` |

Web Push: [`@block65/webcrypto-web-push`](https://github.com/block65/webcrypto-web-push) (WebCrypto, VAPID ES256 RFC 8292, payload aes128gcm RFC 8291).
Provider 404/410 → `subscription:primary` dihapus, response `stale: true`.

## Konfigurasi

- `wrangler.toml` `[vars]`: `VAPID_PUBLIC_KEY`, `VAPID_SUBJECT` (`mailto:...`), `ALLOWED_ORIGIN`, dan id KV `PUSH_KV`.
- Secret (sekali saja, tidak masuk repo):
  ```sh
  npx wrangler secret put VAPID_PRIVATE_KEY   # sudah ada
  npx wrangler secret put ADMIN_TOKEN         # baru
  ```

## Test & deploy

```sh
cd worker
npm install
npm test
npx wrangler login
npx wrangler deploy
```

## Kirim test push (token tidak tersimpan di history shell)

```sh
read -rs ADMIN_TOKEN && export ADMIN_TOKEN
curl -s -X POST https://english-90-hari-push.ikbaly94.workers.dev/send-test \
  -H "Authorization: Bearer $ADMIN_TOKEN"
unset ADMIN_TOKEN
```

PowerShell:

```powershell
$t = Read-Host -AsSecureString "ADMIN_TOKEN"
$h = @{ Authorization = "Bearer " + [Net.NetworkCredential]::new('', $t).Password }
Invoke-RestMethod -Method Post -Uri https://english-90-hari-push.ikbaly94.workers.dev/send-test -Headers $h
Remove-Variable t, h
```

Belum ada Cron Trigger: scheduler diaktifkan setelah push manual terbukti sampai ke HP.
