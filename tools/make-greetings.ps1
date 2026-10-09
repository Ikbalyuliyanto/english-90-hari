# Membuat 5 klip sapaan English Companion (WAV) untuk suara channel notifikasi Android.
# Suara: Text-to-Speech Windows (offline). Jalankan dari root repo:
#   powershell -ExecutionPolicy Bypass -File tools/make-greetings.ps1 [-Name Ikbal] [-Voice "Microsoft Zira Desktop"]
# Output: android/app/src/main/res/raw/greet_<window>.wav
# Catatan: Android mengunci suara channel setelah dibuat. Jika klip diganti, naikkan versi channel
# (GREETING_CHANNEL_VERSION di js/core/native-notify.js) agar channel baru dibuat dengan suara baru.
param(
  [string]$Name = 'Ikbal',
  [string]$Voice = 'Microsoft Zira Desktop',
  [int]$Rate = -1
)
Add-Type -AssemblyName System.Speech
$out = Join-Path $PSScriptRoot '..\android\app\src\main\res\raw'
New-Item -ItemType Directory -Force $out | Out-Null
$greetings = [ordered]@{
  'greet_morning'         = "$Name, wake up. Good morning."
  'greet_commute_morning' = "$Name, it's time to work."
  'greet_lunch'           = "$Name, lunch time."
  'greet_commute_home'    = "$Name, time to go home."
  'greet_evening'         = "$Name, good evening."
}
$format = New-Object System.Speech.AudioFormat.SpeechAudioFormatInfo(24000, [System.Speech.AudioFormat.AudioBitsPerSample]::Sixteen, [System.Speech.AudioFormat.AudioChannel]::Mono)
foreach ($k in $greetings.Keys) {
  $s = New-Object System.Speech.Synthesis.SpeechSynthesizer
  $s.SelectVoice($Voice)
  $s.Rate = $Rate
  $file = Join-Path $out "$k.wav"
  $s.SetOutputToWaveFile($file, $format)
  $p = New-Object System.Speech.Synthesis.PromptBuilder
  $p.AppendBreak([TimeSpan]::FromMilliseconds(150))
  $p.AppendText($greetings[$k])
  $s.Speak($p)
  $s.Dispose()
  '{0,-24} {1,7} bytes  "{2}"' -f "$k.wav", (Get-Item $file).Length, $greetings[$k]
}
