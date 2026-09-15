E90.registerDay({
  day: 74,
  titleId: 'Masalah Performa',
  goal: 'Menjelaskan masalah performa: kapan lambat, angka yang naik, bottleneck, usulan perbaikan, dan hasilnya.',

  learn: [
    {
      id: 'D74-S01',
      english: "The dashboard is very slow when there's a lot of data.",
      pronunciation: 'de desh-bord iz ve-ri slou wen derz e lot ov dei-ta',
      translation: 'Dashboard-nya sangat lambat kalau datanya banyak.',
      words: [['The', '(penanda kata benda, tidak diterjemahkan)'], ['dashboard', 'dasbor / halaman ringkasan'], ['is', '(to be, tidak diterjemahkan)', 'be'], ['very', 'sangat'], ['slow', 'lambat'], ['when', 'saat / kalau'], ["there's", 'ada (there is)', 'be'], ['a', '(bagian dari "a lot of")'], ['lot', 'banyak (dalam "a lot of")'], ['of', '(bagian dari "a lot of")'], ['data', 'data']],
      pattern: 'D74-P1'
    },
    {
      id: 'D74-S02',
      english: 'The page takes more than ten seconds to load.',
      pronunciation: 'de peij teiks mor den ten se-kendz tu loud',
      translation: 'Halamannya butuh lebih dari sepuluh detik untuk terbuka.',
      words: [['The', '(penanda kata benda, tidak diterjemahkan)'], ['page', 'halaman'], ['takes', 'memakan (waktu); -s karena "the page"', 'take'], ['more', 'lebih'], ['than', 'dari / daripada'], ['ten', 'sepuluh'], ['seconds', 'detik (jamak)', 'second'], ['to', 'untuk (penanda kata kerja)'], ['load', 'dimuat / terbuka']],
      phrases: [['more than', 'lebih dari']],
      pattern: 'D22-P3'
    },
    {
      id: 'D74-S03',
      english: 'The response time went up after the last release.',
      pronunciation: 'de ri-spons taim went ap ef-ter de last ri-lis',
      translation: 'Waktu responsnya naik setelah rilis terakhir.',
      words: [['The', '(penanda kata benda, tidak diterjemahkan)'], ['response', 'response: jawaban dari server'], ['time', 'waktu'], ['went', 'naik (dalam "go up", lampau)', 'go'], ['up', 'naik (dalam "go up")'], ['after', 'setelah'], ['last', 'terakhir'], ['release', 'rilis']],
      phrases: [['response time', 'waktu yang dibutuhkan server untuk menjawab'], ['go up / go down', 'naik / turun']],
      pattern: 'D74-P2'
    },
    {
      id: 'D74-S04',
      english: "The server's CPU usage is too high.",
      pronunciation: 'de ser-verz si-pi-yu yu-sij iz tu hai',
      translation: 'Penggunaan CPU server-nya terlalu tinggi.',
      words: [['The', '(penanda kata benda, tidak diterjemahkan)'], ["server's", 'milik server', 'server'], ['CPU', 'CPU: prosesor komputer'], ['usage', 'penggunaan / pemakaian'], ['is', '(to be, tidak diterjemahkan)', 'be'], ['too', 'terlalu'], ['high', 'tinggi']],
      pattern: 'D74-P2'
    },
    {
      id: 'D74-S05',
      english: 'The bottleneck is the database query.',
      pronunciation: 'de bo-tel-nek iz de dei-te-beis kwi-ri',
      translation: 'Bottleneck-nya ada di query database.',
      words: [['The', '(penanda kata benda, tidak diterjemahkan)'], ['bottleneck', 'bottleneck: bagian paling lambat yang menghambat seluruh proses'], ['is', 'adalah', 'be'], ['database', 'database: tempat data disimpan'], ['query', 'query: perintah ke database (dibaca "kwi-ri")']],
      pattern: 'D74-P3'
    },
    {
      id: 'D74-S06',
      english: 'The API is making too many requests to the database.',
      pronunciation: 'di ei-pi-ai iz mei-king tu me-ni ri-kwests tu de dei-te-beis',
      translation: 'API-nya mengirim terlalu banyak request ke database.',
      words: [['The', '(penanda kata benda; "di" sebelum vokal)'], ['API', 'API: pintu komunikasi antar aplikasi'], ['is', '(kata bantu "is + -ing", tidak diterjemahkan)', 'be'], ['making', 'membuat / melakukan', 'make'], ['too', 'terlalu'], ['many', 'banyak'], ['requests', 'request: permintaan (jamak)', 'request'], ['to', 'ke'], ['database', 'database: tempat data disimpan']],
      pattern: 'D74-P3'
    },
    {
      id: 'D74-S07',
      english: 'We could cache the result to make it faster.',
      pronunciation: 'wi kud kesh de ri-zalt tu meik it fes-ter',
      translation: 'Kita bisa menyimpan hasilnya di cache supaya lebih cepat.',
      words: [['We', 'kita'], ['could', 'bisa (sebagai usulan)', 'can'], ['cache', 'cache: menyimpan sementara agar tidak dihitung ulang (dibaca "kesh")'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['result', 'hasil'], ['to', 'supaya / untuk'], ['make', 'membuat'], ['it', 'itu / -nya'], ['faster', 'lebih cepat', 'fast']],
      pattern: 'D74-P4'
    },
    {
      id: 'D74-S08',
      english: 'We reduced the page load time from eight seconds to two.',
      pronunciation: 'wi ri-dyust de peij loud taim from eit se-kendz tu tu',
      translation: 'Kami mengurangi waktu buka halaman dari delapan detik jadi dua.',
      words: [['We', 'kami'], ['reduced', 'mengurangi (lampau, -ed dibaca "t")', 'reduce'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['page', 'halaman'], ['load', 'memuat (dalam "load time")'], ['time', 'waktu'], ['from', 'dari'], ['eight', 'delapan'], ['seconds', 'detik (jamak)', 'second'], ['to', 'menjadi / ke'], ['two', 'dua']],
      phrases: [['load time', 'waktu yang dibutuhkan untuk membuka halaman']],
      pattern: 'D74-P5'
    },
    {
      id: 'D74-S09',
      english: 'The image files are too large.',
      pronunciation: 'di i-mij failz ar tu larj',
      translation: 'File gambarnya terlalu besar.',
      words: [['The', '(dibaca "di" sebelum vokal, tidak diterjemahkan)'], ['image', 'gambar'], ['files', 'berkas (jamak)', 'file'], ['are', '(to be, tidak diterjemahkan)', 'be'], ['too', 'terlalu'], ['large', 'besar']],
      pattern: 'D24-P3'
    },
    {
      id: 'D74-S10',
      english: "It's fast with a few users, but slow under heavy load.",
      pronunciation: 'its fest with e fyu yu-zerz, bat slou an-der he-vi loud',
      translation: 'Cepat kalau user-nya sedikit, tapi lambat saat bebannya tinggi.',
      words: [["It's", 'itu (it is)', 'be'], ['fast', 'cepat'], ['with', 'dengan / saat ada'], ['a', '(bagian dari "a few")'], ['few', 'sedikit / beberapa'], ['users', 'pengguna (jamak)', 'user'], ['but', 'tetapi'], ['slow', 'lambat'], ['under', 'di bawah (dalam "under load")'], ['heavy', 'berat / tinggi'], ['load', 'beban (jumlah pemakaian)']],
      phrases: [['under heavy load', 'saat banyak sekali request / pemakaian']],
      pattern: 'D74-P1'
    }
  ],

  review: [
    {
      id: 'D74-S11',
      english: 'The main disadvantage is that it uses more memory.',
      pronunciation: 'de mein dis-ed-ven-tij iz det it yu-ziz mor me-mo-ri',
      translation: 'Kekurangan utamanya, cara ini memakai lebih banyak memori.',
      words: [['The', '(penanda kata benda, tidak diterjemahkan)'], ['main', 'utama'], ['disadvantage', 'kekurangan'], ['is', 'adalah', 'be'], ['that', 'bahwa'], ['it', 'hal itu'], ['uses', 'memakai; -s karena "it"', 'use'], ['more', 'lebih banyak'], ['memory', 'memori (RAM)']],
      pattern: 'D57-P3'
    },
    {
      id: 'D74-S12',
      english: 'How long does the query take?',
      pronunciation: 'hau long daz de kwi-ri teik?',
      translation: 'Query-nya butuh waktu berapa lama?',
      words: [['How', 'seberapa'], ['long', 'lama'], ['does', '(kata bantu pertanyaan untuk it, tidak diterjemahkan)', 'do'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['query', 'query: perintah ke database'], ['take', 'memakan (waktu)']],
      pattern: 'D05-P4'
    },
    {
      id: 'D74-S13',
      english: 'Compared with last week, the page is much faster.',
      pronunciation: 'kem-perd with last wik, de peij iz mach fes-ter',
      translation: 'Dibandingkan minggu lalu, halamannya jauh lebih cepat.',
      words: [['Compared', 'dibandingkan', 'compare'], ['with', 'dengan'], ['last', 'lalu'], ['week', 'minggu'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['page', 'halaman'], ['is', '(to be, tidak diterjemahkan)', 'be'], ['much', 'jauh (lebih)'], ['faster', 'lebih cepat', 'fast']],
      pattern: 'D57-P4'
    },
    { ref: 'D65-S08' },
    { ref: 'D65-S07' }
  ],

  patterns: [
    {
      id: 'D74-P1',
      formula: 'BENDA + is slow when + KALIMAT',
      meaning: 'Describe when performance is bad.',
      examples: ['The search is slow when the user types quickly.', 'The app is slow in the morning.', 'It gets slower when there are many users.']
    },
    {
      id: 'D74-P2',
      formula: 'The response time went up  ·  BENDA + usage is too high',
      meaning: 'Describe performance numbers.',
      examples: ['The response time went up to three seconds.', 'Memory usage is too high.', 'The error rate went down after the fix.']
    },
    {
      id: 'D74-P3',
      formula: 'The bottleneck is + BENDA',
      meaning: 'Name the slowest part.',
      examples: ['The bottleneck is the image processing.', 'The main bottleneck is the external API.', 'We found the bottleneck in the report query.'],
      note: 'bottleneck (bo-tel-nek) = "leher botol": bagian paling sempit/lambat yang menahan seluruh proses.'
    },
    {
      id: 'D74-P4',
      formula: 'We could + KATA KERJA + to make it faster',
      meaning: 'Suggest a performance improvement.',
      examples: ['We could cache the data for five minutes.', 'We could load the images later.', 'We could add pagination to make the page faster.'],
      note: '"cache" dibaca "kesh" — bunyinya sama dengan "cash".'
    },
    {
      id: 'D74-P5',
      formula: 'We reduced + BENDA + from X to Y',
      meaning: 'Report the result of an improvement.',
      examples: ['We reduced the load time from five seconds to one second.', 'We reduced the database calls from fifty to three.', 'The page size went down by sixty percent.']
    }
  ],

  shadowing: ['D74-S01', 'D74-S03', 'D74-S05', 'D74-S07'],

  speaking: [
    { q: 'A page in your app is slow. Describe the problem.', qId: 'Satu halaman di aplikasimu lambat. Jelaskan masalahnya.', hint: 'The page is slow when ... It takes ... to load. The response time ...', example: 'The report page is slow when the user selects a whole year. It takes more than ten seconds to load, and the response time went up after the last release.' },
    { q: 'Where do you think the bottleneck is, and why?', qId: 'Menurutmu di mana bottleneck-nya, dan kenapa?', hint: 'I think the bottleneck is ... because ...', example: 'I think the bottleneck is the database query, because the API makes a separate query for every row.' },
    { q: 'Suggest two ways to make it faster.', qId: 'Usulkan dua cara supaya lebih cepat.', hint: 'We could ... Another option is ...', example: 'We could cache the result for ten minutes. Another option is to load the data page by page instead of all at once.' },
    { q: 'Report the result after you improved the performance.', qId: 'Laporkan hasil setelah performanya kamu perbaiki.', hint: 'We reduced ... from ... to ... Compared with ..., ...', example: 'We reduced the load time from eight seconds to two. Compared with last week, the CPU usage is also much lower.' }
  ],

  talk321: null
});
