# Audit terjemahan Day 1–120 (skrining otomatis)

Hasil skrining heuristik, BUKAN keputusan final. Setiap kandidat wajib diperiksa per kalimat sebelum diubah.

- CHANGE_PRIMARY (kandidat): >=50% kata isi di `words` tidak muncul di `translation` (indikasi terjemahan terlalu bebas).
- FIX_WORD_CONTEXT (kandidat): 1+ kata isi tidak muncul di `translation`.
- FIX_PATTERN (kandidat): `meaning` pola tanpa penanda slot (`...`).
- ADD_NATURAL & NEEDS_REVIEW: hanya bisa ditentukan saat review manual.

```
{
 "total": 1399,
 "cnt": {
  "CHANGE_PRIMARY": 137,
  "KEEP": 688,
  "FIX_WORD_CONTEXT": 574,
  "FIX_PATTERN": 90
 },
 "batch": {
  "Day 1-20": {
   "CHANGE_PRIMARY": 32,
   "KEEP": 170,
   "FIX_WORD_CONTEXT": 85
  },
  "Day 21-40": {
   "FIX_WORD_CONTEXT": 87,
   "KEEP": 151,
   "CHANGE_PRIMARY": 16
  },
  "Day 41-60": {
   "KEEP": 174,
   "FIX_WORD_CONTEXT": 58,
   "CHANGE_PRIMARY": 16
  },
  "Day 61-80": {
   "KEEP": 75,
   "FIX_WORD_CONTEXT": 140,
   "CHANGE_PRIMARY": 38
  },
  "Day 81-100": {
   "FIX_WORD_CONTEXT": 103,
   "CHANGE_PRIMARY": 24,
   "KEEP": 76
  },
  "Day 101-120": {
   "FIX_WORD_CONTEXT": 101,
   "KEEP": 42,
   "CHANGE_PRIMARY": 11
  }
 }
}
```

## CHANGE_PRIMARY

| ID | English | Translation | Kata tidak tercermin |
|---|---|---|---|
| D01-S01 | I am a software developer. | Saya seorang software developer. | software=perangkat lunak; developer=pengembang |
| D01-S14 | It is a pleasure to meet you. | Senang sekali bertemu dengan Anda. | It=hal ini; pleasure=kesenangan / kehormatan |
| D02-S11 | I go home. | Saya pulang. | go=pergi; home=ke rumah |
| D02-S15 | I go to bed at eleven. | Saya tidur jam sebelas. | go=pergi; bed=tempat tidur; at=pada (jam) |
| D03-S15 | Thank you for the meal. | Terima kasih atas makanannya. | Thank=berterima kasih; you=kamu / Anda |
| D04-S05 | Turn on the light. | Nyalakan lampunya. | Turn=putar; on=menyala (dalam "turn on") |
| D04-S11 | Put your shoes away. | Simpan sepatumu. | Put=taruh / letakkan; your=milikmu; away=ke tempatnya / menjauh |
| D05-S12 | See you later. | Sampai jumpa nanti. | See=bertemu / melihat; you=kamu |
| D06-S04 | Don't forget your phone. | Jangan lupa ponselmu. | Don't=jangan (do not, dalam perintah); your=milikmu |
| D06-S05 | Put on your shoes. | Pakai sepatumu. | Put=taruh / letakkan; on=pada badan (dalam "put on"); your=milikmu |
| D07-S01 | Excuse me, where is the station? | Permisi, di mana stasiunnya? | Excuse=maafkan; me=saya (sebagai objek) |
| D07-S06 | Go straight ahead. | Lurus terus. | Go=jalan / pergi; ahead=ke depan |
| D07-S11 | Go past the bank. | Lewati bank tersebut. | Go=jalan / pergi; past=melewati |
| D09-S15 | Let's do it together. | Ayo lakukan bersama-sama. | Let's=mari kita (let us); do=melakukan; it=itu / hal itu |
| D10-S13 | It's getting colder. | Cuacanya semakin dingin. | It's=cuacanya sedang (it is); colder=lebih dingin |
| D10-S15 | Let's go outside. | Ayo keluar. | Let's=mari kita (let us); go=pergi; outside=ke luar |
| D11-S01 | I'm not feeling well. | Saya sedang tidak enak badan. | feeling=merasa; well=sehat / baik |
| D11-S14 | Get well soon. | Semoga cepat sembuh. | Get=menjadi; well=sehat; soon=segera |
| D13-S06 | What do you do? | Apa pekerjaanmu? | do=(kata bantu pertanyaan, tidak diterjemahkan); you=kamu; do=lakukan / kerjakan (untuk pekerjaan) |
| D13-S11 | How much is it? | Berapa harganya? | How=seberapa; much=banyak (untuk yang tidak dihitung, seperti harga); it=itu / -nya |
| D13-S12 | How many are there? | Ada berapa? | How=seberapa; many=banyak (untuk yang bisa dihitung) |
| D15-S01 | How was your day? | Bagaimana harimu? | was=adalah (lampau dari is); your=milikmu |
| D15-S06 | We had a good time. | Kami bersenang-senang. | had=mengalami / punya (lampau); good=menyenangkan / baik; time=waktu |
| D15-S09 | Let's hang out. | Ayo nongkrong / jalan bareng. | Let's=mari kita (let us); hang=bergantung (dalam "hang out"); out=keluar (dalam "hang out") |
| D15-S11 | See you soon. | Sampai jumpa lagi. | See=bertemu / melihat; you=kamu; soon=segera |
| D16-S03 | I'm still working on it. | Saya masih mengerjakannya. | I'm=saya sedang (I am); on=pada (dalam "work on"); it=itu / -nya |
| D16-S05 | She's talking to her manager. | Dia sedang berbicara dengan atasannya. | She's=dia (perempuan) sedang — she is; her=milik dia (perempuan) / -nya |
| D16-S06 | They're having a meeting. | Mereka sedang rapat. | They're=mereka sedang — they are; having=mengadakan (dalam "have a meeting") |
| D16-S11 | I'm learning English these days. | Belakangan ini saya sedang belajar bahasa Inggris. | learning=mempelajari; days=hari-hari |
| D17-S10 | It started at nine and ended at eleven. | Rapatnya mulai jam sembilan dan selesai jam sebelas. | started=mulai (lampau, -ed dibaca "id"); at=pada (jam); ended=berakhir (lampau, -ed dibaca "id") |
| D17-S12 | I went home at six. | Saya pulang jam enam. | went=pergi (lampau); home=ke rumah; at=pada (jam) |
| D19-S12 | Can I pay by QR code? | Boleh saya bayar pakai QR code? | pay=membayar; code=kode |
| D22-S02 | It starts at half past two. | Mulainya jam setengah tiga (14.30). | at=pada (jam); past=lewat; two=dua |
| D22-S03 | When is your appointment? | Kapan janji temumu? | your=-mu / milikmu; appointment=janji temu (dokter, klien, dll.) |
| D23-S04 | When did it happen? | Kapan itu terjadi? | did=(kata bantu pertanyaan bentuk lampau, tidak diterjemahkan); it=hal itu |
| D23-S07 | What about you? | Kalau kamu? | What=bagaimana (dalam "what about"); about=tentang / dengan |
| D24-S13 | Our team is getting bigger. | Tim kami semakin besar. | Our=milik kami / kita; bigger=lebih besar |
| D26-S08 | Let me carry that for you. | Biar saya bawakan itu. | carry=membawa / membawakan; you=kamu |
| D27-S05 | In my opinion, this design is better. | Menurut saya, desain ini lebih bagus. | my=milik saya; opinion=pendapat |
| D28-S02 | Something is wrong with the printer. | Ada yang tidak beres dengan printernya. | Something=sesuatu; with=dengan / pada |
| D29-S08 | Sorry, I was on mute. | Maaf, mikrofon saya tadi mati. | was=(to be bentuk lampau, tidak diterjemahkan); on=dalam keadaan (dalam "on mute"); mute=bisu / mikrofon dimatikan |
| D30-S03 | After that, I usually go home and rest. | Setelah itu, saya biasanya pulang dan istirahat. | go=pergi; home=ke rumah; rest=beristirahat |
| D30-S06 | But I'm getting better every day. | Tapi saya semakin baik setiap hari. | But=tetapi; I'm=saya sedang (I am); better=lebih baik |
| D30-S07 | That's all about me. Thank you for listening. | Sekian tentang saya. Terima kasih sudah mendengarkan. | all=semua; Thank=berterima kasih; you=kamu / Anda; for=atas / karena |
| D32-S07 | Let's do this first. | Ayo kerjakan ini dulu. | Let's=mari kita (let us); do=mengerjakan |
| D34-S09 | How's it going? | Bagaimana progresnya? | it=(subjek, tidak diterjemahkan); going=berjalan |
| D34-S11 | I worked on the dashboard yesterday. | Kemarin saya mengerjakan dashboard. | worked=mengerjakan (lampau, dalam "work on"); dashboard=dasbor / halaman ringkasan |
| D36-S13 | I tried restarting it. | Saya sudah coba menyalakannya ulang. | tried=mencoba (lampau); it=itu / -nya |
| D41-S08 | That's true, but it might take longer. | Itu benar, tapi mungkin akan lebih lama. | but=tetapi; it=hal itu; take=memakan (waktu) |
| D41-S10 | Let's look at both options. | Ayo kita lihat kedua pilihannya. | Let's=mari kita (let us); look=melihat |
| D42-S02 | Something isn't working correctly. | Ada yang tidak berfungsi dengan benar. | Something=sesuatu; isn't=tidak sedang (is not) |
| D42-S11 | I tried a different browser, but it didn't help. | Saya sudah coba browser lain, tapi tidak membantu. | tried=mencoba (lampau); but=tetapi; it=hal itu; didn't=tidak (lampau) — did not |
| D44-S11 | I haven't read your message yet. | Saya belum membaca pesanmu. | read=membaca (bentuk lampau, dibaca "red"); your=milikmu / -mu; yet=(penegas "belum", di akhir kalimat) |
| D45-S05 | I'd like to ask for your advice on this. | Saya ingin minta saran kalian soal ini. | I'd=saya ingin (I would, dalam "I'd like"); ask=meminta (dalam "ask for"); your=milik kalian |
| D45-S06 | From my side, that's everything. | Dari saya, sekian. | my=milik saya; side=sisi / pihak; everything=semuanya |
| D49-S04 | When do we need it? | Kapan kita membutuhkannya? | do=(kata bantu pertanyaan, tidak diterjemahkan); need=butuh; it=itu / -nya |
| D49-S10 | Could you walk me through it? | Bisa jelaskan ke saya langkah demi langkah? | you=kamu / Anda; it=itu / hal itu |
| D52-S04 | Does this need to work on mobile phones? | Apakah ini perlu berfungsi di ponsel? | Does=(kata bantu pertanyaan untuk it/this, tidak diterjemahkan); on=di / pada; mobile=seluler / mobile |
| D54-S06 | I'll take another look at the numbers. | Saya akan cek lagi angka-angkanya. | another=sekali lagi / lain; look=lihat / tinjauan; at=pada |
| D54-S10 | That's helpful, thank you. | Itu membantu, terima kasih. | thank=berterima kasih; you=kamu / Anda |
| D55-S02 | That was my mistake. | Itu kesalahan saya. | was=(to be bentuk lampau, tidak diterjemahkan); my=milik saya |
| D58-S09 | Let's find a middle ground. | Ayo cari jalan tengah. | Let's=mari kita (let us); find=mencari / menemukan; ground=tanah / dasar |
| D59-S01 | Here's what I've done so far. | Ini yang sudah saya kerjakan sejauh ini. | Here's=ini dia (here is); what=apa yang |
| D59-S10 | Let's confirm the action items. | Ayo kita pastikan daftar tindak lanjutnya. | Let's=mari kita (let us); confirm=memastikan; items=butir / item (jamak) |
| D62-S06 | This component shows the patient's details. | Komponen ini menampilkan detail pasien. | component=komponen: bagian tampilan yang bisa dipakai ulang; patient's=milik pasien |
| D63-S01 | The backend receives the request from the frontend. | Backend menerima request dari frontend. | backend=backend: bagian server yang memproses data; request=request: permintaan yang dikirim ke server; frontend=frontend: bagian aplikasi yang dilihat user |
| D63-S06 | The business logic is in the service layer. | Logika bisnisnya ada di service layer. | in=di dalam; service=service: bagian kode yang menjalankan logika; layer=lapisan (bagian kode) |
| D64-S01 | The frontend sends a request to the API. | Frontend mengirim request ke API. | frontend=frontend: bagian aplikasi yang dilihat user; request=request: permintaan yang dikirim ke server; API=API: pintu komunikasi untuk meminta dan mengirim data |
| D64-S03 | This endpoint returns the patient's information. | Endpoint ini mengembalikan informasi pasien. | endpoint=endpoint: alamat URL tertentu di API; patient's=milik pasien |
| D64-S06 | The token is sent in the header. | Token-nya dikirim di header. | token=token: kode tanda bahwa user sudah login; in=di dalam; header=header: informasi tambahan di sebuah request |
| D64-S10 | A 200 response means the request was successful. | Response 200 berarti request-nya berhasil. | 200=200: kode status "berhasil"; response=response: jawaban dari server; request=request: permintaan ke server; was=(to be bentuk lampau, tidak diterjemahkan) |
| D66-S02 | After login, the server creates a token. | Setelah login, server membuat sebuah token. | login=login: proses masuk ke akun (kata benda); server=server: komputer yang menjalankan backend; token=token: kode tanda bahwa user sudah login |
| D66-S04 | Authentication checks who the user is. | Authentication memastikan siapa user-nya. | Authentication=autentikasi: memastikan identitas user; checks=memeriksa; -s karena "authentication" |
| D66-S05 | Authorization checks what the user is allowed to do. | Authorization memastikan apa saja yang boleh dilakukan user. | Authorization=otorisasi: memastikan hak akses user; checks=memeriksa; do=melakukan |
| D67-S02 | The code is in our company's repository. | Kodenya ada di repository perusahaan kami. | code=kode program; in=di dalam; our=milik kami; company's=milik perusahaan; repository=repository: tempat penyimpanan kode (sering disebut "repo") |
| D67-S04 | I pushed the branch to the remote repository. | Saya push branch-nya ke repository remote. | pushed=push: mengirim commit ke server Git (lampau); branch=branch: cabang pengembangan di Git; remote=remote: server Git bersama; repository=repository: tempat penyimpanan kode |
| D67-S07 | There's a merge conflict in this file. | Ada merge conflict di file ini. | merge=merge: penggabungan branch; conflict=konflik: perubahan yang bertabrakan |
| D67-S13 | I'm still working on the feature branch. | Saya masih bekerja di feature branch. | I'm=saya sedang (I am); feature=fitur; branch=branch: cabang pengembangan di Git |
| D68-S04 | I left a few comments on your code. | Saya meninggalkan beberapa komentar di kodemu. | left=meninggalkan (lampau; di sini bukan "kiri"); on=di / pada; your=milikmu; code=kode program |
| D68-S08 | The PR was approved and merged. | PR-nya sudah disetujui dan di-merge. | PR=PR: pull request; was=(to be bentuk lampau, tidak diterjemahkan); merged=digabungkan ke branch utama |
| D69-S02 | When I click "Pay", nothing happens. | Saat saya klik "Pay", tidak terjadi apa-apa. | click=mengklik; Pay=Bayar (nama tombol); nothing=tidak ada apa-apa |
| D70-S11 | I've tried clearing the cache, but it didn't help. | Saya sudah coba menghapus cache, tapi tidak membantu. | tried=mencoba; cache=cache: penyimpanan data sementara; but=tetapi; it=hal itu; didn't=tidak (lampau) — did not |
| D71-S07 | The QA team tested it on different devices. | Tim QA sudah mengetesnya di berbagai perangkat. | QA=QA: tim penguji kualitas (quality assurance); tested=mengetes (lampau, -ed dibaca "id"); it=itu / -nya |
| D72-S04 | The deployment failed because an environment variable was missing. | Deploy-nya gagal karena ada environment variable yang belum diisi. | deployment=deployment: proses merilis ke server; environment=environment: lingkungan server; variable=variabel: nilai pengaturan; was=(to be bentuk lampau, tidak diterjemahkan) |
| D73-S02 | Users are getting a 500 error on the login page. | User mendapat error 500 di halaman login. | Users=pengguna (jamak); 500=500: kode status "ada masalah di server"; login=login: proses masuk ke akun |
| D73-S12 | We rolled back the last deployment. | Kami rollback deploy terakhir. | rolled=mengembalikan (dalam "roll back", lampau); back=kembali (dalam "roll back"); deployment=deployment: proses merilis ke server |
| D74-S05 | The bottleneck is the database query. | Bottleneck-nya ada di query database. | bottleneck=bottleneck: bagian paling lambat yang menghambat seluruh proses; database=database: tempat data disimpan; query=query: perintah ke database (dibaca "kwi-ri") |
| D74-S06 | The API is making too many requests to the database. | API-nya mengirim terlalu banyak request ke database. | API=API: pintu komunikasi antar aplikasi; making=membuat / melakukan; requests=request: permintaan (jamak); database=database: tempat data disimpan |
| D76-S03 | The request goes through the API before it reaches the service layer. | Request-nya melewati API sebelum sampai ke service layer. | request=request: permintaan ke server; goes=lewat (dalam "go through"); -es karena "the request"; through=melalui; API=API: pintu komunikasi antar aplikasi; service=service: bagian kode yang menjalankan logika; layer=lapisan (bagian kode) |
| D76-S04 | The controller receives the request and calls the service. | Controller menerima request lalu memanggil service. | controller=controller: bagian kode yang menerima request; request=request: permintaan ke server; calls=memanggil (fungsi / bagian kode); -s karena "the controller"; service=service: bagian kode yang menjalankan logika |
| D76-S06 | The repository layer is responsible for talking to the database. | Repository layer bertugas berkomunikasi dengan database. | repository=repository layer: bagian kode yang mengakses database (beda dengan Git repository); layer=lapisan (bagian kode); for=atas / untuk; database=database: tempat data disimpan |
| D76-S08 | The payment service is a separate application. | Service pembayaran adalah aplikasi yang terpisah. | service=service: bagian sistem yang menjalankan satu fungsi; separate=terpisah (kata sifat, dibaca "se-pe-ret") |
| D77-S03 | Then it's sent to the backend as JSON. | Lalu datanya dikirim ke backend dalam format JSON. | backend=backend: bagian server yang memproses data; as=sebagai / dalam bentuk; JSON=JSON: format teks untuk bertukar data |
| D77-S06 | The email service listens to this event. | Service email menunggu event ini. | service=service: bagian sistem yang menjalankan satu fungsi; event=event: sinyal bahwa sesuatu sudah terjadi |
| D77-S11 | The request goes through the gateway before it reaches the service. | Request-nya melewati gateway sebelum sampai ke service. | request=request: permintaan ke server; goes=lewat (dalam "go through"); through=melalui; gateway=gateway: pintu masuk request ke sistem; service=service: bagian sistem yang menjalankan satu fungsi |
| D77-S13 | After that, the service updates the stock. | Setelah itu, service memperbarui stoknya. | service=service: bagian sistem yang menjalankan satu fungsi; stock=stok barang |
| D78-S01 | The frontend and backend agree on the API contract. | Frontend dan backend menyepakati kontrak API-nya. | frontend=frontend: bagian aplikasi yang dilihat user; backend=backend: bagian server yang memproses data; agree=sepakat; on=tentang (dalam "agree on"); API=API: pintu komunikasi antar aplikasi; contract=kontrak: kesepakatan bentuk request dan response |
| D78-S02 | The contract defines the fields in the request and response. | Kontraknya menentukan field apa saja di request dan response. | contract=kontrak: kesepakatan format API; in=di dalam; request=request: permintaan ke server; response=response: jawaban dari server |
| D78-S04 | The response format doesn't match what the frontend expects. | Format response-nya tidak cocok dengan yang diharapkan frontend. | response=response: jawaban dari server; what=apa yang; frontend=frontend: bagian aplikasi yang dilihat user; expects=mengharapkan; -s karena "the frontend" |
| D78-S12 | The backend team hasn't finished the endpoint yet. | Tim backend belum menyelesaikan endpoint-nya. | backend=backend: bagian server yang memproses data; endpoint=endpoint: alamat URL tertentu di API; yet=(penegas "belum", di akhir kalimat) |
| D80-S03 | We validate the data on both the frontend and the backend. | Kami memvalidasi datanya di frontend dan juga di backend. | both=kedua / baik ... maupun; frontend=frontend: bagian aplikasi yang dilihat user; backend=backend: bagian server yang memproses data |
| D80-S04 | Frontend validation is for user experience, but backend validation is for security. | Validasi di frontend untuk kenyamanan user, sedangkan validasi di backend untuk keamanan. | Frontend=frontend: bagian aplikasi yang dilihat user; validation=validasi: pemeriksaan kebenaran data; experience=pengalaman; backend=backend: bagian server yang memproses data |
| D81-S03 | The API key is stored in a secret manager. | API key-nya disimpan di secret manager. | API=API: pintu komunikasi antar aplikasi; key=key: kode rahasia untuk memakai layanan; secret=rahasia; manager=pengelola (dalam "secret manager") |
| D82-S04 | Most of the time is spent in one query. | Sebagian besar waktunya habis di satu query. | of=dari; spent=dihabiskan / terpakai; query=query: perintah ke database |
| D82-S06 | But some requests take more than five seconds. | Tapi ada request yang butuh lebih dari lima detik. | But=tetapi; some=beberapa / sebagian; requests=request: permintaan (jamak); take=memakan (waktu) |
| D82-S08 | To test this, I'll turn off the cache on staging. | Untuk mengujinya, saya akan mematikan cache di staging. | this=ini / hal ini; off=mati (dalam "turn off"); cache=cache: penyimpanan data sementara; staging=staging: server uji yang mirip production |
| D82-S09 | We ran a load test with a thousand users. | Kami menjalankan load test dengan seribu user. | load=beban; thousand=ribu; users=pengguna (jamak) |
| D82-S11 | The bottleneck is the external payment API. | Bottleneck-nya ada di API pembayaran eksternal. | bottleneck=bottleneck: bagian paling lambat yang menghambat proses; API=API: pintu komunikasi antar aplikasi |
| D83-S11 | We've decided to move the files to cloud storage. | Kami sudah memutuskan memindahkan file-file ke cloud storage. | files=berkas (jamak); cloud=cloud: layanan server di internet; storage=penyimpanan |
| D85-S05 | It's a good trade-off for now. | Untuk saat ini, itu trade-off yang bagus. | trade-off=trade-off: ada yang didapat, ada yang dikorbankan; now=sekarang |
| D86-S04 | This is just a nitpick, so feel free to ignore it. | Ini cuma komentar kecil, jadi boleh diabaikan. | nitpick=nitpick: komentar kecil soal detail yang tidak wajib diubah; free=bebas (dalam "feel free"); ignore=mengabaikan; it=itu / -nya |
| D86-S08 | I did it this way on purpose because the API is limited. | Saya sengaja membuatnya begini karena API-nya terbatas. | did=melakukan (lampau); it=itu / -nya; way=cara; purpose=tujuan (dalam "on purpose": sengaja); API=API: pintu komunikasi antar aplikasi |
| D86-S13 | I see your point, but a loop is easier to debug here. | Saya paham maksudmu, tapi di sini loop lebih mudah di-debug. | see=memahami (dalam "see your point"); your=milikmu; but=tetapi; loop=loop: perulangan dalam kode; debug=di-debug: dicari kesalahannya |
| D87-S07 | Let's take this offline. | Kita bahas ini di luar rapat saja. | Let's=mari kita (let us); take=membawa (dalam "take offline") |
| D88-S07 | The next update will be at 3 PM. | Update berikutnya akan disampaikan jam 3 sore. | at=pada (jam); 3=tiga; PM=PM: waktu setelah jam 12 siang |
| D88-S08 | The incident is resolved, and all services are working normally. | Insidennya sudah selesai, dan semua service berjalan normal. | incident=insiden: gangguan pada sistem; resolved=terselesaikan; normally=secara normal |
| D89-S03 | As you can see on this slide, the response time dropped. | Seperti terlihat di slide ini, waktu responsnya turun. | you=kamu / Anda sekalian; see=melihat; slide=slide presentasi; response=response: jawaban dari server |
| D90-S03 | That's how the system works at a high level. | Begitulah cara kerja sistemnya secara garis besar. | That's=itulah (that is); works=bekerja / berjalan; at=pada; high=tinggi; level=tingkat / level |
| D91-S08 | That's a quick overview of my background. | Itu gambaran singkat tentang latar belakang saya. | That's=itu adalah (that is); overview=gambaran umum; my=milik saya |
| D96-S04 | Here is where I need your decision. | Di bagian inilah saya butuh keputusan Anda. | Here=di sini; where=tempat / bagian di mana; your=milik Anda |
| D96-S05 | Is there anything I can do better? | Apakah ada yang bisa saya lakukan dengan lebih baik? | anything=sesuatu / apa pun; do=melakukan |
| D96-S08 | I'd like to grow in system design. | Saya ingin berkembang di bidang system design. | in=di / dalam bidang; system=sistem; design=desain / rancangan |
| D98-S04 | Downtime means the system is not available for a while. | Downtime artinya sistem tidak bisa dipakai untuk sementara waktu. | means=berarti; for=selama; while=sebentar / beberapa waktu |
| D98-S08 | Does that explanation work for you? | Apakah penjelasan itu cukup jelas untuk Anda? | Does=(penanda pertanyaan untuk dia/itu, tidak diterjemahkan); work=berhasil / cocok |
| D100-S05 | We're running short on time, so let's move on. | Waktu kita hampir habis, jadi mari kita lanjut. | We're=kita sedang (we are); short=kurang / pendek; on=(pertama: bagian dari "short on"; kedua: bagian dari "move on") |
| D100-S06 | Does anyone have anything to add before we wrap up? | Ada yang ingin menambahkan sesuatu sebelum kita tutup? | Does=(penanda pertanyaan untuk dia/itu, tidak diterjemahkan); anyone=seseorang / siapa pun; have=punya; wrap=(bagian dari "wrap up": menutup / mengakhiri) |
| D102-S07 | To avoid this next time, let's write down the acceptance criteria. | Supaya tidak terulang, mari kita tuliskan kriteria penerimaannya. | avoid=menghindari; next=berikutnya; time=kali / waktu; write=menulis |
| D104-S08 | Does that answer your question? | Apakah itu menjawab pertanyaan Anda? | Does=(penanda pertanyaan untuk dia/itu, tidak diterjemahkan); your=milik Anda |
| D106-S03 | Most of my work is on APIs, databases, and integrations. | Sebagian besar pekerjaan saya ada di API, database, dan integrasi. | of=dari; my=milik saya; on=pada / di bidang; integrations=integrasi dengan sistem lain |
| D108-S01 | I've been following your product for a while. | Saya sudah cukup lama mengikuti produk Anda. | I've=saya telah (I have); your=milik Anda; for=selama; while=beberapa waktu |
| D109-S08 | It's getting better, but I'm still improving. | Sudah semakin baik, tapi saya masih terus memperbaikinya. | It's=itu sedang (it is); getting=menjadi; better=lebih baik; I'm=saya sedang (I am); improving=berkembang / memperbaiki diri |
| D112-S01 | I'll give you the high-level picture first, then go deeper. | Saya berikan gambaran besarnya dulu, lalu masuk lebih dalam. | give=memberi; you=Anda; high-level=garis besar / tingkat atas; first=terlebih dahulu |
| D116-S06 | A single point of failure is a part that can bring down the whole system. | Single point of failure adalah bagian yang bisa membuat seluruh sistem mati. | single=tunggal; point=titik; of=dari; failure=kegagalan; bring=(bagian dari "bring down": menjatuhkan / mematikan) |
| D117-S03 | How many patients do we expect at peak time? | Berapa banyak pasien yang kita perkirakan saat jam sibuk? | do=(penanda pertanyaan, tidak diterjemahkan); expect=memperkirakan / mengharapkan; peak=puncak; time=waktu |
| D117-S04 | The core flow is search, book, confirm, and remind. | Alur intinya adalah cari, pesan, konfirmasi, dan ingatkan. | search=mencari; book=memesan; confirm=mengonfirmasi; remind=mengingatkan |
| D118-S02 | To be transparent, I took a year off to take care of my family. | Terus terang, saya berhenti bekerja setahun untuk merawat keluarga. | took=mengambil (lampau); year=tahun; care=perawatan; my=milik saya |
| D120-S02 | Here's what we know so far, and here's what we don't know yet. | Ini yang sudah kita ketahui sejauh ini, dan ini yang belum kita ketahui. | Here's=ini dia (here is); what=apa yang; know=tahu |

## FIX_WORD_CONTEXT

| ID | English | Translation | Kata tidak tercermin |
|---|---|---|---|
| D01-S05 | I live in Bandung. | Saya tinggal di Bandung. | in=di (dalam kota/negara) |
| D01-S06 | I work at a software company. | Saya bekerja di perusahaan software. | software=perangkat lunak |
| D01-S07 | I lead a development team. | Saya memimpin tim development. | development=pengembangan |
| D01-S10 | I am learning English. | Saya sedang belajar bahasa Inggris. | learning=mempelajari |
| D01-S12 | My hobby is watching movies. | Hobi saya menonton film. | My=milik saya |
| D02-S01 | I wake up at six. | Saya bangun jam enam. | at=pada (jam) |
| D02-S02 | I take a shower. | Saya mandi. | take=melakukan (dalam "take a shower") |
| D02-S03 | I brush my teeth. | Saya menyikat gigi. | my=milik saya |
| D02-S04 | I get dressed. | Saya berpakaian. | get=menjadi (dalam "get dressed") |
| D02-S05 | I have breakfast. | Saya sarapan. | have=makan (untuk makanan) |
| D02-S06 | I go to work. | Saya pergi bekerja. | work=tempat kerja / kerja |
| D02-S07 | I start work at nine. | Saya mulai bekerja jam sembilan. | work=pekerjaan / kerja; at=pada (jam) |
| D02-S08 | I check my tasks. | Saya memeriksa tugas-tugas saya. | my=milik saya |
| D02-S10 | I finish work at five. | Saya selesai bekerja jam lima. | work=pekerjaan / kerja; at=pada (jam) |
| D02-S13 | I read a book. | Saya membaca buku. | read=membaca (sekarang, dibaca "rid") |
| D03-S08 | Can I have some water? | Boleh saya minta air? | some=sedikit / beberapa |
| D03-S11 | I want some water. | Saya mau air. | some=sedikit / beberapa |
| D04-S06 | Turn off the light. | Matikan lampunya. | Turn=putar |
| D04-S09 | Sit down, please. | Silakan duduk. | down=ke bawah |
| D04-S12 | Keep your room tidy. | Jaga kamarmu tetap rapi. | your=milikmu |
| D05-S01 | What time is it? | Sekarang jam berapa? | it=(subjek untuk waktu, tidak diterjemahkan) |
| D05-S02 | It's nine o'clock. | Sekarang jam sembilan. | o'clock=tepat jam ... |
| D05-S03 | I have a meeting at ten. | Saya ada rapat jam sepuluh. | at=pada (jam) |
| D05-S05 | I'm busy right now. | Saya sedang sibuk sekarang. | right=tepat (dalam "right now") |
| D05-S06 | I'm available tomorrow. | Saya bisa (ada waktu) besok. | available=tersedia / ada waktu |
| D05-S07 | Let's meet tomorrow. | Ayo bertemu besok. | Let's=mari kita (let us) |
| D05-S08 | Can we reschedule? | Bisa kita jadwalkan ulang? | reschedule=menjadwalkan ulang |
| D05-S09 | I'm on time. | Saya tepat waktu. | on=pada (dalam "on time") |
| D06-S03 | Bring your bag. | Bawa tasmu. | your=milikmu |
| D06-S06 | Hold my hand. | Pegang tangan saya. | my=milik saya |
| D06-S07 | Stay close to me. | Tetap dekat dengan saya. | close=dekat (kata sifat, dibaca "klous") |
| D06-S10 | Let's go by car. | Ayo pergi naik mobil. | Let's=mari kita (let us) |
| D06-S11 | Let's go by bus. | Ayo pergi naik bus. | Let's=mari kita (let us) |
| D06-S12 | Let's go by train. | Ayo pergi naik kereta. | Let's=mari kita (let us) |
| D06-S14 | We're almost there. | Kita hampir sampai. | We're=kita (sudah) — we are |
| D06-S15 | Have a good day. | Semoga harimu menyenangkan. | Have=miliki / jalani |
| D07-S15 | Thank you for your help. | Terima kasih atas bantuan Anda. | Thank=berterima kasih; your=milik Anda |
| D08-S06 | I don't need it. | Saya tidak membutuhkannya. | it=itu / -nya |
| D08-S09 | Can I try it on? | Boleh saya mencobanya? | it=itu / -nya; on=di badan (dalam "try on") |
| D08-S10 | Where is the fitting room? | Di mana ruang ganti? | fitting=mencoba pakaian |
| D08-S13 | Can I get a receipt? | Bisa saya minta struk? | Can=bolehkah |
| D08-S14 | Can I return this? | Bisa saya mengembalikan ini? | Can=bolehkah |
| D09-S10 | My hobby is reading. | Hobi saya membaca. | My=milik saya |
| D09-S12 | Do you like music? | Kamu suka musik? | Do=(kata bantu pertanyaan, tidak diterjemahkan) |
| D11-S02 | I have a headache. | Saya sakit kepala. | have=mengalami / punya (untuk sakit) |
| D11-S03 | I have a fever. | Saya demam. | have=mengalami / punya (untuk sakit) |
| D11-S04 | I have a cough. | Saya batuk. | have=mengalami / punya (untuk sakit) |
| D11-S05 | I have a cold. | Saya sedang pilek. | have=mengalami / punya (untuk sakit) |
| D11-S06 | I have a stomachache. | Saya sakit perut. | have=mengalami / punya (untuk sakit) |
| D11-S11 | I need to rest. | Saya perlu istirahat. | rest=beristirahat |
| D14-S14 | I hope so. | Saya harap begitu. | hope=berharap |
| D15-S03 | What did you do today? | Apa yang kamu lakukan hari ini? | did=(kata bantu pertanyaan lampau, tidak diterjemahkan); do=melakukan |
| D15-S04 | I went to work. | Saya pergi bekerja. | work=tempat kerja / kerja |
| D15-S05 | I met my friend. | Saya bertemu teman saya. | my=milik saya |
| D15-S12 | Have a nice day. | Semoga harimu menyenangkan. | Have=jalani / miliki |
| D16-S02 | I'm working on a new project. | Saya sedang mengerjakan proyek baru. | on=pada (dalam "work on") |
| D16-S09 | We're preparing for the demo. | Kami sedang bersiap untuk demo. | We're=kami sedang — we are |
| D16-S12 | I'm looking for my charger. | Saya sedang mencari charger saya. | my=milik saya |
| D17-S01 | What did you do yesterday? | Apa yang kamu lakukan kemarin? | did=(kata bantu pertanyaan lampau, tidak diterjemahkan); do=melakukan |
| D17-S02 | I finished the report yesterday. | Saya menyelesaikan laporan itu kemarin. | finished=menyelesaikan (lampau, -ed dibaca "t") |
| D17-S03 | I worked from home. | Saya bekerja dari rumah. | worked=bekerja (lampau, -ed dibaca "t") |
| D17-S05 | I stayed at the office until seven. | Saya tetap di kantor sampai jam tujuh. | stayed=tinggal / tetap berada (lampau, -ed dibaca "d") |
| D17-S06 | We fixed the problem. | Kami sudah memperbaiki masalahnya. | fixed=memperbaiki (lampau, -ed dibaca "t") |
| D17-S09 | The meeting was very long. | Rapatnya sangat lama. | was=adalah (lampau dari is) |
| D17-S11 | I had lunch with my team. | Saya makan siang bersama tim saya. | my=milik saya |
| D17-S13 | I was busy yesterday. | Saya sibuk kemarin. | was=adalah (lampau dari am) |
| D17-S14 | How was the meeting? | Bagaimana rapatnya? | was=adalah (lampau dari is) |
| D18-S02 | I'm going to visit my parents. | Saya akan mengunjungi orang tua saya. | my=milik saya |
| D18-S06 | We'll have a meeting tomorrow morning. | Kita akan rapat besok pagi. | have=mengadakan |
| D18-S07 | I think it will rain tonight. | Saya rasa nanti malam akan hujan. | it=(subjek untuk cuaca, tidak diterjemahkan) |
| D18-S10 | I'm planning to practice English every day. | Saya berencana berlatih bahasa Inggris setiap hari. | I'm=saya sedang (I am); planning=merencanakan |
| D18-S11 | Let's meet next week. | Ayo bertemu minggu depan. | Let's=mari kita (let us) |
| D18-S12 | I'll call you tonight. | Saya akan meneleponmu nanti malam. | you=kamu |
| D19-S02 | I can speak a little English. | Saya bisa sedikit berbahasa Inggris. | English=bahasa Inggris |
| D19-S03 | I can't hear you. | Saya tidak bisa mendengarmu. | you=kamu |
| D19-S06 | Could you send me the file? | Bisakah kamu mengirimkan file-nya ke saya? | me=kepada saya |
| D19-S07 | Can I ask a question? | Boleh saya bertanya? | question=pertanyaan |
| D19-S08 | I couldn't finish it yesterday. | Saya tidak bisa menyelesaikannya kemarin. | couldn't=tidak bisa (lampau) — could not; it=itu / -nya |
| D19-S10 | Sure, I can do that. | Tentu, saya bisa melakukannya. | that=itu / hal itu |
| D19-S11 | Could you speak a bit louder? | Bisakah kamu bicara sedikit lebih keras? | speak=berbicara |
| D19-S13 | I need to ask my manager. | Saya perlu bertanya ke atasan saya. | ask=bertanya kepada; my=milik saya |
| D20-S06 | Could you speak more slowly, please? | Bisakah Anda bicara lebih pelan? | speak=berbicara; please=tolong |
| D20-S07 | Do you mean the new version? | Maksud Anda versi yang baru? | Do=(kata bantu pertanyaan, tidak diterjemahkan) |
| D20-S08 | Let me check if I understand. | Saya pastikan dulu apakah saya sudah paham. | Let=biarkan; check=memeriksa / memastikan |
| D20-S12 | Could you send me the link? | Bisakah kamu kirim link-nya ke saya? | send=mengirim; me=kepada saya |
| D21-S01 | I usually get up at six. | Saya biasanya bangun jam enam. | at=pada (jam) |
| D21-S02 | I always drink coffee in the morning. | Saya selalu minum kopi di pagi hari. | in=pada (bagian hari) |
| D21-S04 | I sometimes skip breakfast. | Saya kadang-kadang tidak sarapan. | skip=melewatkan |
| D21-S06 | I never work on Sundays. | Saya tidak pernah bekerja di hari Minggu. | on=pada (hari) |
| D21-S07 | How often do you exercise? | Seberapa sering kamu berolahraga? | do=(kata bantu pertanyaan, tidak diterjemahkan) |
| D21-S08 | I go to the gym twice a week. | Saya pergi ke gym dua kali seminggu. | week=minggu |
| D21-S09 | She usually takes the train to work. | Dia biasanya naik kereta ke kantor. | work=tempat kerja |
| D21-S10 | On weekends, I spend time with my family. | Di akhir pekan, saya menghabiskan waktu bersama keluarga. | On=pada; my=milik saya |
| D21-S12 | I'm working from home today. | Hari ini saya bekerja dari rumah. | I'm=saya sedang (I am) |
| D21-S13 | I usually have lunch at twelve. | Saya biasanya makan siang jam dua belas. | at=pada (jam) |
| D22-S04 | My appointment is on Friday afternoon. | Janji temu saya hari Jumat siang. | My=milik saya; on=pada (hari) |
| D22-S07 | Let's meet before lunch. | Ayo bertemu sebelum makan siang. | Let's=mari kita (let us) |
| D22-S08 | I'll call you after the meeting. | Saya akan meneleponmu setelah rapat. | you=kamu |
| D22-S13 | I'll send the schedule after lunch. | Saya akan kirim jadwalnya setelah makan siang. | send=mengirim |
| D23-S01 | Why do you think so? | Kenapa kamu berpendapat begitu? | do=(kata bantu pertanyaan, tidak diterjemahkan) |
| D23-S03 | How did you do that? | Bagaimana kamu melakukannya? | did=(kata bantu pertanyaan bentuk lampau, tidak diterjemahkan); that=itu / hal itu |
| D23-S12 | Do you mean yesterday or today? | Maksudmu kemarin atau hari ini? | Do=(kata bantu pertanyaan, tidak diterjemahkan); you=kamu |
| D24-S04 | My office is small but comfortable. | Kantor saya kecil tapi nyaman. | My=milik saya; but=tetapi |
| D24-S06 | It's a quiet place near my house. | Itu tempat yang tenang di dekat rumah saya. | my=milik saya |
| D24-S07 | The coffee shop is on the second floor. | Kedai kopinya ada di lantai dua. | second=kedua |
| D24-S09 | It's too heavy to carry. | Itu terlalu berat untuk dibawa. | carry=membawa / mengangkat |
| D25-S03 | Turn left at the traffic light. | Belok kiri di lampu merah. | traffic=lalu lintas |
| D25-S10 | I think I'm lost. | Sepertinya saya tersesat. | think=kira / rasa |
| D26-S01 | Could I use your charger? | Boleh saya pakai charger-mu? | use=memakai; your=milikmu |
| D26-S11 | Sure, no problem. | Tentu, tidak masalah. | no=tidak ada |
| D26-S12 | Can I ask you something? | Boleh saya tanya sesuatu? | ask=bertanya kepada; you=kamu |
| D27-S04 | I prefer working in the morning. | Saya lebih suka bekerja di pagi hari. | in=pada (bagian hari) |
| D27-S08 | I'm sorry, but I disagree. | Maaf, tapi saya tidak setuju. | but=tetapi |
| D27-S09 | I agree with you. | Saya setuju denganmu. | you=kamu |
| D27-S12 | I like working with my team. | Saya suka bekerja bersama tim saya. | my=milik saya |
| D28-S04 | My phone isn't working. | Ponsel saya sedang tidak berfungsi. | My=milik saya |
| D28-S10 | It's working again. | Sudah berfungsi lagi. | It's=itu sedang (it is) |
| D28-S12 | Could you help me with my password? | Bisakah kamu membantu saya soal kata sandi saya? | my=milik saya |
| D28-S13 | I'm still waiting for a reply. | Saya masih menunggu balasan. | I'm=saya sedang (I am) |
| D29-S05 | Please send it to me. | Tolong kirimkan ke saya. | it=itu / -nya |
| D29-S11 | Could you call me in five minutes? | Bisakah kamu menelepon saya lima menit lagi? | in=dalam (waktu ... lagi) |
| D29-S12 | I'm going to join the call late. | Saya akan telat bergabung ke call. | late=terlambat |
| D29-S13 | I didn't get the email. | Saya tidak menerima email-nya. | didn't=tidak (lampau) — did not |
| D30-S01 | Let me introduce myself. | Izinkan saya memperkenalkan diri. | myself=diri saya sendiri |
| D30-S02 | First, I'd like to talk about my job. | Pertama, saya ingin bercerita tentang pekerjaan saya. | I'd=saya ingin (I would, dalam "I'd like"); my=milik saya |
| D30-S04 | Finally, I want to talk about my plans. | Terakhir, saya ingin bercerita tentang rencana saya. | my=milik saya |
| D30-S05 | To be honest, my English isn't perfect yet. | Sejujurnya, bahasa Inggris saya belum sempurna. | honest=jujur (huruf h tidak dibaca); my=milik saya |
| D31-S01 | I work as a software developer. | Saya bekerja sebagai software developer. | software=perangkat lunak; developer=pengembang |
| D31-S03 | My main responsibility is testing new features. | Tanggung jawab utama saya adalah menguji fitur-fitur baru. | My=milik saya |
| D31-S06 | I help my team with documentation. | Saya membantu tim saya dalam dokumentasi. | my=milik saya |
| D31-S13 | My manager usually checks my work. | Atasan saya biasanya memeriksa pekerjaan saya. | My=milik saya; my=milik saya |
| D32-S02 | I have to finish this report first. | Saya harus menyelesaikan laporan ini dulu. | have=harus (dalam "have to", dibaca "hef") |
| D32-S03 | My priority today is the login bug. | Prioritas saya hari ini adalah bug login. | My=milik saya |
| D32-S04 | My top priority is fixing this issue. | Prioritas utama saya adalah memperbaiki masalah ini. | My=milik saya |
| D32-S09 | Which task should I do first? | Tugas mana yang sebaiknya saya kerjakan dulu? | do=mengerjakan |
| D32-S13 | I usually check my email first. | Saya biasanya memeriksa email dulu. | my=milik saya |
| D33-S03 | I can finish it today. | Saya bisa menyelesaikannya hari ini. | it=itu / -nya |
| D33-S04 | I think I can finish it by Friday. | Saya rasa saya bisa menyelesaikannya paling lambat hari Jumat. | it=itu / -nya |
| D33-S06 | I need more time. | Saya butuh waktu lebih. | more=lebih banyak |
| D33-S10 | I'll try to finish it before the meeting. | Saya akan berusaha menyelesaikannya sebelum rapat. | it=itu / -nya |
| D33-S11 | I'm going to finish the design on Friday. | Saya akan menyelesaikan desainnya hari Jumat. | on=pada (hari) |
| D33-S12 | I have to send it before Friday. | Saya harus mengirimnya sebelum hari Jumat. | have=harus (dalam "have to", dibaca "hef"); it=itu / -nya |
| D33-S13 | I didn't have enough time yesterday. | Kemarin saya tidak punya cukup waktu. | didn't=tidak (lampau) — did not |
| D34-S03 | I'm still working on the second part. | Saya masih mengerjakan bagian kedua. | I'm=saya sedang (I am) |
| D34-S05 | I haven't finished it yet. | Saya belum menyelesaikannya. | it=itu / -nya; yet=(penegas "belum", di akhir kalimat) |
| D34-S12 | I still need to test it. | Saya masih perlu mengujinya. | it=itu / -nya |
| D35-S01 | Yesterday, I worked on the search feature. | Kemarin saya mengerjakan fitur pencarian. | worked=mengerjakan (lampau, dalam "work on") |
| D35-S02 | I also fixed a small bug. | Saya juga memperbaiki bug kecil. | fixed=memperbaiki (lampau, -ed dibaca "t") |
| D35-S04 | After that, I'll start the next task. | Setelah itu, saya akan mulai tugas berikutnya. | start=memulai |
| D35-S05 | I don't have any blockers. | Saya tidak punya hambatan. | blockers=hambatan yang menghalangi pekerjaan |
| D35-S06 | I have one blocker. | Saya punya satu hambatan. | blocker=hambatan yang menghalangi pekerjaan |
| D35-S12 | Could you give me access to the folder? | Bisakah kamu memberi saya akses ke folder itu? | me=kepada saya |
| D36-S02 | Sorry to bother you. | Maaf mengganggu. | you=kamu / Anda |
| D36-S06 | I need some help with the setup. | Saya butuh sedikit bantuan untuk setup-nya. | setup=pengaturan awal / instalasi |
| D36-S07 | I've tried a few things, but it still doesn't work. | Saya sudah mencoba beberapa cara, tapi masih tidak berfungsi. | but=tetapi; it=itu / -nya |
| D36-S08 | I'm stuck on this part. | Saya buntu di bagian ini. | on=pada / di |
| D37-S03 | Make sure you save your work. | Pastikan kamu menyimpan pekerjaanmu. | your=milikmu |
| D37-S04 | Don't forget to add the date. | Jangan lupa menambahkan tanggalnya. | Don't=jangan (do not, dalam perintah) |
| D37-S08 | After that, send it to the team. | Setelah itu, kirim ke tim. | it=itu / -nya |
| D37-S11 | You must wear your ID card. | Kamu wajib memakai kartu identitasmu. | your=milikmu |
| D38-S02 | Just to clarify, the meeting is on Monday, right? | Sekadar memastikan, rapatnya hari Senin, kan? | on=pada (hari) |
| D38-S05 | So, you want me to prepare the slides? | Jadi, Anda ingin saya menyiapkan slide-nya? | slides=slide presentasi |
| D38-S09 | Which part should I change? | Bagian mana yang sebaiknya saya ubah? | change=mengubah |
| D39-S01 | Okay, let's start. | Oke, ayo kita mulai. | let's=mari kita (let us) |
| D39-S02 | Let's move on to the next topic. | Ayo lanjut ke topik berikutnya. | Let's=mari kita (let us) |
| D39-S04 | I'd like to add something. | Saya ingin menambahkan sesuatu. | I'd=saya ingin (I would, dalam "I'd like") |
| D39-S10 | Sorry, can I finish my point? | Maaf, boleh saya selesaikan dulu poin saya? | finish=menyelesaikan; my=milik saya |
| D39-S11 | I'm going to share my screen now. | Saya akan berbagi layar sekarang. | share=membagikan; my=milik saya |
| D40-S03 | I suggest we meet every Monday. | Saya sarankan kita bertemu setiap hari Senin. | suggest=menyarankan |
| D40-S04 | Maybe we can ask the client first. | Mungkin kita bisa tanya klien dulu. | ask=bertanya kepada |
| D40-S06 | In my opinion, the first option is better. | Menurut saya, pilihan pertama lebih baik. | my=milik saya; opinion=pendapat |
| D40-S13 | What about using a template? | Bagaimana kalau pakai template? | using=memakai |
| D41-S05 | I see your point, but I have a different idea. | Saya paham maksudmu, tapi saya punya ide lain. | see=memahami (dalam "see your point"); your=milikmu; but=tetapi |
| D41-S09 | I understand your concern. | Saya paham kekhawatiranmu. | your=milikmu / -mu |
| D41-S12 | In my opinion, we need more testing. | Menurut saya, kita perlu pengujian lebih banyak. | my=milik saya; opinion=pendapat |
| D42-S05 | We're still waiting for the design team. | Kami masih menunggu tim desain. | We're=kami sedang (we are) |
| D42-S07 | I haven't found the cause yet. | Saya belum menemukan penyebabnya. | yet=(penegas "belum", di akhir kalimat) |
| D43-S04 | The next step is to test it with real users. | Langkah berikutnya adalah mengujinya dengan pengguna sungguhan. | it=itu / -nya |
| D43-S09 | So, to summarize, we'll launch next month. | Jadi, kesimpulannya, kita akan meluncurkannya bulan depan. | summarize=merangkum / menyimpulkan |
| D44-S04 | Any update on this? | Ada kabar soal ini? | update=kabar terbaru / update |
| D44-S05 | Just a quick update: the report is ready. | Update singkat: laporannya sudah siap. | Just=sekadar / hanya |
| D44-S07 | Thanks for the update. | Terima kasih atas kabarnya. | update=kabar terbaru / update |
| D44-S12 | I'm still waiting for their reply. | Saya masih menunggu balasan mereka. | I'm=saya sedang (I am); their=milik mereka |
| D44-S13 | We've finished most of the tasks. | Kami sudah menyelesaikan sebagian besar tugas. | of=dari |
| D45-S01 | Hi everyone, I'm {name}, and I work as a developer on this team. | Halo semuanya, saya ..., dan saya bekerja sebagai developer di tim ini. | everyone=semua orang; developer=pengembang |
| D45-S03 | Right now, I'm working on the new report page. | Saat ini saya sedang mengerjakan halaman laporan yang baru. | Right=tepat (dalam "right now"); now=sekarang |
| D46-S01 | Here's a quick update on the project. | Ini update singkat soal proyeknya. | Here's=ini dia (here is); on=tentang |
| D46-S08 | We're slightly behind schedule. | Kami sedikit terlambat dari jadwal. | behind=di belakang / tertinggal dari |
| D46-S11 | I haven't received their feedback yet. | Saya belum menerima masukan dari mereka. | their=milik mereka; yet=(penegas "belum", di akhir kalimat) |
| D46-S12 | I'm still working on the final section. | Saya masih mengerjakan bagian terakhir. | I'm=saya sedang (I am) |
| D47-S01 | The task was delayed because we needed more information. | Tugasnya tertunda karena kami butuh informasi tambahan. | was=(to be bentuk lampau, tidak diterjemahkan); needed=membutuhkan (lampau, -ed dibaca "id") |
| D47-S02 | The meeting was cancelled because of a scheduling conflict. | Rapatnya dibatalkan karena jadwal bentrok. | was=(to be bentuk lampau, tidak diterjemahkan); scheduling=penjadwalan |
| D47-S03 | That's why we need more time. | Itulah sebabnya kami butuh waktu lebih. | why=alasan (dalam "that's why"); more=lebih banyak |
| D47-S05 | This happened because the file was wrong. | Ini terjadi karena file-nya salah. | was=(to be bentuk lampau, tidak diterjemahkan) |
| D47-S07 | It was caused by a small mistake. | Itu disebabkan oleh kesalahan kecil. | It=hal itu / masalahnya; was=(to be bentuk lampau, tidak diterjemahkan) |
| D47-S09 | Why was the launch delayed? | Kenapa peluncurannya ditunda? | was=(to be bentuk lampau, tidak diterjemahkan) |
| D47-S11 | The client asked for more changes. | Klien meminta perubahan tambahan. | asked=meminta (lampau, dalam "ask for") |
| D47-S12 | I couldn't join because I was sick. | Saya tidak bisa ikut karena sakit. | couldn't=tidak bisa (lampau) — could not; was=(to be bentuk lampau, tidak diterjemahkan) |
| D48-S02 | There's been a delay with the delivery. | Ada keterlambatan pada pengirimannya. | There's=ada (there has, dalam "there's been") |
| D48-S12 | The call was moved because of the holiday. | Call-nya dipindah karena hari libur. | was=(to be bentuk lampau, tidak diterjemahkan) |
| D49-S01 | Why do you think that? | Kenapa kamu berpendapat begitu? | do=(kata bantu pertanyaan, tidak diterjemahkan) |
| D49-S03 | What do we need first? | Apa yang kita butuhkan lebih dulu? | do=(kata bantu pertanyaan, tidak diterjemahkan) |
| D50-S02 | Which one is more important right now? | Yang mana yang lebih penting saat ini? | right=tepat (dalam "right now"); now=sekarang |
| D50-S07 | We have to choose between speed and quality. | Kita harus memilih antara kecepatan dan kualitas. | have=harus (dalam "have to", dibaca "hef") |
| D50-S08 | I'd rather do it properly than quickly. | Saya lebih memilih mengerjakannya dengan benar daripada cepat. | I'd=saya (I would, dalam "I'd rather"); it=itu / -nya |
| D50-S09 | This gives us more time. | Ini memberi kita waktu lebih. | more=lebih banyak |
| D50-S11 | My top priority this week is the client demo. | Prioritas utama saya minggu ini adalah demo ke klien. | My=milik saya |
| D51-S07 | Please let me know when it's done. | Tolong kabari saya kalau sudah selesai. | let=biarkan; know=tahu |
| D52-S09 | Who will approve it? | Siapa yang akan menyetujuinya? | it=itu / -nya |
| D52-S13 | I'll write down the requirements and share them. | Saya akan mencatat kebutuhannya lalu membagikannya. | them=semuanya / mereka (sebagai objek) |
| D53-S06 | It would be better if the text were shorter. | Akan lebih baik kalau teksnya lebih pendek. | It=(subjek, tidak diterjemahkan) |
| D53-S09 | The colors are nice, but the font is too small. | Warnanya bagus, tapi hurufnya terlalu kecil. | but=tetapi; font=jenis huruf / font |
| D53-S11 | In my opinion, the second version is clearer. | Menurut saya, versi kedua lebih jelas. | my=milik saya; opinion=pendapat |
| D53-S13 | That's true, but it might confuse users. | Itu benar, tapi mungkin membingungkan pengguna. | but=tetapi; it=hal itu |
| D54-S13 | I see your point, but the client asked for this color. | Saya paham maksudmu, tapi klien memang minta warna ini. | your=milikmu; but=tetapi; asked=meminta (lampau, dalam "ask for") |
| D55-S01 | I made a mistake in the report. | Saya membuat kesalahan di laporan. | in=di / dalam |
| D55-S03 | I misunderstood the requirement. | Saya salah memahami kebutuhannya. | misunderstood=salah paham (lampau) |
| D55-S11 | The problem was caused by a wrong number. | Masalahnya disebabkan oleh angka yang salah. | was=(to be bentuk lampau, tidak diterjemahkan) |
| D55-S12 | I haven't sent it to the client yet. | Saya belum mengirimkannya ke klien. | it=itu / -nya; yet=(penegas "belum", di akhir kalimat) |
| D55-S13 | I'll take responsibility for the wrong numbers. | Saya yang bertanggung jawab atas angka yang salah itu. | take=mengambil; responsibility=tanggung jawab |
| D56-S02 | I'd like to suggest a small change. | Saya ingin mengusulkan satu perubahan kecil. | I'd=saya ingin (I would, dalam "I'd like") |
| D56-S09 | First, we create one shared document. | Pertama, kita buat satu dokumen bersama. | create=membuat |
| D56-S12 | I suggest we start next Monday. | Saya sarankan kita mulai Senin depan. | suggest=menyarankan |
| D58-S11 | We have to choose between more features and an earlier date. | Kita harus memilih antara fitur lebih banyak atau tanggal yang lebih cepat. | have=harus (dalam "have to", dibaca "hef"); earlier=lebih awal |
| D58-S12 | I see your point, but three days is too short. | Saya paham maksudnya, tapi tiga hari terlalu singkat. | see=memahami (dalam "see your point"); your=milikmu / Anda; but=tetapi |
| D59-S03 | This still needs to be done. | Yang ini masih harus dikerjakan. | needs=perlu; -s karena "this" |
| D59-S04 | Please continue from here. | Tolong lanjutkan dari sini. | continue=melanjutkan |
| D59-S07 | All the files are in the shared folder. | Semua file ada di folder bersama. | files=berkas (jamak); in=di dalam |
| D60-S04 | My main concern is the testing time. | Kekhawatiran utama saya adalah waktu pengujiannya. | My=milik saya |
| D60-S05 | To solve this, I suggest we split the work. | Untuk mengatasinya, saya sarankan kita bagi pekerjaannya. | this=ini / hal ini; suggest=menyarankan; split=membagi |
| D61-S03 | The main goal of the project is to reduce waiting time. | Tujuan utama proyek ini adalah mengurangi waktu tunggu. | of=dari; waiting=menunggu (dalam "waiting time") |
| D61-S06 | Doctors can see their schedule for the day. | Dokter bisa melihat jadwal mereka untuk hari itu. | their=milik mereka |
| D61-S07 | The admin team manages the user accounts. | Tim admin mengelola akun-akun pengguna. | admin=admin: pengelola sistem |
| D61-S08 | I'm responsible for the backend and the API. | Saya bertanggung jawab atas backend dan API-nya. | backend=backend: bagian server yang memproses data; API=API: pintu komunikasi agar aplikasi bisa meminta dan mengirim data |
| D61-S09 | We started the project six months ago. | Kami memulai proyek ini enam bulan yang lalu. | started=memulai (lampau, -ed dibaca "id") |
| D61-S10 | Right now, about two hundred people use it every day. | Saat ini, sekitar dua ratus orang memakainya setiap hari. | Right=tepat (dalam "right now"); now=sekarang; it=itu / -nya |
| D61-S11 | My main responsibility is building new features. | Tanggung jawab utama saya adalah membangun fitur-fitur baru. | My=milik saya |
| D61-S12 | We've finished the first version of the app. | Kami sudah menyelesaikan versi pertama aplikasinya. | of=dari |
| D62-S01 | The frontend shows a list of patients. | Frontend-nya menampilkan daftar pasien. | frontend=frontend: bagian aplikasi yang dilihat user; of=dari / berisi |
| D62-S03 | The user fills in the form and clicks "Save". | User mengisi formulir lalu mengklik "Save". | Save=Simpan (nama tombol) |
| D62-S04 | The page displays an error message if a field is empty. | Halamannya menampilkan pesan error kalau ada kolom yang kosong. | field=kolom isian di form |
| D62-S05 | The button is disabled until the form is valid. | Tombolnya nonaktif sampai formulirnya valid. | disabled=dinonaktifkan / tidak bisa diklik |
| D62-S08 | The page loads the data from the API. | Halamannya mengambil data dari API. | API=API: pintu komunikasi untuk meminta dan mengirim data |
| D62-S10 | I'm updating the design to match the new style. | Saya sedang memperbarui desainnya agar sesuai dengan gaya baru. | match=menyesuaikan / cocok dengan |
| D62-S12 | I haven't tested it on Safari yet. | Saya belum mengetesnya di Safari. | it=itu / -nya; yet=(penegas "belum", di akhir kalimat) |
| D63-S03 | The backend validates the request before saving the data. | Backend memvalidasi request sebelum menyimpan datanya. | backend=backend: bagian server yang memproses data; request=request: permintaan ke server |
| D63-S04 | If the data is valid, it saves the record in the database. | Kalau datanya valid, backend menyimpan data itu ke database. | record=record: satu data yang disimpan (kata benda, dibaca "re-kerd"); in=di / ke dalam; database=database: tempat data disimpan |
| D63-S05 | If something is wrong, it returns an error. | Kalau ada yang salah, backend mengembalikan error. | something=sesuatu |
| D63-S07 | This service calculates the total price. | Service ini menghitung total harganya. | service=service: bagian kode yang menjalankan logika |
| D63-S08 | The server sends an email after the payment is confirmed. | Server mengirim email setelah pembayaran dikonfirmasi. | server=server: komputer yang menjalankan backend |
| D63-S09 | We run a background job every night. | Kami menjalankan proses otomatis setiap malam. | background=latar belakang; job=tugas otomatis (dalam konteks sistem) |
| D63-S10 | The backend is written in Java. | Backend-nya ditulis dengan Java. | backend=backend: bagian server yang memproses data |
| D63-S11 | I'm working on the payment service. | Saya sedang mengerjakan service pembayaran. | service=service: bagian kode yang menjalankan logika |
| D63-S13 | I need to check the business rules with the product owner. | Saya perlu mengecek aturan bisnisnya dengan product owner. | owner=pemilik |
| D64-S02 | It sends a GET request to get the list of orders. | Frontend mengirim request GET untuk mengambil daftar pesanan. | GET=GET: metode HTTP untuk mengambil data; request=request: permintaan ke server; of=dari / berisi |
| D64-S04 | We use a POST request to create a new appointment. | Kami memakai request POST untuk membuat janji temu baru. | POST=POST: metode HTTP untuk mengirim / membuat data; request=request: permintaan ke server |
| D64-S05 | The request body contains the form data. | Body request-nya berisi data dari formulir. | request=request: permintaan ke server; body=body: isi utama sebuah request |
| D64-S08 | The API returns the data in JSON format. | API mengembalikan data dalam format JSON. | API=API: pintu komunikasi untuk meminta dan mengirim data; JSON=JSON: format teks untuk bertukar data (dibaca "jei-sen") |
| D64-S09 | If the ID doesn't exist, it returns a 404 error. | Kalau ID-nya tidak ada, API mengembalikan error 404. | ID=ID: nomor pengenal data; 404=404: kode status "data tidak ditemukan" |
| D64-S13 | I haven't received a response from the server yet. | Saya belum menerima response dari server. | response=response: jawaban dari server; server=server: komputer yang menjalankan backend; yet=(penegas "belum", di akhir kalimat) |
| D65-S01 | The data is stored in the appointments table. | Datanya disimpan di tabel appointments. | in=di dalam |
| D65-S03 | This column stores the patient's phone number. | Kolom ini menyimpan nomor telepon pasien. | patient's=milik pasien |
| D65-S04 | We use PostgreSQL as our database. | Kami memakai PostgreSQL sebagai database. | our=milik kami; database=database: tempat data disimpan |
| D65-S05 | I wrote a query to get all active users. | Saya menulis query untuk mengambil semua user yang aktif. | query=query: perintah untuk mengambil atau mengubah data (dibaca "kwi-ri"); users=pengguna (jamak) |
| D65-S06 | The query joins the orders table with the customers table. | Query-nya menggabungkan tabel orders dengan tabel customers. | query=query: perintah ke database; table=tabel di database |
| D65-S07 | The query is slow because the table has millions of rows. | Query-nya lambat karena tabelnya punya jutaan baris. | query=query: perintah ke database; table=tabel di database |
| D65-S08 | We added an index to make it faster. | Kami menambahkan index supaya lebih cepat. | index=index: struktur database agar pencarian lebih cepat; make=membuat |
| D65-S11 | I need to update the database before we deploy. | Saya perlu memperbarui database sebelum kita deploy. | database=database: tempat data disimpan; deploy=deploy: merilis aplikasi ke server |
| D66-S01 | Users log in with their email and password. | User login memakai email dan password mereka. | Users=pengguna (jamak); their=milik mereka |
| D66-S03 | The token expires after one hour. | Token-nya kedaluwarsa setelah satu jam. | token=token: kode tanda sudah login |
| D66-S06 | Only admins have permission to delete records. | Hanya admin yang punya izin untuk menghapus data. | admins=admin (jamak): pengelola sistem; records=data yang disimpan (jamak) |
| D66-S07 | Doctors can only see their own patients. | Dokter hanya bisa melihat pasiennya sendiri. | their=milik mereka |
| D66-S08 | If the user doesn't have the right role, the API returns a 403 error. | Kalau user tidak punya role yang sesuai, API mengembalikan error 403. | role=peran / role user (mis. admin, staf); API=API: pintu komunikasi antar aplikasi; 403=403: kode status "tidak punya izin" |
| D66-S09 | The session ends when the user logs out. | Sesinya berakhir saat user logout. | session=sesi: masa user sedang login; logs=keluar (dalam "log out"); -s karena "the user" |
| D66-S10 | We store passwords as hashes, not as plain text. | Kami menyimpan password dalam bentuk hash, bukan teks biasa. | passwords=kata sandi (jamak); hashes=hash: hasil acak dari password yang tidak bisa dibaca kembali |
| D66-S11 | I can't log in to the admin panel. | Saya tidak bisa login ke panel admin. | admin=admin: pengelola sistem |
| D66-S12 | Just to clarify, can managers edit other users' data? | Sekadar memastikan, apakah manajer boleh mengubah data user lain? | users'=milik para user |
| D66-S13 | The login page is still showing an error. | Halaman login masih menampilkan error. | login=login: proses masuk ke akun |
| D67-S01 | I created a new branch for this feature. | Saya membuat branch baru untuk fitur ini. | branch=branch: cabang pengembangan di Git |
| D67-S03 | I committed my changes with a clear message. | Saya commit perubahan saya dengan pesan yang jelas. | committed=commit: menyimpan perubahan ke Git (lampau); my=milik saya |
| D67-S05 | Please pull the latest changes before you start. | Tolong pull perubahan terbaru sebelum mulai. | pull=pull: mengambil perubahan terbaru dari server Git; you=kamu |
| D67-S08 | I need to resolve the conflict first. | Saya perlu menyelesaikan conflict-nya dulu. | conflict=konflik: perubahan yang bertabrakan |
| D67-S09 | I accidentally committed to the wrong branch. | Saya tidak sengaja commit ke branch yang salah. | committed=commit: menyimpan perubahan ke Git (lampau); branch=branch: cabang pengembangan di Git |
| D67-S10 | This commit fixes the date format on the report page. | Commit ini memperbaiki format tanggal di halaman laporan. | commit=commit: satu simpanan perubahan di Git (kata benda) |
| D67-S12 | Which branch should I use? | Branch mana yang sebaiknya saya pakai? | branch=branch: cabang pengembangan di Git; use=memakai |
| D68-S03 | This PR adds a search filter to the orders page. | PR ini menambahkan filter pencarian ke halaman pesanan. | PR=PR: pull request (dibaca "pi-ar") |
| D68-S05 | The reviewer requested changes. | Reviewer-nya meminta perubahan. | reviewer=reviewer: orang yang memeriksa kode |
| D68-S13 | I see your point, but this approach is easier to read. | Saya paham maksudmu, tapi cara ini lebih mudah dibaca. | see=memahami (dalam "see your point"); your=milikmu; but=tetapi |
| D69-S01 | I found a bug in the checkout page. | Saya menemukan bug di halaman checkout. | bug=bug: kesalahan dalam program; checkout=checkout: proses pembayaran belanja online |
| D69-S04 | But the actual result is a blank page. | Tapi yang benar-benar terjadi adalah halaman kosong. | But=tetapi; result=hasil |
| D69-S05 | The issue only happens on iOS. | Masalahnya hanya terjadi di iOS. | on=di / pada; iOS=iOS: sistem operasi iPhone |
| D69-S06 | I can reproduce it every time. | Saya bisa memunculkannya lagi setiap kali mencoba. | reproduce=memunculkan ulang (bug) dengan langkah yang sama |
| D69-S09 | This is a critical bug because customers can't pay. | Ini bug kritis karena pelanggan tidak bisa membayar. | bug=bug: kesalahan dalam program |
| D69-S11 | I've attached a screenshot of the error. | Saya sudah melampirkan screenshot error-nya. | screenshot=tangkapan layar; of=dari |
| D69-S12 | When did the problem start? | Kapan masalahnya mulai? | did=(kata bantu pertanyaan bentuk lampau, tidak diterjemahkan) |
| D69-S13 | It started after yesterday's update. | Masalahnya mulai setelah update kemarin. | started=mulai (lampau, -ed dibaca "id") |
| D70-S01 | I'm checking the logs to find the cause. | Saya sedang memeriksa log untuk mencari penyebabnya. | logs=log: catatan aktivitas sistem (jamak) |
| D70-S02 | The logs show a timeout error at 10:15. | Log-nya menunjukkan error timeout pada jam 10.15. | logs=log: catatan aktivitas sistem (jamak); timeout=timeout: proses terlalu lama sehingga dihentikan |
| D70-S04 | I added more logs to see what's happening. | Saya menambahkan log lagi untuk melihat apa yang terjadi. | logs=log: catatan aktivitas sistem (jamak); happening=sedang terjadi |
| D70-S05 | I'm debugging the issue on my local machine. | Saya sedang men-debug masalahnya di komputer lokal saya. | debugging=debugging: mencari dan memperbaiki kesalahan kode; my=milik saya |
| D70-S06 | I put a breakpoint in this function. | Saya memasang breakpoint di fungsi ini. | breakpoint=breakpoint: titik berhenti sementara saat debugging |
| D70-S07 | We think this may be related to the new cache. | Kami rasa ini mungkin berhubungan dengan cache yang baru. | cache=cache: penyimpanan data sementara agar lebih cepat (dibaca "kesh") |
| D70-S09 | We haven't confirmed the root cause yet. | Kami belum memastikan akar penyebabnya. | yet=(penegas "belum", di akhir kalimat) |
| D70-S10 | We found the root cause: the API key had expired. | Kami sudah menemukan akar penyebabnya: API key-nya sudah kedaluwarsa. | API=API: pintu komunikasi antar aplikasi; key=key: kode rahasia untuk memakai layanan; had=sudah (had + -ed, sebelum waktu lampau lain) |
| D70-S12 | It only happens when two users save at the same time. | Masalahnya hanya terjadi saat dua user menyimpan di waktu yang sama. | users=pengguna (jamak); at=pada |
| D71-S01 | I wrote unit tests for the new function. | Saya menulis unit test untuk fungsi yang baru. | unit=unit: bagian kecil kode; tests=test: kode untuk menguji kode lain (jamak) |
| D71-S03 | Two tests are failing on the build server. | Dua test gagal di build server. | build=build: proses menyusun dan menguji kode otomatis |
| D71-S04 | This test checks that the total is calculated correctly. | Test ini memastikan totalnya dihitung dengan benar. | test=test: kode untuk menguji kode lain; that=bahwa |
| D71-S05 | We also need to test the edge cases. | Kita juga perlu mengetes edge case-nya. | edge=tepi / batas; cases=kasus (jamak) |
| D71-S09 | The test coverage for this module is still low. | Test coverage untuk modul ini masih rendah. | coverage=cakupan; module=modul: bagian dari aplikasi |
| D71-S11 | I haven't tested the mobile version yet. | Saya belum mengetes versi mobile-nya. | yet=(penegas "belum", di akhir kalimat) |
| D71-S13 | The expected result is that the user gets an email. | Hasil yang diharapkan adalah user menerima email. | that=bahwa |
| D72-S01 | We deploy to production every Thursday. | Kami deploy ke production setiap hari Kamis. | deploy=deploy: merilis aplikasi ke server; production=production: server yang dipakai user asli |
| D72-S02 | First, we test everything on staging. | Pertama, kami mengetes semuanya di staging. | staging=staging: server uji yang mirip production |
| D72-S03 | We have three environments: development, staging, and production. | Kami punya tiga environment: development, staging, dan production. | environments=environment: lingkungan server tempat aplikasi berjalan (jamak); staging=staging: server uji yang mirip production; production=production: server yang dipakai user asli |
| D72-S06 | After the tests pass, it deploys the app to staging. | Setelah test lulus, pipeline men-deploy aplikasi ke staging. | staging=staging: server uji yang mirip production |
| D72-S07 | We rolled back to the previous version. | Kami rollback ke versi sebelumnya. | rolled=mengembalikan (dalam "roll back", lampau); back=kembali (dalam "roll back") |
| D72-S08 | If something goes wrong, we can roll back quickly. | Kalau ada yang salah, kami bisa rollback dengan cepat. | something=sesuatu; goes=menjadi (dalam "go wrong"); -es karena "something"; back=kembali (dalam "roll back") |
| D72-S09 | The new version is live now. | Versi barunya sudah live sekarang. | live=live: sudah aktif dan dipakai user (dibaca "laiv") |
| D72-S12 | Just to confirm, are we deploying today or tomorrow? | Sekadar memastikan, kita deploy hari ini atau besok? | deploying=men-deploy |
| D73-S01 | The issue only happens in production. | Masalahnya hanya terjadi di production. | production=production: server yang dipakai user asli |
| D73-S03 | Some users can't access their accounts. | Sebagian user tidak bisa mengakses akunnya. | users=pengguna (jamak); their=milik mereka |
| D73-S04 | We're investigating the problem right now. | Kami sedang menyelidiki masalahnya sekarang. | right=tepat (dalam "right now") |
| D73-S05 | We've identified the service that's causing the errors. | Kami sudah menemukan service yang menyebabkan error-nya. | service=service: bagian sistem yang menjalankan satu fungsi |
| D73-S10 | We're monitoring the system closely. | Kami memantau sistemnya dengan saksama. | We're=kami sedang (we are) |
| D74-S01 | The dashboard is very slow when there's a lot of data. | Dashboard-nya sangat lambat kalau datanya banyak. | dashboard=dasbor / halaman ringkasan; there's=ada (there is) |
| D74-S02 | The page takes more than ten seconds to load. | Halamannya butuh lebih dari sepuluh detik untuk terbuka. | takes=memakan (waktu); -s karena "the page" |
| D74-S03 | The response time went up after the last release. | Waktu responsnya naik setelah rilis terakhir. | response=response: jawaban dari server; went=naik (dalam "go up", lampau) |
| D74-S04 | The server's CPU usage is too high. | Penggunaan CPU server-nya terlalu tinggi. | server's=milik server; CPU=CPU: prosesor komputer |
| D74-S08 | We reduced the page load time from eight seconds to two. | Kami mengurangi waktu buka halaman dari delapan detik jadi dua. | reduced=mengurangi (lampau, -ed dibaca "t"); load=memuat (dalam "load time") |
| D74-S09 | The image files are too large. | File gambarnya terlalu besar. | files=berkas (jamak) |
| D75-S02 | From a user's point of view, it works like this. | Dari sudut pandang user, cara kerjanya seperti ini. | user's=milik user; works=berjalan / bekerja; -s karena "it" |
| D75-S03 | Behind the scenes, the backend does most of the work. | Di balik layar, backend yang mengerjakan sebagian besar prosesnya. | backend=backend: bagian server yang memproses data; of=dari |
| D75-S05 | In short, the frontend shows the data, and the backend handles the logic. | Singkatnya, frontend menampilkan data, dan backend menangani logikanya. | frontend=frontend: bagian aplikasi yang dilihat user; backend=backend: bagian server yang memproses data |
| D76-S05 | The service layer contains the business logic. | Service layer berisi logika bisnis. | service=service: bagian kode yang menjalankan logika; layer=lapisan (bagian kode) |
| D76-S07 | We use a message queue to process orders in the background. | Kami memakai message queue untuk memproses pesanan di belakang layar. | queue=queue: antrean (dibaca "kyu"); background=latar belakang |
| D76-S09 | The services communicate through REST APIs. | Service-service itu saling berkomunikasi lewat REST API. | REST=REST: gaya desain API berbasis HTTP |
| D76-S10 | This design makes the system easier to maintain. | Desain ini membuat sistemnya lebih mudah dirawat. | maintain=merawat / memelihara (kode agar mudah diubah dan diperbaiki) |
| D76-S11 | In short, the backend is split into three layers. | Singkatnya, backend dibagi menjadi tiga lapisan. | backend=backend: bagian server yang memproses data |
| D77-S02 | The data starts in the form on the frontend. | Datanya berawal dari formulir di frontend. | frontend=frontend: bagian aplikasi yang dilihat user |
| D77-S04 | The backend transforms the data before storing it. | Backend mengubah bentuk datanya sebelum menyimpannya. | backend=backend: bagian server yang memproses data; it=itu / -nya |
| D77-S05 | The order is saved, and an event is published. | Pesanannya disimpan, lalu sebuah event dikirim. | event=event: sinyal bahwa sesuatu sudah terjadi |
| D77-S07 | The data is copied to the reporting database every hour. | Datanya disalin ke database laporan setiap jam. | reporting=pelaporan (untuk laporan); database=database: tempat data disimpan |
| D77-S08 | The mobile app reads the same data from the API. | Aplikasi mobile membaca data yang sama dari API. | reads=membaca (sekarang, dibaca "ridz"); -s karena "the mobile app"; API=API: pintu komunikasi antar aplikasi |
| D77-S09 | Sensitive data is encrypted before it's stored. | Data sensitif dienkripsi sebelum disimpan. | encrypted=dienkripsi: diacak agar tidak bisa dibaca orang lain |
| D78-S03 | The backend changed a field name, so the frontend broke. | Backend mengganti nama sebuah field, jadi frontend-nya rusak. | backend=backend: bagian server yang memproses data; field=field: nama data di request atau response; frontend=frontend: bagian aplikasi yang dilihat user |
| D78-S05 | I'm integrating the new payment API into the checkout page. | Saya sedang mengintegrasikan API pembayaran baru ke halaman checkout. | API=API: pintu komunikasi antar aplikasi; into=ke dalam; checkout=checkout: proses pembayaran belanja online |
| D78-S06 | The frontend is using mock data until the API is ready. | Frontend memakai data tiruan sampai API-nya siap. | frontend=frontend: bagian aplikasi yang dilihat user; API=API: pintu komunikasi antar aplikasi |
| D78-S08 | We need to handle the case when the API is down. | Kita perlu menangani kondisi saat API-nya mati. | API=API: pintu komunikasi antar aplikasi |
| D78-S09 | This field can be null, so we need to check it. | Field ini bisa null, jadi kita perlu memeriksanya. | field=field: nama data di request atau response; null=null: tidak ada nilai sama sekali; it=itu / -nya |
| D78-S10 | I got a CORS error when calling the API from the browser. | Saya kena error CORS saat memanggil API dari browser. | CORS=CORS: aturan keamanan browser untuk request ke domain lain; API=API: pintu komunikasi antar aplikasi |
| D79-S01 | What happens when the request fails? | Apa yang terjadi saat request-nya gagal? | request=request: permintaan ke server |
| D79-S02 | If the request fails, we show a friendly error message. | Kalau request-nya gagal, kami tampilkan pesan error yang mudah dipahami. | request=request: permintaan ke server; show=menampilkan |
| D79-S03 | We catch the error and log it. | Kami menangkap error-nya lalu mencatatnya di log. | it=itu / -nya |
| D79-S04 | The app retries the request up to three times. | Aplikasinya mencoba ulang request itu maksimal tiga kali. | request=request: permintaan ke server |
| D79-S05 | After three failed attempts, it stops and shows an error. | Setelah tiga kali gagal, aplikasinya berhenti dan menampilkan error. | attempts=percobaan (jamak) |
| D79-S07 | The user only sees a simple message, but we log the full error. | User hanya melihat pesan sederhana, tapi error lengkapnya kami catat di log. | but=tetapi; log=mencatat ke log (kata kerja) |
| D79-S08 | If the external service is down, we use the cached data instead. | Kalau service luar sedang mati, kami pakai data dari cache sebagai gantinya. | external=eksternal / dari pihak luar; service=service: layanan / sistem lain; use=memakai; cached=yang tersimpan di cache |
| D79-S10 | We send an alert to the team when the error rate is high. | Kami mengirim peringatan ke tim saat tingkat error-nya tinggi. | alert=alert: peringatan otomatis |
| D79-S11 | If the token is invalid, the API returns a 401 error. | Kalau token-nya tidak valid, API mengembalikan error 401. | token=token: kode tanda sudah login; API=API: pintu komunikasi antar aplikasi |
| D79-S13 | The error message is a little confusing for users. | Pesan error-nya agak membingungkan bagi user. | users=pengguna (jamak) |
| D80-S01 | The email field is required. | Kolom email wajib diisi. | field=field: kolom isian di form |
| D80-S02 | The phone number must be between ten and thirteen digits. | Nomor teleponnya harus terdiri dari sepuluh sampai tiga belas angka. | between=antara |
| D80-S05 | A patient can't book two appointments at the same time. | Seorang pasien tidak boleh membuat dua janji temu di jam yang sama. | at=pada |
| D80-S06 | The business rule says that refunds need manager approval. | Aturan bisnisnya menyebutkan bahwa refund perlu persetujuan manajer. | refunds=pengembalian dana (jamak) |
| D80-S08 | If the rule is broken, the API returns a validation error. | Kalau aturannya dilanggar, API mengembalikan error validasi. | API=API: pintu komunikasi antar aplikasi; validation=validasi: pemeriksaan kebenaran data |
| D80-S09 | The error message tells the user which field is wrong. | Pesan error-nya memberi tahu user kolom mana yang salah. | field=field: kolom isian di form |
| D80-S10 | This rule is different for VIP customers. | Aturan ini berbeda untuk pelanggan VIP. | VIP=VIP: pelanggan khusus / prioritas |
| D80-S11 | Just to confirm, is the address field required? | Sekadar memastikan, apakah kolom alamat wajib diisi? | field=field: kolom isian di form |
| D80-S13 | I misunderstood the discount rule. | Saya salah memahami aturan diskonnya. | misunderstood=salah paham (lampau) |
| D81-S01 | All traffic uses HTTPS. | Semua lalu lintas data memakai HTTPS. | HTTPS=HTTPS: koneksi web yang terenkripsi |
| D81-S02 | We never put secrets in the source code. | Kami tidak pernah menaruh data rahasia di dalam kode. | secrets=rahasia: password, API key, dan sejenisnya (jamak); source=sumber; code=kode program |
| D81-S04 | We use parameterized queries to prevent SQL injection. | Kami memakai parameterized query untuk mencegah SQL injection. | parameterized=berparameter: nilai dikirim terpisah dari perintah query; SQL=SQL: bahasa untuk database (dibaca "es-kyu-el"); injection=injeksi: menyisipkan perintah berbahaya |
| D81-S05 | We check permissions on every request. | Kami memeriksa izin akses di setiap request. | on=pada; request=request: permintaan ke server |
| D81-S06 | Users should only access their own data. | User seharusnya hanya bisa mengakses datanya sendiri. | Users=pengguna (jamak); their=milik mereka |
| D81-S07 | This input isn't sanitized, so it could be a security risk. | Input ini belum dibersihkan, jadi bisa jadi risiko keamanan. | input=input: data yang dimasukkan user; sanitized=dibersihkan dari karakter berbahaya; it=hal itu |
| D81-S08 | We found a vulnerability in an old library. | Kami menemukan celah keamanan di sebuah library lama. | library=library: kumpulan kode siap pakai dari pihak lain |
| D81-S09 | We need to update it as soon as possible. | Kita perlu memperbaruinya secepat mungkin. | it=itu / -nya; soon=segera |
| D81-S10 | Access to production is limited to a few people. | Akses ke production dibatasi hanya untuk beberapa orang. | production=production: server yang dipakai user asli |
| D81-S11 | Only admins have permission to change user roles. | Hanya admin yang punya izin untuk mengubah role user. | admins=admin (jamak): pengelola sistem |
| D81-S12 | What happens if someone steals the token? | Apa yang terjadi kalau ada orang yang mencuri token-nya? | someone=seseorang; token=token: kode tanda sudah login |
| D82-S03 | I profiled the endpoint and found the slow part. | Saya mem-profile endpoint-nya dan menemukan bagian yang lambat. | profiled=mem-profile: mengukur waktu tiap bagian kode (lampau); endpoint=endpoint: alamat URL tertentu di API |
| D82-S05 | The average response time is 300 milliseconds. | Rata-rata waktu responsnya 300 milidetik. | response=response: jawaban dari server; 300=tiga ratus |
| D82-S12 | We reduced the response time from two seconds to 400 milliseconds. | Kami menurunkan waktu respons dari dua detik menjadi 400 milidetik. | response=response: jawaban dari server; 400=empat ratus |
| D82-S13 | We think this may be related to the database connection pool. | Kami rasa ini mungkin berhubungan dengan connection pool database. | database=database: tempat data disimpan; connection=koneksi / sambungan; pool=pool: kumpulan yang dipakai bergantian |
| D83-S01 | We chose this approach because it's easier to maintain. | Kami memilih pendekatan ini karena lebih mudah dirawat. | maintain=merawat / memelihara (kode) |
| D83-S04 | We considered other options, but they didn't fit our needs. | Kami sempat mempertimbangkan pilihan lain, tapi tidak cocok dengan kebutuhan kami. | but=tetapi; didn't=tidak (lampau) — did not; our=milik kami |
| D83-S05 | At that time, the team didn't have experience with Kubernetes. | Waktu itu, tim belum punya pengalaman dengan Kubernetes. | At=pada; didn't=tidak / belum (lampau) — did not |
| D83-S06 | Given our deadline, it was the safest choice. | Mengingat deadline kami, itu pilihan yang paling aman. | our=milik kami; was=adalah (lampau) |
| D83-S08 | If we need to scale later, we can split it into services. | Kalau nanti perlu scale, kami bisa memecahnya menjadi beberapa service. | scale=scale: menambah kapasitas agar sanggup melayani lebih banyak user; it=itu / -nya |
| D83-S10 | Why did you decide to build it yourselves? | Kenapa kalian memutuskan membangunnya sendiri? | did=(kata bantu pertanyaan bentuk lampau, tidak diterjemahkan); it=itu / -nya |
| D83-S13 | I'd rather use a library than write it from scratch. | Saya lebih memilih memakai library daripada menulisnya dari nol. | I'd=saya (I would, dalam "I'd rather"); library=library: kumpulan kode siap pakai; it=itu / -nya |
| D84-S01 | There are two ways we can do this. | Ada dua cara yang bisa kita pakai untuk ini. | do=melakukan / mengerjakan |
| D84-S02 | The first approach is to call the API directly from the frontend. | Pendekatan pertama adalah memanggil API langsung dari frontend. | API=API: pintu komunikasi antar aplikasi; directly=secara langsung; frontend=frontend: bagian aplikasi yang dilihat user |
| D84-S03 | The second approach is to go through our backend. | Pendekatan kedua adalah melewati backend kita. | our=milik kita; backend=backend: bagian server yang memproses data |
| D84-S04 | The first option is faster to build, but harder to change later. | Opsi pertama lebih cepat dibuat, tapi lebih sulit diubah nanti. | but=tetapi |
| D84-S11 | Compared with a relational database, this is more flexible. | Dibandingkan database relasional, ini lebih fleksibel. | relational=relasional: data yang saling berhubungan antar tabel; database=database: tempat data disimpan |
| D84-S13 | What happens if the external API is slow? | Apa yang terjadi kalau API eksternalnya lambat? | API=API: pintu komunikasi antar aplikasi |
| D85-S01 | Every solution has trade-offs. | Setiap solusi punya untung-ruginya. | trade-offs=trade-off: ada yang didapat, ada yang dikorbankan (jamak) |
| D85-S02 | We're trading flexibility for speed. | Kami mengorbankan fleksibilitas demi kecepatan. | We're=kami sedang (we are); trading=menukar (dalam "trade A for B") |
| D85-S03 | Caching makes the page faster, but the data might be out of date. | Cache membuat halaman lebih cepat, tapi datanya mungkin tidak yang terbaru. | Caching=caching: menyimpan data sementara; but=tetapi; date=tanggal (dalam "out of date": sudah tidak terbaru) |
| D85-S07 | This makes the code more complex, so it's harder for new developers. | Ini membuat kodenya lebih rumit, jadi lebih sulit untuk developer baru. | code=kode program; for=untuk / bagi |
| D85-S08 | We're taking on some technical debt to meet the deadline. | Kami mengambil sedikit utang teknis supaya bisa memenuhi deadline. | We're=kami sedang (we are) |
| D85-S10 | Is it worth the extra complexity? | Apakah itu sepadan dengan kerumitan tambahannya? | it=itu / hal itu |
| D85-S13 | I see your point, but I don't think it's worth the extra cost. | Saya paham maksudmu, tapi menurut saya itu tidak sepadan dengan biaya tambahannya. | see=memahami (dalam "see your point"); your=milikmu; but=tetapi; think=berpendapat |
| D86-S05 | This isn't a blocker, but it would be nice to fix. | Ini bukan hal wajib, tapi bagus kalau diperbaiki. | blocker=blocker: masalah yang harus diperbaiki sebelum merge; but=tetapi |
| D87-S01 | The goal of this meeting is to decide how to handle file uploads. | Tujuan rapat ini adalah memutuskan cara menangani upload file. | of=dari; how=bagaimana (cara) |
| D87-S03 | From a technical point of view, both options are possible. | Dari sudut pandang teknis, kedua opsi bisa dilakukan. | options=pilihan (jamak) |
| D87-S05 | Do we have any constraints on time or budget? | Apakah ada batasan soal waktu atau anggaran? | Do=(kata bantu pertanyaan, tidak diterjemahkan); we=kita; have=punya |
| D87-S10 | The open question is who will own the migration. | Pertanyaan yang belum terjawab adalah siapa yang akan memegang migrasinya. | migration=migrasi: memindahkan data atau sistem ke tempat baru |
| D87-S11 | What happens if we don't finish the migration on time? | Apa yang terjadi kalau migrasinya tidak selesai tepat waktu? | we=kita; finish=menyelesaikan |
| D87-S13 | I'll write a short summary and share it after the meeting. | Saya akan menulis ringkasan singkat dan membagikannya setelah rapat. | it=itu / -nya |
| D88-S01 | We're currently experiencing an incident with the payment service. | Saat ini kami sedang mengalami insiden pada service pembayaran. | incident=insiden: gangguan pada sistem; service=service: bagian sistem yang menjalankan satu fungsi |
| D88-S02 | The issue affects users who try to submit this form. | Masalah ini berdampak pada user yang mencoba mengirim formulir ini. | users=pengguna (jamak) |
| D88-S03 | About ten percent of users are affected. | Sekitar sepuluh persen user terdampak. | of=dari; users=pengguna (jamak) |
| D88-S04 | We've mitigated the impact by switching to the backup provider. | Kami sudah mengurangi dampaknya dengan beralih ke penyedia cadangan. | provider=penyedia layanan |
| D88-S06 | It appears to be related to a certificate that expired last night. | Tampaknya ini berhubungan dengan sertifikat yang kedaluwarsa tadi malam. | certificate=sertifikat (keamanan, untuk HTTPS) |
| D88-S09 | We'll share a post-mortem by Friday. | Kami akan membagikan laporan post-mortem paling lambat hari Jumat. | post-mortem=post-mortem: laporan evaluasi setelah insiden |
| D88-S10 | We apologize for the inconvenience. | Kami mohon maaf atas ketidaknyamanannya. | apologize=meminta maaf (formal) |
| D88-S11 | We rolled back the deployment as a temporary fix. | Kami rollback deploy-nya sebagai perbaikan sementara. | rolled=mengembalikan (dalam "roll back", lampau); back=kembali (dalam "roll back"); deployment=deployment: proses merilis ke server |
| D88-S12 | Some users can't complete their payments. | Sebagian user tidak bisa menyelesaikan pembayarannya. | users=pengguna (jamak); their=milik mereka |
| D88-S13 | We're monitoring the error rate closely. | Kami memantau tingkat error-nya dengan saksama. | We're=kami sedang (we are) |
| D89-S01 | Today, I'll present how we improved the search feature. | Hari ini saya akan mempresentasikan bagaimana kami meningkatkan fitur pencarian. | present=mempresentasikan (kata kerja, dibaca "pri-zent") |
| D89-S04 | This chart shows the number of errors per day. | Grafik ini menunjukkan jumlah error per hari. | of=dari |
| D89-S06 | To summarize, the new approach is faster and cheaper. | Singkatnya, pendekatan baru ini lebih cepat dan lebih murah. | summarize=merangkum / menyimpulkan |
| D90-S04 | Looking ahead, our biggest challenge is scaling. | Ke depannya, tantangan terbesar kami adalah scaling. | our=milik kami; scaling=scaling: menambah kapasitas agar sanggup melayani lebih banyak user |
| D90-S05 | If I had more time, I would improve the test coverage. | Kalau saya punya waktu lebih, saya akan meningkatkan test coverage. | more=lebih banyak; coverage=cakupan |
| D90-S06 | Happy to go deeper into any part you're interested in. | Saya senang membahas lebih dalam bagian mana pun yang Anda minati. | interested=tertarik |
| D91-S02 | Currently, I work on a hospital information system. | Saat ini, saya mengerjakan sistem informasi rumah sakit. | work=bekerja |
| D91-S04 | My main strength is solving problems step by step. | Kekuatan utama saya adalah menyelesaikan masalah langkah demi langkah. | My=milik saya |
| D91-S06 | In the future, I'd like to work with an international team. | Ke depannya, saya ingin bekerja dengan tim internasional. | In=di / pada; future=masa depan |
| D91-S07 | My goal is to grow into a senior engineer. | Tujuan saya adalah berkembang menjadi senior engineer. | My=milik saya |
| D92-S01 | I started my career as a junior developer. | Saya memulai karier sebagai junior developer. | my=milik saya |
| D92-S02 | Over the years, I've worked on several healthcare projects. | Selama bertahun-tahun, saya sudah mengerjakan beberapa proyek bidang kesehatan. | years=tahun; worked=bekerja (bentuk ke-3); healthcare=layanan kesehatan |
| D92-S03 | In my previous role, I was responsible for the billing module. | Di peran saya sebelumnya, saya bertanggung jawab atas modul billing (tagihan). | In=di / dalam; my=milik saya; was=adalah (lampau) |
| D92-S04 | One of my biggest achievements was reducing registration time. | Salah satu pencapaian terbesar saya adalah mengurangi waktu pendaftaran. | of=dari; my=milik saya |
| D92-S08 | Now I handle both backend work and integrations. | Sekarang saya menangani pekerjaan backend dan juga integrasi. | integrations=integrasi dengan sistem lain |
| D93-S01 | The system covers the whole patient journey, from registration to billing. | Sistem ini mencakup seluruh perjalanan pasien, dari pendaftaran sampai tagihan. | billing=penagihan / billing |
| D93-S03 | Doctors write diagnoses and prescriptions in the doctor workspace. | Dokter menulis diagnosis dan resep di halaman kerja dokter. | prescriptions=resep obat |
| D93-S04 | Lab results are sent back to the patient's record automatically. | Hasil lab dikirim kembali ke rekam medis pasien secara otomatis. | patient's=milik pasien |
| D93-S07 | My part of the project is the outpatient module. | Bagian saya di proyek ini adalah modul rawat jalan. | My=milik saya; of=dari |
| D93-S08 | What I like most about this project is that it helps patients directly. | Yang paling saya sukai dari proyek ini adalah proyek ini membantu pasien secara langsung. | What=yang / apa; that=bahwa |
| D94-S01 | The problem was that patients waited too long at the lab. | Masalahnya adalah pasien menunggu terlalu lama di laboratorium. | that=bahwa |
| D94-S02 | The requirement was to show the queue status in real time. | Kebutuhannya adalah menampilkan status antrean secara real time. | real=nyata; time=waktu |
| D94-S03 | Our approach was to build a simple queue screen first. | Pendekatan kami adalah membuat layar antrean sederhana terlebih dahulu. | Our=milik kami |
| D94-S06 | As a result, the average waiting time dropped by thirty percent. | Hasilnya, rata-rata waktu tunggu turun tiga puluh persen. | by=sebanyak |
| D94-S08 | If I did it again, I would test with real data sooner. | Kalau saya mengulanginya, saya akan menguji dengan data asli lebih cepat. | did=melakukan (bentuk lampau untuk pengandaian); it=itu / proyek itu; again=lagi |
| D95-S01 | Our team has two backend developers, one frontend developer, and a QA engineer. | Tim kami terdiri dari dua backend developer, satu frontend developer, dan satu QA engineer. | Our=milik kami; QA=QA (quality assurance): bagian penguji kualitas |
| D95-S02 | We work closely with a business analyst from the hospital. | Kami bekerja erat dengan business analyst dari pihak rumah sakit. | closely=secara erat; business=bisnis |
| D95-S03 | I often pair with a junior developer on difficult tasks. | Saya sering bekerja berpasangan dengan junior developer untuk tugas yang sulit. | on=untuk / pada |
| D95-S04 | When someone is stuck, we help each other quickly. | Kalau ada yang buntu, kami saling membantu dengan cepat. | someone=seseorang |
| D95-S08 | We solved it by agreeing on clear rules. | Kami menyelesaikannya dengan menyepakati aturan yang jelas. | it=itu / masalah itu; by=dengan cara |
| D96-S01 | Could we talk about my workload this week? | Bisakah kita membahas beban kerja saya minggu ini? | about=tentang; my=milik saya |
| D96-S02 | I'd like your advice on how to prioritize these tasks. | Saya ingin saran Anda tentang cara memprioritaskan tugas-tugas ini. | your=milik Anda |
| D96-S03 | I'm worried that we can't finish the pharmacy module on time. | Saya khawatir kita tidak bisa menyelesaikan modul farmasi tepat waktu. | that=bahwa |
| D96-S06 | Could you give me some feedback on my last presentation? | Bisakah Anda memberi saya masukan tentang presentasi terakhir saya? | some=beberapa / sedikit; my=milik saya |
| D96-S07 | I'd like to take on more responsibility. | Saya ingin mengambil tanggung jawab yang lebih besar. | on=(bagian dari "take on": mengambil / menerima tugas); more=lebih banyak |
| D97-S01 | Thank you for taking the time to meet with us. | Terima kasih sudah meluangkan waktu untuk bertemu dengan kami. | you=Anda; for=untuk / atas |
| D97-S03 | In simple terms, the new feature saves nurses about ten minutes per shift. | Sederhananya, fitur baru ini menghemat waktu perawat sekitar sepuluh menit per shift. | terms=istilah |
| D97-S05 | Before we build it, we'd like to confirm a few details. | Sebelum kami membuatnya, kami ingin mengonfirmasi beberapa detail. | it=itu / fitur itu |
| D97-S06 | We can deliver the first part by the end of the month. | Kami bisa menyerahkan bagian pertama paling lambat akhir bulan. | of=dari |
| D97-S07 | That request is outside the current scope. | Permintaan itu di luar cakupan (scope) saat ini. | scope=cakupan pekerjaan / scope |
| D98-S02 | An API is like a waiter who takes your order to the kitchen. | API itu seperti pelayan yang membawa pesanan Anda ke dapur. | API=API: jalur resmi agar dua sistem bisa saling meminta dan mengirim data; your=milik Anda |
| D98-S03 | Authentication is like showing your ID card at the hospital entrance. | Authentication itu seperti menunjukkan kartu identitas di pintu masuk rumah sakit. | Authentication=autentikasi: memastikan siapa pengguna; your=milik Anda |
| D98-S06 | The important thing for you is that no data will be lost. | Hal yang penting bagi Anda adalah tidak ada data yang akan hilang. | that=bahwa |
| D98-S07 | Without going into too much detail, the server was overloaded. | Tanpa masuk ke detail yang terlalu banyak, server-nya kelebihan beban. | going=(bagian dari "go into": masuk ke / membahas); into=ke dalam |
| D99-S02 | Building on what Maya said, we could also notify the nurses. | Melanjutkan apa yang Maya katakan, kita juga bisa memberi notifikasi ke perawat. | Building=(bagian dari "build on": melanjutkan / mengembangkan ide); notify=memberi tahu / mengirim notifikasi |
| D99-S05 | Can I just check that we're talking about the same thing? | Boleh saya pastikan bahwa kita sedang membicarakan hal yang sama? | just=hanya / sebentar (melunakkan); check=memeriksa / memastikan; about=tentang |
| D99-S06 | I'd like to hear what the nurses think. | Saya ingin mendengar pendapat para perawat. | what=apa yang |
| D99-S07 | Just to recap my action items, I'll update the form and test it. | Sekadar merangkum action item saya: saya akan memperbarui form dan mengujinya. | recap=merangkum ulang; my=milik saya; action=tindakan |
| D100-S01 | Thanks for joining. Let's get started. | Terima kasih sudah bergabung. Mari kita mulai. | for=untuk / atas |
| D100-S03 | The goal today is to agree on the release plan. | Tujuan hari ini adalah menyepakati rencana rilis. | agree=sepakat |
| D100-S04 | Let's hear from the pharmacy team first. | Mari kita dengar dari tim farmasi dulu. | hear=mendengar; first=terlebih dahulu |
| D101-S01 | I see it a bit differently. | Saya melihatnya sedikit berbeda. | it=itu / hal itu; differently=secara berbeda |
| D101-S02 | I understand why you want to release on Monday, but I have a concern. | Saya paham kenapa Anda ingin rilis hari Senin, tapi saya punya satu kekhawatiran. | release=merilis; on=pada (hari) |
| D101-S05 | What if we released it to one ward first? | Bagaimana kalau kita rilis dulu ke satu bangsal? | released=merilis (bentuk lampau untuk usulan); it=itu / fitur itu; first=terlebih dahulu |
| D101-S06 | I may be wrong, but patient safety should come first. | Mungkin saya salah, tapi keselamatan pasien harus diutamakan. | come=datang / berada; first=pertama |
| D102-S04 | What I meant was that the report is for doctors only. | Maksud saya, laporan itu hanya untuk dokter. | What=apa yang; was=adalah (lampau); that=bahwa |
| D102-S06 | It sounds like we had different expectations. | Sepertinya kita punya ekspektasi yang berbeda. | sounds=terdengar |
| D102-S08 | I'll send a written summary so we're on the same page. | Saya akan mengirim ringkasan tertulis supaya pemahaman kita sama. | page=halaman |
| D103-S02 | The problem we wanted to solve was slow discharge. | Masalah yang ingin kami selesaikan adalah proses pemulangan pasien yang lambat. | solve=menyelesaikan; discharge=pemulangan pasien rawat inap |
| D103-S03 | Our solution was a discharge checklist that everyone can see. | Solusi kami adalah checklist pemulangan yang bisa dilihat semua orang. | Our=milik kami; discharge=pemulangan pasien rawat inap; see=melihat |
| D103-S04 | On this diagram, you can see the main components. | Di diagram ini, Anda bisa melihat komponen-komponen utamanya. | On=di / pada |
| D103-S05 | The key idea is that each team updates its own step. | Ide utamanya adalah setiap tim memperbarui langkahnya sendiri. | that=bahwa; its=miliknya (untuk benda / kelompok) |
| D103-S06 | After three months, discharge time went down from five hours to three. | Setelah tiga bulan, waktu pemulangan turun dari lima jam menjadi tiga jam. | discharge=pemulangan pasien rawat inap; went=(bagian dari "go down": turun, lampau) |
| D103-S07 | Our next step is to roll it out to all wards. | Langkah kami berikutnya adalah menerapkannya ke semua bangsal. | Our=milik kami; it=itu / sistem itu |
| D104-S02 | So your question is whether the checklist works at night, right? | Jadi pertanyaan Anda adalah apakah checklist-nya berfungsi di malam hari, benar? | your=milik Anda; at=pada / di |
| D104-S03 | I don't have that number with me right now. | Saya tidak memegang angka itu sekarang. | with=bersama |
| D104-S04 | I don't want to guess, so I'll check and send it to you today. | Saya tidak mau menebak, jadi saya akan cek dan mengirimkannya ke Anda hari ini. | it=itu / datanya |
| D104-S05 | That's outside my area, but our data team can answer it. | Itu di luar bidang saya, tapi tim data kami bisa menjawabnya. | my=milik saya; our=milik kami; it=itu / pertanyaan itu |
| D104-S06 | That's a fair point, and we haven't solved it yet. | Poin itu masuk akal, dan kami memang belum menyelesaikannya. | That's=itu adalah (that is); it=itu / masalah itu |
| D104-S07 | Short answer: yes. Long answer: it depends on the ward. | Jawaban singkatnya: ya. Jawaban panjangnya: tergantung bangsalnya. | on=pada |
| D105-S03 | I learned to adjust my message for each audience. | Saya belajar menyesuaikan pesan saya untuk setiap audiens. | my=milik saya |
| D105-S04 | With doctors, I keep it short and focus on patient safety. | Dengan dokter, saya bicara singkat dan fokus pada keselamatan pasien. | keep=menjaga / membuat tetap |
| D105-S05 | With engineers, I talk more about the design and the trade-offs. | Dengan engineer, saya lebih banyak membahas desain dan trade-off-nya. | about=tentang; trade-offs=trade-off: untung-rugi dari sebuah pilihan |
| D105-S06 | Overall, I feel confident working in an international team. | Secara keseluruhan, saya merasa percaya diri bekerja di tim internasional. | in=di / dalam |
| D106-S02 | For the past three years, I've been building a hospital information system. | Selama tiga tahun terakhir, saya membangun sistem informasi rumah sakit. | I've=saya telah (I have) |
| D106-S05 | What I enjoy most is turning messy workflows into simple tools. | Yang paling saya nikmati adalah mengubah alur kerja yang berantakan menjadi alat yang sederhana. | What=yang / apa yang; enjoy=menikmati / senang |
| D106-S06 | I'm now looking for a role where I can work on larger systems. | Sekarang saya mencari posisi di mana saya bisa mengerjakan sistem yang lebih besar. | I'm=saya sedang (I am); work=bekerja |
| D106-S07 | That's why this position caught my attention. | Itulah kenapa posisi ini menarik perhatian saya. | my=milik saya |
| D106-S08 | I'm happy to go into more detail on any of that. | Saya senang menjelaskan lebih detail bagian mana pun dari itu. | into=ke dalam; on=tentang |
| D107-S01 | I've learned a lot in my current company. | Saya sudah belajar banyak di perusahaan saya sekarang. | my=milik saya; current=saat ini |
| D107-S03 | I'm looking for an opportunity to work on a larger scale. | Saya mencari kesempatan untuk bekerja dalam skala yang lebih besar. | I'm=saya sedang (I am) |
| D107-S04 | Our product is stable now, so there's less new development. | Produk kami sekarang sudah stabil, jadi pengembangan baru lebih sedikit. | Our=milik kami; there's=ada (there is) |
| D107-S06 | It's less about leaving and more about growing. | Ini bukan soal pergi, tapi lebih soal berkembang. | less=lebih sedikit / bukan terutama |
| D107-S07 | Compensation matters, but it isn't my main reason. | Gaji dan tunjangan itu penting, tapi bukan alasan utama saya. | Compensation=kompensasi (gaji dan tunjangan); my=milik saya |
| D108-S02 | Your mission to make healthcare easier to access really speaks to me. | Misi Anda untuk membuat layanan kesehatan lebih mudah diakses benar-benar sesuai dengan nilai saya. | Your=milik Anda; access=mengakses / menjangkau; speaks=(bagian dari "speak to me": terasa dekat / cocok dengan saya) |
| D108-S03 | I read that you're expanding to more clinics in the region. | Saya membaca bahwa Anda sedang memperluas layanan ke lebih banyak klinik di kawasan ini. | read=membaca (lampau, dibaca "red") |
| D108-S04 | My experience with hospital systems matches what you're building. | Pengalaman saya dengan sistem rumah sakit cocok dengan apa yang sedang Anda bangun. | My=milik saya; building=membangun |
| D108-S06 | I also like that your engineering team writes about its work. | Saya juga suka tim engineering Anda menulis tentang pekerjaan mereka. | that=bahwa; your=milik Anda; its=miliknya (untuk benda / kelompok) |
| D108-S07 | It feels like a place where I can both contribute and learn. | Rasanya ini tempat di mana saya bisa berkontribusi sekaligus belajar. | feels=terasa; like=seperti |
| D108-S08 | What does success look like in this role after six months? | Seperti apa keberhasilan di posisi ini setelah enam bulan? | does=(penanda pertanyaan untuk dia/itu, tidak diterjemahkan); look=terlihat |
| D109-S01 | One of my strengths is staying calm under pressure. | Salah satu kelebihan saya adalah tetap tenang di bawah tekanan. | of=dari; my=milik saya |
| D109-S03 | My colleagues often come to me when something is unclear. | Rekan kerja saya sering datang ke saya kalau ada yang tidak jelas. | My=milik saya; something=sesuatu |
| D109-S04 | A weakness I'm working on is saying no to extra requests. | Kekurangan yang sedang saya perbaiki adalah menolak permintaan tambahan. | working=(bagian dari "work on": memperbaiki / mengerjakan); saying=mengatakan |
| D109-S05 | In the past, I took on too much, and my own tasks got delayed. | Dulu, saya mengambil terlalu banyak pekerjaan, dan tugas saya sendiri jadi tertunda. | past=masa lalu; my=milik saya; got=menjadi (lampau) |
| D109-S06 | Now I check my priorities before I agree to something new. | Sekarang saya mengecek prioritas saya sebelum menyetujui hal baru. | my=milik saya; agree=setuju; something=sesuatu |
| D110-S02 | The situation was that the go-live date was only two weeks away. | Situasinya, tanggal go-live tinggal dua minggu lagi. | was=adalah (lampau); that=bahwa; go-live=go-live: saat sistem mulai dipakai sungguhan |
| D110-S03 | My task was to finish the pharmacy integration in time. | Tugas saya adalah menyelesaikan integrasi farmasi tepat waktu. | My=milik saya |
| D110-S04 | The action I took was to split the work into daily goals. | Tindakan yang saya ambil adalah memecah pekerjaan menjadi target harian. | took=mengambil (lampau) |
| D110-S06 | In the end, we went live on time with no critical bugs. | Akhirnya, kami go-live tepat waktu tanpa bug kritis. | went=(bagian dari "go live": mulai dipakai sungguhan, lampau); live=aktif / dipakai sungguhan |
| D110-S07 | Looking back, I would have asked for help earlier. | Kalau dipikir lagi, seharusnya saya minta bantuan lebih awal. | back=ke belakang; asked=meminta (bentuk ke-3) |
| D110-S08 | That experience showed me the value of short feedback loops. | Pengalaman itu menunjukkan kepada saya pentingnya siklus feedback yang singkat. | value=nilai / manfaat; of=dari |
| D111-S02 | Before I start, can I ask a few clarifying questions? | Sebelum mulai, boleh saya ajukan beberapa pertanyaan klarifikasi? | ask=bertanya / mengajukan; clarifying=untuk memperjelas |
| D111-S03 | I'm assuming that each patient has a unique ID. | Saya berasumsi bahwa setiap pasien punya ID yang unik. | I'm=saya sedang (I am); ID=nomor identitas / ID |
| D111-S04 | My first idea is a simple solution, and then I'll improve it. | Ide pertama saya adalah solusi sederhana, lalu akan saya perbaiki. | My=milik saya; improve=memperbaiki / meningkatkan |
| D112-S02 | I owned the design of the integration layer. | Saya yang bertanggung jawab penuh atas desain lapisan integrasi. | of=dari |
| D112-S04 | The hardest technical problem was keeping data consistent between systems. | Masalah teknis tersulitnya adalah menjaga data tetap konsisten antarsistem. | systems=sistem |
| D112-S05 | We solved it with an outbox table and retries. | Kami menyelesaikannya dengan tabel outbox dan mekanisme retry. | it=itu / masalah itu; outbox=outbox: tabel antrean pesan yang belum terkirim |
| D112-S07 | If I could redesign it, I would add better monitoring from the start. | Kalau bisa merancang ulang, saya akan menambahkan monitoring yang lebih baik sejak awal. | it=itu / sistem itu |
| D112-S08 | I wasn't involved in that part, so I can only speak about my side. | Saya tidak terlibat di bagian itu, jadi saya hanya bisa bicara tentang bagian saya. | in=di / dalam; my=milik saya |
| D113-S01 | I'd design it as a REST API with resources for patients and appointments. | Saya akan merancangnya sebagai REST API dengan resource untuk pasien dan janji temu. | it=itu / sistem itu; REST=REST: gaya API berbasis resource dan metode HTTP; API=API: jalur resmi agar dua sistem bisa saling meminta dan mengirim data; resources=resource: data yang diakses lewat API (mis. pasien) |
| D113-S02 | The endpoint should be idempotent, so a retry doesn't create a duplicate. | Endpoint-nya harus idempotent, supaya percobaan ulang tidak membuat data ganda. | endpoint=endpoint: alamat URL tertentu di API; idempotent=idempotent: dipanggil berkali-kali hasilnya tetap sama |
| D113-S03 | I'd return a 409 error if the time slot is already taken. | Saya akan mengembalikan error 409 kalau slot waktunya sudah terisi. | 409=409 (kode HTTP: conflict / bentrok dengan data yang ada) |
| D113-S04 | We version the API to avoid breaking existing clients. | Kami memberi versi pada API agar tidak merusak client yang sudah ada. | API=API: jalur resmi antarsistem; avoid=menghindari; clients=client: aplikasi yang memakai API |
| D113-S05 | For long tasks, the API returns right away and processes the job in the background. | Untuk tugas yang lama, API langsung merespons dan memproses pekerjaannya di background. | API=API: jalur resmi antarsistem; background=latar belakang (berjalan tanpa ditunggu user) |
| D113-S06 | We use pagination so the response doesn't get too big. | Kami memakai pagination agar respons tidak terlalu besar. | pagination=pagination: membagi hasil menjadi beberapa halaman; get=menjadi |
| D113-S07 | Every request is logged with a correlation ID. | Setiap request dicatat di log dengan correlation ID. | correlation=korelasi / keterkaitan; ID=nomor identitas / ID |
| D113-S08 | The trade-off is between simplicity and flexibility. | Trade-off-nya adalah antara kesederhanaan dan fleksibilitas. | trade-off=trade-off: untung-rugi dari sebuah pilihan |
| D114-S01 | I'd model it with three tables: patients, visits, and prescriptions. | Saya akan memodelkannya dengan tiga tabel: pasien, kunjungan, dan resep. | it=itu / data itu; prescriptions=resep obat |
| D114-S02 | A patient has many visits, and each visit has many prescriptions. | Satu pasien punya banyak kunjungan, dan setiap kunjungan punya banyak resep. | prescriptions=resep obat |
| D114-S03 | I'd add an index on the medical record number because we search by it often. | Saya akan menambahkan index pada nomor rekam medis karena kami sering mencari berdasarkan kolom itu. | index=index: struktur agar pencarian di database cepat |
| D114-S04 | We use a transaction, so the payment and the bill are saved together. | Kami memakai transaction, supaya pembayaran dan tagihan tersimpan bersamaan. | transaction=transaction: beberapa perubahan data yang berhasil atau gagal bersama |
| D114-S05 | Normalization reduces duplicate data, but it can mean more joins. | Normalisasi mengurangi data ganda, tapi bisa berarti lebih banyak join. | Normalization=normalisasi: memecah data agar tidak tersimpan ganda; joins=join: menggabungkan data dari beberapa tabel |
| D114-S06 | For reports, we read from a replica to protect the main database. | Untuk laporan, kami membaca dari replica agar database utama tetap aman. | replica=replica: salinan database yang terus diperbarui; protect=melindungi |
| D114-S07 | We never delete medical records; we mark them as inactive. | Kami tidak pernah menghapus rekam medis; kami menandainya sebagai tidak aktif. | them=mereka / data itu |
| D114-S08 | I'd check the query plan before adding more indexes. | Saya akan mengecek query plan sebelum menambah index lagi. | query=query: perintah untuk mengambil data; plan=rencana; more=lebih banyak |
| D115-S01 | The frontend shows a loading state while it waits for the API. | Frontend menampilkan status loading selama menunggu API. | loading=sedang memuat; API=API: jalur resmi antarsistem |
| D115-S02 | If the network fails, the form keeps the data, so nurses don't lose their work. | Kalau jaringan gagal, form tetap menyimpan datanya, jadi perawat tidak kehilangan pekerjaannya. | their=milik mereka |
| D115-S03 | We agreed on a shared contract before building both sides. | Kami menyepakati kontrak bersama sebelum membangun kedua sisi. | agreed=sepakat (lampau); contract=kontrak: kesepakatan format request dan response |
| D115-S04 | For the insurance system, we built an adapter that converts their format to ours. | Untuk sistem asuransi, kami membuat adapter yang mengubah format mereka ke format kami. | adapter=adapter: komponen penerjemah format antarsistem; their=milik mereka; ours=milik kami |
| D115-S05 | Webhooks let the lab system tell us when a result is ready. | Webhook membuat sistem lab bisa memberi tahu kami saat hasil sudah siap. | Webhooks=webhook: sistem lain memanggil URL kita saat ada kejadian |
| D115-S06 | We test the integration with a mock server on staging. | Kami menguji integrasinya dengan mock server di staging. | staging=staging: lingkungan uji yang mirip production |
| D115-S07 | Accessibility matters because some staff use large fonts. | Aksesibilitas itu penting karena sebagian staf memakai huruf besar. | Accessibility=aksesibilitas: mudah dipakai semua orang, termasuk yang punya keterbatasan |
| D115-S08 | On slow hospital Wi-Fi, we load the most important data first. | Di Wi-Fi rumah sakit yang lambat, kami memuat data yang paling penting lebih dulu. | On=di / pada; first=terlebih dahulu |
| D116-S02 | Non-functional requirements include availability, security, and response time. | Kebutuhan non-fungsional mencakup ketersediaan, keamanan, dan waktu respons. | Non-functional=non-fungsional: seberapa baik sistem bekerja (cepat, aman, stabil); availability=ketersediaan: sistem bisa dipakai kapan saja |
| D116-S04 | A load balancer spreads the traffic across several servers. | Load balancer membagi lalu lintas ke beberapa server. | load=beban; balancer=penyeimbang; traffic=lalu lintas request / traffic |
| D116-S05 | We can scale horizontally by adding more instances. | Kita bisa scaling secara horizontal dengan menambah instance. | by=dengan cara; more=lebih banyak; instances=instance: satu salinan aplikasi yang berjalan |
| D116-S07 | For high availability, we'd run the database with a standby replica. | Untuk ketersediaan tinggi, kami akan menjalankan database dengan replica cadangan. | availability=ketersediaan: sistem bisa dipakai kapan saja; standby=cadangan yang siap mengambil alih; replica=replica: salinan database yang terus diperbarui |
| D116-S08 | I'd start simple and add complexity only when we need it. | Saya akan mulai dengan sederhana dan menambah kerumitan hanya saat benar-benar perlu. | we=kita; need=butuh |
| D117-S07 | If traffic grows, the first bottleneck will probably be the search. | Kalau traffic bertambah, bottleneck pertama kemungkinan besar ada di pencarian. | bottleneck=bottleneck: bagian yang paling memperlambat sistem |
| D117-S08 | Given more time, I'd go deeper into the data model. | Kalau ada waktu lebih, saya akan membahas model datanya lebih dalam. | Given=dengan / kalau diberi; more=lebih banyak |
| D118-S03 | I'd like to learn more about the role before discussing a specific number. | Saya ingin tahu lebih banyak tentang posisinya sebelum membahas angka tertentu. | learn=mengetahui / belajar |
| D118-S05 | My English isn't perfect, but I can communicate clearly at work. | Bahasa Inggris saya belum sempurna, tapi saya bisa berkomunikasi dengan jelas di tempat kerja. | My=milik saya |
| D118-S07 | I'm in the process with one other company, but this role is my first choice. | Saya sedang dalam proses dengan satu perusahaan lain, tapi posisi ini pilihan pertama saya. | my=milik saya |
| D119-S01 | Thank you for having me today. | Terima kasih sudah mengundang saya hari ini. | you=Anda; for=atas |
| D119-S02 | Could I take a moment to structure my answer? | Boleh saya ambil waktu sebentar untuk menyusun jawaban saya? | take=mengambil; my=milik saya |
| D119-S04 | Would you like me to go into more detail, or should I move on? | Apakah Anda ingin saya menjelaskan lebih detail, atau saya lanjut? | into=ke dalam; should=sebaiknya |
| D119-S05 | What are the next steps in the hiring process? | Apa langkah selanjutnya dalam proses rekrutmen? | next=berikutnya; hiring=perekrutan |
| D119-S06 | Thank you for your time. I really enjoyed our conversation. | Terima kasih atas waktunya. Saya sangat menikmati percakapan kita. | you=Anda; your=milik Anda; our=milik kita |
| D120-S01 | Before we dive in, here's a quick update from my side. | Sebelum kita masuk ke pembahasan, ini update singkat dari saya. | here's=ini dia (here is); my=milik saya; side=sisi |
| D120-S03 | What would you say is the biggest challenge for the team right now? | Menurut Anda, apa tantangan terbesar tim saat ini? | for=untuk / bagi; now=sekarang |
| D120-S04 | How do engineers here grow into senior roles? | Bagaimana engineer di sini berkembang menjadi senior? | do=(penanda pertanyaan, tidak diterjemahkan); roles=peran / posisi |
| D120-S05 | A hundred and twenty days ago, I couldn't do this in English. | Seratus dua puluh hari yang lalu, saya tidak bisa melakukan ini dalam bahasa Inggris. | hundred=ratus; and=(penghubung angka, tidak diterjemahkan); couldn't=tidak bisa (lampau, could not) |

## FIX_PATTERN

D02-P2, D13-P1, D13-P2, D14-P1, D14-P2, D15-P2, D21-P3, D21-P4, D22-P2, D22-P5, D23-P1, D24-P1, D25-P1, D29-P2, D30-P1, D30-P2, D31-P4, D32-P3, D32-P4, D33-P1, D33-P3, D33-P4, D34-P2, D35-P3, D35-P5, D36-P1, D36-P5, D37-P4, D38-P3, D38-P4, D39-P1, D39-P4, D40-P4, D40-P5, D41-P1, D41-P3, D41-P4, D42-P2, D42-P4, D42-P5, D43-P2, D43-P3, D43-P4, D43-P5, D44-P1, D45-P1, D46-P5, D49-P5, D50-P1, D52-P4, D52-P5, D54-P1, D54-P3, D54-P4, D55-P3, D57-P2, D59-P1, D60-P1, D65-P5, D71-P2, D75-P1, D75-P5, D76-P2, D77-P4, D79-P5, D83-P2, D85-P1, D87-P3, D89-P5, D90-P1, D91-P1, D94-P1, D100-P1, D101-P1, D102-P1, D103-P1, D104-P1, D105-P1, D106-P1, D107-P1, D108-P1, D109-P1, D111-P1, D112-P1, D114-P1, D116-P1, D117-P1, D118-P1, D119-P1, D120-P1
