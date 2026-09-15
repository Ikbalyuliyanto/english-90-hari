E90.registerDay({
  day: 115,
  titleId: 'Technical Interview: Frontend & Integrasi',
  goal: 'Answer frontend and integration questions: UI state and loading → error handling → forms that do not lose data → API contracts → external systems (adapters, webhooks) → testing integrations → accessibility for real users like nurses and doctors.',

  learn: [
    {
      id: 'D115-S01',
      english: 'The frontend shows a loading state while it waits for the API.',
      pronunciation: 'de front-end shouz e lou-ding steit wail it weits for di ei-pi-ai',
      translation: 'Frontend menampilkan status loading selama menunggu API.',
      words: [['The', '(penanda kata benda, tidak diterjemahkan; dibaca "di" sebelum vokal)'], ['frontend', 'frontend (tampilan)'], ['shows', 'menampilkan', 'show'], ['a', 'sebuah (tidak diterjemahkan)'], ['loading', 'sedang memuat', 'load'], ['state', 'keadaan / status'], ['while', 'selama'], ['it', 'itu / frontend itu'], ['waits', 'menunggu', 'wait'], ['for', '(bagian dari "wait for": menunggu)'], ['API', 'API: jalur resmi antarsistem']],
      phrases: [['loading state', 'tampilan saat data sedang dimuat'], ['wait for', 'menunggu']],
      pattern: 'D115-P2'
    },
    {
      id: 'D115-S02',
      english: 'If the network fails, the form keeps the data, so nurses don\'t lose their work.',
      pronunciation: 'if de net-werk feilz, de form kips de dei-ta, sou ner-sez dount luz der werk',
      translation: 'Kalau jaringan gagal, form tetap menyimpan datanya, jadi perawat tidak kehilangan pekerjaannya.',
      words: [['If', 'kalau'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['network', 'jaringan'], ['fails', 'gagal', 'fail'], ['form', 'formulir / form'], ['keeps', 'menyimpan / menjaga', 'keep'], ['data', 'data'], ['so', 'jadi / supaya'], ['nurses', 'perawat', 'nurse'], ["don't", 'tidak (do not)', 'do'], ['lose', 'kehilangan'], ['their', 'milik mereka'], ['work', 'pekerjaan']],
      pattern: 'D115-P2'
    },
    {
      id: 'D115-S03',
      english: 'We agreed on a shared contract before building both sides.',
      pronunciation: 'wi e-grid on e sherd kon-trekt bi-for bil-ding bouth saidz',
      translation: 'Kami menyepakati kontrak bersama sebelum membangun kedua sisi.',
      words: [['We', 'kami'], ['agreed', 'sepakat (lampau)', 'agree'], ['on', '(bagian dari "agree on": menyepakati)'], ['a', 'sebuah (tidak diterjemahkan)'], ['shared', 'bersama', 'share'], ['contract', 'kontrak: kesepakatan format request dan response'], ['before', 'sebelum'], ['building', 'membangun', 'build'], ['both', 'kedua'], ['sides', 'sisi (frontend dan backend)', 'side']],
      pattern: 'D115-P3'
    },
    {
      id: 'D115-S04',
      english: 'For the insurance system, we built an adapter that converts their format to ours.',
      pronunciation: 'for di in-shu-rens sis-tem, wi bilt en e-dep-ter det ken-verts der for-met tu a-werz',
      translation: 'Untuk sistem asuransi, kami membuat adapter yang mengubah format mereka ke format kami.',
      words: [['For', 'untuk'], ['the', '(penanda kata benda, tidak diterjemahkan; dibaca "di" sebelum vokal)'], ['insurance', 'asuransi'], ['system', 'sistem'], ['we', 'kami'], ['built', 'membangun / membuat (lampau)', 'build'], ['an', 'sebuah (dipakai sebelum bunyi vokal)'], ['adapter', 'adapter: komponen penerjemah format antarsistem'], ['that', 'yang'], ['converts', 'mengubah / mengonversi', 'convert'], ['their', 'milik mereka'], ['format', 'format'], ['to', 'ke / menjadi'], ['ours', 'milik kami']],
      pattern: 'D115-P3'
    },
    {
      id: 'D115-S05',
      english: 'Webhooks let the lab system tell us when a result is ready.',
      pronunciation: 'web-huks let de lab sis-tem tel as wen e ri-zalt iz re-di',
      translation: 'Webhook membuat sistem lab bisa memberi tahu kami saat hasil sudah siap.',
      words: [['Webhooks', 'webhook: sistem lain memanggil URL kita saat ada kejadian', 'webhook'], ['let', 'membiarkan / memungkinkan'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['lab', 'laboratorium / lab'], ['system', 'sistem'], ['tell', 'memberi tahu'], ['us', 'kami'], ['when', 'ketika / saat'], ['a', 'sebuah (tidak diterjemahkan)'], ['result', 'hasil'], ['is', 'adalah', 'be'], ['ready', 'siap']],
      pattern: 'D115-P3'
    },
    {
      id: 'D115-S06',
      english: 'We test the integration with a mock server on staging.',
      pronunciation: 'wi test di in-te-grei-shen with e mok ser-ver on stei-jing',
      translation: 'Kami menguji integrasinya dengan mock server di staging.',
      words: [['We', 'kami'], ['test', 'menguji'], ['the', '(penanda kata benda, tidak diterjemahkan; dibaca "di" sebelum vokal)'], ['integration', 'integrasi / penghubungan antarsistem'], ['with', 'dengan'], ['a', 'sebuah (tidak diterjemahkan)'], ['mock', 'tiruan / mock'], ['server', 'server'], ['on', 'di'], ['staging', 'staging: lingkungan uji yang mirip production']],
      phrases: [['mock server', 'server tiruan untuk pengujian']],
      pattern: 'D115-P4'
    },
    {
      id: 'D115-S07',
      english: 'Accessibility matters because some staff use large fonts.',
      pronunciation: 'ek-se-si-bi-le-ti me-terz bi-koz sam staf yuz larj fonts',
      translation: 'Aksesibilitas itu penting karena sebagian staf memakai huruf besar.',
      words: [['Accessibility', 'aksesibilitas: mudah dipakai semua orang, termasuk yang punya keterbatasan'], ['matters', 'penting', 'matter'], ['because', 'karena'], ['some', 'sebagian'], ['staff', 'staf / petugas'], ['use', 'memakai'], ['large', 'besar'], ['fonts', 'huruf / font', 'font']],
      pattern: 'D115-P4'
    },
    {
      id: 'D115-S08',
      english: 'On slow hospital Wi-Fi, we load the most important data first.',
      pronunciation: 'on slou hos-pi-tel wai-fai, wi loud de moust im-por-tent dei-ta ferst',
      translation: 'Di Wi-Fi rumah sakit yang lambat, kami memuat data yang paling penting lebih dulu.',
      words: [['On', 'di / pada'], ['slow', 'lambat'], ['hospital', 'rumah sakit'], ['Wi-Fi', 'Wi-Fi (jaringan internet tanpa kabel)'], ['we', 'kami'], ['load', 'memuat'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['most', 'paling'], ['important', 'penting'], ['data', 'data'], ['first', 'terlebih dahulu']],
      pattern: 'D115-P2'
    }
  ],

  // Review: frontend, kontrak API, dan error handling dari Day 62–79.
  review: [
    { ref: 'D62-S08' },
    { ref: 'D62-S09' },
    { ref: 'D78-S01' },
    { ref: 'D78-S04' },
    { ref: 'D78-S06' },
    { ref: 'D78-S08' },
    { ref: 'D79-S02' }
  ],

  patterns: [
    {
      id: 'D115-P1',
      formula: 'UI state → API call → Errors → Contract → External systems → Testing → Accessibility',
      meaning: 'A checklist for frontend and integration questions.',
      examples: ['The frontend shows a loading state while it waits for the API.', "If the network fails, the form keeps the data, so nurses don't lose their work.", 'We agreed on a shared contract before building both sides.', 'We test the integration with a mock server on staging.'],
      note: 'Di rumah sakit, pengguna sering sibuk, memakai tablet, dan Wi-Fi tidak selalu stabil. Jawaban yang menyebut kondisi nyata ini terdengar lebih senior.'
    },
    {
      id: 'D115-P2',
      formula: 'The frontend + KATA KERJA while + KALIMAT  ·  If + KALIMAT, the form + KATA KERJA',
      meaning: 'Describe UI behavior in different states.',
      examples: ['The frontend disables the button while the request is running.', 'If the session expires, the form saves a draft first.', 'On slow Wi-Fi, we show the patient name before loading the full history.']
    },
    {
      id: 'D115-P3',
      formula: 'We built an adapter that converts + BENDA to + BENDA  ·  Webhooks let + SIAPA + KATA KERJA',
      meaning: 'Explain how you integrate with external systems.',
      examples: ['We built an adapter that converts the lab codes to our test codes.', 'Webhooks let the payment provider tell us when a payment succeeds.', 'We agreed on a shared contract with the pharmacy vendor.']
    },
    {
      id: 'D115-P4',
      formula: 'We test the integration with + BENDA  ·  BENDA matters because + KALIMAT',
      meaning: 'Talk about testing and quality.',
      examples: ['We test the integration with recorded responses from the real system.', 'Accessibility matters because doctors often use the system on small tablets.', 'Contract tests matter because the vendor changes their API without warning.']
    }
  ],

  shadowing: ['D115-S01', 'D115-S02', 'D115-S04', 'D115-S05'],

  speaking: [
    { q: 'How would you build a form for nurses to record vital signs on a tablet?', qId: 'Pikirkan kondisi nyata: tablet, sibuk, Wi-Fi lemah. Sebut validasi, state, dan penyimpanan draf.', hint: "I'd keep the form ... The frontend shows ... If the network fails, ... We validate ... Accessibility matters because ...", example: "I'd keep the form very short, with big buttons and number fields. The frontend validates the values right away, for example a temperature between 30 and 45 degrees. If the network fails, the form keeps the data, so nurses don't lose their work, and it sends the data when the connection is back. Accessibility matters because nurses use it quickly, often with gloves.", followUps: ['What happens if two nurses edit the same patient at the same time?', 'How would you test it with real nurses?'] },
    { q: 'How do you handle API errors in the frontend?', qId: 'Bedakan jenis error (validasi, auth, server, jaringan) dan apa yang dilihat user.', hint: 'It depends on the type of error. For validation errors, ... If the token is expired, ... For server errors, ... We log ...', example: "It depends on the type of error. For validation errors, we show the message next to the field. If the token is expired, we save a draft and ask the user to log in again. For server errors, we show a friendly message and a retry button. We log the full error with the correlation ID, so the backend team can find it." },
    { q: 'You need to integrate with an external insurance system that is slow and sometimes down. How would you design it?', qId: 'Adapter, timeout, retry, antrean/background, cache, fallback manual, monitoring.', hint: "We built an adapter that ... We set a timeout ... If it's down, ... We test the integration with ... We monitor ...", example: "I'd build an adapter that converts their format to ours, so the rest of the system doesn't depend on their API. We'd set a short timeout and process claims in the background with retries. If it's down, the cashier can continue and the claim is sent later. We test the integration with a mock server on staging, and we monitor the error rate.", followUps: ['What if the insurance system changes its format without telling you?', 'How would the cashier know that a claim failed?'] },
    { q: 'FRONTEND & INTEGRATION INTERVIEW ROUND: Explain how a lab result goes from the lab machine to the doctor\'s screen, covering the integration, the API, and the frontend. Then answer the follow-up questions one by one.', qId: 'Alur end-to-end: mesin lab → adapter/webhook → backend → API → frontend (loading, error, notifikasi).', hint: 'When the result is ready, ... Webhooks let ... The adapter converts ... The backend saves ... The frontend ... While it waits, ... If ..., ...', outline: [
      'Source: the lab machine and the lab system',
      'Integration: webhook or polling + adapter',
      'Backend: validate, save, and notify',
      'API: the endpoint and the response format',
      'Frontend: loading, new result notification, errors',
      'Testing: mock server and contract tests',
      'Real users: slow Wi-Fi, critical results, accessibility'
    ], followUps: [
      'How would the doctor know a critical result has arrived?',
      'What happens if the lab sends the same result twice?',
      'How would you test this without a real lab machine?',
      'What would you show if the result is only partly ready?'
    ], example: [
      'When a lab machine finishes a test, the result goes to the lab system. Webhooks let the lab system tell us when a result is ready: it calls an endpoint on our backend.',
      'For the lab system, we built an adapter that converts their test codes and units to ours. The backend validates the result, checks that the lab order exists, and saves it. If the value is critical, it also creates a notification.',
      'The doctor\'s screen calls the lab results endpoint for the patient. The API returns the results in JSON, with the status of each test.',
      'The frontend shows a loading state while it waits for the API. On slow hospital Wi-Fi, we load the most important data first, like the latest results, and the history later. Critical results are shown in red at the top, with a clear label, not only a color, because accessibility matters.',
      'We test the integration with a mock server on staging that sends example results, including wrong codes and duplicates.'
    ] }
  ],

  talk321: null
});
