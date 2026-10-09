E90.registerDay({
  day: 41,
  titleId: 'Setuju & Tidak Setuju dengan Sopan',
  goal: 'Menanggapi pendapat rekan: setuju dengan alasan, dan tidak setuju secara profesional.',

  learn: [
    {
      id: 'D41-S01',
      english: "That's a good point.",
      pronunciation: 'dets e gud point',
      translation: 'Poin yang bagus.',
      words: [["That's", 'itu (that is)', 'that'], ['a', 'sebuah (tidak diterjemahkan)'], ['good', 'bagus'], ['point', 'poin / pendapat']],
      pattern: 'D41-P1'
    },
    {
      id: 'D41-S02',
      english: 'I completely agree.',
      pronunciation: 'ai kem-plit-li e-gri',
      translation: 'Saya sepenuhnya setuju.',
      words: [['I', 'saya'], ['completely', 'sepenuhnya', 'complete'], ['agree', 'setuju']],
      pattern: 'D41-P2'
    },
    {
      id: 'D41-S03',
      english: 'I agree with you on that.',
      pronunciation: 'ai e-gri with yu on det',
      translation: 'Soal itu, saya setuju denganmu.',
      words: [['I', 'saya'], ['agree', 'setuju'], ['with', 'dengan'], ['you', 'kamu'], ['on', 'soal / dalam hal'], ['that', 'itu']],
      phrases: [['agree with someone on something', 'setuju dengan seseorang soal sesuatu']],
      pattern: 'D41-P2'
    },
    {
      id: 'D41-S04',
      english: "I'm not sure I agree.",
      pronunciation: 'aim not shur ai e-gri',
      translation: 'Saya kurang setuju.',
      words: [["I'm", 'saya (I am)', 'be'], ['not', 'tidak'], ['sure', 'yakin'], ['I', 'saya'], ['agree', 'setuju']],
      phrases: [["I'm not sure I agree", 'cara halus bilang tidak setuju']],
      pattern: 'D41-P3'
    },
    {
      id: 'D41-S05',
      english: 'I see your point, but I have a different idea.',
      pronunciation: 'ai si yor point, bat ai hev e di-fe-rent ai-di-e',
      translation: 'Saya paham maksudmu, tapi saya punya ide lain.',
      words: [['I', 'saya'], ['see', 'memahami (dalam "see your point")'], ['your', 'milikmu'], ['point', 'poin / maksud'], ['but', 'tetapi'], ['have', 'punya'], ['a', 'sebuah (tidak diterjemahkan)'], ['different', 'berbeda / lain'], ['idea', 'ide']],
      phrases: [['I see your point', 'saya paham maksudmu (bukan "melihat")']],
      pattern: 'D41-P3'
    },
    {
      id: 'D41-S06',
      english: 'I think we should consider the cost too.',
      pronunciation: 'ai thingk wi shud ken-si-der de kost tu',
      translation: 'Menurut saya kita juga perlu mempertimbangkan biayanya.',
      words: [['I', 'saya'], ['think', 'berpendapat'], ['we', 'kita'], ['should', 'sebaiknya'], ['consider', 'mempertimbangkan'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['cost', 'biaya'], ['too', 'juga']],
      pattern: 'D41-P4'
    },
    {
      id: 'D41-S07',
      english: "Maybe there's another way.",
      pronunciation: 'mei-bi derz e-na-der wei',
      translation: 'Mungkin ada cara lain.',
      words: [['Maybe', 'mungkin'], ["there's", 'ada (there is)', 'be'], ['another', 'lain / satu lagi'], ['way', 'cara']],
      pattern: 'D41-P4'
    },
    {
      id: 'D41-S08',
      english: "That's true, but it might take longer.",
      pronunciation: 'dets tru, bat it mait teik long-ger',
      translation: 'Itu benar, tapi mungkin akan lebih lama.',
      words: [["That's", 'itu (that is)', 'that'], ['true', 'benar'], ['but', 'tetapi'], ['it', 'hal itu'], ['might', 'mungkin (akan)'], ['take', 'memakan (waktu)'], ['longer', 'lebih lama', 'long']],
      pattern: 'D41-P3'
    },
    {
      id: 'D41-S09',
      english: 'I understand your concern.',
      pronunciation: 'ai an-der-stend yor ken-sern',
      translation: 'Saya paham kekhawatiranmu.',
      words: [['I', 'saya'], ['understand', 'paham'], ['your', 'milikmu / -mu'], ['concern', 'kekhawatiran']]
    },
    {
      id: 'D41-S10',
      english: "Let's look at both options.",
      pronunciation: 'lets luk et bouth op-shenz',
      translation: 'Ayo kita lihat kedua pilihannya.',
      words: [["Let's", 'mari kita (let us)', 'let'], ['look', 'melihat'], ['at', '(bagian dari "look at")'], ['both', 'kedua'], ['options', 'pilihan (jamak)', 'option']],
      phrases: [['look at', 'melihat / mempertimbangkan']],
      pattern: 'D39-P1'
    }
  ],

  review: [
    {
      id: 'D41-S11',
      english: "I don't think that's the best approach.",
      pronunciation: "ai dount thingk dets de best e-prouch",
      translation: 'Menurut saya itu bukan cara terbaik.',
      words: [['I', 'saya'], ["don't", 'tidak (do not)'], ['think', 'berpendapat'], ["that's", 'itu (that is)', 'that'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['best', 'terbaik', 'good'], ['approach', 'pendekatan / cara']],
      pattern: 'D27-P2'
    },
    {
      id: 'D41-S12',
      english: 'In my opinion, we need more testing.',
      pronunciation: 'in mai e-pi-nyen, wi nid mor tes-ting',
      translation: 'Menurut saya, kita perlu pengujian lebih banyak.',
      words: [['In', '(bagian dari "in my opinion")'], ['my', 'milik saya'], ['opinion', 'pendapat'], ['we', 'kita'], ['need', 'perlu'], ['more', 'lebih banyak'], ['testing', 'pengujian / testing', 'test']],
      pattern: 'D27-P1'
    },
    {
      id: 'D41-S13',
      english: 'Could you explain why?',
      pronunciation: 'kud yu eks-plein wai?',
      translation: 'Bisa jelaskan alasannya?',
      words: [['Could', 'bisakah (sopan)', 'can'], ['you', 'kamu'], ['explain', 'menjelaskan'], ['why', 'kenapa / alasannya']],
      pattern: 'D19-P2'
    },
    { ref: 'D27-S09' },
    { ref: 'D27-S08' }
  ],

  patterns: [
    {
      id: 'D41-P1',
      formula: "That's a good point / idea  ·  That makes sense",
      meaning: 'Menghargai pendapat orang lain',
      examples: ["That's a good idea.", "That's a fair point.", 'That makes a lot of sense.']
    },
    {
      id: 'D41-P2',
      formula: 'I (completely) agree + (with ORANG) (on + HAL)',
      meaning: 'Saya (sepenuhnya) setuju ...',
      examples: ['I agree with you on the timeline.', 'I completely agree with Tom.', "I agree, and I'd like to add one thing."]
    },
    {
      id: 'D41-P3',
      formula: "I see your point, but ...  ·  That's true, but ...  ·  I'm not sure I agree",
      meaning: 'Tidak setuju secara profesional',
      examples: ['I see your point, but the deadline is too close.', "That's true, but the budget is limited.", "I'm not sure I agree with that."],
      note: 'Hindari "You\'re wrong." Akui dulu pendapatnya ("I see your point"), lalu sampaikan alasanmu.'
    },
    {
      id: 'D41-P4',
      formula: "I think we should consider + BENDA  ·  Maybe there's another way",
      meaning: 'Mengarahkan diskusi ke pilihan lain',
      examples: ['I think we should consider the risks.', 'We should also consider the users.', "Maybe there's a faster way."]
    }
  ],

  shadowing: ['D41-S01', 'D41-S04', 'D41-S05', 'D41-S07'],

  speaking: [
    { q: 'A colleague says: "We should use a shared calendar for the team." You agree. Respond with a reason.', qId: 'Rekan bilang: "Tim kita sebaiknya pakai kalender bersama." Kamu setuju. Tanggapi dengan alasan.', hint: "That's a good point. I agree because ...", example: "That's a good point. I completely agree, because it will be easier to plan meetings." },
    { q: 'Your manager says: "Let\'s finish everything by tomorrow." You think it is not realistic. Disagree politely.', qId: 'Atasan bilang: "Ayo selesaikan semuanya besok." Menurutmu tidak realistis. Sampaikan dengan sopan.', hint: "I see your point, but ... Maybe there's another way ...", example: "I see your point, but I don't think we can finish everything by tomorrow. Maybe there's another way. We can finish the urgent tasks first." },
    { q: 'Someone says: "We don\'t need to test it. It\'s a small change." Say you are not sure and give a reason.', qId: 'Seseorang bilang: "Tidak perlu dites, perubahannya kecil." Sampaikan keraguanmu dan alasannya.', hint: "I'm not sure I agree. That's true, but ...", example: "I'm not sure I agree. That's true, but small changes can still cause problems." },
    { q: 'A teammate says: "I\'m worried the client won\'t like the design." Respond.', qId: 'Rekan tim bilang: "Aku khawatir klien tidak suka desainnya." Tanggapi.', hint: 'I understand your concern. I think we should ...', example: 'I understand your concern. I think we should show the client a draft first.' }
  ],

  talk321: null
});
