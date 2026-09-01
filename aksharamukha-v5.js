/* Aksharamukha Web Plugin v5 - GENERATED FILE, do not edit directly.
 * Built by build-scripts/build-web-plugin-v5.js from:
 *   src/script-data.generated.js
 *   src/v5-plugin.js
 * Edit those sources (src/script-data.generated.js is itself
 * regenerated from ScriptMixin.js automatically), then re-run this
 * script.
 */
(function () {
"use strict";
// GENERATED FILE - do not edit by hand.
// Produced by build-scripts/build-web-plugin-data.js from
// aksharamukha-front/src/mixins/ScriptMixin.js. Re-run that script after
// editing ScriptMixin.js to pick up new scripts/options in the web plugin.

const ScriptData = {
  vowels: ['a', 'A', 'i', 'I', 'u', 'U', 'R', 'E', 'e', 'ai', 'O', 'o', 'au'],
  consonants: ['k', 'kh', 'g', 'gh', 'G', 'c', 'ch', 'j', 'jh', 'J', 'T', 'Th', 'D', 'Dh', 'N', 't', 'th', 'd', 'dh', 'n', 'p', 'ph', 'b', 'bh', 'm', 'y', 'r', 'l', 'v', 'z', 'S', 's', 'h', 'L', 'Z', 'r2', 'n2'],
  consonantsIndic: ['k', 'kh', 'g', 'gh', 'G', 'c', 'ch', 'j', 'jh', 'J', 'T', 'Th', 'D', 'Dh', 'N', 't', 'th', 'd', 'dh', 'n', 'p', 'ph', 'b', 'bh', 'm', 'y', 'r', 'l', 'v', 'z', 'S', 's', 'h', 'L'],
  ayogavahas: ['aM', 'aH'],
  vowelsAll: ['a', 'A', 'i', 'I', 'u', 'U', 'R', 'RR', 'lR', 'lRR', 'E', 'e', 'ai', 'O', 'o', 'au', 'aE', 'AE', 'aO', 'aM', 'aH', 'a~'],
  consonantsAll: ['k', 'kh', 'g', 'gh', 'G', 'c', 'ch', 'j', 'jh', 'J', 'T', 'Th', 'D', 'Dh', 'N', 't', 'th', 'd', 'dh', 'n', 'p', 'ph', 'b', 'bh', 'm', 'y', 'r', 'l', 'v', 'z', 'S', 's', 'h', 'Z', 'L', 'r2', 'n2', 'q', 'qh', 'g2', 'z2', 'r3', 'r3h', 'f', 'Y'],
  consontantsSpecial: ['L', 'Z', 'r2', 'n2'],
  consonantsSinhala: ['n*g', 'n*j', 'n*D', 'n*d', 'm*b'],
  ayogavahasAll: ['~', 'M', 'H'],
  transliterationScripts: ['IASTPali', 'RomanReadable', 'Aksharaa', 'ISO', 'IAST', 'HK', 'Titus', 'Itrans', 'Velthuis', 'WX', 'IPA', 'RussianCyrillic', 'IASTPali', 'ISOPali', 'RomanLoC'],
  romanNumeralScripts: ['Tamil', 'Gurmukhi', 'Malayalam', 'Telugu', 'Sinhala'],
  romanPunctscripts: ['Tamil', 'Kannada', 'Malayalam', 'Telugu', 'Gujarati', 'TamilExtended', 'Sinhala'],
  locScripts: ['Burmese', 'Shan', 'Khmer', 'KhuenTham', 'TaiTham', 'LaoTham', 'LueTham', 'Kannada', 'Tamil', 'Malayalam', 'Sinhala', 'Telugu', 'Kannada', 'Oriya', 'Assamese', 'Bengali', 'Gujarati', 'Devanagari', 'Balinese', 'Javanese', 'BatakKaro', 'BatakManda', 'BatakPakpak', 'BatakSima', 'BatakToba', 'Gurmukhi', 'Tibetan', 'Limbu'],
  vedicScripts: ['Assamese', 'Bengali', 'Devanagari', 'Gujarati', 'Kannada', 'Malayalam', 'Oriya', 'Gurmukhi', 'Tamil', 'Telugu', 'TamilExtended', 'Grantha'],
  vocalized: ['Hebr', 'Syrj', 'Syrn', 'Arab-Fa', 'Latn', 'Type', 'Arab', 'Arab-Ur', 'Thaa'],
  preserveSourceExampleOut: {
    'Hiragana': 'hulasi → ほぅら゚すぃ not  ふらし',
    'Latn': 'ʼiylwn māsk → ˀîylwn mʾsk',
    'Arab': 'g v p → ڨ ڤ پ',
    'Katakana': 'hulasi → ホゥラ゚スィ not  フラシ',
    'WarangCiti': 'akṣaramukha → <span class="warangciti">𑣁𑣌‍𑣝𑣜𑣖𑣃𑣌‍𑣙</span> not <span class="warangciti">𑣁𑣌𑣞𑣜𑣖𑣃𑣌</span>',
    'Modi': 'ki kī ku kū → <span class="modi">𑘎𑘱 𑘎𑘲 𑘎𑘳 𑘎𑘴</span> not <span class="modi">𑘎𑘲 𑘎𑘲 𑘎𑘳 𑘎𑘳</span>',
    'Multani': 'aśoka →<span class="multani">𑊀𑊥𑊂𑊄</span> not <span class="multani">𑊀𑊥𑊄</span>',
    'Ahom': 'ahoṃ →<span class="ahom">𑜒𑜑𑜦𑜪𑜡</span> not <span class="ahom">𑜒𑜑𑜪𑜨</span>',
    'Khojki': 'ahoṃ →<span class="khojki">𑜒𑜑𑜦𑜪𑜡</span> not <span class="ahom">𑜒𑜑𑜪𑜨</span>',
    'Sundanese': 'ṛ ḷ bha → <ahoṃ class="sundanese">ᮻ ᮼ ᮽ</span> not <span class="sundanese">ᮛᮩ ᮜᮩ ᮘ</span>',
    'Avestan': 'khyat  → <span class="avestan">𐬑𐬌𐬌𐬀𐬙</span> not <span class="avestan">𐬒𐬌𐬌𐬀𐬝</span>',
    'Thaana': 'maṇi → <span class="thaana">މަޱި</span> not <span class="thaana">މަނި</span>',
    'Tibetan': 'bhagavat → <span class="tibetan">བྷགཝཏ྄</span> not <span class="tibetan">བྷགབཏ</span>',
    'Saurashtra': 'simha → <span class="saurashtra">ꢱꢶꢪ꣄ꢲ</span> not <span class="saurashtra">ꢱꢶꢪꢴ</span>',
    'Gurmukhi': 'anna aṃta hām̐ → <span class="gurmukhi">ਅੱਨ ਅਂਤ ਹਾਂ</span> not <span class="gurmukhi">ਅੰਨ ਅੰਤ ਹਾਁ</span><br/> kṛpā → <span class="sinhala">ਕ੍ਰੁʼਪਾ</span> not <span class="sinhala">ਕ੍ਰੁਪਾ</span>',
    'Chakma': 'yayāti → <span class="chakma">𑄡𑄧𑄡𑄖𑄨</span> not <span class="chakma">𑄡𑄧𑄠𑄖𑄨</span>',
    'Gujarati': 'kŏl → <span class="gujarati">કો˘લ્</span> not <span class="gujarati">કોલ્</span>',
    'Oriya': 'vināyaka → <span class="oriya">ୱିନାଯକ</span> not <span class="oriya">ବିନାୟକ</span><br/>kŏlæṭ → <span class="oriya">କୋ˘ଲେʼଟ୍</span> not <span class="oriya">କୋଲେଟ୍</span>',
    'Assamese': 'vināyaka → <span class="assamese">ৱিনাযক</span> not <span class="assamese">ৱিনায়ক</span><br/>kŏlæṭ → <span class="assamese">কো˘লেʼট্</span> not <span class="assamese">কোলেট্</span><br/>aṃkha kaṃpa → <span class="assamese">অংখ কংপ</span> not <span class="assamese">অঙ্খ কম্প</span>',
    'Bengali': 'vināyaka → <span class="bengali">ভ়িনাযক</span> not <span class="bengali">বিনায়ক</span><br/>udvega udbodhana → <span class="bengali">উদ্বেগ উদ্‌বোধন</span> not <span class="bengali">উদ্বেগ উদ্বোধন</span><br/>kŏlæṭ → <span class="bengali">কো˘লেʼট্</span> not <span class="bengali">কোলেট্</span><br/>aṃkha kṃmpa → <span class="assamese">অংখ কংপ</span> not <span class="assamese">অঙ্খ কম্প</span>',
    'Limbu': 'jha ña ṣa ṃ → <span class="limbu">ᤉ ᤊ ᤚ ᤲ</span> not <span class="limbu">ᤈ ᤏ ᤙ ᤱ</span>',
    'MeeteiMayek': 'kūṭākṣara → <span class="meeteimayek">ꯀꫬꫤꯥꯛꫪꯔ</span> not <span class="meeteimayek">ꯀꯨꯇꯥꯛꯁꯔ</span>',
    'Tamil': 'maṃtana → <span class="tamil">மம்ʼதந</span> not <span class="tamil">மந்தன</span>',
    'Malayalam': 'daṃtam kaṉi → <span class="malayalam">ദംതമ് കഩി</span> not <span class="malayalam">ദന്തം കനി</span> <br/> kæpôḍ → <span class="malayalam">കെʼപാʼഡ്</span> not <span class="malayalam">കെപാഡ്</span>',
    'Telugu': 'khaṇḍam → <span class="telugu">ఖణ్డమ్</span> not <span class="telugu">ఖండం</span><br/>āzādī → <span class="telugunukta">ఆజ఼ాదీ</span> not <span class="telugu">ఆజాదీ</span><br/> kæpôḍ → <span class="telugu">కె॒​పొ॒​డ్</span> not <span class="telugu">కెపాడ్</span>',
    'Kannada': 'khaṇḍam → <span class="kannada">ಖಣ್ಡಮ್</span> not <span class="kannada">ಖಂಡಂ</span> <br/> kæpôḍ → <span class="kannada">ಕೆʼಪಾʼಡ್</span> not <span class="kannada">ಕೆಪಾಡ್</span>',
    'Devanagari': 'san̆dahan → <span class="devanagari">सँˆदहन्</span> not <span class="devanagari">सँदहन्</span>',
    'Sinhala': 'kôṭ hām̐ → <span class="sinhala">කාʼට් හූඁ</span> not <span class="sinhala">කාට් හූං</span>',
    'Hebrew': 'svāhā → <span class="sinhala">סְוָהָ</span> not <span class="sinhala">סְבָהָה</span>',
    'Nandinagari': 'saṅgha → <span class="nandinagari">𑧍𑦲𑧠𑦱</span> not <span class="nandinagari">𑧍𑧞𑦱</span>'
  },
  preserveSourceExampleIn: {},
  preOptionsIndic: {
    'Syrj': [{
      label: 'Lack of vowel signs as pure consonant <br/> <small> lâylēyn  ←  <span class="syrj">ܠܐܲܝܠܹܝܢ</span>',
      value: 'insertViramaSyriac'
    }],
    'Syrn': [{
      label: 'Lack of vowel signs as pure consonant <br/> <small> lâylēyn  ←  <span class="syrn">ܠܐܲܝܠܹܝܢ</span>',
      value: 'insertViramaSyriac'
    }],
    'Hebrew': [{
      label: 'Treat all shvas as <i>shva nakh</i>',
      value: 'shvanakhall'
    }, {
      label: '<i>Holam</i> denotes long /o/',
      value: 'holamlong'
    }, {
      label: 'Vowels are not marked<br/><small></small>',
      value: 'novowelshebrewIndic'
    }],
    'Armi': [{
      label: 'Aleph as mater lectionis<br/><small> kʾ → kā</small>',
      value: 'AlephMaterLectionis'
    }],
    'Elym': [{
      label: 'Aleph as mater lectionis<br/><small> kʾ → kā</small>',
      value: 'AlephMaterLectionis'
    }],
    'Ethi': [{
      label: 'Aleph as mater lectionis<br/><small> kʾ → kā</small>',
      value: 'AlephMaterLectionis'
    }],
    'Hatr': [{
      label: 'Aleph as mater lectionis<br/><small> kʾ → kā</small>',
      value: 'AlephMaterLectionis'
    }],
    'Phli': [{
      label: 'Aleph as mater lectionis<br/><small> kʾ → kā</small>',
      value: 'AlephMaterLectionis'
    }],
    'Prti': [{
      label: 'Aleph as mater lectionis<br/><small> kʾ → kā</small>',
      value: 'AlephMaterLectionis'
    }],
    'Mani': [{
      label: 'Aleph as mater lectionis<br/><small> kʾ → kā</small>',
      value: 'AlephMaterLectionis'
    }],
    'Nbat': [{
      label: 'Aleph as mater lectionis<br/><small> kʾ → kā</small>',
      value: 'AlephMaterLectionis'
    }],
    'Narb': [{
      label: 'Aleph as mater lectionis<br/><small> kʾ → kā</small>',
      value: 'AlephMaterLectionis'
    }],
    'Sogo': [{
      label: 'Aleph as mater lectionis<br/><small> kʾ → kā</small>',
      value: 'AlephMaterLectionis'
    }],
    'Sarb': [{
      label: 'Aleph as mater lectionis<br/><small> kʾ → kā</small>',
      value: 'AlephMaterLectionis'
    }],
    'Palm': [{
      label: 'Aleph as mater lectionis<br/><small> kʾ → kā</small>',
      value: 'AlephMaterLectionis'
    }],
    'Phnx': [{
      label: 'Aleph as mater lectionis<br/><small> kʾ → kā</small>',
      value: 'AlephMaterLectionis'
    }],
    'Phlp': [{
      label: 'Aleph as mater lectionis<br/><small> kʾ → kā</small>',
      value: 'AlephMaterLectionis'
    }],
    'Samr': [{
      label: 'Aleph as mater lectionis<br/><small> kʾ → kā</small>',
      value: 'AlephMaterLectionis'
    }],
    'Sogd': [{
      label: 'Aleph as mater lectionis<br/><small> kʾ → kā</small>',
      value: 'AlephMaterLectionis'
    }],
    'Syre': [{
      label: 'Aleph as mater lectionis<br/><small> kʾ → kā</small>',
      value: 'AlephMaterLectionis'
    }],
    'Ugar': [{
      label: 'Aleph as mater lectionis<br/><small> kʾ → kā</small>',
      value: 'AlephMaterLectionis'
    }]
  },
  preOptionSemiticAllIndic: [{
    label: 'Aleph as mater lectionis<br/><small> kʾ → kā</small>',
    value: 'AlephMaterLectionis'
  }],
  preOptionsSemitic: {
    'Hebrew': [{
      label: 'Nikkuds not shown<br/><small>ב פ כ → k p b not v f ḵ</small>',
      value: 'novowelshebrewSemitic'
    }]
  },
  preOptionsGroup: {
    'DivesAkuru': [{
      label: '/y/ as vowel carrier<br/><small><span class="divesakuru">𑤀 𑤁 𑤂 𑤃 → 𑤥 𑤥𑤰 𑤥𑤱 𑤥𑤲</span></small>',
      value: 'DivesAkuruAlternateIndVowels'
    }],
    'Kawi': [{
      label: 'Repha as word-final /r/<br/><small><span class="kawi">𑼂𑼤𑼪 → dharma </span></small>',
      value: 'KawiMoveRepha'
    }],
    'Javanese': [{
      label: 'Moved repha<br/><small><span class="javanese">ꦣꦩꦂ → dharma </span></small>',
      value: 'JavaneseMoveRepha'
    }],
    'Balinese': [{
      label: 'Moved repha<br/><small><span class="balinese">ᬥᬫᬃ → dharma </span></small>',
      value: 'BalineseMoveRepha'
    }],
    'Tamil': [{
      label: 'Transcribe Tamil (Standard)<br/><small><span class="tamil">மதம், பேசு</span> → madam, pēsu</small>',
      value: 'TamilTranscribe'
    }, {
      label: 'Transcribe Tamil (Dialectal)<br/><small><span class="tamil">மதம், பேசு</span> → madam, pēśu</small>',
      value: 'TamilTranscribeDialect'
    }, {
      label: '<span class="tamil">க2 க3 க4 → க² க³ க⁴</span>',
      value: 'TamilNumeralSub'
    }],
    'Itrans': [{
      label: 'E/O for long, e/o for short',
      value: 'swapEeItrans' // { label: 'LLi LLI → L_Li L_LI', value: 'ItransLL' }

    }],
    'Burmese': [{
      label: 'Segment Burmese Syllables <br/><small><span class="burmese">လေထဲပျော် → လေ ထဲ ပျော်</span>',
      value: 'segmentBurmeseSyllables'
    }],
    'Khmer': [{
      label: 'Segment Khmer Words <br/><small><span class="burmese">មនុស្សទាំងអស់ → មនុស្ស ទាំងអស់</span>',
      value: 'KhmerWordSplit'
    }],
    'Shan': [{
      label: 'Segment Shan Syllables <br/><small><span class="burmese">လႅင်းမုၼ်းမႂ်ႇ → လႅင်း မုၼ်း မႂ်ႇ</span>',
      value: 'segmentShanSyllables'
    }],
    'ISO': [{
      label: 'Treat e/o as long',
      value: 'longEOISO'
    }, {
      label: '<i>tat tvam asi</i> → <i>tattvamasi</i>',
      value: 'joinVowelConsISO'
    }],
    'IAST': [{
      label: '<i>tat tvam asi</i> → <i>tattvamasi</i>',
      value: 'joinVowelConsIAST'
    }, {
      label: 'Vedic retroflex /l/ <br/><small><span class="iast">agnimīḻe → agnimīl̤e </span>',
      value: 'RomanLoCSLaDotLaUnderscore'
    }],
    'Hiragana': [{
      label: '/ou/ and /ei/ dipthongs not /ē/ and /ō/',
      value: 'eiaudipthongs'
    }, {
      label: '/w/ as /v̈/',
      value: 'wasvnukta'
    }],
    'Katakana': [{
      label: '/ou/ and /ei/ dipthongs not /ē/ and /ō/',
      value: 'eiaudipthongs'
    }, {
      label: '/w/ as /v̈/',
      value: 'wasvnukta'
    }],
    'HK': [{
      label: 'E/O for long, e/o for short',
      value: 'swapEe'
    }],
    'Velthuis': [{
      label: 'E/O for long, e/o for short',
      value: 'swapEe'
    }],
    'Limbu': [{
      label: 'SA-I for vowel length',
      value: 'LimbuSpellingSaI'
    }],
    'Thai': [{
      label: 'Thai orthography text <br/><small><div>e.g. พุทธะ</div></small>',
      value: 'ThaiOrthography'
    }, {
      label: 'Sajjhāya orthography text <br/><small><div>e.g. พุท์ธ</div></small>',
      value: 'ThaiSajjhayaOrthography'
    }, {
      label: 'Nativized Sajjhāya text <br/><small><div>e.g. พุท์ธะ</div></small>',
      value: 'ThaiSajjhayawithA'
    }, {
      label: 'Thai Phonetic text<br/><small><div>e.g. ตะต͜ระ ราจ̥ะ</div></small>',
      value: 'ThaiPhonetic'
    }],
    'LaoPali': [{
      label: 'Lao orthography text<small><div class="laopali">e.g. ພຸທຘະ</div></small>',
      value: 'LaoTranscription'
    }, {
      label: 'Sajjhāya orthography text <br/><small><div class="laopali">e.g. ພຸທ໌ຘ</div></small>',
      value: 'LaoSajhayaOrthography'
    }, {
      label: 'Nativized Sajjhāya text <br/><small><div class="laopali">e.g. ພຸທ໌ຘະ</div></small>',
      value: 'LaoSajhayaOrthographywithA'
    }, {
      label: 'Lao Phonetic text<br/><small><div class="laopali">e.g. ບຸດຘະຕ͜ວະ</div></small>',
      value: 'LaoPhonetic'
    }],
    'TaiTham': [{
      label: 'Segment Tham Syllables <small><div class="q-mt-sm"></div></small>',
      value: 'segmentThamSyllabes'
    }],
    'KhuenTham': [{
      label: 'Segment Tham Syllables <small><div class="q-mt-sm"></div></small>',
      value: 'segmentThamSyllabes'
    }, {
      label: 'Ra-Haam as consontal sign /r/ <small><div class="q-mt-sm"><span class="khuentham">ᨠ᩺ ᨠ᩼</span>→kar k</div></small>',
      value: 'KhuenRaHaamKaren'
    }],
    'LaoTham': [{
      label: 'Segment Tham Syllables <small><div class="q-mt-sm"></div></small>',
      value: 'segmentThamSyllabes'
    }],
    'LueTham': [{
      label: 'Segment Tham Syllables <small><div class="q-mt-sm"></div></small>',
      value: 'segmentThamSyllabes'
    }],
    'Devanagari': [{
      label: 'Schwa deletion (Hindi) <small><div class="q-mt-sm">राम → rām, सबसे → sabse</div></small>',
      value: 'RemoveSchwaHindi'
    }, {
      label: 'Anusvara and Chandrabindu equivalent',
      value: 'AnuChandraEqDeva' // { label: 'Retain Devanagari Dandas', value: 'RetainDevangariDanda' }

    }],
    'Gujarati': [{
      label: 'Schwa deletion (Only word-final) <br/><small><div class="q-mt-sm">राम → rām</div></small>',
      value: 'SchwaFinalGujarati'
    }],
    'Assamese': [{
      label: 'Schwa deletion (Only word-final) <br/><small><div class="q-mt-sm">রাম → rām</div></small>',
      value: 'SchwaFinalBengali'
    }, {
      label: 'য → ẏa & য় → ya',
      value: 'BengaliSwitchYaYYa'
    }, {
      label: 'Show Khanda TA <br/><small><div class="q-mt-sm">উৎকল → utˍkala</div></small>',
      value: 'ShowKhandaTa'
    }],
    'Oriya': [{
      label: 'ବ → va',
      value: 'OriyaTargetVa'
    }, {
      label: 'ସ୍ବ ଦ୍ବ → sva dva',
      value: 'OriyaSubojinedVa'
    }],
    'Bengali': [{
      label: 'Schwa deletion (Only word-final) <br/><small><div class="q-mt-sm">রাম → rām</div></small>',
      value: 'SchwaFinalBengali'
    }, {
      label: 'য → ẏa & য় → ya',
      value: 'BengaliSwitchYaYYa'
    }, {
      label: 'ব → va',
      value: 'BengaliTargetVa'
    }, {
      label: 'স্ব দ্ব → sva dva',
      value: 'BengaliSubojinedVa'
    }, {
      label: 'Show Khanda TA <br/><small><div class="q-mt-sm">উৎকল → utˍkala</div></small>',
      value: 'ShowKhandaTa'
    }],
    'Gurmukhi': [{
      label: 'Schwa deletion (Only word-final) <br/><small><div class="q-mt-sm">ਰਾਮ → rām</div</small>>',
      value: 'SchwaFinalGurmukhi'
    }],
    'WarangCiti': [{
      label: 'Schwa deletion (Only word-final) <br/><small><div class="q-mt-sm"><span class="warangciti">𑣜𑣁𑣖</span> → rām</div></small>',
      value: 'SchwaFinalWarangCiti'
    }],
    'Grantha': [{
      label: 'Prakrit orthography<br/><small><div class="grantha">e.g. 𑌬𑍁𑌂𑌧𑌀</div></small>'
    }, {
      label: 'E-Grantamil encoding',
      value: 'egrantamil'
    }],
    'Sinhala': [{
      label: 'Sanskrit/Pali orthography text<br/><small><span class="sinhala">e.g. නමො භගවතෙ</span></small>',
      value: 'SinhalaPali'
    }],
    'Malayalam': [{
      label: 'Show Chillus <br/><small><span class="malayalam">ധർമൻ</span> → <span class="iast">/dharˍmanˍ/ not /dharman/</span></small>',
      value: 'ShowChillus'
    }, {
      label: 'Prakrit orthography text<br/><small><div>e.g.<span class="malayalam">ബുംധഀ</span></div></small>',
      value: 'MalayalamPrakrit'
    }, {
      label: 'Transcribe <i>Samvrutokara</i> (extra-short-u)<br/><small><div> e.g. <span class="malayalam">അവൻ അവന്</span>‌ → <span class="iast">avan avanŭ</span></div></small>',
      value: 'MalayalamHalfu'
    }, {
      label: 'Transcribe Malayalam<div><small> e.g. <span class="malayalam"> കൊടുങ്കാട്</span> → kŏḍuṅgāḍŭ</div></small>',
      value: 'MalayalamTranscribe'
    }],
    'Siddham': [{
      label: 'Devanagari-based Siddham font',
      value: 'siddhammukta'
    }],
    'RussianCyrillic': [{
      label: 'Pali Text',
      value: 'CyrillicPali'
    }],
    'Urdu': [{
      label: 'Short vowels not shown',
      value: 'UrduShortNotShown'
    }],
    'Arab': [{
      label: '/ج/ as /g/',
      value: 'ArabicGimelJa'
    }, {
      label: 'Assume /Sukun/ at end of word <br/> <small>ʾl×muḥīṭ ʾl×hin×diy×꞉ ← الْمُحِيط الْهِنْدِيّ',
      value: 'removeFinalSchwaArab'
    }],
    'Arab-Fa': [{
      label: 'Assume /Jazm/ at end of word <br/> <small>ʾbut\u033D ←  بُت',
      value: 'removeFinalSchwaArab'
    }],
    'Sogd': [{
      label: 'Disambiguate <span class="sogd">𐽀</span> (Resh-Ayin) as [r-ʿ]',
      value: 'SogdReshAyin'
    }],
    'Sogo': [{
      label: 'Disambiguate <span class="sogo">𐼘</span> (Resh-Ayin-Daleth) as [r-ʿ-d]',
      value: 'SogoReshAyinDaleth'
    }],
    'Phlp': [{
      label: 'Disambiguate <span class="phlp">𐮋</span> (Mem-Quoph) as [m-q]',
      value: 'PhlpMemQoph'
    }, {
      label: 'Disambiguate <span class="phlp">𐮅</span> (Waw-Ayin-Resh) as [w-ʿ-r]',
      value: 'PhlpWawAyinResh'
    }],
    'Phli': [{
      label: 'Disambiguate <span class="phli">𐭥</span> (Waw-Ayin-Resh) as [w-ʿ-r]',
      value: 'PhliWawAyinResh'
    }],
    'Hatr': [{
      label: 'Disambiguate <span class="hatr">𐣣</span> (Daleth-Resh) as [d-r]',
      value: 'HatrDalethResh'
    }],
    'Shahmukhi': [{
      label: 'Short vowels not shown',
      value: 'UrduShortNotShown'
    }],
    'Takri': [{
      label: 'Medieval Takri orthography text<br/><small>Convert <span class="takri">𑚋</span> as /kha/</small>',
      value: 'TakriArchaicKha'
    }],
    'Chakma': [{
      label: 'Pali orthography text<br/><small> e.g. <span class="chakma">𑄖𑄗𑄂𑄉𑄖</span></small>',
      value: 'ChakmaPali'
    }]
  },
  preOptionsGroupSpecific: {
    'DevanagariLimbu': [{
      label: 'Limbu Devanagari conventions<br/><small><span class="limbudev">e.g. ए़ ओ़ ए़ः के़ को़ के़ः</span></small>',
      value: 'LimbuDevanagariConvention'
    }],
    'TamilSaurashtra': [{
      label: 'Convert : as Haaru <small><br/><span class="tamil">நீ:</span> → </small><span class="saurashtra">ꢥꢴꢷ</span>',
      value: 'SaurastraHaaruColonTamil'
    }],
    'RomanLoCDevanagari': [{
      label: 'Use Hindi/Marathi Mapping',
      value: 'HindiMarathiRomanLoCFix' // add message that by default Sanskrit mapping is used

    }]
  },
  postOptionsGroupSpecific: {
    'RomanLoCDevanagari': [{
      label: 'Use Hindi/Marathi Mapping',
      value: 'HindiMarathiRomanLoCFix' // add message that by default Sanskrit mapping is used

    }],
    'TaiThamRomanLoC': [{
      label: 'Pali /o/ <br/><small><span class="taitham">ᨠᩰ</span> → <span class="taitham">ᨠᩮᩣ</span></small>',
      value: 'UseAlternateo2'
    }],
    'RomanLoCLaoTham': [{
      label: 'Pali /o/ <br/><small><span class="laotham">ᨠᩰ</span> → <span class="laotham">ᨠᩮᩣ</span></small>',
      value: 'UseAlternateo2'
    }],
    'RomanLoCKhuenTham': [{
      label: 'Pali /o/ <br/><small><span class="khuentham">ᨠᩰ</span> → <span class="khuentham">ᨠᩮᩣ</span></small>',
      value: 'UseAlternateo2'
    }],
    'DevanagariLimbu': [{
      label: 'Limbu Devanagari conventions<small><br/><span class="limbu">ᤀᤧ ᤀᤨ ᤀᤧ᤺ ᤁᤧ ᤁᤨ ᤁᤧ᤺</span> → <span class="limbudev">ए़ ओ़ ए़ः के़ को़ के़ः</span></small>',
      value: 'LimbuDevanagariConvention'
    }],
    'BurmeseRomanLoC': [{
      label: 'Join syllables<small><br/><span>le thai pyo‘ </span> → <span class="burmese">လေထဲပျော်</span></small>',
      value: 'removeSegmentSpacesBurmese'
    }],
    'ShanRomanLoC': [{
      label: 'Join syllables<small><br/><span>lèṅʻʺ munʻʺ mài̢</span> → <span class="burmese">လႅင်းမုၼ်းမႂ်ႇ</span></small>',
      value: 'removeSegmentSpacesBurmese'
    }],
    'TamilSaurashtra': [{
      label: 'Convert Saurashtra Haaru as :<small><br/><span class="saurashtra">ꢥꢴꢷ</span> → <span class="tamil">நீ:</span></small>',
      value: 'SaurastraHaaruColon'
    }],
    'IASTUrdu': [{
      label: 'Remove all inherent /a/ <small><br/><span class="urdu">ہندوستان</span> → /hndvstān/ not /hanadavasatāna/',
      value: 'urduRemoveInherent'
    }],
    'ISOUrdu': [{
      label: 'Remove all inherent /a/ <small><br/><span class="urdu">ہندوستان</span> → /hndvstān/ not /hanadavasatāna/',
      value: 'urduRemoveInherent'
    }],
    'IASTShahmukhi': [{
      label: 'Remove all inherent /a/ <small><br/><span class="urdu">ہندوستان</span> → /hndvstān/ not /hanadavasatāna/',
      value: 'urduRemoveInherent'
    }],
    'ISOShahmukhi': [{
      label: 'Remove all inherent /a/ <small><br/><span class="urdu">ہندوستان</span> → /hndvstān/ not /hanadavasatāna/',
      value: 'urduRemoveInherent'
    }],
    'IASTBengali': [{
      label: 'inherent /a/ as /ô/',
      value: 'inherentAO'
    }],
    'ISOBengali': [{
      label: 'inherent /a/ as /ô/',
      value: 'inherentAO'
    }],
    'IASTOriya': [{
      label: 'inherent /a/ as /ô/',
      value: 'inherentAO'
    }],
    'ISOOriya': [{
      label: 'inherent /a/ as /ô/',
      value: 'inherentAO'
    }],
    'IASTMalayalam': [{
      label: 'റ്റ (ṟṟ) ന്റ (nṟa) → ṯṯ nṯ',
      value: 'MalayalamTTNTA'
    }],
    'ISOMalayalam': [{
      label: 'റ്റ (ṟṟ) ന്റ (nṟa) → ṯṯ nṯ',
      value: 'MalayalamTTNTA'
    }],
    'LatnSyrj': [{
      label: 'Syriac convention <small><br/> v ġ ḫ f → ḇ ḡ ḵ p̄',
      value: 'syriacRoman'
    }],
    'LatnSyrn': [{
      label: 'Syriac convention <small><br/> v ġ ḫ f → ḇ ḡ ḵ p̄',
      value: 'syriacRoman'
    }],
    'RomanLoCBalinese': [{
      label: 'Use simplified Mapping<small><br/><span class="balinese">ᬡ ᬙ ᬣ → na ca ta</span>',
      value: 'BalineseSimplified'
    }],
    'RomanLoCJavanese': [{
      label: 'Use simplified Mapping<small><br/><span class="javanese">ꦟ ꦖ ꦡ → na ca ta</span>',
      value: 'JavaneseSimplified'
    }]
  },
  postOptionsRadioGroup: {
    'Ranjana': [['ranjanalantsa', 'ranjanawartu']],
    'Siddham': [['UseAlternateI1', 'UseAlternateI2'], ['siddhammukta', 'siddhamap']],
    'PhagsPa': [['PhagsPaTib', 'PhagsPaSeal']],
    'Malayalam': [['MalayalamLineVirama', 'MalayalamCircVirama']],
    'Devanagari': [['devanagariuttara', 'devanagarijain', 'devanagarinepali', 'devanagaribalbodh']],
    'IAST': [['mDotAboveToBelow', 'NasalTilde']],
    'Pallava': [['sundapura', 'kawitan']],
    'Thai': [['ThaiTranscription', 'ThaiSajjhayaOrthography', 'ThaiSajjhayawithA', 'ThaiNativeConsonants']],
    'LaoPali': [['LaoTranscription', 'LaoSajjhaya', 'LaoSajjhayawithA', 'LaoPhonetic']]
  },
  postOptionsSemitic: {
    'Arab': [{
      label: 'Phonetic Mapping <br/><small>/g j p b/ → /غ ج ب ب/ not /ج ج ف ب/</small>',
      value: 'arabicRemoveAdditionsPhonetic'
    }]
  },
  postOptionsIndic: {
    'Arab': [{
      label: 'أ/a/ to Alif /ا/<br/><small>ا → أ</small>',
      value: 'ArabAtoAleph'
    }]
  },
  postOptionsGroup: {
    'DivesAkuru': [{
      label: '/y/ as vowel carrier<br/><small><span class="divesakuru">𑤀 𑤁 𑤂 𑤃 → 𑤥 𑤥𑤰 𑤥𑤱 𑤥𑤲</span></small>',
      value: 'DivesAkuruAlternateIndVowels'
    }, {
      label: 'Use Alt. /y/<br/><small><span class="divesakuru">𑤥 → 𑤦</span></small>',
      value: 'UseAlternateYA'
    }, {
      label: 'Use nasal sign<br/><small><span class="divesakuru">𑤐𑤾𑤎 𑤤𑤾𑤢 𑤚𑤾𑤘 𑤟𑤾𑤞 → 𑤿𑤎 𑤿𑤢 𑤿𑤘 𑤿𑤞</span></small>',
      value: 'DivesAkuruHomoOrganNasal'
    }],
    'Ahom': [{
      label: 'Remove Pali characters<br/><small><span class="ahom">𑝀 𑝁 𑝂 𑝃 𑝄 𑝅 𑝆 → 𑜋 𑜄 𑜌 𑜓 𑜔 𑜃 𑜎</span></small>',
      value: 'removePaliAhom'
    }],
    'Kawi': [{
      label: 'Use decomposed vowels<br/><small><span class="kawi">𑼅 𑼇 𑼉 → 𑼄𑼴 𑼆𑼴 𑼈𑼴</span></small>',
      value: 'KawiDecomposedVowel'
    }, {
      label: 'Use Alt. AI/AU<br/><small><span class="kawi">𑼒𑼿 𑼒𑼿𑼴 → 𑼒𑼾𑼾 𑼒𑼾𑼾𑼴</span></small>',
      value: 'KawiAltAiAU'
    }, {
      label: 'Arachaic jña<br/><small><span class="kawi">𑼙𑽂𑼛 → 𑼳</span></small>',
      value: 'KawiArchaicJNA'
    }, {
      label: 'Move Repha<br/><small><span class="kawi">𑼤𑼂𑼪 → 𑼂𑼤𑼪</span></small>',
      value: 'KawiMoveRepha'
    }],
    'Javanese': [{
      label: 'Use a-based indendent vowels<br/><small><span class="javanese">ꦆ ꦇ ꦈ ꦈꦴ → ꦄꦶ ꦄꦷ ꦄꦸ ꦄꦹ</span></small>',
      value: 'JavaneseAvowels'
    }, {
      label: 'Arachaic jña<br/><small><span class="javanese">ꦗ꧀ꦚ → ꦘ</span></small>',
      value: 'JavaneseArchaicJNA'
    }, {
      label: 'Move repha<br/><small><span class="javanese">ꦣꦂꦩ → ꦣꦩꦂ</span></small>',
      value: 'JavaneseMoveRepha'
    }],
    'Balinese': [{
      label: 'Use a-based vowels<br/><small><span class="balinese">ᬇ ᬈ ᬉ ᬊ → ᬅᬶ ᬅᬷ ᬅᬸ ᬅᬹ</span></small>',
      value: 'BalineseAvowels'
    }, {
      label: 'Arachaic jña<br/><small><span class="balinese">ᬚ᭄ᬜ → ᭌ</span></small>',
      value: 'BalineseArchaicJNA'
    }, {
      label: 'Move repha<br/><small><span class="balinese">ᬥᬃᬫ → ᬥᬫᬃ</span></small>',
      value: 'BalineseMoveRepha'
    }],
    'RomanLoC': [{
      label: 'MARC-8 decomposed diacritics',
      value: 'LoCMarc8'
    }],
    'HK': [{
      label: 'E/O for long, e/o for short',
      value: 'swapEe'
    }],
    'Velthuis': [{
      label: 'E/O for long, e/o for short',
      value: 'swapEe'
    }],
    'Arab': [{
      label: 'Remove Harakat <br/><small>غَانْدِي ← غاندي</small>',
      value: 'removeDiacriticsArabic'
    }, {
      label: 'Remove Sukun at end of words <br/><small>هِنْدْ ← هِنْد</small>',
      value: 'removeSukunEnd'
    }],
    'Arab-Fa': [{
      label: 'Remove vowel diacritics <!--<br/><small>غَانْدِي ← غاندي</small> -->',
      value: 'removeDiacriticsArabic'
    }, {
      label: 'Remove Jazm at end of words <br/><small>هِنْدْ ← هِنْد</small>',
      value: 'removeSukunEnd'
    }, {
      label: '/p g/ پ گ → /f j/ ف ج',
      value: 'persianPaGaFaJa'
    }],
    'Syrj': [{
      label: 'Remove Majlīyānā<br/><small><span class="syrj">ܟ ܓ ܙ</span> → <span class="syrj">ܟ̰ ܓ̰ ܙ̰</span></small>',
      value: 'removeMajliyana'
    }, {
      label: 'Remove Rūkkāḵā <br/><small><span class="syrj">ܒ</span> → <span class="syrj">ܒ݁</span></small>',
      value: 'removeRukkaka'
    }, {
      label: 'Remove Quššāyā <br/><small><span class="syrj">ܒ</span> → <span class="syrj">ܒ݂</span></small>',
      value: 'removeQussaya'
    }, {
      label: 'Remove Vowel Diacritics <br/><small><span class="syrj">ܠ ܠ ܠ ܠ ܠ ܠ</span> → <span class="syrj">ܠܰ ܠܳ ܠܺ ܠܽ ܠܶ ܠّ</span></small>',
      value: 'removeVowelsSyriac'
    }],
    'Syrn': [{
      label: 'Remove Majlīyānā<br/><small><span class="syrn">ܟ ܓ ܙ</span> → <span class="syrn">ܟ̰ ܓ̰ ܙ̰</span></small>',
      value: 'removeMajliyana'
    }, {
      label: 'Remove Rūkkāḵā <br/><small><span class="syrn">ܒ</span> → <span class="syrn">ܒ݁</span></small>',
      value: 'removeRukkaka'
    }, {
      label: 'Remove Quššāyā <br/><small><span class="syrn">ܒ</span> → <span class="syrn">ܒ݂</span></small>',
      value: 'removeQussaya'
    }, {
      label: 'Remove Vowel Diacritics <br/><small><span class="syrn">ܠ ܠ ܠܝ ܠܘ ܠ ܠ ܠܘ</span> → <span class="syrn">ܠܲ ܠܵ ܠܝܼ ܠܘܼ ܠܸ ܠܹ ܠܘܿ</span></small>',
      value: 'removeVowelsSyriac'
    }],
    'Pallava': [{
      label: 'Sundapura font<br/><span class="sundapura">ꦥꦭ꧀ꦭꦮ ꦒ꧀ꦫꦤ꧀',
      value: 'sundapura'
    }, {
      label: 'Kawitan font<br/><span class="kawitan">ꦥꦭ꧀ꦭꦮ ꦒ꧀ꦫꦤ꧀ꦡ',
      value: 'kawitan'
    }],
    'HebrewSBL': [{
      label: 'ḏ ṯ ḡ → d t g & d t g → d꞉ t꞉ g꞉',
      value: 'removetddash'
    }],

    /* 'Syrc': [
      { label: 'Estrangela<br/><span class="estrangelasyriac"></span>', value: 'estrangelasyriac' },
      { label: 'Eastern<br/><span class="easternsyriac">', value: 'easternsyriac' },
      { label: 'Western<br/><span class="westernsyriac">', value: 'westernsyriac' }
    ], */
    'Hiragana': [{
      label: 'Vertical text',
      value: 'verticalKana'
    }, {
      label: '/v/ → /b/ <br/<small>ゔぃのお → びの</small>',
      value: 'vtobJapanese'
    }],
    'Katakana': [{
      label: 'Vertical text',
      value: 'verticalKana'
    }, {
      label: '/v/ → /b/ <br/<small>ヴィノー → ビノ</small>',
      value: 'vtobJapanese'
    }],
    'Ranjana': [{
      label: 'Lantsa Style (Tibetan)<br/><small><span class="ranjana">बुद्धः</span> → <span class="ranjanalantsa">བུདྡྷཿ</span></small>',
      value: 'ranjanalantsa'
    }, {
      label: 'Wartu Style (Tibetan)<br/><small><span class="ranjana">बुद्धः</span> → <span class="ranjanawartu">བུདྡྷཿ</span></small>',
      value: 'ranjanawartu'
    }],
    'Tamil': [{
      label: 'Disable <span class="tamil">ஶ</span><br/><small><span class="tamil">ஶ → ஷ²</span></small>',
      value: 'TamilDisableSHA'
    }, {
      label: 'Subscript numerals<br/><small><span class="tamil">க²க³க⁴ → க₂க₃க₄</span></small>',
      value: 'TamilSubScript'
    }, {
      label: 'Mark the first varga<br/><small><span class="tamil">தீ³பம் → தீ³ப¹ம்</span></small>',
      value: 'TamilAddFirstVarga'
    }, {
      label: 'Remove apostrophe<br/><small><span class="tamil">ருʼம்ʼ → ரும்</span></small>',
      value: 'TamilRemoveApostrophe'
    }, {
      label: 'Remove diacritic numerals<br/><small><span class="tamil">க²க³க⁴ → ககக</span></small>',
      value: 'TamilRemoveNumbers'
    }, {
      label: 'Old orthography<br/><small><span class="tamil">லை னா</span> → <span class="tamilold">லை னா</span></small>',
      value: 'oldtamilortho'
    }, {
      label: 'Grantha Visarga<br/><small><span class="tamil">நம꞉ → நம𑌃</span></small>',
      value: 'TamilGranthaVisarga'
    }, {
      label: 'Disable ௐ<br/><small><span class="tamil">ௐ → ஓம்</span></small>',
      value: 'TamilOmDisable'
    }, {
      label: 'Contextual <span class="tamil">ள</><br/><small>(Experimental)</small><br/><small><span class="tamil">ப்ரலய → ப்ரளய</span></small>',
      value: 'ContextualLLa'
    }, {
      label: 'Only word-final <span class="tamil">ன</><br/><small><span class="tamil">ஆனனன் → ஆநநன்</span></small>',
      value: 'FinalNNa' // { label: 'Dandas<br/><small><span class="tamil">. .. → । ॥</span></small>', value: 'RetainTamilDanda' },
      // { label: 'Tamil numerals<br/><small><span class="tamil">123 → ௧௨௩</span></small>', value: 'RetainTamilNumerals' }
      // { label: 'Medieval e/o with Pulli<br/><small><span class="tamil">ஒ ஓ கொ கோ → ஒ் ஒ கெ்ா கொ</span></small>', value: 'MedievalTamilOrthography' }

    }],
    'TamilExtended': [// { label: 'Dandas <br/><small><span class="tamilextended">. .. → । ॥</span></small>', value: 'Dot2Dandas' },
    {
      label: 'Avoid Anusvara <br/><small><span class="tamilextended">സംഘം → സങ്‌ഘമ്</span></small>',
      value: 'TamilExtendedAnusvara'
    }, {
      label: 'Contextual <span class="tamil">ன</span> <br/><small><span class="tamilextended">ഗജാനനന്‌ → ഗജാഩഩഩ്‌</span></small>',
      value: 'TamilExtendedNNA'
    }, {
      label: 'Tamil Style -u -ū <br/><small>(Core Grantha)</small><br/><small><span class="tamilextended">ഗുബൂഫുഭൂ → ഗ‍ുബ‍ൂഫ‍ുഭ‍ൂ</span></small>',
      value: 'TamilStyleUUCore'
    }, {
      label: 'Tamil Style -u -ū <br/><small>(Tamilized Grantha)</small><br/><small><span class="tamilextended">ജൂസുഷുഹൂ → ജ‍ൂസ‍ുഷ‍ുഹ‍ൂ</span></small>',
      value: 'TamilStyleUUOther'
    }],
    'Chakma': [{
      label: 'Enable all conjuncts<br/><small><span class="chakma">𑄇𑄴𑄈𑄧 𑄉𑄴𑄊𑄧 𑄚𑄴𑄖𑄧 → 𑄇𑄳𑄈𑄧 𑄉𑄳𑄊𑄧 𑄚𑄳𑄖𑄧</span></small>',
      value: 'ChakmaEnableAllConjuncts'
    }, {
      label: 'Enable independent i, u and e<br/><small><span class="chakma">𑄃𑄨 𑄃𑄪 𑄃𑄬 → 𑄄 𑄅 𑄆</span></small>',
      value: 'ChakmaVowelsIndependent'
    }, {
      label: 'Pali orthography<br/><small><span class="chakma">𑄖𑄧𑄗𑄉𑄧𑄖𑄧 → 𑄖𑄗𑄂𑄉𑄖</span></small>',
      value: 'ChakmaPali'
    }],
    'Newa': [{
      label: 'Enable murmured consonants',
      value: 'NewaMurmurConsonants'
    }, {
      label: 'Disable repha<br/><small><span class="newa">𑐢𑐬𑑂𑐩 → 𑐢𑐬𑑂‍𑐩</span></small>',
      value: 'NewaDisableRepha'
    }, {
      label: 'Special /ta/ conjunct<br/><small><span class="newa">𑐟𑑂𑐥𑐟𑑂𑐩𑐟𑑂𑐰 → 𑐟𑑂‍𑐥𑐟𑑂‍𑐩𑐟𑑂‍𑐰</span></small>',
      value: 'NewaSpecialTa'
    }, {
      label: 'Devanagari-based Newa font<br/><small><span class="newa">𑐧𑐸𑐡𑑂𑐢𑑅</span> →<span class="nepaldevafont">बुद्धः</span></small>',
      value: 'nepaldevafont'
    }],
    'Hebrew': [{
      label: 'Remove all Niqquds<br/><small>ב פ כ מ → בּ פּ כּ מֶּ</small>',
      value: 'removeNikkud'
    }, {
      label: 'Use Qof<br/><small>כּ ← ק</small>',
      value: 'HeberewQoph'
    }, {
      label: 'Use Kamats Katan for Short /o/<br/><small>לֹ ← לׇ</small>',
      value: 'HebewShortO'
    }],
    'Nandinagari': [{
      label: 'Use Prishtamatra orthography<br/><small><span class="nandinagari"> 𑦮𑧚 𑦮𑧜 𑦮𑧛 𑦮𑧝 → 𑦮𑧤 𑦮𑧤𑧑 𑦮𑧤𑧚 𑦮𑧤𑧜</span></small>',
      value: 'NandinagariPrishtamatra'
    }],
    'Latn': [{
      label: 'Aleph as mater lectionis<br/><small> kʾ → kā</small>',
      value: 'AlephMaterLectionis'
    }, {
      label: 'ʾ ʿ → ʼ ʽ',
      value: 'alephAyinLatnAlternate'
    }, {
      label: 'ʾ ʿ → ʔ ʕ',
      value: 'alephAyinLatnAlternate2'
    }],
    'Oriya': [{
      label: 'ଵ instead of ୱ<br/><small>ଭୱତି → ଭଵତି <br/>(Enable preserve source)</small>',
      value: 'OriyaVaAlt'
    }, {
      label: 'ୟ everywhere<br/><small>ଯୟାତି ଯଜ୍ଞ → ୟୟାତି ୟଜ୍ଞ</small>',
      value: 'OriyaYYA'
    }],
    'Bengali': [{
      label: 'য় everywhere<br/><small>যয়াতি যজ্ঞ → য়য়াতি য়জ্ঞ</small>',
      value: 'BengaliYYA'
    }, {
      label: 'ẏa → য & ya → য়  ',
      value: 'BengaliSwitchYaYYa'
    }, {
      label: 'Old Bengali /ra/ <br/><small>র → ৰ</small>',
      value: 'BengaliOldRA'
    }, {
      label: 'ৰ as /b/ & ব as /v/ <br/>',
      value: 'BengaliRaBa'
    }, {
      label: 'দৃঢ আষাঢ → দৃঢ় আষাঢ়',
      value: 'BengaliIntervocalicDDA'
    }, {
      label: 'ৎব → ত্ৱ',
      value: 'khandatabatova'
    }],
    'Assamese': [{
      label: 'য় everywhere<br/><small>যয়াতি যজ্ঞ → য়য়াতি য়জ্ঞ</small>',
      value: 'BengaliYYA'
    }, {
      label: 'ৎব → ত্ৱ',
      value: 'khandatabatova'
    }],
    'KhamtiShan': [{
      label: 'Myanmar numerals<br/><small><span class="khamtishan">႑႒႓</span> → <span class="khamtishan">၁၂၃</span></small>',
      value: 'KhamiShanMyanmarNumerals'
    }, {
      label: 'Use ꩳ<br/><small><span class="khamtishan">ရ</span> → <span class="khamtishan">ꩳ</span></small>',
      value: 'KhamtiShanRa'
    }],
    'Siddham': [{
      label: 'Variant vowel sign U <span class="siddham">𑗜</span><br/><small> <span class="siddham">𑖎𑖲𑖚𑖲𑖦𑖲 → 𑖎𑗜𑖚𑗜𑖦𑗜</span></small>',
      value: 'UseAlternateVSU'
    }, {
      label: 'Variant vowel sign UU <span class="siddham">𑗝</span><br/><small> <span class="siddham">𑖎𑖳𑖚𑖳𑖦𑖳 → 𑖎𑗝𑖚𑗝𑖦𑗝</span></small>',
      value: 'UseAlternateVSUU'
    }, {
      label: 'Variant I 1 <br/><small><span class="siddham">𑖂 → 𑗘</span></small>',
      value: 'UseAlternateI1'
    }, {
      label: 'Variant I 2 <br/><small><span class="siddham">𑖂 → 𑗙</span></small>',
      value: 'UseAlternateI2'
    }, {
      label: 'Variant II <br/><small><span class="siddham">𑖃 → 𑗚</span></small>',
      value: 'UseAlternateII'
    }, {
      label: 'Variant U <br/><small><span class="siddham">𑖄 → 𑗛</span></small>',
      value: 'UseAlternateU'
    }, // { label: 'Vertical text', value: 'verticalSiddham' },
    {
      label: 'MuktamSiddham font',
      value: 'siddhammukta'
    }],
    'Devanagari': [{
      label: 'Uttara Style<br/><small><span class="devanagariuttara">अऋणझक्ष</span></small>',
      value: 'devanagariuttara'
    }, {
      label: 'Balbodh Style<br/><small><span class="devanagaribalbodh">अऋणझक्ष</span></small>',
      value: 'devanagaribalbodh'
    }, {
      label: 'Nepali Style<br/><small><span class="devanagarinepali">अऋणझक्ष</span></small>',
      value: 'devanagarinepali'
    }, {
      label: 'Jain Style<br/><small><span class="devanagarijain">णमो सिद्धाणं</span></small>',
      value: 'devanagarijain'
    }, {
      label: 'Use Jain OM<br/><small>ॐ → ꣽ</small>',
      value: 'jainomDevangari'
    }, {
      label: 'ऍ → ॲ',
      value: 'DevanagariACandra'
    }, {
      label: 'Use Anusvara to nasalize<br/><small>पञ्चगङ्गा → पंचगंगा</small>',
      value: 'DevanagariAnusvara'
    }, {
      label: 'Show explicit schwa (Hindi) <small><div class="q-mt-sm">rāma → राम॔, viracita → विर॔॔चित॔</div></small>',
      value: 'ShowSchwaHindi'
    }, {
      label: 'Prishthamatra orthography<br/><small>के कै को कौ → कॎ कॎे कॎा कॎो</small>',
      value: 'DevanagariPrishtamatra'
    }],
    'Dogra': [{
      label: 'Use Old Dogra forms<br/><small><span class="dogra">𑠂 𑠄 𑠈 𑠘 𑠧</span> → <span class="olddogra">𑠂 𑠄 𑠈 𑠘 𑠧</span> </small>',
      value: 'olddogra'
    }, {
      label: '<span class="dogra">𑠨</span> → <span class="dogra">𑠋</span>',
      value: 'DograShaKha'
    }],
    'Takri': [{
      label: 'Medieval Takri orthography <br/><small><span class="takri">𑚋</span> represents both /kha/ and /ṣa/</small>',
      value: 'TakriArchaicKha'
    }, {
      label: 'Avoid duplicated consonants<br/><small>Convert <span class="takri">𑚄𑚙𑚶𑚙𑚤</span> → <span class="takri">𑚄𑚙𑚤</span></small>',
      value: 'TakriRemoveGemination'
    }],
    'Gurmukhi': [{
      label: 'Yakaash<br/><small>ਕ੍ਯ → ਕੵ</small>',
      value: 'GurmukhiYakaash' // { label: 'Gurmukhi numerals<br/><small>123 → ੧੨੩</small>', value: 'RetainGurmukhiNumerals' }

    }],
    'Thai': [{
      label: 'Thai orthography<br/><small><div>พุทฺธ → พุทธะ</div></small>',
      value: 'ThaiTranscription'
    }, {
      label: 'Sajjhāya orthography<br/><small><div>พุทฺธ → พุท์ธ</div></small>',
      value: 'ThaiSajjhayaOrthography'
    }, {
      label: 'Nativized sajjhaya<br/><small><div>พุทฺธํ → พุท์ธัง</div></small>',
      value: 'ThaiSajjhayawithA'
    }, {
      label: 'Thai phonetic<br/><small><div>พุทฺธตฺว → <span class="thainative">บุดธะต͜วะ</span></div></small>',
      value: 'ThaiNativeConsonants'
    }, {
      label: 'Sara a ะ as Visarga<br/><small><div>นมัห์ → นมะ</div></small>',
      value: 'ThaiVisargaSaraA'
    }],
    'LaoPali': [{
      label: 'Lao orthography<br/><small><span class="laopali">ພຸທ຺ຘ → ພຸທຘະ</span></small>',
      value: 'LaoTranscription'
    }, {
      label: 'Sajjhāya orthography<br/><small><div class="laopali">ພຸທ຺ຘ → ພຸທ໌ຘ</div></small>',
      value: 'LaoSajjhaya'
    }, {
      label: 'Nativized sajjhāya<br/><small><div  class="laopali">ພຸທ຺ຘໍ → ພຸທ໌ຘັງ</div></small>',
      value: 'LaoSajjhayawithA'
    }, {
      label: 'Lao phonetic<br/><small><div  class="laopali">ພຸທ຺ຘ → ບຸດຘະ</div></small>',
      value: 'LaoPhonetic'
    }],
    'Lao': [{
      label: 'Lao Nativization<br/><small><span class="lao">ພຸທທັງ ຄັຈຈາມິ ສັພພັງ → ພຸດທັງ ຄັຈສາມິ ສັບພັງ</span></small>',
      value: 'LaoNative'
    }],
    'TaiTham': [{
      label: 'Shift Mai Kang Lai<br/><small><span class="taitham">ᩈᩘᨥ</span> → <span class="taitham">ᩈᨥᩘ</span></small>',
      value: 'ThamShiftMaiKangLai'
    }, {
      label: 'Tall -ā with ca/ba/ra/bha<br/><small><span class="taitham">ᨣᨧ᩠ᨨᩣᨾᩥ</span> → <span class="taitham">ᨣᨧ᩠ᨨᩤᨾᩥ</span></small>',
      value: 'ThamTallAOthers'
    }, {
      label: 'Disable explicit Tall -ā <br/><small>Font chooses the right form</small>',
      value: 'ThamTallADisable'
    }, {
      label: '<span class="taitham">ᨠᩮᩣ</span> → <span class="taitham">ᨠᩰ</span></small>',
      value: 'UseAlternateo1'
    }],
    'LueTham': [{
      label: 'Shift Mai Kang Lai<br/><small><span class="luetham">ᩈᩘᨥ</span> → <span class="luetham">ᩈᨥᩘ</span></small>',
      value: 'ThamShiftMaiKangLai'
    }, {
      label: 'Tall -ā with ca/ba/ra/bha<br/><small><span class="luetham">ᨣᨧ᩠ᨨᩣᨾᩥ</span> → <span class="luetham">ᨣᨧ᩠ᨨᩤᨾᩥ</span></small>',
      value: 'ThamTallAOthers'
    }, {
      label: 'Disable explicit Tall -ā <br/><small>Font chooses the right form</small>',
      value: 'ThamTallADisable'
    }, {
      label: '<span class="luetham">ᨠᩮᩣ</span> → <span class="luetham">ᨠᩰ</span></small>',
      value: 'UseAlternateo1'
    }],
    'LaoTham': [{
      label: 'Shift Mai Kang Lai<br/><small><span class="laotham">ᩈᩘᨥ</span> → <span class="laotham">ᩈᨥᩘ</span></small>',
      value: 'ThamShiftMaiKangLai'
    }, {
      label: 'Tall -ā with ca/ba/ra/bha<br/><small><span class="laotham">ᨣᨧ᩠ᨨᩣᨾᩥ</span> → <span class="laotham">ᨣᨧ᩠ᨨᩤᨾᩥ</span></small>',
      value: 'ThamTallAOthers'
    }, {
      label: 'Disable explicit Tall -ā <br/><small>Font chooses the right form</small>',
      value: 'ThamTallADisable'
    }, {
      label: '<span class="laotham">ᨠᩮᩣ</span> → <span class="laotham">ᨠᩰ</span></small>',
      value: 'UseAlternateo1'
    }],
    'KhuenTham': [{
      label: 'Shift Mai Kang Lai<br/><small><span class="khuentham">ᩈᩘᨥ</span> → <span class="khuentham">ᩈᨥᩘ</span></small>',
      value: 'ThamShiftMaiKangLai'
    }, {
      label: 'Tall -ā with ca/ba/ra/bha<br/><small><span class="khuentham">ᨣᨧ᩠ᨨᩣᨾᩥ</span> → <span class="khuentham">ᨣᨧ᩠ᨨᩤᨾᩥ</span></small>',
      value: 'ThamTallAOthers'
    }, {
      label: 'Disable explicit Tall -ā <br/><small>Font chooses the right form</small>',
      value: 'ThamTallADisable'
    }, {
      label: '<span class="khuentham">ᨠᩮᩣ</span> → <span class="khuentham">ᨠᩰ</span></small>',
      value: 'UseAlternateo1'
    }],
    'Soyombo': [{
      label: 'Syllabize input<br/><small><span class="soyombo → ">𑩲𑩖𑩮𑩑𑪁𑩫𑪘𑪙𑩾 → 𑩲𑩖 𑩮𑩑 𑪁 𑩫𑪘𑪙𑩾</span></small>',
      value: 'SoyomboSyllabize'
    }, {
      label: 'Sanskrit palatals<br/><small><span class="soyombo">𑩵 𑩶 𑩷 → 𑩡 𑩢 𑩣</span></small>',
      value: 'SoyomboSanskritPalatals'
    }, {
      label: 'Mongolian finals<br/><small><span class="soyombo">ak ag ad → 𑩐𑪋 𑩐𑪊 𑩐𑪍</span></small>',
      value: 'SoyomboFinals'
    }, {
      label: 'Initial-form /ra/, /la/, /sa/<br/><small><span class="soyombo">𑩼𑪙𑩫 𑩽𑪙𑩫 𑪁𑪙𑩫 → 𑪆𑩫 𑪇𑩫 𑪉𑩫</span></small>',
      value: 'SoyomboInitials'
    }, {
      label: 'Use Tsheg<br/><small><span class="soyombo">𑩯 𑩴𑩖 → 𑩯𑪚𑩴𑩖</span></small>',
      value: 'SoyomboSpaceTscheg'
    }],
    'Marchen': [{
      label: 'Sanskrit palatals<br/><small><span class="marchen">𑲂 𑲃 𑲄 𑲄𑲮 → 𑱶 𑱷 𑱸 𑱸𑲮</span></small>',
      value: 'MarchenSanskritPalatals'
    }],
    'Mongolian': [{
      label: 'Syllabize input<br/><small><span class="mongolian">ᠮᠠᢏᢈ → ᠮᠠ᠋ ᢏᢈ</span></small>',
      value: 'MongolianSyllabize'
    }],
    'Tibetan': [{
      label: 'Syllabize input<br/><small><span class="tibetan → ">བོདྷིསཏྟྭ → བོ་དྷི་ས་ཏྟྭ</span></small>',
      value: 'TibetanSyllabize'
    }, {
      label: 'Sanskrit palatals<br/><small><span class="tibetan">ཙ ཚ ཛ ཛྷ → ཅ ཆ ཇ ཇྷ</span></small>',
      value: 'TibetanSanskritPalatals'
    }, {
      label: 'Bindu with nada<br/><small><span class="tibetan">ཨྃ → ཨྂ</span></small>',
      value: 'TibetanNada'
    }, {
      label: 'Use space<br/><small><span class="tibetan">ན་མོ → ན མོ</span></small>',
      value: 'TibetanTsheg'
    }, {
      label: 'Dbu Med (Ume) style<br/><small><span class="tibetan">བུདྡྷཿ</span> → <span class="tibetandbumed">བུདྡྷཿ</span></small>',
      value: 'tibetandbumed'
    }],
    'Sinhala': [{
      label: 'Sanskrit/Pali Orthography<br/><small><span class="sinhala">නමෝ භගවතේ → නමො භගවතෙ</span></small>',
      value: 'SinhalaPali'
    }, {
      label: 'Enable all conjuncts<span><br/><small><span class="sinhala">බුද්ධස්ස → බුද්‍ධස‍්ස</span></small>',
      value: 'SinhalaConjuncts'
    }],
    'Telugu': [{
      label: 'Arasunna as Chandrabindu<br/><small><span class="telugu"> హూఀ → హూఁ</span></small>',
      value: 'TeluguArasunnaChandrabindu'
    }, {
      label: 'Telugu repha <br/><small><i>(Valapala Gilaka)</i></small> <br/><small><span class="telugu">ధర్మ → ధర్‍మ</span></small>',
      value: 'TeluguReph'
    }, {
      label: 'Telugu Nakaara Pollu <br/><small><span class="telugunukta">భగవన్ → భగవౝ</span></small>',
      value: 'TeluguNakaraPollu'
    }, {
      label: 'Tamil-Style Zha <br/><small><span class="telugu">ఆఴ్వార్</span> → <span class="teluguzha">ఆఴ్వార్</span></span></small>',
      value: 'TeluguTamilZha'
    }, {
      label: 'Tamil-Style Rra <br/><small><span class="telugu">ఆఱ్ఱు</span> → <span class="teluguzha">ఆౘ్ౘు</span></small>',
      value: 'TeluguTamilRra' // { label: 'Dandas<br/><small><span class="telugu">. .. → । ॥</span></small>', value: 'RetainTeluguDanda' },
      // { label: 'Telugu Numerals<br/><small><span class="telugu">123 → ౧౨౩</span></small>', value: 'RetainTeluguNumerals' }

    }],
    'Gujarati': [// { label: 'Dandas<br/><small><span class="gujarati">. .. → । ॥</span></small>', value: 'RetainGujaratiDanda' }
    ],
    'PhagsPa': [{
      label: 'Tibetan style<br/><small><span class="phagspa">ꡳꡛ ᠂ ꡂꡜ</span> → <span class="phagspatib">ꡳꡛ ᠂ ꡂꡜ</span></small>',
      value: 'PhagsPaTib'
    }, {
      label: 'Seal style   <br/><small><span class="phagspa">ꡳꡛ ᠂ ꡂꡜ</span> → <span class="phagspaseal">ꡳꡛ ᠂ ꡂꡜ</span></span></small>',
      value: 'PhagsPaSeal'
    }],
    'Kannada': [// { label: 'Dandas<br/><small><span class="kannada">. .. → । ॥</span></small>', value: 'RetainKannadaDanda' },
    {
      label: 'Avoid Repha <br/><small><span class="kannada">ಧರ್ಮ → ಧರ‍್ಮ</span></small>',
      value: 'KannadaNotRepha'
    }, {
      label: 'Kannada Nakaara Pollu <br/><small><span class="kannadapollu">ಭಗವನ್ → ಭಗವೝ</span></small>',
      value: 'KannadaNakaraPollu'
    }, {
      label: 'Use spacing Chandrabindu <br/><small><span class="kannadapollu">ಯಹಾಁ → ಯಹಾಀ</span></small>',
      value: 'KannadaSpacingCandrabindu' // { label: 'Kannada Numerals<br/><small><span class="kannada">123 → ೧೨೩</span></small>', value: 'RetainKannadaNumerals' }

    }],
    'Grantha': [{
      label: 'Grantha old AU vowel sign <br/><small><span class="grantha">𑌕𑍗 → 𑌕𑍌</span></small>',
      value: 'GranthaOldau'
    }, {
      label: 'Prakrit orthography <br/><small><span class="grantha">𑌬𑍁𑌦𑍍𑌧𑌂 → 𑌬𑍁𑌂𑌧𑌀</span></small>',
      value: 'GranthaPrakrit'
    }, {
      label: 'Other final forms <br/><small><span class="grantha">𑌦𑌿𑌕𑍍</span> → <span class="granthalig">𑌦𑌿𑌕𑍍</span></small>',
      value: 'granthafinal'
    }, {
      label: 'Noto Serif Grantha <br/><small><span class="grantha">𑌬𑍁𑌦𑍍𑌧𑌂</span> → <span class="granthaserif">𑌬𑍁𑌦𑍍𑌧𑌂</span></small>',
      value: 'granthaserif'
    }, {
      label: 'E-Grantamil encoding',
      value: 'egrantamil'
    }],
    'Urdu': [{
      label: 'Remove short vowels<br/><small><span class="urdu">ہِنْدُوسْتانْ ← ہندوستان</span></small>',
      value: 'UrduRemoveShortVowels'
    }],
    'Shahmukhi': [{
      label: 'Remove short vowels<br/><small><span class="urdu">ہِنْدُوسْتانْ ← ہندوستان</span></small>',
      value: 'UrduRemoveShortVowels'
    }],

    /* 'IASTLOC': [
      { label: 'Capitalize sentences', value: 'capitalizeSentence' }
    ], */
    'IAST': [{
      label: 'Capitalize sentences',
      value: 'capitalizeSentence'
    }, {
      label: 'Anusvara to nasal<br/><small>gaṃgā → gaṅgā</small>',
      value: 'AnusvaratoNasalASTISO'
    }, {
      label: 'Use tilde for nasalization<br/><small>kaM ka~ kaMka ka~ka → kã kã kaṅka kãka</smal',
      value: 'NasalTilde'
    }, {
      label: 'ṃ → ṁ',
      value: 'mDotAboveToBelow'
    }, {
      label: 'Vedic retroflex /l/ <br/><small><span class="iast">agnimīl̤e → agnimīḻe</span>',
      value: 'RomanLoCSLaDotLaUnderscore'
    }],
    'IASTPali': [{
      label: 'Capitalize sentences',
      value: 'capitalizeSentence'
    }, {
      label: 'Anusvara to nasal<br/><small>gaṃgā → gaṅgā</small>',
      value: 'AnusvaratoNasalASTISO'
    }, {
      label: 'ṃ → ṁ',
      value: 'mDotAboveToBelow'
    }],
    'RussianCyrillic': [{
      label: 'Pali Text',
      value: 'CyrillicPali'
    }, {
      label: 'Capitalize sentences',
      value: 'capitalizeSentence'
    }, {
      label: 'Remove diacritics<br/><small><span class="russiancyrillic">сам̣кр̣там̣ → самкртам</span></small>',
      value: 'removeDiacritics'
    }],
    'ISO': [{
      label: 'Capitalize sentences',
      value: 'capitalizeSentence'
    }, {
      label: 'Anusvara to nasal<br/><small>gaṁgā → gaṅgā</small>',
      value: 'AnusvaratoNasalASTISO'
    }, {
      label: 'Use tilde for nasalization<br/><small>kaM ka~ kaMka ka~ka → kã kã kaṅka kãka</smal',
      value: 'NasalTilde'
    }, {
      label: 'ē/ō → e/o',
      value: 'noLongEO'
    }],
    'Itrans': [{
      label: 'Readable Itrans<br/><small>gR^ihalakShmI → gRRihalaxmii</small>',
      value: 'readableItrans'
    }, {
      label: 'E/O for long, e/o for short',
      value: 'swapEeItrans'
    }],
    'RomanReadable': [{
      label: 'Alternate long/short e/o <br/><small>e\' e o\' o → e ae o oa</small>',
      value: 'RomanReadableLongEO'
    }, {
      label: 'Anusvara as n <br/><small>m\' → n\'</small>',
      value: 'AnusvaraAsN'
    }, {
      label: 'Capitalize sentences',
      value: 'capitalizeSentence'
    }],
    'RomanColloquial': [{
      label: 'Anusvara as n <br/><small>maim → main</small>',
      value: 'AnusvaraAsN'
    }, {
      label: 'Capitalize sentences',
      value: 'capitalizeSentence'
    }],
    'Khojki': [{
      label: 'Retain spaces',
      value: 'KhojkiRetainSpace'
    }, {
      label: 'Khojki QA<br/><small><span class="sundanese">𑈈𑈶</span> → <span class="khojki">𑈿</span></small>',
      value: 'KhojkiQa'
    }],
    'WarangCiti': [{
      label: 'Capitalize sentences',
      value: 'capitalizeSentence'
    }],
    'Kaithi': [{
      label: 'Retain spaces',
      value: 'KaithiRetainSpace'
    }],
    'Bhaiksuki': [{
      label: 'Retain spaces',
      value: 'BhaiksukiRetainSpace'
    }],
    'Limbu': [{
      label: 'SA-I for vowel length<small><br/><span class="limbu">ᤁ᤺ᤢᤰ → ᤁᤢᤁ᤻</span></small>',
      value: 'LimbuSpellingSaI'
    }],
    'Sundanese': [{
      label: 'Archaic conjuncts<br/><small><span class="sundanese">ᮊ᮪ᮙ ᮊ᮪ᮝ ᮃᮊ᮪ ᮃᮙ᮪ → ᮊᮬ ᮊᮭ ᮃᮾ ᮃᮿ</span></small>',
      value: 'SundaneseHistoricConjuncts'
    }],
    'Malayalam': [{
      label: 'Dot reph<br/><small><span class="malayalam">ധർമ → ധൎമ</span></small>',
      value: 'dotReph'
    }, {
      label: 'Double consonants after reph<br/><small><span class="malayalam">ധർമ → ധർമ്മ</span></small>',
      value: 'RephaDoubleMalayalam'
    }, {
      label: 'Archaic II & AU<br/><small><span class="malayalam">ഈ കൗ → ൟ കൌ</span></small>',
      value: 'archaicAIAU'
    }, {
      label: 'Traditional orthography<br/><small><span class="malayalam">തു തൂ</span> → <span class="malayalamold">തു തൂ</span></small>',
      value: 'tradOrtho'
    }, {
      label: 'Archaic chillus<br/><small><span class="malayalam">ൿ ൔ ൕ ൖ</small>',
      value: 'historicChillu'
    }, {
      label: 'Bar virama<br/><small><span class="malayalam">ക്</span> → <span class="malayalamold">ക഻</span></small>',
      value: 'MalayalamLineVirama'
    }, {
      label: 'Circle virama<br/><small><span class="malayalam">ക്</span> → <span class="malayalamold">ക഼</span></small>',
      value: 'MalayalamCircVirama'
    }, {
      label: 'Prakrit orthography<br/><small><span class="malayalam">ബുദ്ധ → ബുംധ</span></small>',
      value: 'MalayalamPrakrit' // { label: 'Dandas<br/><small><span class="malayalam">. .. → । ॥</span></small>', value: 'RetainMalayalamDanda' },
      // { label: 'Malayalam numerals<br/><small><span class="malayalam">123 → ൧൨൩</span></small>', value: 'RetainMalayalamNumerals' }

    }],
    'ZanabazarSquare': [{
      label: 'Sanskrit palatals<br/><small><span class="zanabazarsquare">𑨣 𑨤 𑨥 → 𑨐 𑨑 𑨒</span></small>',
      value: 'ZanabazarSanskritPalatals'
    }, {
      label: 'Tsheg<br/><small><span class="zanabazarsquare">𑨝 𑨢𑨆 → 𑨝𑩁𑨢𑨆</span></small>',
      value: 'ZanzabarSpaceTsheg'
    }, {
      label: 'Contextual ya/ra/la/va & Repha<br/><small><span class="zanabazarsquare">𑨋𑩇𑨪 𑨋𑩇𑨫 𑨋𑩇𑨬 𑨋𑩇𑨭 𑨫𑩇𑨋 → 𑨋𑨻 𑨋𑨼 𑨋𑨽 𑨋𑨾 𑨺𑨋</span></small>',
      value: 'ZanabazarSquareContextual'
    }, {
      label: 'Alternate ai/au<br/><small><span class="zanabazarsquare">𑨀𑨄𑨊 𑨀𑨆𑨊 → 𑨀𑨇 𑨀𑨈</span></small>',
      value: 'ZanabazarSquareAiAu'
    }, {
      label: 'Mongolian final-mark<br/><small><span class="zanabazarsquare">𑨀𑨋𑨴 → 𑨀𑨋𑨳</span></small>',
      value: 'ZanabazarSquareMongolianFinal'
    }],
    'Sogd': [{
      label: 'Use <span class="sogd">𐽀</span> <i>(Resh-Ayin)</i> for Ayin',
      value: 'SogdReshAyin'
    }],
    'Sogo': [{
      label: 'Use <span class="sogo">𐼘</span> <i>(Resh-Ayin-Dalesh)</i> for Ayin',
      value: 'SogoReshAyinDaleth'
    }],
    'Hebr-Ar': [{
      label: '<span class="">עׄ</span> ← <span class="">ג</span>',
      value: 'gainGimel'
    }, {
      label: '<span class="">ת</span> ← <span class="">ת̈</span>',
      value: 'tavTwodot'
    }, {
      label: '<span class="">תׄ</span> ← <span class="">ת֒</span>',
      value: 'tavThreedot'
    }, {
      label: '<span class="">ק</span> ← <span class="">ק̈</span>',
      value: 'qafTwodot'
    }]
  },
  autodetect: [{
    label: 'Auto-Detect',
    value: 'autodetect',
    icon: 'translate'
  }],
  scriptsIndic: [{
    label: 'Ahom',
    value: 'Ahom',
    sscode: 'Ahom',
    ssdesc: 'The Ahom script was used by members of the Tai Ahom community in India for writing the Ahom language, an extinct member of the Tai-Kadai language family. Ahom has been written for at least 500 years, and possibly much longer. The Ahom script is derived from Old Mon, ultimately of Brahmi origin. The Ahom language is occasionally used in religious rituals, and there have been some recent revival efforts by the ethnic Ahom community in Assam.',
    omnicode: 'ahom',
    wikicode: 'Ahom_alphabet',
    font: {
      'name': 'Noto Sans Ahom',
      'url': 'https://github.com/googlefonts/noto-fonts/blob/main/unhinted/otf/NotoSerifAhom/NotoSerifAhom-Regular.otf'
    },
    language: ['Others'],
    status: ['Living', 'Living: Minor'],
    invented: ['Derived: Brahmi'],
    region: ['East Indic', 'Indic'],
    pdfFont: ''
  }, {
    label: 'Ariyaka',
    value: 'Ariyaka',
    sscode: '',
    ssdesc: '',
    wikicode: '',
    omnicode: 'ariyaka',
    font: {
      'name': 'Ariyaka',
      'url': 'https://www.omniglot.com/fonts/ariyaka.zip'
    },
    language: ['Only Pali', 'Pali'],
    status: ['Extinct', 'Extinct: Pre-Modern'],
    invented: ['Invented'],
    region: ['South East Asian: Mainland', 'South East Asian'],
    miscsrc: '(from Omniglot)',
    miscdesc: 'The Ariyaka alphabet was invented by King Mongkut Rama IV of Siam (1804-1868) as an alternative alphabet for Pali. He considered the Khmer alphabet, which was commonly used to write Pali, to be too complicated and decided to create an alphabet that was easier to use and more Western in appearance.'
  }, {
    label: 'Assamese',
    value: 'Assamese',
    sscode: '',
    ssdesc: '',
    wikicode: 'Assamese_alphabet',
    wikidesc: 'The Assamese script is a writing system of the Assamese language. It used to be the script of choice in the Brahmaputra valley. It evolved from Kamarupi script. By the 17th century three styles of Assamese script could be identified (baminiya, kaitheli and garhgaya) that converged to the standard script following typesetting required for printing. The present standard is identical to the Bengali alphabet except for two letters, ৰ (ro) and ৱ (vo).',
    omnicode: 'assamese',
    font: {
      'name': '',
      'url': ''
    },
    language: ['Sanskrit & Pali', 'Sanskrit', 'Pali'],
    status: ['Living', 'Living: Major'],
    invented: ['Derived: Brahmi'],
    region: ['East Indic', 'Indic']
  }, {
    label: 'Avestan',
    value: 'Avestan',
    sscode: 'Avst',
    ssdesc: 'The Avestan script was used from the 5th to the 13th century AD for writing the Avestan language, an Eastern Iranian language which is now only known from its use as the language of Zoroastrian religious texts called Avesta, although it is thought that at one time it was probably a natural language in everyday use. There are no surviving examples of written Avestan prior to its use as a liturgical language, and it is thought that the Avestan script was created particularly for the purpose of writing religious texts.',
    omnicode: 'avestan',
    wikicode: 'Avestan_alphabet',
    font: {
      'name': 'Noto Sans Avestan',
      'url': 'https://cdn.jsdelivr.net/gh/googlei18n/noto-fonts/unhinted/NotoSansAvestan-Regular.ttf'
    },
    language: ['Others'],
    status: ['Extinct', 'Extinct: Ancient'],
    invented: ['Derived: Aramaic'],
    region: ['West Asian']
  }, {
    label: 'Balinese',
    value: 'Balinese',
    sscode: 'Bali',
    ssdesc: 'The Balinese script is used for writing the Balinese language spoken on the Indonesian islands of Java and Bali. It is derived from the Old Kawi script, and is ultimately of Brahmic descent. It is very similar to the Javanese script in form and behaviour; some consider them to be typological variants of one another. Historically, Balinese has been inscribed into stone, or written on palm leaves. Traditionally, the religious texts written on palm leaves were considered to be sacred and could not be read by everyone.',
    omnicode: 'balinese',
    wikicode: 'Balinese_script',
    font: {
      'name': 'Vimala',
      'url': 'https://github.com/longnow/bali-fonts/blob/master/Vimala.ttf'
    },
    language: ['Sanskrit & Pali', 'Sanskrit', 'Pali'],
    status: ['Living', 'Living: Minor'],
    invented: ['Derived: Brahmi', 'Derived: Pallava'],
    region: ['South East Asian: Insular', 'South East Asian']
  }, {
    label: 'Batak Karo',
    value: 'BatakKaro',
    sublabel: 'Beta',
    sscode: 'Batk',
    ssdesc: 'The Batak script is used to write the six Batak languages (Toba, Karo, Dairi, Mandailing, Simalungun and Angkola) spoken collectively by approximately 3 million people on the Indonesian island of Sumatra. It is one of several scripts indigenous to the Indonesian archipelago, descended from the Old Kawi script, which in turn is derived from the Pallava, and ultimately the Brahmi, script. This is the variant used by the Karo language.',
    omnicode: '',
    wikicode: '',
    font: {
      'name': 'Pangururan',
      'url': 'https://evertype.com/fonts/batak/'
    },
    language: ['Others'],
    status: ['Living', 'Living: Minor'],
    invented: ['Derived: Brahmi', 'Derived: Pallava'],
    region: ['South East Asian: Insular', 'South East Asian']
  }, {
    label: 'Batak Mandailing',
    value: 'BatakManda',
    sublabel: 'Beta',
    sscode: 'Batk',
    ssdesc: 'The Batak script is used to write the six Batak languages (Toba, Karo, Dairi, Mandailing, Simalungun and Angkola) spoken collectively by approximately 3 million people on the Indonesian island of Sumatra. It is one of several scripts indigenous to the Indonesian archipelago, descended from the Old Kawi script, which in turn is derived from the Pallava, and ultimately the Brahmi, script. This is the variant used by the Mandailing language.',
    omnicode: 'batak',
    wikicode: 'Batak_script',
    font: {
      'name': 'Pangururan',
      'url': 'https://evertype.com/fonts/batak/'
    },
    language: ['Others'],
    status: ['Living', 'Living: Minor'],
    invented: ['Derived: Brahmi', 'Derived: Pallava'],
    region: ['South East Asian: Insular', 'South East Asian']
  }, {
    label: 'Batak Pakpak',
    value: 'BatakPakpak',
    sublabel: 'Beta',
    sscode: 'Batk',
    ssdesc: 'The Batak script is used to write the six Batak languages (Toba, Karo, Dairi, Mandailing, Simalungun and Angkola) spoken collectively by approximately 3 million people on the Indonesian island of Sumatra. It is one of several scripts indigenous to the Indonesian archipelago, descended from the Old Kawi script, which in turn is derived from the Pallava, and ultimately the Brahmi, script. This is the variant used by the Pakpak language.',
    omnicode: 'batak',
    wikicode: 'Batak_script',
    font: {
      'name': 'Pangururan',
      'url': 'https://evertype.com/fonts/batak/'
    },
    language: ['Others'],
    status: ['Living', 'Living: Minor'],
    invented: ['Derived: Brahmi', 'Derived: Pallava'],
    region: ['South East Asian: Insular', 'South East Asian']
  }, {
    label: 'Batak Toba',
    value: 'BatakToba',
    sublabel: 'Beta',
    sscode: 'Batk',
    ssdesc: 'The Batak script is used to write the six Batak languages (Toba, Karo, Dairi, Mandailing, Simalungun and Angkola) spoken collectively by approximately 3 million people on the Indonesian island of Sumatra. It is one of several scripts indigenous to the Indonesian archipelago, descended from the Old Kawi script, which in turn is derived from the Pallava, and ultimately the Brahmi, script. This is the variant used by the Toba language.',
    omnicode: 'batak',
    wikicode: 'Batak_script',
    font: {
      'name': 'Pangururan',
      'url': 'https://evertype.com/fonts/batak/'
    },
    language: ['Others'],
    status: ['Living', 'Living: Minor'],
    invented: ['Derived: Brahmi', 'Derived: Pallava'],
    region: ['South East Asian: Insular', 'South East Asian']
  }, {
    label: 'Batak Simalungun',
    value: 'BatakSima',
    sublabel: 'Beta',
    sscode: 'Batk',
    ssdesc: 'The Batak script is used to write the six Batak languages (Toba, Karo, Dairi, Mandailing, Simalungun and Angkola) spoken collectively by approximately 3 million people on the Indonesian island of Sumatra. It is one of several scripts indigenous to the Indonesian archipelago, descended from the Old Kawi script, which in turn is derived from the Pallava, and ultimately the Brahmi, script. This is the variant used by the Simalungun language.',
    omnicode: 'batak',
    wikicode: 'Batak_script',
    font: {
      'name': 'Pangururan',
      'url': 'https://evertype.com/fonts/batak/'
    },
    language: ['Others'],
    status: ['Living', 'Living: Minor'],
    invented: ['Derived: Brahmi', 'Derived: Pallava'],
    region: ['South East Asian: Insular', 'South East Asian']
  }, {
    label: 'Bengali (Bangla)',
    value: 'Bengali',
    sscode: 'Beng',
    ssdesc: 'The Bengali (also called Bangla) script is used for writing the Bengali language, spoken by over 180,000,000 people mostly in Bangladesh and India. It is also used for a number of other Indian languages including Sylheti and, with one or two modifications, Assamese. It is a Brahmic script although its exact derivation is disputed.',
    omnicode: 'bengali',
    wikicode: 'Bengali',
    font: {
      'name': '',
      'url': ''
    },
    language: ['Sanskrit & Pali', 'Sanskrit', 'Pali'],
    status: ['Living', 'Living: Major'],
    invented: ['Derived: Brahmi'],
    region: ['East Indic', 'Indic']
  }, {
    label: 'Brahmi',
    value: 'Brahmi',
    sscode: 'Brah',
    ssdesc: 'The Brahmi script is ancestral to most of the scripts of South Asia, Southeast Asia, and to some Central Asian scripts. The name Brahmi actually does not refer to a single, discrete script as such; general practise is to use the term to refer to any script in the family now known as Brahmic, up until approximately 400 AD, at which point they became differentiated enough to be given their own names. Brahmic writing was originally used for writing early dialects of the Prakrit language, but spread widely during the period of Indian cultural expansion in the 1st millenium AD and has since provided the underlying design for over sixty scripts used by languages from the Indo-Aryan, Dravidian, Austro-Asiatic and Tibeto-Burman language families. ',
    omnicode: 'brahmi',
    wikicode: 'Brahmi_script',
    font: {
      'name': '',
      'url': ''
    },
    language: ['Sanskrit & Pali', 'Sanskrit', 'Pali'],
    status: ['Extinct', 'Extinct: Ancient'],
    invented: ['Derived: Aramaic'],
    region: ['Pan-Indic', 'Indic']
  }, {
    label: 'Bhaiksuki',
    value: 'Bhaiksuki',
    sscode: 'Bhks',
    ssdesc: 'Bhaiksuki is an extinct script used for writing Buddhist texts in the Indian state of Bihar. It is also known as the Arrow-Headed script due to the shape of the letters, many of which are capped with one or more triangular “arrows”. Little is known about this script.',
    omnicode: '',
    wikicode: 'Bhaiksuki_alphabet',
    font: {
      'name': 'Noto Sans Bhaiksuki',
      'url': 'https://github.com/googlefonts/noto-fonts/blob/main/unhinted/otf/NotoSansBhaiksuki/NotoSansBhaiksuki-Regular.otf'
    },
    language: ['Sanskrit & Pali', 'Sanskrit', 'Pali'],
    status: ['Extinct', 'Extinct: Ancient'],
    invented: ['Derived: Brahmi'],
    region: ['North Indic', 'Indic']
  }, {
    label: 'Buginese (Lontara)',
    value: 'Buginese',
    sscode: 'Bugi',
    ssdesc: 'The Buginese (also known as the Lontara) script is used for writing the Bugis, Makasar, and Mandar languages of Sulawesi in Indonesia. It is related to the other Brahmic scripts indigenous to the Indonesian archipelago.',
    omnicode: 'lontara',
    wikicode: 'Lontara_script',
    font: {
      'name': 'Noto Sans Buginese',
      'url': 'https://cdn.jsdelivr.net/gh/googlei18n/noto-fonts/unhinted/NotoSansBuginese-Regular.ttf'
    },
    language: ['Others'],
    status: ['Living', 'Living: Minor'],
    invented: ['Derived: Brahmi', 'Derived: Pallava'],
    region: ['South East Asian: Insular', 'South East Asian']
  }, {
    label: 'Buhid',
    value: 'Buhid',
    sscode: 'Buhd',
    ssdesc: 'The Buhid script is used to write the Buhid language, spoken by about 8,000 people in the Mindoro region of the Philippines. It is an indigenous abugida script of Brahmic origin. It is proposed that the Buhid, Hanunoo and Tagbanwa scripts share common origins with the Tagalog script, an extinct script from the same region, because of the many features they have in common.',
    omnicode: 'buhid',
    wikicode: 'Buhid_alphabet',
    font: {
      'name': 'Nnoto Sans Buhid',
      'url': 'https://github.com/googlefonts/noto-fonts/blob/main/unhinted/otf/NotoSansBuhid/NotoSansBuhid-Regular.otf'
    },
    language: ['Others'],
    status: ['Living', 'Living: Minor'],
    invented: ['Derived: Brahmi', 'Derived: Pallava'],
    region: ['South East Asian: Insular', 'South East Asian']
  }, {
    label: 'Burmese (Myanmar)',
    value: 'Burmese',
    sscode: 'Mymr',
    ssdesc: 'The Myanmar script was adapted from the Mon script, a descendent of Brahmi, and is found in stone inscriptions dating from the 12th century. It is used for writing the Burmese and Mon languages, both spoken in Myanmar (previously Burma). The two languages differ in how some phonemic values are assigned to letters. The script is also used, with character extensions, to write some of the Karen languages spoken in Myanmar and Thailand.',
    omnicode: 'burmese',
    wikicode: 'Burmese_alphabet',
    font: {
      'name': '',
      'url': ''
    },
    language: ['Sanskrit & Pali', 'Sanskrit', 'Pali'],
    status: ['Living', 'Living: Major'],
    invented: ['Derived: Brahmi', 'Derived: Pallava'],
    region: ['South East Asian: Mainland', 'South East Asian']
  }, {
    label: 'Chakma',
    value: 'Chakma',
    sscode: 'Cakm',
    ssdesc: 'The Chakma script (also called Ojhapath, Ojhopath, or Ajhapath) is used for writing the Chakma language spoken in the Chittagong Hill Tracts of Bangladesh and in the Seven Sister States of Northeastern India. There are slight variations in the forms of the letters used in the two countries. The script is related to Mon Khmer and Myanmar, and many of the letters closely resemble Myanmar letters. It is also being adapted and extended for writing Tanchangya, a related language spoken in Bangladesh.',
    omnicode: 'chakma',
    wikicode: 'Chakma_alphabet',
    font: {
      'name': 'Noto Sans Chakma',
      'url': 'https://cdn.jsdelivr.net/gh/virtualvinodh/aksharamukha/aksharamukha-front/src/statics/chakmapali.otf'
    },
    language: ['Only Pali', 'Pali'],
    status: ['Living', 'Living: Minor'],
    invented: ['Derived: Brahmi', 'Derived: Pallava'],
    region: ['South East Asian: Mainland', 'South East Asian']
  }, {
    label: 'Cham',
    value: 'Cham',
    sublabel: 'Beta',
    sscode: 'Cham',
    ssdesc: 'The Cham script is a Brahmi-derived abugida used for writing the Cham language. There are two major dialects of Cham, spoken collectively by about 230,000 people in two isolated groups in Vietnam and Cambodia, both of which once had a thriving literary tradition dating from the 8th century. The Cambodian Cham population used to be much larger',
    omnicode: 'cham',
    wikicode: 'Cham_alphabet',
    font: {
      'name': 'Noto Sans Cham',
      'url': 'https://cdn.jsdelivr.net/gh/googlei18n/noto-fonts/unhinted/NotoSansCham-Regular.ttf'
    },
    language: ['Others'],
    status: ['Living', 'Living: Minor'],
    invented: ['Derived: Brahmi', 'Derived: Pallava'],
    region: ['South East Asian: Mainland', 'South East Asian']
  }, {
    label: 'Devanagari',
    value: 'Devanagari',
    sscode: 'Deva',
    ssdesc: 'Devanagari is a Northern Brahmic script related to many other South Asian scripts including Gujarati, Bengali, and Gurmukhi, and, more distantly, to a number of South-East Asian scripts including Thai, Balinese, and Baybayin. The script is used for over 120 spoken Indo-Aryan languages, including Hindi, Nepali, Marathi, Maithili, Awadhi, Newari and Bhojpuri. It is also used for writing Classical Sanskrit texts.',
    omnicode: 'devanagari',
    wikicode: 'Devanagari',
    font: {
      'name': 'Noto Sans Devanagari',
      'url': 'https://github.com/googlefonts/noto-fonts/blob/main/unhinted/otf/NotoSansDevanagari/NotoSansDevanagari-Regular.otf'
    },
    language: ['Sanskrit & Pali', 'Sanskrit', 'Pali'],
    status: ['Living', 'Living: Major'],
    invented: ['Derived: Brahmi'],
    region: ['North Indic', 'Indic']
  }, {
    label: 'Dives Akuru',
    value: 'DivesAkuru',
    sscode: 'Diak',
    ssdesc: 'Dives Akuru (literally “island letters”) was used for writing the Maldivian language prior to the adoption of the Thaana script for this purpose. Dives Akuru descended from the southern Brahmi family of scripts. The script in its latest form developed around the 14th century, and was widely used until the early 18th century, when it began to be supplanted by the Thaana script.',
    omnicode: 'dhivesakuru',
    wikicode: 'Dhives_Akuru',
    font: {
      'name': 'Noto Serif DivesAkuru',
      'url': 'https://cdn.jsdelivr.net/gh/notofonts/notofonts.github.io/fonts/NotoSerifDivesAkuru/hinted/ttf/NotoSerifDivesAkuru-Regular.ttf'
    },
    language: ['Sanskrit & Pali', 'Sanskrit', 'Pali', 'Others'],
    status: ['Extinct', 'Extinct: Pre-Modern'],
    invented: ['Derived: Brahmi', 'Derived: Pallava'],
    region: ['South Asian: Other', 'Indic']
  }, {
    label: 'Dogra',
    value: 'Dogra',
    sscode: 'Dogr',
    wikidesc: 'Dogri script is the original script of the Dogri language. It is very close to the Takri script.',
    omnicode: '',
    wikicode: 'Dogri_script',
    font: {
      'name': 'Noto Serif Dogra',
      'url': 'https://github.com/googlefonts/noto-fonts/tree/master/unhinted/otf/NotoSerifDogra'
    },
    language: ['Sanskrit & Pali', 'Sanskrit', 'Pali'],
    status: ['Extinct', 'Extinct: Pre-Modern'],
    invented: ['Derived: Brahmi'],
    region: ['North Indic', 'Indic']
  }, {
    label: 'Gondi (Gunjala)',
    value: 'GunjalaGondi',
    sscode: 'Gong',
    ssdesc: 'The Gunjala Gondi script, also known as Koytura Gunjala Lipi, is named after the village of Gunjala in the Indian state of Telangana (formerly part of Andhra Pradesh) where manuscripts written in the script were recently found. The script is used to write the Gondi language and is distinct from the Masaram Gondi script designed in 1928 by Munshi Mangal Singh Masaram.\nGunjala Gondi manuscripts have been dated to 1750 and reference events as early as the 6th and 7th centuries. The script is cursive, hand-written sources showing syllables of a word connected using pen strokes. It does not appear to be genetically related to other scripts, although it strongly resembles the Modi script in appearance and style.',
    omnicode: '',
    wikicode: 'Gunjala_Gondi_Lipi',
    font: {
      'name': 'Noto Sans Gunjala Gondi',
      'url': 'https://github.com/googlefonts/noto-fonts/tree/master/unhinted/otf/NotoSansGunjalaGondi'
    },
    language: ['Others'],
    status: ['Living', 'Living: Minor'],
    invented: ['Derived: Brahmi'],
    region: ['North Indic', 'Indic']
  }, {
    label: 'Gondi (Masaram)',
    value: 'MasaramGondi',
    sscode: 'Gonm',
    ssdesc: 'The Gondi language belongs to the Central Dravidian group and is spoken by about 2 million people in the South Indian states of Madhya Pradesh, Gujarat, Andhra Pradesh, Maharashtra and Chhattisgarh. The language is usually written in the  Devanagari or  Telugu scripts, but, in 1928, Munshi Mangal Singh Masaram designed a script specifically for the Gondi language. An older script for writing Gondi,  Gunjala Gondi, is being revived in some places.',
    omnicode: '',
    wikicode: 'Gondi_writing',
    font: {
      'name': 'Noto Sans Masaram Gondi',
      'url': 'https://github.com/googlefonts/noto-fonts/tree/master/unhinted/otf/NotoSansMasaramGondi'
    },
    language: ['Sanskrit & Pali', 'Sanskrit', 'Pali', 'Others'],
    status: ['Living', 'Living: Minor'],
    invented: ['Invented'],
    region: ['North Indic', 'Indic']
  }, {
    label: 'Grantha',
    value: 'Grantha',
    sscode: 'Gran',
    ssdesc: '',
    wikicode: 'Grantha_script',
    wikidesc: 'The Grantha script is an Indian script that was widely used between the sixth century and the 20th centuries by Tamil and Malayalam speakers in South India, particularly in Tamil Nadu and Kerala, to write Sanskrit and and is still in restricted use in traditional Vedic schools. Its complete replacement by the modern Tamil script (along with the promotion of Devanagari as a pan-Indian Sanskrit script) led to its gradual disuse and abandonment in Tamil Nadu in the early 20th century, except for specialised Hindu religious literature. Grantha script still lives in Tamil Nadu, albeit in reduced state.',
    omnicode: 'grantha',
    font: {
      'name': 'Noto Sans Grantha',
      'url': 'https://cdn.jsdelivr.net/gh/virtualvinodh/aksharamukha/aksharamukha-front/src/statics/NotoSansGrantha-RegularZach.otf'
    },
    language: ['Sanskrit & Pali', 'Sanskrit', 'Pali'],
    status: ['Living', 'Living: Minor'],
    invented: ['Derived: Brahmi', 'Derived: Pallava'],
    region: ['South Indic', 'Indic']
  }, {
    label: 'Grantha (Pandya)',
    value: 'GranthaPandya',
    sscode: '',
    ssdesc: '',
    wikidesc: 'Pandya Grantha refers to the version of Grantha as used in the Velvikudi inscription. The Velvikudi inscription is an 8th-century bilingual copper-plate inscription from the Pandya kingdom of southern India. Inscribed in Sanskrit and Tamil languages, it records the Pandya king Nedunjadaiyan\'s renewal of a grant of the Velvikudi village to a brahmana.',
    omnicode: '',
    wikicode: 'Velvikudi_inscription',
    font: {
      'name': 'e-Pandya',
      'url': 'https://github.com/virtualvinodh/aksharamukha/blob/master/aksharamukha-front/src/statics/e-Pandya.ttf'
    },
    language: ['Sanskrit & Pali', 'Sanskrit', 'Pali'],
    status: ['Extinct', 'Extinct: Ancient'],
    invented: ['Derived: Brahmi', 'Derived: Pallava'],
    region: ['South Indic', 'Indic']
  }, {
    label: 'Gujarati',
    value: 'Gujarati',
    sscode: 'Gujr',
    ssdesc: 'The Gujarati script is used for writing the Gujarati and Chodri languages, together spoken by almost 47 million people. It is also used alongside the Devanagari script for writing a number of languages used by the Bhil people, one of India\'s largest indigenous groups. The script is related to Devanagari, with modifications to some of the letters, and without the headstroke which characterizes most of the Nagari scripts. The loss of the headstroke reflects the script\'s origins in informal writing; until the mid-19th century it was used primarily for bookkeeping and personal correspondence',
    omnicode: 'gujarati',
    wikicode: 'Gujarati_alphabet',
    font: {
      'name': 'Noto Serif Gujarati',
      'url': 'https://github.com/googlefonts/noto-fonts/blob/main/unhinted/otf/NotoSerifGujarati/NotoSerifGujarati-Regular.otf'
    },
    language: ['Sanskrit & Pali', 'Sanskrit', 'Pali'],
    status: ['Living', 'Living: Major'],
    invented: ['Derived: Brahmi'],
    region: ['West Indic', 'Indic']
  }, {
    label: 'Hanunoo',
    value: 'Hanunoo',
    sscode: 'Hano',
    ssdesc: 'The Hanunóo script is used by the Mangyan people in the mountains of Mindoro, South Philippines, to write the Hanunóo language. Perhaps due to its inaccessible location, it is one of the few indigenous Philippine scripts which has not been replaced by the Latin script. It is of Brahmic origin, descended through Old Kawi, although its history is difficult to trace in detail due to the perishable nature of bamboo, the surface on which it is traditionally inscribed.',
    omnicode: 'hanunoo',
    wikicode: 'Hanunó%27o_alphabet',
    font: {
      'name': 'Noto Sans Hanunoo',
      'url': 'https://github.com/googlefonts/noto-fonts/blob/main/unhinted/otf/NotoSansHanunoo/NotoSansHanunoo-Regular.otf'
    },
    language: ['Others'],
    status: ['Living', 'Living: Minor'],
    invented: ['Derived: Brahmi', 'Derived: Pallava'],
    region: ['South East Asian: Insular', 'South East Asian']
  }, {
    label: 'Hebrew',
    value: 'Hebrew',
    sscode: 'Hebr',
    ssdesc: 'The Hebrew script is primarily used for writing the Hebrew, Samaritan and Yiddish languages. It is also used for writing some varieties of Arabic spoken in North Africa, Iraq and Yemen; the languages of the Jewish communities in Italy and Corfu, Morocco (Berber), Spain and the Caucasus mountains; and the modern Jewish Aramaic languages. Prior to 500 BC the Hebrew language was written in the Paleo-Hebrew script, which was abandoned after the Jewish exile in the 5th century BC in favour of the Aramaic script, from which the current Hebrew script descended. It is commonly called the Hebrew alphabet, after its first two letters aleph and bet, although it is actually an abjad.',
    omnicode: 'hebrew',
    wikicode: 'Hebrew_alphabet',
    font: {
      'name': 'Noto Serif Hebrew',
      'url': 'https://github.com/googlefonts/noto-fonts/blob/main/hinted/ttf/NotoSerifHebrew/NotoSerifHebrew-Regular.ttf'
    },
    language: ['Others'],
    status: ['Living', 'Living: Major'],
    invented: ['Derived: Aramaic'],
    region: ['West Asian']
  }, {
    label: 'Japanese (Hiragana)',
    value: 'Hiragana',
    sscode: 'Hiraga',
    ssdesc: 'The Hiragana script (sometimes called Kiragana) is one of the two Japanese syllabaries, along with Katakana. The script was derived from the cursive forms of Chinese characters around the 8th century; prior to this, Japanese was written entirely in Chinese (kanji letters. Hiragana was originally known as onnade \'women\'s hand\' as it was primarily used by women until the 10th century when it came to be widely used by both genders. The script can be written either horizontally or vertically.',
    omnicode: 'japanese_hiragana',
    wikicode: 'Hiragana',
    font: {
      'name': '',
      'url': ''
    },
    language: ['Others'],
    status: ['Living', 'Living: Major'],
    invented: ['Derived: Han'],
    region: ['East Asian']
  }, {
    label: 'Japanese (Katakana)',
    value: 'Katakana',
    sscode: 'Kana',
    ssdesc: 'Katakana is one of two syllabaries, called kana, used for writing Japanese, along with Hiragana. Until the 8th century, Japanese was written using Chinese characters, called kanji, on which the shapes of the katakana symbols are based. Modern Japanese texts are commonly written in a mixture of kanji, hiragana and katakana. Katakana is typically used for writing loanwords, onomatopoeic and mimetic words, exclamations, and some specialized scientific terminology. It can also be used to imply a conversational tone, to give emphasis to particular words, or to signal irony or a euphemism. Both hiragana and katakana can be written in small type alongside or above kanji words to indicate the pronunciation or meaning of the kanji ',
    omnicode: 'japanese_katakana',
    wikicode: 'Katakana',
    font: {
      'name': '',
      'url': ''
    },
    language: ['Others'],
    status: ['Living', 'Living: Major'],
    invented: ['Derived: Han'],
    region: ['East Asian']
  }, {
    label: 'Javanese',
    value: 'Javanese',
    sscode: 'Java',
    ssdesc: 'Javanese is Indonesia\'s oldest literary language, its literary history being traceable to the C4th. The present Javanese script is a modern variant of Old Kawi, an ancient Brahmic script from which many scripts in the Indonesian archipelago are derived. It is the pre-colonial script of the Javanese language spoken on the Indonesian islands of Java and Bali and is used to write the Tengger and Osing languages, also spoken in Java and Bali. The Javanese script is closely related to the Balinese script, although Javanese contains 4 consonant letters which are absent in the Balinese.',
    omnicode: 'javanese',
    wikicode: 'Javanese_script',
    font: {
      'name': 'Noto Sans Javanese',
      'url': 'https://github.com/googlefonts/noto-fonts/blob/main/unhinted/otf/NotoSansJavanese/NotoSansJavanese-Regular.otf'
    },
    language: ['Sanskrit & Pali', 'Sanskrit', 'Pali'],
    status: ['Living', 'Living: Minor'],
    invented: ['Derived: Brahmi', 'Derived: Pallava'],
    region: ['South East Asian: Insular', 'South East Asian']
  }, {
    label: 'Kaithi',
    value: 'Kaithi',
    sscode: 'Kthi',
    ssdesc: 'The Kaithi script has been used predominantly in the Indian states of Bihar and Uttar Pradesh (but also in other North Indian states and the Nepali terai) for writing a group of Indo-Aryan languages. Kaithi has been used for writing the Bhojpuri, Maghadi, Urdu, Awadhi, Maithili, and Bengali languages since the 16th century. Its use was generally discouraged under British rule in India, except in the state of Bihar, where it was officially sanctioned for use in government offices. The script was widely used until the early 1900s, and there is some evidence that it is still used for personal correspondence in rural areas.',
    omnicode: 'kaithi',
    wikicode: 'Kaithi',
    font: {
      'name': 'Noto Sans Kaithi',
      'url': 'https://github.com/googlefonts/noto-fonts/blob/main/unhinted/otf/NotoSansKaithi/NotoSansKaithi-Regular.otf'
    },
    language: ['Only Pali', 'Pali'],
    status: ['Extinct', 'Extinct: Pre-Modern'],
    invented: ['Derived: Brahmi'],
    region: ['North Indic', 'Indic']
  }, {
    label: 'Kannada',
    value: 'Kannada',
    sscode: 'Knda',
    ssdesc: 'The Kannada script is used for writing the Kannada language spoken by over 35 million people in southern India. It is also used for writing Konkani, a South Indian language with over 3 million speakers, Tulu, with almost 2 million speakers, and a number of south Indian Living: Minor languages including Badaga, Kudiya and Paniya. The script is closely related to Telugu writing; both languages were written using the Old Kanarese script until the 1500s when it diverged into two distinct varieties.',
    omnicode: 'kannada',
    wikicode: 'Kannada_alphabet',
    font: {
      'name': 'Noto Sans Kannada',
      'url': 'https://github.com/googlefonts/noto-fonts/blob/main/unhinted/otf/NotoSansKannada/NotoSansKannada-Regular.otf'
    },
    language: ['Sanskrit & Pali', 'Sanskrit', 'Pali'],
    status: ['Living', 'Living: Major'],
    invented: ['Derived: Brahmi'],
    region: ['South Indic', 'Indic']
  }, {
    label: 'Kawi',
    value: 'Kawi',
    sscode: 'Qa39',
    ssdesc: 'The Kawi script descended from the Grantha script around the 8th century BC and was used across the islands of Borneo, Java, Bali, and Sumatra. The script originated in Java, and as a result is also sometimes called Old Javanese. The Kawi alphabet developed around the 16th century AD into the current Javanese script. This transition was more stylistic than structural; the visual composition of the script changed but the way it worked stayed the same.',
    omnicode: 'kawi',
    wikicode: 'Kawi_script',
    font: {
      'name': 'Noto Sans Kawi',
      'url': 'https://cdn.jsdelivr.net/gh/notofonts/notofonts.github.io/fonts/NotoSansKawi/unhinted/otf/NotoSansKawi-Regular.otf'
    },
    language: ['Sanskrit & Pali', 'Sanskrit', 'Pali'],
    status: ['Extinct', 'Extinct: Ancient'],
    invented: ['Derived: Brahmi', 'Derived: Pallava'],
    region: ['South East Asian: Insular', 'South East Asian']
  }, {
    label: 'Khamti Shan',
    value: 'KhamtiShan',
    sscode: '',
    ssdesc: '',
    omnicode: '',
    wikicode: '',
    miscsrc: '(from <a href="https://www.unicode.org/L2/L2008/08181-n3423r.pdf">L2/08-181</a>)',
    miscdesc: 'Khamti Shan is spoken by 50,000 people in Myanmar and India. The language has a long literary tradition which was lost as people forgot their script. In the last 5 years the script has undergone a resurgence in a new form and after a pilot literacy programme is to be taught throughout the region.',
    font: {
      'name': 'Khamti Regular',
      'url': 'https://cdn.jsdelivr.net/gh/virtualvinodh/aksharamukha/aksharamukha-front/src/statics/Khamti-Regular.otf'
    },
    language: ['Only Pali', 'Pali'],
    status: ['Living', 'Living: Minor'],
    invented: ['Derived: Brahmi', 'Derived: Pallava'],
    region: ['South East Asian: Mainland', 'South East Asian']
  }, {
    label: 'Kharoshthi',
    value: 'Kharoshthi',
    sscode: 'Khar',
    ssdesc: 'Early writing in India is associated with three scripts; Indus (Harrapan), Brahmi and Kharoshthi. The Kharoshthi script descended from Aramaic and was used in what is now Northern Pakistan and Eastern Afghanistan during the 4th or 5th century BC. It was used for about 700 years for writing a group of vernacular middle Indo-Aryan dialects collectively termed \'Prakrit\'. There has been some evidence that local variants of Kharoshthi writing were used for even longer than this along the Silk Route, but these too later died out without leaving any descendants.',
    omnicode: 'kharosthi',
    wikicode: 'Kharosthi',
    font: {
      'name': '',
      'url': ''
    },
    language: ['Sanskrit & Pali', 'Sanskrit', 'Pali'],
    status: ['Extinct', 'Extinct: Ancient'],
    invented: ['Derived: Aramaic'],
    region: ['West Indic', 'Indic']
  }, {
    label: 'Khmer (Cambodian)',
    value: 'Khmer',
    sscode: 'Khmr',
    ssdesc: 'The Khmer script is an abugida, descended from the Brahmic script Pallava. It is used for writing Khmer, the official language of Cambodia. The script is also sometimes used for writing Living: Minor languages in Cambodia, such as Brao and Mnong.',
    omnicode: 'khmer',
    wikicode: 'Khmer_alphabet',
    font: {
      'name': 'Noto Serif Khmer',
      'url': 'https://github.com/googlefonts/noto-fonts/blob/main/unhinted/otf/NotoSerifKhmer/NotoSerifKhmer-Regular.otf'
    },
    language: ['Sanskrit & Pali', 'Sanskrit', 'Pali'],
    status: ['Living', 'Living: Major'],
    invented: ['Derived: Brahmi', 'Derived: Pallava'],
    region: ['South East Asian: Mainland', 'South East Asian']
  }, {
    label: 'Khojki',
    value: 'Khojki',
    sscode: 'Khoj',
    ssdesc: 'Khojki is a Brahmi-derived abugida related to the Sharada script. It is used by the Khoja people - an ethnic group of largely Ismaili Shia Muslims - for recording religious literature in the Sindhi language. Khojki has been used since at least the 16th century, originally for manuscripts, but later in printed form also. The script has also been used to write other South Asian languages; however, in recent years its use has declined markedly.',
    omnicode: 'khojki',
    wikicode: 'Khojki_script',
    font: {
      'name': 'Noto Sans Khojki',
      'url': 'https://github.com/googlefonts/noto-fonts/blob/main/unhinted/otf/NotoSansKhojki/NotoSansKhojki-Regular.otf'
    },
    language: ['Others'],
    status: ['Living', 'Living: Minor'],
    invented: ['Derived: Brahmi'],
    region: ['West Indic', 'Indic']
  }, {
    label: 'Khom Thai',
    value: 'KhomThai',
    sscode: '',
    ssdesc: '',
    miscdesc: 'This is an old Thai script sometimes found in religious documents, and still commonly used for labeling amulets, magical pictures (yantras) and Thai tattoos. It it mainly used for writing in the Pali language. Khom Thai has clear similarities with the Khmer script of Cambodia.',
    miscsrc: '(from <a href="http://www.skyknowledge.com/khomthai.htm"> Skyknowledge</a>)',
    omnicode: '',
    wikicode: '',
    font: {
      'name': 'Patimokkha',
      'url': 'https://github.com/virtualvinodh/aksharamukha/blob/master/aksharamukha-front/src/statics/Patimokkha.otf'
    },
    language: ['Sanskrit & Pali', 'Sanskrit', 'Pali'],
    status: ['Living', 'Living: Minor'],
    invented: ['Derived: Brahmi', 'Derived: Pallava'],
    region: ['South East Asian: Mainland', 'South East Asian']
  }, {
    label: 'Khudawadi',
    value: 'Khudawadi',
    sscode: 'Sind',
    ssdesc: 'The Khudawadi (also called Sindhi) script was used for writing the Indo-Aryan Sindhi language spoken by almost 20 million people in the Sindh province of Pakistan and in India. It is no longer used. It was used by traders and merchants to record their information and rose to importance as the script began to be used to record information kept secret from other groups and kingdoms.',
    omnicode: 'sindhi',
    wikicode: 'Khudabadi_script',
    font: {
      'name': 'Nodo Sans Khudawadi',
      'url': 'https://github.com/googlefonts/noto-fonts/blob/main/unhinted/otf/NotoSansKhudawadi/NotoSansKhudawadi-Regular.otf'
    },
    language: ['Only Pali', 'Pali'],
    status: ['Extinct', 'Extinct: Pre-Modern'],
    invented: ['Derived: Brahmi'],
    region: ['West Indic', 'Indic']
  }, {
    label: 'Lao',
    value: 'Lao',
    sscode: 'Laoo',
    ssdesc: 'The Lao script is used for writing the Lao language, and is also the official script of a number of Living: Minor languages in Laos. The Lao language is closely related to Thai; there is a considerable Lao-speaking population in Thailand who write their language with the Thai script. However, the Lao script underwent a number of reforms which caused significant divergence from the Thai script.',
    omnicode: 'lao',
    wikicode: 'Lao_alphabet',
    font: {
      'name': '',
      'url': ''
    },
    language: ['Others'],
    status: ['Living', 'Living: Major'],
    invented: ['Derived: Brahmi', 'Derived: Pallava'],
    region: ['South East Asian: Mainland', 'South East Asian']
  }, {
    label: 'Lao (Pali)',
    value: 'LaoPali',
    sscode: '',
    ssdesc: '',
    font: {
      'name': 'Lanexang Mon4',
      'url': 'https://cdn.jsdelivr.net/gh/virtualvinodh/aksharamukha/aksharamukha-front/src/statics/Lanexang_Mon4.otf'
    },
    language: ['Only Pali', 'Pali'],
    status: ['Living', 'Living: Minor'],
    invented: ['Derived: Brahmi', 'Derived: Pallava'],
    region: ['South East Asian: Mainland', 'South East Asian'],
    miscsrc: '',
    miscdesc: 'Lao (Pali) is the extended version of the Lao script to faithfully represent Pali and Sanskrit. Lao lacks several characters that are required to accurately express the phonology of those languages (unlike its neighbhouring scripts like Thai/Khmer). Therefore, Modern Lao cannot faithfully represent Pali words, and by extension, cannot transcript religious texts faithfully. In the 1930s, an additional set of characters were proposed to support Pali/Sanskrit by filling in the missing gaps. This also allows an etymological orthography for Lao (similar to Thai. The current Lao orthography is phonemic). But the addition met with little widespread support and finally by 1975, these additional characters were mostly out of use. But there is a revived interest in the characters. '
  }, {
    label: 'Lepcha',
    value: 'Lepcha',
    sscode: 'Lepc',
    ssdesc: 'The Lepcha script is also called the Róng script - Lepcha people call themselves Róngkup, children of the Róng. It is used for writing the Lepcha language, a Tibeto-Burman language spoken by about 52,800 people in India, Nepal and Bhutan. The script is derived from Tibetan writing, probably motivated by Buddhist missionary activity in the 1700s. Early manuscripts were written in vertical columns but later and current texts are written horizontally. Many letters, when rotated back to their previous vertical position, closely resemble their Tibetan counterparts.',
    omnicode: 'lepcha',
    wikicode: 'Lepcha_script',
    font: {
      'name': 'Noto Sans Lepcha',
      'url': 'https://cdn.jsdelivr.net/gh/googlei18n/noto-fonts/unhinted/NotoSansLepcha-Regular.ttf'
    },
    language: ['Others'],
    status: ['Living', 'Living: Minor'],
    invented: ['Derived: Brahmi'],
    region: ['East Indic', 'Indic']
  }, {
    label: 'Limbu',
    value: 'Limbu',
    sscode: 'Limb',
    ssdesc: 'The Limbu script (also called Kiranti, Sirijonga or Sirijanga script) is used by about 400,000 people for writing the Limbu language spoken in Nepal and northern India. The Limbu language is also written in the Devanagari script. The origins of the script are unknown; it is evident from its structure that it is of Brahmic derivation, and appears to be closely related to the Lepcha script. Limbu folklore relates that in the 9th century the Limbu king Sirijanga prayed to the goddess Saravati for wisdom as to how to devise a script for his people, and in response she revealed the story of creation to him, written in the script.',
    omnicode: 'limbu',
    wikicode: 'Limbu_alphabet',
    font: {
      'name': 'Noto Sans Limbu',
      'url': 'https://cdn.jsdelivr.net/gh/googlei18n/noto-fonts/unhinted/NotoSansLimbu-Regular.ttf'
    },
    language: ['Others'],
    status: ['Living', 'Living: Minor'],
    invented: ['Derived: Brahmi'],
    region: ['North Indic', 'Indic']
  }, {
    label: 'Makasar',
    value: 'Makasar',
    sscode: 'Maka',
    ssdesc: 'Makasar (also called Old Makassarese) is a left-to-right, ultimately Brahmi-derived abugida that was used to represent the Makassarese language spoken in South Sulawesi through the 17th century. It is often described as the "bird script", potentially based on local legends that depict birds as the carriers of communication or based on graphical resemblances of some of the characters to various bird postures.',
    omnicode: '',
    wikicode: 'Makasar_script',
    font: {
      'name': 'Salapa Jangang',
      'url': 'https://aksaradinusantara.com/fonta/font/Salapa%20Jangang?key=aa166f01886b8b5271fd984ac79a2f5a'
    },
    language: ['Others'],
    status: ['Living', 'Living: Minor'],
    invented: ['Derived: Brahmi', 'Derived: Pallava'],
    region: ['South East Asian: Insular', 'South East Asian']
  }, {
    label: 'Malayalam',
    value: 'Malayalam',
    sscode: 'Mlym',
    ssdesc: 'The Malayalam script is used for writing the Malayalam language, the official language of the Indian state of Kerala, and a number of Living: Minor languages spoken in India. Until the 16th century Malayalam was written in the vattezhuthu script, a Brahmic script which developed alongside Grantha writing, from which the modern Malayalam script descended.',
    omnicode: 'malayalam',
    wikicode: 'Malayalam_script',
    font: {
      'name': 'Noto Sans Malayalam',
      'url': 'https://github.com/googlefonts/noto-fonts/blob/main/unhinted/otf/NotoSansMalayalam/NotoSansMalayalam-Regular.otf'
    },
    language: ['Sanskrit & Pali', 'Sanskrit', 'Pali'],
    status: ['Living', 'Living: Major'],
    invented: ['Derived: Brahmi', 'Derived: Pallava'],
    region: ['South Indic', 'Indic']
  }, {
    label: 'Mahajani',
    value: 'Mahajani',
    sscode: 'Mahj',
    ssdesc: 'The Mahajani script was a commercial script (महाजन mahajana is the Hindi word for ‘banker’) used across Northern India until the middle of the 20th century. It was used by speakers of a number of languages, including Hindi, Marwari and Punjabi, and was taught in special merchant- and business-focused schools alongside other skills required for conducting business.',
    omnicode: '',
    wikicode: 'Mahajani',
    font: {
      'name': 'Noto Sans Mahajani',
      'url': 'https://github.com/googlefonts/noto-fonts/blob/main/unhinted/otf/NotoSansMahajani/NotoSansMahajani-Regular.otf'
    },
    language: ['Others'],
    status: ['Extinct', 'Extinct: Pre-Modern'],
    invented: ['Derived: Brahmi'],
    region: ['North Indic', 'Indic']
  }, {
    label: 'Marchen',
    value: 'Marchen',
    sscode: 'Marc',
    ssdesc: 'Marchen, also called the Greater Mar or the Greater Beautiful script, is one of a group of related scripts used in the Tibetan Bön religion. It is used for writing the Zhang-zhung language, now preserved only in Bön literature, and occasionally for writing Tibetan. This script is not to be confused with the Marchung script, a related but separate script about which little is known beyond that it has been used in some other Bön texts.',
    omnicode: '',
    wikicode: 'Zhang-Zhung_language#Scripts',
    font: {
      'name': 'Noto Sans Marchen',
      'url': 'https://github.com/googlefonts/noto-fonts/tree/master/unhinted/otf/NotoSansMarchen'
    },
    language: ['Others'],
    status: ['Extinct', 'Extinct: Medieval'],
    invented: ['Derived: Brahmi'],
    region: ['Central Asian']
  }, {
    label: 'Meetei Mayek (Manipuri)',
    value: 'MeeteiMayek',
    sscode: 'Mtei',
    ssdesc: 'The Meetei Mayek script is used for writing the Meetei (also called Manipuri) language spoken by about 1,400,000 people in India, primarily the state of Manipur, Bangladesh, and Myanmar. The language has been largely written in the Bengali script since the 18th century, but Meetei Mayek writing has experienced a resurgence in the last hundred years. The origins of the script are controversial, most of the early documents having been destroyed in the 18th century. Some sources claim it has been used for almost 4,000 years, and others suggest it derived from the Bengali script as recently as the 17th century.',
    omnicode: 'manipuri',
    wikicode: 'Meitei_script',
    font: {
      'name': 'Noto Sans Meetei Mayek',
      'url': 'https://cdn.jsdelivr.net/gh/googlei18n/noto-fonts/unhinted/NotoSansMeeteiMayek-Regular.ttf'
    },
    language: ['Sanskrit & Pali', 'Sanskrit', 'Pali'],
    status: ['Living', 'Living: Minor'],
    invented: ['Derived: Brahmi'],
    region: ['East Indic', 'Indic']
  }, {
    label: 'Modi',
    value: 'Modi',
    sscode: 'Modi',
    ssdesc: 'The Modi script was used from the 17th century until the 1950s for writing Marathi, the state language of the Indian state of Maharashtra. The script developed from a cursive form of Devanagari, so shares a number of features with, and is visually similar to, that script. Modi is considered by many to be extinct, having been replaced by Devanagari after the 1950s. Efforts are underway to preserve knowledge of the script before the last generation of frequent users dies.',
    omnicode: 'modi',
    wikicode: 'Modi_script',
    font: {
      'name': 'Modi',
      'url': 'https://github.com/googlefonts/noto-fonts/blob/main/unhinted/otf/NotoSansModi/NotoSansModi-Regular.otf'
    },
    language: ['Sanskrit & Pali', 'Sanskrit', 'Pali'],
    status: ['Extinct', 'Extinct: Pre-Modern'],
    invented: ['Derived: Brahmi'],
    region: ['North Indic', 'Indic']
  }, {
    label: 'Mon',
    value: 'Mon',
    sscode: '',
    ssdesc: '',
    omnicode: 'mon',
    miscsrc: '(from Omniglot)',
    miscdesc: 'Mon is an Austroasiatic language spoken in parts of Myanmar/Burma and Thailand. In 2004 there were 850,000 speakers, mainly in Mon State, and also in the Tanintharyi Region and Kayin State in southern Myanmar.',
    font: {
      'name': '',
      'url': ''
    },
    language: ['Sanskrit & Pali', 'Sanskrit', 'Pali'],
    status: ['Living', 'Living: Minor'],
    invented: ['Derived: Brahmi', 'Derived: Pallava'],
    region: ['South East Asian: Mainland', 'South East Asian']
  }, {
    label: 'Mongolian (Ali Gali)',
    value: 'Mongolian',
    sscode: '',
    ssdesc: '',
    miscsrc: '(from <a href="https://en.wikipedia.org/wiki/Galik_alphabet">Wikipedia</a>)',
    miscdesc: 'Mongolian (Ali Gali) is an extension to the traditional Mongolian script. It was created in 1587 by the translator and scholar Ayuush Güüsh, inspired by the third Dalai Lama, Sonam Gyatso. He added extra characters for transcribing Tibetan and Sanskrit terms when translating religious texts, and later also from Chinese. ',
    omnicode: 'galik',
    wikicode: 'Galik_alphabet',
    font: {
      'name': 'MQG8F02',
      'url': 'https://cdn.jsdelivr.net/gh/virtualvinodh/aksharamukha/aksharamukha-front/src/statics/MQG8F02.ttf'
    },
    language: ['Sanskrit & Pali', 'Sanskrit', 'Pali'],
    status: ['Extinct', 'Extinct: Medieval'],
    invented: ['Derived: Aramaic'],
    region: ['Central Asian']
  }, {
    label: 'Mro',
    value: 'Mro',
    sscode: 'Mroo',
    omnicode: 'mro',
    ssdesc: 'The Mro (also called Mru or Murong) script is used for writing the Mro language, spoken in the Chittagong Hill Tracts of Bangladesh. It is estimated that the literacy rate among the Mro in their own script is greater than 80%. Education in the script is available up to grade 3. Some textbooks claim that Menlay Murang based the script on Roman, Burmese and Chinese characters, although others state that any similarity to other scripts is purely coincidental. Sources agree, however, that the script bears no natural genetic relationship with any existing script.',
    wikicode: 'Mru_language#Script',
    font: {
      'name': 'Noto Sans Mro',
      'url': 'https://github.com/googlefonts/noto-fonts/tree/master/unhinted/otf/NotoSansMro'
    },
    language: ['Others'],
    status: ['Living', 'Living: Minor'],
    invented: ['Invented'],
    region: ['East Indic', 'Indic']
  }, {
    label: 'Multani',
    value: 'Multani',
    sscode: 'Mult',
    ssdesc: 'The Multani script is used for writing the Saraiki language, spoken in the Punjab regions of India and Pakistan, and in northern Sindh in Pakistan. It is a commercial script, used mainly by merchants. Structurally, the script has characteristics of an abjad; vowels are generally not written unless they appear at the start of a word or in one-syllable V or CV clusters.',
    omnicode: '',
    wikicode: 'Multani_alphabet',
    font: {
      'name': 'Multani',
      'url': 'https://github.com/googlefonts/noto-fonts/blob/main/unhinted/otf/NotoSansMultani/NotoSansMultani-Regular.otf'
    },
    language: ['Others'],
    status: ['Extinct', 'Extinct: Pre-Modern'],
    invented: ['Derived: Brahmi'],
    region: ['West Indic', 'Indic']
  }, {
    label: 'Nandinagari',
    value: 'Nandinagari',
    sscode: 'Nand',
    ssdesc: 'The Nandinagari script was used in South India between the 8th and 19th centuries for writing manuscripts and inscriptions relating to philosophy, science and the arts in the Sanskrit language. The script is an abugida, closely related to the  Devanagari script. The character repertoires of both scripts are identical, and the shapes of many characters are similar. However, the script is distinctive in its lack of a connecting headline and in the shapes of most conjuncts and some individual characters',
    omnicode: 'nandinagari',
    wikicode: 'Nandinagari',
    font: {
      'name': 'Noto Sans Nandinagari',
      'url': 'https://fonts.google.com/noto/specimen/Noto+Sans+Nandinagari'
    },
    language: ['Sanskrit & Pali', 'Sanskrit', 'Pali'],
    status: ['Extinct', 'Extinct: Pre-Modern'],
    invented: ['Derived: Brahmi'],
    region: ['South Indic', 'Indic']
  }, {
    label: 'Newa (Nepal Bhasa)',
    value: 'Newa',
    sscode: 'Newa',
    ssdesc: 'The Newa script, also known as Newar, or Prachalit (meaning popular), is used primarily for writing Newari, a Tibeto-Burman language of Nepal (also called Nepal-Bhasha, literally \'Nepal-Language\', but not to be confused with Nepali). This script has also been used, extensively in some cases, for writing the Sanskrit, Nepali, Hindi, Bengali, and Maithili languages. The script is also known as Nepalakshar, Newah Akhah and Pachumol. It is one of six scripts subsumed under the name Nepal-Lipi, literally \'Nepal-Script\'',
    omnicode: '',
    wikicode: 'Prachalit_Nepal_alphabet',
    font: {
      'name': 'Noto Sans Newa',
      'url': 'https://github.com/googlefonts/noto-fonts/blob/main/unhinted/otf/NotoSansNewa/NotoSansNewa-Regular.otf'
    },
    language: ['Sanskrit & Pali', 'Sanskrit', 'Pali'],
    status: ['Living', 'Living: Minor'],
    invented: ['Derived: Brahmi'],
    region: ['North Indic', 'Indic']
  }, {
    label: 'Old Persian',
    value: 'OldPersian',
    sscode: 'Xpeo',
    ssdesc: 'Old Persian cuneiform was the main script for writing the Old Persian language from 525-330 BC. Visually it resembles Sumero-Akkadian cuneiform; most of the letters are arrangements of between two and five horizontal, vertical or angle-shaped wedges. However, there appears to be no derivational relationship between the sound-to-symbol mapping of individual letters in the two scripts, nor has any other script been found which links the forms of the scripts. For this reason, Old Persian cuneiform is generally believed to have been an independent invention.',
    omnicode: 'opcuneiform',
    wikicode: 'Old_Persian_cuneiform',
    font: {
      'name': 'Noto Sans Old Persian',
      'url': 'https://github.com/googlefonts/noto-fonts/blob/main/unhinted/otf/NotoSansOldPersian/NotoSansOldPersian-Regular.otf'
    },
    language: ['Others'],
    status: ['Extinct', 'Extinct: Ancient'],
    invented: ['Derived: Cuneiform'],
    region: ['West Asian']
  }, {
    label: 'Oriya (Odia)',
    value: 'Oriya',
    sscode: 'Orya',
    ssdesc: 'The Odia (formerly Oriya) script is used for writing the Odia language, the official language of the Indian state of Orissa, as well as a number of Dravidian and Munda Living: Minor languages spoken in that region. It is also used in Orissa for transcribing Sanskrit texts. The earliest inscriptions in the Odia language have been dated to 1051 AD, written in the Kalinga script from which modern Odia writing is derived.',
    omnicode: 'oriya',
    wikicode: 'Odia_alphabet',
    font: {
      'name': '',
      'url': ''
    },
    language: ['Sanskrit & Pali', 'Sanskrit', 'Pali'],
    status: ['Living', 'Living: Major'],
    invented: ['Derived: Brahmi'],
    region: ['East Indic', 'Indic']
  }, {
    label: 'Pallava',
    value: 'Pallava',
    miscsrc: '(From Wikipedia)',
    miscdesc: 'The Pallava script or Pallava Grantha, is a Brahmic script, named after the Pallava dynasty of South India, attested since the 4th century AD. In India, Pallava script evolved into the Grantha script. Pallava spread to Southeast Asia and evolved into local scripts such as Balinese, Baybayin, Burmese, Javanese, Kawi, Khmer, Lanna, Lao, Mon, New Tai Lue alphabet, Sundanese, and the Thai',
    omnicode: 'pallava',
    wikicode: 'Pallava_sript',
    font: {
      'name': 'Purnawarman',
      'url': 'https://aksaradinusantara.com/fonta/aksara/pallawa'
    },
    language: ['Sanskrit & Pali', 'Sanskrit', 'Pali'],
    status: ['Extinct', 'Extinct: Ancient'],
    invented: ['Derived: Brahmi', 'Derived Pallava'],
    region: ['South Indic']
  }, {
    label: 'PhagsPa',
    value: 'PhagsPa',
    sscode: 'Phag',
    ssdesc: 'The \'Phags-pa script, called hor gsar yig in Tibetan and dörbelǰin üsüg in Mongolian, is named for its creator, the Tibetan sage \'Phags-pa Lama. \'Phags-pa was appointed \'National Perceptor\' in 1264 by the emperor Khubila Khan, by whom he was ordered to devise a script in which all the languages of his empire - including Tibetan, Uyghur, Mongolian and Chinese - could be written. The new script met with limited success and only scanty accounts of its creation exist in the biographies written by \'Phags pa\'s disciples.',
    omnicode: 'phagspa',
    wikicode: '%27Phags-pa_script',
    font: {
      'name': '',
      'url': ''
    },
    language: ['Sanskrit & Pali', 'Sanskrit', 'Pali'],
    status: ['Extinct', 'Extinct: Medieval'],
    invented: ['Derived: Brahmi'],
    region: ['Central Asian']
  }, {
    label: 'Punjabi (Gurmukhi)',
    value: 'Gurmukhi',
    sscode: 'Guru',
    ssdesc: 'The Gurmukhi script is used primarily by followers of the Sikh religion in India to write the Punjabi language. Gurmukhi writing is historically derived from Brahmi, but its present form was developed in the 16th century by Guru Angad, successor to the founder of the Sikh religion, Guru Nanak. The word Gurmukhi means \'from the mouth of the guru\'. Muslims in the Pakistani Punjab write Punjabi in the Persian script; use of the Persian script for writing Punjabi is called Shahmukhi.',
    omnicode: 'punjabi',
    wikicode: 'Gurmukhi',
    font: {
      'name': '',
      'url': ''
    },
    language: ['Only Pali', 'Pali'],
    status: ['Living', 'Living: Major'],
    invented: ['Derived: Brahmi'],
    region: ['West Indic', 'Indic']
  }, {
    label: 'Ranjana (Lantsa)',
    value: 'Ranjana',
    sscode: 'Qabb',
    ssdesc: 'The Ranjana script is used for writing the Newari language of Nepal. This language is also called Nepal-Bhasha. The script was derived from Brahmi via the Old Nepal script, both of which are now extinct, around the 12th century AD. It has been used since that time in a gradually decreasing capacity, but is still used for producing Hindu and Buddhist religious texts and taught in Buddhist monasteries. It is also used as a decorative script in much the same way as calligraphy is used in the West.',
    omnicode: 'ranjana',
    wikicode: 'Ranjana_alphabet',
    font: {
      'name': 'Ranjana Unicode',
      'url': 'https://github.com/virtualvinodh/aksharamukha/blob/master/aksharamukha-front/src/statics/RanjanaUNICODE1.0.TTF'
    },
    language: ['Sanskrit & Pali', 'Sanskrit', 'Pali'],
    status: ['Living', 'Living: Minor'],
    invented: ['Derived: Brahmi'],
    region: ['North Indic', 'Indic']
  }, {
    label: 'Rejang',
    value: 'Rejang',
    sscode: 'Rjng',
    ssdesc: 'The Rejang (also known as the Kaganga or Redjang) script is used to write the 5 Rejang dialects spoken collectively by about 200-250,000 people on the Indonesian island of Sumatra, and the Kerinci and Lampung languages of the same region. The script is thought to pre-date the introduction of Islam in the 12th century to the area, although the earliest attested document has been dated to the mid C18th. It is traditionally written on bamboo, buffalo horn, bark or copper plates',
    omnicode: 'redjang',
    wikicode: 'Rejang_script',
    font: {
      'name': 'Noto Sans Rejang',
      'url': 'https://github.com/googlefonts/noto-fonts/blob/main/unhinted/otf/NotoSansRejang/NotoSansRejang-Regular.otf'
    },
    language: ['Others'],
    status: ['Living', 'Living: Minor'],
    invented: ['Derived: Brahmi', 'Derived: Pallava'],
    region: ['South East Asian: Insular', 'South East Asian']
  }, {
    label: 'Rohingya (Hanifi)',
    value: 'HanifiRohingya',
    sscode: 'Rohg',
    ssdesc: 'Hanifi Rohingya is one of four scripts used for writing the Rohingya language, spoken by about 1,500,000 people, mostly in Myanmar. There are also significant Rohingya-speaking refugee communities in Bangladesh and Thailand. The Rohingya language has been written in the  Arabic script for over 200 years, during which time it has also been written in  Myanmar and a modified Latin script known as Rohingyalish. Around 1960, Rohingya scholars began to see a need for a unique writing system which reflected their own language, and Molana Hanif created the Hanifi Rohingya script.',
    omnicode: 'rohingya',
    wikicode: 'Hanifi_Rohingya_script',
    font: {
      'name': 'Noto Sans HanifiRohingya',
      'url': 'https://github.com/googlefonts/noto-fonts/blob/main/unhinted/otf/NotoSansHanifiRohingya/NotoSansHanifiRohingya-Regular.otf'
    },
    language: ['Others'],
    status: ['Living', 'Living: Minor'],
    invented: ['Invented'],
    region: ['South East Asian: Mainland', 'South East Asian']
  }, {
    label: 'Santali (Ol Chiki)',
    value: 'Santali',
    sscode: 'Olck',
    ssdesc: 'The Ol Chiki script (also called Ol Cemet, Ol, or Santali) was created by Pandit Raghunath Murmu in the 1920s for writing the Santali language, which is spoken by just under 6 million people in India, Bangladesh and Nepal. The Santali language is also written in the Devanagari, Bengali, Oriya and Roman scripts, and most people who are literate in Ol Chiki are also literate in at least one of the others. For this reason, not all Santali speakers are agreed as to the necessity of a unique script for their language, but despite competition from surrounding scripts, Ol Chiki is becoming more widely accepted.',
    omnicode: 'santali',
    wikicode: 'Ol_Chiki_script',
    font: {
      'name': 'Noto Sans Old Chiki',
      'url': 'https://github.com/googlefonts/noto-fonts/blob/main/unhinted/otf/NotoSansOlChiki/NotoSansOlChiki-Regular.otf'
    },
    language: ['Only Pali', 'Pali'],
    status: ['Living', 'Living: Minor'],
    invented: ['Invented'],
    region: ['East Indic', 'Indic']
  }, {
    label: 'Saurashtra',
    value: 'Saurashtra',
    sscode: 'Saur',
    ssdesc: 'The Saurashtra language is spoken by approximately 130,000 people in Southern India. The Saurashtra script is of Brahmic origin, although its exact derivation is not known. Unlike most of the surrounding Dravidian languages, Saurashtra is Indo-European. The language has its own script of the same name, but is also written in the Tamil, Telugu, and Devanagari scripts. There is some debate amongst speakers of the Saurashtra language as to which script is best suited to the language.',
    omnicode: 'saurashtra',
    wikicode: 'Saurashtra_alphabet',
    font: {
      'name': 'Noto Sans Saurashtra',
      'url': 'https://github.com/googlefonts/noto-fonts/blob/main/unhinted/otf/NotoSansSaurashtra/NotoSansSaurashtra-Regular.otf'
    },
    language: ['Sanskrit & Pali', 'Sanskrit', 'Pali'],
    status: ['Living', 'Living: Minor'],
    invented: ['Invented'],
    region: ['South Indic', 'Indic']
  }, {
    label: 'Siddham',
    value: 'Siddham',
    sscode: 'Sidd',
    ssdesc: 'Siddham is an extinct Brahmic script which was used between 600-1200 AD for writing Sanskrit. The script travelled along the silk road to China, Japan and Korea in the form of Buddhist tantra texts. An adaptation of the script is still used in some esoteric Buddhist schools in Japan, where it is called Bonji.',
    omnicode: 'siddham',
    wikicode: 'Siddhaṃ_script',
    font: {
      'name': 'Noto Sans Siddham',
      'url': 'https://github.com/googlefonts/noto-fonts/blob/main/unhinted/otf/NotoSansSiddham/NotoSansSiddham-Regular.otf'
    },
    language: ['Sanskrit & Pali', 'Sanskrit', 'Pali'],
    status: ['Living', 'Living: Minor'],
    invented: ['Derived: Brahmi'],
    region: ['East Asian']
  }, {
    label: 'Shahmukhi',
    value: 'Shahmukhi',
    sscode: '',
    ssdesc: '',
    wikicode: 'Shahmukhi_alphabet',
    wikidesc: 'Shahmukhi (lit.\'from the mouth of the Shah\') is a modified Perso-Arabic alphabet used by Punjabi Muslims (primarily in Punjab, Pakistan) to write the Punjabi language.It is generally written in the Nastaʿlīq calligraphic hand, which is also used for Urdu. Perso-Arabic is one of two scripts used for Punjabi, the other being Gurmukhi, used by Sikhs and Hindus in Punjab, India. It is also used as the main alphabet to write Pahari–Pothwari in Azad Kashmir and Jammu and Kashmir',
    omnicode: 'punjabi',
    font: {
      'name': 'Noto Sans Nastaliq Urdu',
      'url': 'https://github.com/googlefonts/noto-fonts/blob/main/unhinted/otf/NotoNastaliqUrdu/NotoNastaliqUrdu-Regular.otf'
    },
    language: ['Sanskrit & Pali', 'Sanskrit', 'Pali'],
    status: ['Living', 'Living: Major'],
    invented: ['Derived: Perso-Arabic'],
    region: ['North Indic', 'Indic']
  }, {
    label: 'Shan',
    value: 'Shan',
    sscode: '',
    ssdesc: '',
    omnicode: 'shan',
    wikicode: 'Shan_language#Alphabet',
    font: {
      'name': 'GreatHorKham_Yangon',
      'url': 'https://shaniit.org/fonts'
    },
    language: ['Sanskrit & Pali', 'Sanskrit', 'Pali'],
    status: ['Living', 'Living: Minor'],
    invented: ['Derived: Brahmi', 'Derived: Pallava'],
    region: ['South East Asian: Mainland', 'South East Asian'],
    miscsrc: '(from Omniglot)',
    miscdesc: 'Shan is a Tai language spoken by about 3.3 million people in the Shan States of Burma in the northeast of the country, and also in parts of northern Thailand and in the Xishuangbanna (Sipsongpanna) Dai Autonomous Prefecture of Yunnan province in southwestern China.The Shan script is used in Burma to write Shan, although few Shan speakers can read and write in the Shan script.'
  }, {
    label: 'Sharada',
    value: 'Sharada',
    sscode: 'Shrd',
    ssdesc: 'The Sharada script evolved from Gupta Brahmi in the 9th century AD. In its earlier forms it was widespread over the northwest parts of the Indian subcontinent and was the progenitor of the Gurmukhi script, but later it became restricted to Kashmir, where it was the principal means of writing until the 20th century. In the 1950s a Perso-Arabic script was made the official script of Kashmir. Sharada is now only used by Kashmiri Pandits - a Hindu, ethnically Aryan group who inhabited the Kashmiri valley until they were exiled in the 1990s - for religious and ceremonial purposes.',
    omnicode: 'sharda',
    wikicode: 'Sharada_script',
    font: {
      'name': 'Satisar Sharada',
      'url': 'https://github.com/virtualvinodh/satisarsharada/raw/main/Sharada.ttf'
    },
    language: ['Sanskrit & Pali', 'Sanskrit', 'Pali'],
    status: ['Living', 'Living: Minor'],
    invented: ['Derived: Brahmi'],
    region: ['North Indic', 'Indic']
  }, // {
  //   label: 'Siddham',
  //   value: 'Siddham'
  // },
  {
    label: 'Sinhala',
    value: 'Sinhala',
    sscode: 'Sinh',
    ssdesc: 'The Sinhala script is used for writing the Sinhala language, spoken by approximately 15,500,000 people in Sri Lanka, and for transcribing the ancient Pali and Sanskrit languages. The script is derived from Brahmi, and shows close similarities to the Grantha script which was used in southern India until the 16th century. ',
    omnicode: 'sinhala',
    wikicode: 'Sinhalese_script',
    font: {
      'name': 'Noto Sans Sinhala',
      'url': 'https://github.com/googlefonts/noto-fonts/blob/main/unhinted/otf/NotoSansSinhala/NotoSansSinhala-Regular.otf'
    },
    language: ['Sanskrit & Pali', 'Sanskrit', 'Pali'],
    status: ['Living', 'Living: Major'],
    invented: ['Derived: Brahmi', 'Derived: Pallava'],
    region: ['South Indic', 'Indic']
  }, {
    label: 'Sora Sompeng',
    value: 'SoraSompeng',
    sscode: 'Sora',
    ssdesc: 'The Sora Sompeng script is used for writing the Sora language spoken by about 310,000 people in India, predominantly in the eastern state of Orissa. Sora is in the Munda language family. It is also sometmes called Saora or Savara, but is not to be confused with the Savara language in the Dravidian family.',
    omnicode: 'sorangsompeng',
    wikicode: 'Sorang_Sompeng_alphabet',
    font: {
      'name': 'Noto Sans SoraSompeng',
      'url': 'https://github.com/googlefonts/noto-fonts/blob/main/unhinted/otf/NotoSansSoraSompeng/NotoSansSoraSompeng-Regular.otf'
    },
    language: ['Others'],
    status: ['Living', 'Living: Minor'],
    invented: ['Invented'],
    region: ['East Indic', 'Indic']
  }, {
    label: 'Soyombo',
    value: 'Soyombo',
    sscode: 'Soyo',
    ssdesc: 'The Soyombo script was developed by the Mongolian monk and scholar Bogdo Zanabazar in 1686 to write Mongolian. According to legend, Zanabazar based the script on letter-like signs he saw in the sky one night. Other theories suggest that the shapes of the letters may have been based on the Ranjana script of Nepal. Soyombo can also be used to write Tibetan and Sanskrit.',
    omnicode: 'soyombo',
    wikicode: 'Soyombo_script',
    font: {
      'name': 'Noto Sans Soyombo',
      'url': 'https://github.com/googlefonts/noto-fonts/blob/main/unhinted/otf/NotoSansSoyombo/NotoSansSoyombo-Regular.otf'
    },
    language: ['Sanskrit & Pali', 'Sanskrit', 'Pali'],
    status: ['Extinct', 'Extinct: Medieval'],
    invented: ['Derived: Brahmi'],
    region: ['Central Asian']
  }, {
    label: 'Sundanese',
    value: 'Sundanese',
    sscode: 'Sund',
    ssdesc: 'The Sundanese script is used to write the Sundanese language, spoken by about 27 million people on the Indonesian island of Java. Today, the language is generally written in either the Sundanese or the Latin script, but has historically also been written using other scripts. It is currently taught in schools and used for public signage.',
    omnicode: 'sundanese',
    wikicode: 'Sundanese_script',
    font: {
      'name': 'Noto Sans Sundanese',
      'url': 'https://cdn.jsdelivr.net/gh/googlei18n/noto-fonts/unhinted/NotoSansSundanese-Regular.ttf'
    },
    language: ['Others'],
    status: ['Living', 'Living: Minor'],
    invented: ['Derived: Brahmi', 'Derived: Pallava'],
    region: ['South East Asian: Insular', 'South East Asian']
  }, {
    label: 'Syloti Nagari',
    value: 'SylotiNagri',
    sscode: 'Sylo',
    ssdesc: 'The Syloti Nagri script (also called Sylheti Nagri) is the original script for the Sylheti language, spoken in Bangladesh. The script has been almost entirely replaced by the Bengali and, to a lesser extent, Latin, scripts. At its peak however, it was used by all literate Sylheti speakers for personal correspondence, record-keeping, business purposes and religious texts in the language. The script appears to be derived from the Kaithi script used in Bihar.',
    omnicode: 'syloti',
    wikicode: 'Sylheti_Nagari',
    font: {
      'name': 'Noto Sans SylotiNagri',
      'url': 'https://github.com/googlefonts/noto-fonts/blob/main/unhinted/otf/NotoSansSylotiNagri/NotoSansSylotiNagri-Regular.otf'
    },
    language: ['Others'],
    status: ['Living', 'Living: Minor'],
    invented: ['Derived: Brahmi'],
    region: ['East Indic', 'Indic']
  }, {
    label: 'Tagbanwa',
    value: 'Tagbanwa',
    sscode: 'Tagb',
    ssdesc: 'The Tagbanwa (also known as Apurahuano) script is one of the Brahmic scripts indigenous to the Philippines. It is used to write the Tagbanwa language, which is spoken by approximately 8,000 people living in scattered communities throughout the Palawan region; literacy in the script is low. Of the three living indigenous Philippine scripts - Hanunoo, Buhid and Tagbanwa - Tagbanwa is acknowledged to be the least widely used.',
    omnicode: 'tagbanwa',
    wikicode: 'Tagbanwa',
    font: {
      'name': 'Noto Sans Tagbanwa',
      'url': 'https://cdn.jsdelivr.net/gh/googlei18n/noto-fonts/unhinted/NotoSansTagbanwa-Regular.ttf'
    },
    language: ['Others'],
    status: ['Living', 'Living: Minor'],
    invented: ['Derived: Brahmi', 'Derived: Pallava'],
    region: ['South East Asian: Insular', 'South East Asian']
  }, {
    label: 'Tagalog',
    value: 'Tagalog',
    sscode: 'Tglg',
    ssdesc: 'The Tagalog script, also known as Baybayin, is an extinct script indigenous to the Philippines. It was used to write the Tagalog language, which is still spoken by 21 million people throughout the Philippines, although it is now written in the Latin script. The Tagalog script was an abugida which descended from the Oldl Kawi, and ultimately the Brahmic, scripts.',
    omnicode: 'tagalog',
    wikicode: 'Baybayin',
    font: {
      'name': 'Open Baybayin',
      'url': 'https://github.com/ctrlcctrlv/OpenBaybayin/'
    },
    language: ['Others'],
    status: ['Living', 'Living: Minor'],
    invented: ['Derived: Brahmi', 'Derived: Pallava'],
    region: ['South East Asian: Insular', 'South East Asian']
  }, {
    label: 'Tai Laing',
    value: 'TaiLaing',
    sscode: '',
    ssdesc: '',
    omnicode: '',
    wikicode: '',
    miscsrc: '(from <a href="https://unicode.org/L2/L2011/11130-mymr-extras.pdf">L2/11-130</a>)',
    miscdesc: 'The Tai Laing are a language group of about 100,000 speakers living along the Irrawaddy River in Myanmar. The writing system is part of their history that has not completely died out and there is interest in reviving it. While the script is not taught formally in schools, it is taught during school breaks.',
    font: {
      'name': '',
      'url': ''
    },
    language: ['Only Pali', 'Pali'],
    status: ['Living', 'Living: Minor'],
    invented: ['Derived: Brahmi', 'Derived: Pallava'],
    region: ['South East Asian: Mainland', 'South East Asian']
  }, {
    label: 'Takri',
    value: 'Takri',
    sscode: 'Takr',
    ssdesc: 'The Takri script was used between the 16th and 19th centuries in what are now Jammu and Kashmir, Himachal Pradesh, the Punjab, and Uttarakhand. It was used for writing the Chambeali and Dogri languages, as well as a number of Pahari (Himalayan) languages including Jaunsari and Kulvi. The script is derived from Sharada, one of the Gupta scripts, and is related to the Gurmukhi and Lahnda scripts. It was widely used both in official and personal contexts.',
    omnicode: 'takri',
    wikicode: 'Takri_alphabet',
    font: {
      'name': 'Noto Sans Takri',
      'url': 'https://github.com/googlefonts/noto-fonts/blob/main/unhinted/otf/NotoSansTakri/NotoSansTakri-Regular.otf'
    },
    language: ['Only Pali', 'Pali'],
    status: ['Extinct', 'Extinct: Pre-Modern'],
    invented: ['Derived: Brahmi'],
    region: ['West Indic', 'Indic']
  }, {
    label: 'Tamil',
    value: 'Tamil',
    sscode: 'Taml',
    ssdesc: 'The Tamil script is used for writing the Tamil language, a Dravidian language spoken by over 65,500,000 people in India, Sri Lanka, Singapore, Malaysia and Mauritius. Tamil is an official language in the south Indian state of Tamil Nadu as well as in Sri Lanka and Malaysia. The script is derived from Brahmi, so is related to many of the scripts used for writing Indian Indo-Aryan languages',
    omnicode: 'tamil',
    wikicode: 'Tamil_script',
    font: {
      'name': 'Noto Sans Tamil',
      'url': 'https://github.com/googlefonts/noto-fonts/blob/main/unhinted/otf/NotoSansTamil/NotoSansTamil-Regular.otf'
    },
    language: ['Sanskrit & Pali', 'Sanskrit', 'Pali'],
    status: ['Living', 'Living: Major'],
    invented: ['Derived: Brahmi', 'Derived: Pallava'],
    region: ['South Indic', 'Indic']
  }, {
    label: 'Tamil (Extended)',
    value: 'TamilExtended',
    sscode: '',
    ssdesc: '',
    miscsrc: '',
    miscdesc: 'Tamil (Extended) represents the attempt to use the full complimentary set of Grantha letters to fill in the gaps in the Tamil script (as compared to the pan-Indic system). Modern Tamil only adopts /ja/, /śa/, /ṣa/, /ha/ and the compound /śrī/ from Grantha into its character reportoire. This was probably done instead of using superscript numerals (as done in the modern Times) to increase the readability of the text (and the possible wide-spread familiarity with Grantha script several decades ago).',
    omnicode: '',
    wikicode: '',
    font: {
      'name': 'Agastya Sans',
      'url': 'https://github.com/virtualvinodh/agastya-tamil-extended'
    },
    language: ['Sanskrit & Pali', 'Sanskrit', 'Pali'],
    status: ['Living', 'Living: Minor'],
    invented: ['Derived: Brahmi', 'Derived: Pallava'],
    region: ['South Indic', 'Indic']
  }, {
    label: 'Tamil Brahmi',
    value: 'TamilBrahmi',
    sscode: '',
    ssdesc: '',
    wikicode: 'Tamil-Brahmi',
    wikidesc: 'Tamil-Brahmi is a variant of the Brahmi script used to write the Tamil language. These are the earliest documents of a Dravidian language, and the script was well established in the Chera and Pandyan states, in what is now Tamil Nadu, Kerala and Sri Lanka. Inscriptions have been found on cave beds, pot sherds, Jar burials, coins, seals, and rings.',
    omnicode: '',
    font: {
      'name': '',
      'url': ''
    },
    language: ['Others'],
    status: ['Extinct', 'Extinct: Ancient'],
    invented: ['Derived: Brahmi'],
    region: ['South Indic', 'Indic']
  }, {
    label: 'Telugu',
    value: 'Telugu',
    sscode: 'Telu',
    ssdesc: 'The Telugu script is used for writing the Telugu language, a Dravidian language spoken by almost 70,000,000 people in South India. The Telugu script is also used for writing a number of Living: Minor languages in Southern India, including Chenchu, Savara and Manna-Dora to which the Telugu language is related. The script is closely related to the Kannada script.',
    omnicode: 'telugu',
    wikicode: 'Telugu_script',
    font: {
      'name': 'Noto Sans Telugu',
      'url': 'https://github.com/googlefonts/noto-fonts/blob/main/unhinted/otf/NotoSansTelugu/NotoSansTelugu-Regular.otf'
    },
    language: ['Sanskrit & Pali', 'Sanskrit', 'Pali'],
    status: ['Living', 'Living: Major'],
    invented: ['Derived: Brahmi'],
    region: ['South Indic', 'Indic']
  }, // Font not working
  // {
  //  label: 'Tolong Siki',
  //  value: 'TolongSiki'
  // },
  {
    label: 'Thaana (Dhivehi)',
    value: 'Thaana',
    sscode: 'Thaa',
    ssdesc: 'The Thaana script is used for writing the Maldivian language, also known as Dhivehi, spoken by about 370,000 people in the Maldives and in Maldivian communities in India. It is one of the few alphabets in the world which does not have its roots in the Proto-Canaanite script. Rather, the first nine letters are derived from the shapes of the numerals used in Arabic writing, and the next nine from earlier forms of Maldivian letters.',
    omnicode: 'thaana',
    wikicode: 'Thaana',
    font: {
      'name': '',
      'url': ''
    },
    language: ['Others'],
    status: ['Living', 'Living: Major'],
    invented: ['Derived: Perso-Arabic'],
    region: ['South Asian: Other']
  }, {
    label: 'Thai',
    value: 'Thai',
    sscode: 'Thai',
    ssdesc: 'The Thai script is used primarily for writing the Thai language, as well as Northern Thai, Northeastern Thai, Southern Thai, and Thai Song, which are separate languages. It is also used to write a number of Living: Minor languages in Thailand, Laos and China, as well as Pali, which is widely used in Buddhist temples and monasteries. Both the Thai language and script are closely related to Laotian. The script is of Indic origin, derived from Old Khmer.',
    omnicode: 'thai',
    wikicode: 'Thai_alphabet',
    font: {
      'name': '',
      'url': ''
    },
    language: ['Sanskrit & Pali', 'Sanskrit', 'Pali'],
    status: ['Living', 'Living: Major'],
    invented: ['Derived: Brahmi', 'Derived: Pallava'],
    region: ['South East Asian: Mainland', 'South East Asian']
  }, {
    label: 'Tham (Lanna)',
    sublabel: 'Beta',
    value: 'TaiTham',
    sscode: 'Lana',
    ssdesc: 'The Lanna script is also known as the Tai Tham, Dham, Yuan, or Northern Thai script. It has been used for writing the Northern Thai, Lü and Khün languages. Northern Thai is the biggest language group which uses the script, with 6 million speakers, but literacy is low. The script has religious significance and is used in Buddhist monasteries.',
    omnicode: 'lanna',
    wikicode: 'Tai_Tham_script',
    font: {
      'name': 'Pali Tilok',
      'url': 'https://github.com/virtualvinodh/aksharamukha/blob/master/aksharamukha-front/src/statics/Pali_Tilok.ttf'
    },
    language: ['Sanskrit & Pali', 'Sanskrit', 'Pali'],
    status: ['Living', 'Living: Minor'],
    invented: ['Derived: Brahmi', 'Derived: Pallava'],
    region: ['South East Asian: Mainland', 'South East Asian']
  }, {
    label: 'Tham (Lao)',
    sublabel: 'Beta',
    value: 'LaoTham',
    sscode: '',
    ssdesc: '',
    miscsrc: '',
    miscdesc: 'This is the variant of Tai Tham script used in Laos.',
    omnicode: '',
    wikicode: '',
    font: {
      'name': 'Pali Khottabun',
      'url': 'https://cdn.jsdelivr.net/gh/virtualvinodh/aksharamukha/aksharamukha-front/src/statics/Pali_Khottabun.ttf'
    },
    language: ['Sanskrit & Pali', 'Sanskrit', 'Pali'],
    status: ['Living', 'Living: Minor'],
    invented: ['Derived: Brahmi', 'Derived: Pallava'],
    region: ['South East Asian: Mainland', 'South East Asian']
  }, {
    label: 'Tham (Tai Khuen)',
    sublabel: 'Beta',
    value: 'KhuenTham',
    sscode: '',
    ssdesc: '',
    miscsrc: '',
    miscdesc: 'This is the variant of Tai Tham script used to write the Tai Khuen language.',
    omnicode: '',
    wikicode: '',
    font: {
      'name': 'A Tai Tham KH New',
      'url': 'https://cdn.jsdelivr.net/gh/virtualvinodh/aksharamukha/aksharamukha-front/src/statics/A-Tai-Tham-KH-New-V2.ttf'
    },
    language: ['Sanskrit & Pali', 'Sanskrit', 'Pali'],
    status: ['Living', 'Living: Minor'],
    invented: ['Derived: Brahmi', 'Derived: Pallava'],
    region: ['South East Asian: Mainland', 'South East Asian']
  }, {
    label: 'Tham (Tai Lue)',
    sublabel: 'Beta',
    value: 'LueTham',
    sscode: '',
    ssdesc: '',
    miscsrc: '',
    miscdesc: 'This is the variant of Tai Tham script used to write the Tai Lue language.',
    omnicode: '',
    wikicode: '',
    font: {
      'name': 'Pali TaiLue',
      'url': '../statics/Pali_TaiLue.ttf'
    },
    language: ['Sanskrit & Pali', 'Sanskrit', 'Pali'],
    status: ['Living', 'Living: Minor'],
    invented: ['Derived: Brahmi', 'Derived: Pallava'],
    region: ['South East Asian: Mainland', 'South East Asian']
  }, {
    label: 'Tibetan',
    value: 'Tibetan',
    sscode: 'Tibt',
    ssdesc: 'The Tibetan script is used for writing the Tibetan, Dzongkha, Ladakhi and Sikkimese languages, spoken in Tibet, Bhutan, Nepal and India. It is also used for transcribing religious Sanskrit texts. Tibetan Buddhism traditionally ascribes its creation to Minister Thon mi Sambhota in Northeast India. What is generally agreed upon is that it is ultimately derived from the Brahmi script.',
    omnicode: 'tibetan',
    wikicode: 'Tibetan_alphabet',
    font: {
      'name': '',
      'url': ''
    },
    language: ['Sanskrit & Pali', 'Sanskrit', 'Pali'],
    status: ['Living', 'Living: Major'],
    invented: ['Derived: Brahmi'],
    region: ['Central Asian']
  }, {
    label: 'Tirhuta (Maithili)',
    value: 'Tirhuta',
    sscode: 'Tirh',
    ssdesc: 'The Tirhuta (also called Mithilakshar) script has historically been used for writing the Maithili language, an Indo-Aryan language spoken by almost 35 million people. Nowadays, the Maithili language is written almost exclusively in the Devanagari script, although Tirhuta is still sometimes used by religious pundits for writing ceremonial letters and documents, and efforts are underway to broaden the scope of its usage.',
    omnicode: 'maithili',
    wikicode: 'Tirhuta',
    font: {
      'name': 'Mithila Uni',
      'url': 'http://vedicastrology.wikidot.com/local--files/mithilakshara-font/MithilaUni.ttf'
    },
    language: ['Sanskrit & Pali', 'Sanskrit', 'Pali'],
    status: ['Living', 'Living: Minor'],
    invented: ['Derived: Brahmi'],
    region: ['East Indic', 'Indic']
  }, {
    label: 'Urdu',
    value: 'Urdu',
    sscode: '',
    ssdesc: '',
    wikicode: 'Urdu_alphabet',
    wikidesc: 'The Urdu alphabet is the right-to-left alphabet used for the Urdu language. It is a modification of the Persian alphabet known as Perso-Arabic, which is itself a derivative of the Arabic alphabet. The Urdu alphabet has up to 58 letters. With 39 basic letters and no distinct letter cases, the Urdu alphabet is typically written in the calligraphic Nastaʿlīq script, whereas Arabic is more commonly in the Naskh style.',
    omnicode: 'urdu',
    font: {
      'name': 'Noto Sans Nastaliq Urdu',
      'url': 'https://github.com/googlefonts/noto-fonts/blob/main/unhinted/otf/NotoNastaliqUrdu/NotoNastaliqUrdu-Regular.otf'
    },
    language: ['Sanskrit & Pali', 'Sanskrit', 'Pali'],
    status: ['Living', 'Living: Major'],
    invented: ['Derived: Perso-Arabic'],
    region: ['North Indic', 'Indic']
  }, {
    label: 'Vatteluttu',
    value: 'Vatteluttu',
    sscode: '',
    ssdesc: '',
    wikicode: 'Vatteluttu_alphabet',
    font: {
      'name': 'e-Vatteluttu',
      'url': 'https://github.com/virtualvinodh/aksharamukha/blob/master/aksharamukha-front/src/statics/e-VatteluttuOT.ttf'
    },
    language: ['Others'],
    status: ['Extinct', 'Extinct: Medieval'],
    invented: ['Derived: Brahmi'],
    region: ['South Indic', 'Indic'],
    wikidesc: 'The Vaṭṭeḻuttu, also spelled Vattezhutthu (literally "Round Script") was an abugida writing system in southern India and Sri Lanka in the latter half of the 1st millennium AD. Vatteluttu was the common script for writing various forms of Tamil language in Pandya-Chera region till the 9th century and after that time it came to be replaced by the present-day Tamil script everywhere except in Kerala'
  }, {
    label: 'Wancho',
    value: 'Wancho',
    sscode: 'Wcho',
    ssdesc: 'The Wancho script is used to write the Wancho language spoken in India. It is a simple alphabetic script comprised of letters which represent both consonants and vowels. There are no conjunct characters. Diacritical marks are used on vowel letters to indicate tone. The Wancho script has its own set of digits. Punctuation marks such as comma, full stop and question mark, are commonly used. The Wancho script was developed between 2001 and 2012 by Mr Banwang Losu.',
    wikicode: 'Wancho_script',
    font: {
      'name': 'Noto Sans Wancho',
      'url': 'https://github.com/googlefonts/noto-fonts/tree/master/unhinted/otf/NotoSansWancho'
    },
    language: ['Others'],
    status: ['Living', 'Living: Minor'],
    invented: ['Invented'],
    region: ['East Indic', 'Indic']
  }, {
    label: 'Warang Citi',
    value: 'WarangCiti',
    sscode: 'Wara',
    ssdesc: 'The Warang Citi script is used for writing the Ho language spoken largely in the state of Jharkhand in eastern India. The script displays a number of similarities with other scripts including Latin and Brahmi; scholars generally believe it is the result of borrowing into it. ',
    omnicode: 'varangkshiti',
    wikicode: 'Warang_Citi',
    font: {
      'name': 'Noto Sans WarangCiti',
      'url': 'https://github.com/googlefonts/noto-fonts/blob/main/unhinted/otf/NotoSansWarangCiti/NotoSansWarangCiti-Regular.otf'
    },
    language: ['Others'],
    status: ['Living', 'Living: Minor'],
    invented: ['Invented'],
    region: ['East Indic', 'Indic']
  }, {
    label: 'Zanabazar Square',
    value: 'ZanabazarSquare',
    sscode: 'Zanb',
    ssdesc: 'The Zanabazar Square script is also known as the Mongolian Square script. It is named after its creator, Zanabazar, the first spiritual leader of Tibetan Buddhism in Mongolia, who also developed the Soyombo script. It was used for writing the Mongolian, Sanskrit and Tibetan languages. The Zanabazar Square script was inspired by the Tibetan script and has graphical similarities to Phags-pa and its variant forms.',
    wikicode: 'Horizontal_square_script',
    omnicode: 'mhss',
    font: {
      'name': 'Noto Sans Zanabazar Square',
      'url': 'https://cdn.jsdelivr.net/gh/virtualvinodh/aksharamukha/aksharamukha-front/src/statics/NotoSansZanabazarSquare-Regular.otf'
    },
    language: ['Sanskrit & Pali', 'Sanskrit', 'Pali'],
    status: ['Extinct', 'Extinct: Medieval'],
    invented: ['Derived: Brahmi'],
    region: ['Central Asian']
  }],
  scriptsSemitic: [{
    label: 'Thaana (Dhivehi)',
    value: 'Thaa',
    sscode: 'Thaa',
    ssdesc: 'The Thaana script is used for writing the Maldivian language, also known as Dhivehi, spoken by about 370,000 people in the Maldives and in Maldivian communities in India. It is one of the few alphabets in the world which does not have its roots in the Proto-Canaanite script. Rather, the first nine letters are derived from the shapes of the numerals used in Arabic writing, and the next nine from earlier forms of Maldivian letters.',
    omnicode: 'thaana',
    wikicode: 'Thaana',
    font: {
      'name': '',
      'url': ''
    },
    language: ['Others'],
    status: ['Living', 'Living: Major'],
    invented: ['Derived: Perso-Arabic'],
    region: ['South Asian: Other']
  }, {
    label: 'Hebrew',
    value: 'Hebr',
    sscode: 'Hebr',
    ssdesc: 'The Hebrew script is primarily used for writing the Hebrew, Samaritan and Yiddish languages. It is also used for writing some varieties of Arabic spoken in North Africa, Iraq and Yemen; the languages of the Jewish communities in Italy and Corfu, Morocco (Berber), Spain and the Caucasus mountains; and the modern Jewish Aramaic languages. Prior to 500 BC the Hebrew language was written in the Paleo-Hebrew script, which was abandoned after the Jewish exile in the 5th century BC in favour of the Aramaic script, from which the current Hebrew script descended. It is commonly called the Hebrew alphabet, after its first two letters aleph and bet, although it is actually an abjad.',
    omnicode: 'hebrew',
    wikicode: 'Hebrew_alphabet',
    font: {
      'name': 'Noto Serif Hebrew',
      'url': 'https://github.com/googlefonts/noto-fonts/blob/main/hinted/ttf/NotoSerifHebrew/NotoSerifHebrew-Regular.ttf'
    },
    language: ['Others'],
    status: ['Living', 'Living: Major'],
    invented: ['Derived: Aramaic'],
    region: ['West Asian']
  }, {
    label: 'Shahmukhi',
    value: 'Arab-Pa',
    sscode: '',
    ssdesc: '',
    wikicode: 'Shahmukhi_alphabet',
    wikidesc: 'Shahmukhi (lit.\'from the mouth of the Shah\') is a modified Perso-Arabic alphabet used by Punjabi Muslims (primarily in Punjab, Pakistan) to write the Punjabi language.It is generally written in the Nastaʿlīq calligraphic hand, which is also used for Urdu. Perso-Arabic is one of two scripts used for Punjabi, the other being Gurmukhi, used by Sikhs and Hindus in Punjab, India. It is also used as the main alphabet to write Pahari–Pothwari in Azad Kashmir and Jammu and Kashmir',
    omnicode: 'punjabi',
    font: {
      'name': 'Noto Sans Nastaliq Urdu',
      'url': 'https://github.com/googlefonts/noto-fonts/blob/main/unhinted/otf/NotoNastaliqUrdu/NotoNastaliqUrdu-Regular.otf'
    },
    language: ['Sanskrit & Pali', 'Sanskrit', 'Pali'],
    status: ['Living', 'Living: Major'],
    invented: ['Derived: Perso-Arabic'],
    region: ['North Indic', 'Indic']
  }, {
    label: 'Urdu',
    value: 'Arab-Ur',
    sscode: '',
    ssdesc: '',
    wikicode: 'Urdu_alphabet',
    wikidesc: 'The Urdu alphabet is the right-to-left alphabet used for the Urdu language. It is a modification of the Persian alphabet known as Perso-Arabic, which is itself a derivative of the Arabic alphabet. The Urdu alphabet has up to 58 letters. With 39 basic letters and no distinct letter cases, the Urdu alphabet is typically written in the calligraphic Nastaʿlīq script, whereas Arabic is more commonly in the Naskh style.',
    omnicode: 'urdu',
    font: {
      'name': 'Noto Sans Nastaliq Urdu',
      'url': 'https://github.com/googlefonts/noto-fonts/blob/main/unhinted/otf/NotoNastaliqUrdu/NotoNastaliqUrdu-Regular.otf'
    },
    language: ['Sanskrit & Pali', 'Sanskrit', 'Pali'],
    status: ['Living', 'Living: Major'],
    invented: ['Derived: Perso-Arabic'],
    region: ['North Indic', 'Indic']
  }, {
    label: 'Hebrew (Judeo-Arabic)',
    value: 'Hebr-Ar',
    miscsrc: '(From Omniglot)',
    miscdesc: 'The Judeo-Arabic script is a version of the Hebrew script used to write the Judeo-Arabic language - a version of Arabic with influences from Hebrew and Aramaic.',
    omnicode: 'judeo-arabic',
    wikicode: 'Judeo-Arabic_dialects',
    font: {
      'name': '',
      'url': ''
    },
    language: ['Others'],
    status: ['Living', 'Living: Minor'],
    invented: ['Derived: Aramaic'],
    region: ['West Asian']
  }, {
    label: 'Ugaritic',
    value: 'Ugar',
    sscode: 'Ugar',
    ssdesc: 'The Ugaritic script was used from about 1500-1300 BC to write the Ugaritic language, spoken in modern-day Syria. It was also occasionally used for writing documents in the Hurrian language. Visually, the script resembled Cuneiform, with each letter written as one of a combination of short, linear wedges. However, the forms of the letters appear to have been freely invented; derivational relationships with other cuneiform letters have not been established. The script remained relatively stable in form throughout its use, with no significant changes.',
    wikicode: 'Ugaritic_alphabet',
    omnicode: 'ugaritic',
    font: {
      'name': 'Noto Sans Ugaritic',
      'url': 'https://cdn.jsdelivr.net/gh/virtualvinodh/aksharamukha/aksharamukha-front/src/statics/NotoSansUgaritic-Regular.otf'
    },
    language: ['Others'],
    status: ['Extinct', 'Extict: Ancient'],
    invented: ['Derived: Cuneiform'],
    region: ['West Asian']
  }, {
    label: 'Syriac (Estrangela)',
    value: 'Syre',
    sscode: 'Syrc',
    ssdesc: 'The Syriac script is attested as early as the year 6 AD. It was primarily used for writing the Syriac language, now extinct outside of the Syrian church. The Assyrian Neo-Aramaic, Chaldean Neo-Aramaic and Turoyo/Surayt languages are descended from Syriac, and are still written in the Syriac script. It can also be used for writing Arabic, known as Garshani writing. There are three ancient variations of the script: the classical liturgical script called Estrangelo, the Western variant, and the Eastern variant.',
    wikicode: 'Syriac_alphabet',
    omnicode: 'syriac',
    font: {
      'name': 'Noto Sans Syriac',
      'url': 'https://cdn.jsdelivr.net/gh/virtualvinodh/aksharamukha/aksharamukha-front/src/statics//NotoSansSyriac-Regular.otf'
    },
    language: ['Others'],
    status: ['Living', 'Living: Minor'],
    invented: ['Derived: Aramaic'],
    region: ['West Asian']
  }, {
    label: 'Syriac (Western)',
    value: 'Syrj',
    sscode: 'Syrc',
    ssdesc: 'The Syriac script is attested as early as the year 6 AD. It was primarily used for writing the Syriac language, now extinct outside of the Syrian church. The Assyrian Neo-Aramaic, Chaldean Neo-Aramaic and Turoyo/Surayt languages are descended from Syriac, and are still written in the Syriac script. It can also be used for writing Arabic, known as Garshani writing. There are three ancient variations of the script: the classical liturgical script called Estrangelo, the Western variant, and the Eastern variant.',
    wikicode: 'Syriac_alphabet',
    omnicode: 'syriac',
    font: {
      'name': 'Noto Sans Syriac',
      'url': 'https://cdn.jsdelivr.net/gh/virtualvinodh/aksharamukha/aksharamukha-front/src/statics//NotoSansSyriac-Regular.otf'
    },
    language: ['Others'],
    status: ['Living', 'Living: Minor'],
    invented: ['Derived: Aramaic'],
    region: ['West Asian']
  }, {
    label: 'Syriac (Eastern)',
    value: 'Syrn',
    sscode: 'Syrc',
    ssdesc: 'The Syriac script is attested as early as the year 6 AD. It was primarily used for writing the Syriac language, now extinct outside of the Syrian church. The Assyrian Neo-Aramaic, Chaldean Neo-Aramaic and Turoyo/Surayt languages are descended from Syriac, and are still written in the Syriac script. It can also be used for writing Arabic, known as Garshani writing. There are three ancient variations of the script: the classical liturgical script called Estrangelo, the Western variant, and the Eastern variant.',
    wikicode: 'Syriac_alphabet',
    omnicode: 'syriac',
    font: {
      'name': 'Noto Sans Syriac',
      'url': 'https://cdn.jsdelivr.net/gh/virtualvinodh/aksharamukha/aksharamukha-front/src/statics//NotoSansSyriac-Regular.otf'
    },
    language: ['Others'],
    status: ['Living', 'Living: Minor'],
    invented: ['Derived: Aramaic'],
    region: ['West Asian']
  }, {
    label: 'Old Sogdian',
    value: 'Sogo',
    sscode: 'Sogo',
    ssdesc: 'The Old Sogdian script encompasses a group of related scripts used to represent Sogdian, an ancient Eastern Iranian language. Old Sogdian unifies the scripts used in short inscriptions on coins and vessels, the Ancient Letters and the Kultobe and Upper Indus inscriptions.',
    wikicode: '',
    omnicode: '',
    font: {
      'name': 'Noto Sans OldSogdian',
      'url': 'https://cdn.jsdelivr.net/gh/virtualvinodh/aksharamukha/aksharamukha-front/src/statics//NotoSansOldSogdian-Regular.otf'
    },
    language: ['Others'],
    status: ['Extinct', 'Extinct: Ancient'],
    invented: ['Derived: Aramaic'],
    region: ['West Asian']
  }, {
    label: 'Sogdian',
    value: 'Sogd',
    sscode: 'Sogd',
    ssdesc: 'The Sogdian script was one of three scripts used for writing the Sogdian language, a middle Iranian language spoken in Sogdiana, a region in the Achaemenid Persian empire comprising parts of modern-day Uzbekistan, Tajikistan, Pakistan and China. This language was also written in the Manichaean and Syriac scripts. Sogdian writing derives from the Aramaic script and was used from approximately the 1st to the 13th centuries AD, during which time three main varieties emerged, the Ancient Letters, the Sutra style and the Uyghur style.',
    wikicode: 'Sogdian_alphabet',
    omnicode: 'sogdian',
    font: {
      'name': 'Noto Sans Sogdian',
      'url': 'https://cdn.jsdelivr.net/gh/virtualvinodh/aksharamukha/aksharamukha-front/src/statics//NotoSansSogdian-Regular.otf'
    },
    language: ['Others'],
    status: ['Extinct', 'Extinct: Ancient'],
    invented: ['Derived: Aramaic'],
    region: ['West Asian']
  }, {
    label: 'Old South Arabian',
    value: 'Sarb',
    sscode: 'Sarb',
    ssdesc: 'The Old South Arabian script (also called Musnad, Epigraphic South Arabian, or Sayhadic) was used for writing a group of closely related Semitic languages, all of which are now extinct. The script was used throughout the Arabian peninsula, particularly in modern-day Yemen, between the 6th and the 8th centuries AD, after which it was replaced by Arabic writing. It is the forerunner of the modern-day Ethiopic script.',
    wikicode: 'Ancient_South_Arabian_script',
    omnicode: 'southarabian',
    font: {
      'name': 'Noto Sans OldSouthArabian',
      'url': 'https://cdn.jsdelivr.net/gh/virtualvinodh/aksharamukha/aksharamukha-front/src/statics/NotoSansOldSouthArabian-Regular.otf'
    },
    language: ['Others'],
    status: ['Extinct', 'Extinct: Ancient'],
    invented: ['Derived: Proto-Sinaitic'],
    region: ['West Asian']
  }, {
    label: 'Samaritan',
    value: 'Samr',
    sscode: 'Samr',
    ssdesc: 'The Samaritan script is of Phoenician descent, via the Paleo-Hebrew script. Samaritan writing began to noticeably diverge from Paleo-Hebrew writing around the 3rd century and has been used since that time for the Samaritan dialects of Hebrew, Aramaic and Arabic. These languages are no longer in everyday spoken use but are still used for writing liturgical and scholarly works. Samaritan is also the script for the bi-weekly newspaper A.B., published in Israel.',
    wikicode: 'Samaritan_script',
    omnicode: 'samaritan',
    font: {
      'name': 'Noto Sans Samaritan',
      'url': 'https://cdn.jsdelivr.net/gh/virtualvinodh/aksharamukha/aksharamukha-front/src/statics/NotoSansSamaritan-Regular.otf'
    },
    language: ['Others'],
    status: ['Extinct', 'Extinct: Ancient'],
    invented: ['Derived: Phoenician'],
    region: ['West Asian']
  }, {
    label: 'Inscriptional Parthian',
    value: 'Prti',
    sscode: 'Prti',
    ssdesc: 'Inscriptional Parthian is one of three related ancient scripts, along with Inscriptional Pahlavi and Psalter Pahlavi, used for writing a number of Iranian and Indo-European languages. All three scripts developed from the Imperial Aramaic script.',
    wikicode: 'Inscriptional_Parthian',
    omnicode: 'parthian',
    font: {
      'name': 'Noto Sans',
      'url': 'https://cdn.jsdelivr.net/gh/virtualvinodh/aksharamukha/aksharamukha-front/src/statics/-Regular.otf'
    },
    language: ['Others'],
    status: ['Extinct', 'Extinct: Ancient'],
    invented: ['Derived: Aramaic'],
    region: ['West Asian']
  }, {
    label: 'Phoenician',
    value: 'Phnx',
    sscode: 'Phnx',
    ssdesc: 'The Phoenician script was the first widespread script whose symbols exclusively represented sounds rather than concepts. Phoenician writing ultimately derived from Egyptian hieroglyphics; the rebus principle (the use of a pictographic symbol for its phonetic value independent of its original meaning) is generally believed to have been the means for evolution from pictographic to phonetic writing. The Phoenician script was originally used for writing the Phoenician language, but due to the Phoenicians\' lucrative trading relationships with most of the Mediterranean states, it became known throughout the Mediterranean and North Africa. It is believed to be the precursor of such diverse scripts as Greek, Aramaic and Brahmi, and by extension of most of the writing systems used for representing Indo-Aryan languages.',
    wikicode: 'Phoenician_alphabet',
    omnicode: 'phoenician',
    font: {
      'name': 'Noto Sans Phoenician',
      'url': 'https://cdn.jsdelivr.net/gh/virtualvinodh/aksharamukha/aksharamukha-front/src/statics/NotoSansPhoenician-Regular.otf'
    },
    language: ['Others'],
    status: ['Extinct', 'Extinct: Ancient'],
    invented: ['Derived: Proto-Sinaitic'],
    region: ['Mediterranean']
  }, {
    label: 'Psalter Pahlavi',
    value: 'Phlp',
    sscode: 'Phlp',
    ssdesc: 'Psalter Pahlavi was one of three forms of the ancient Pahlavi script, used for writing the Middle Iranian languages. Psalter Pahlavi has so far only been attested in two sources, a 7th century manuscript of the Psalms of David (hence its name) and an inscription on a bronze cross found at Herat (in present-day Afghanistan). The lack of surviving material in this form of the script has left a number of gaps in modern-day scholars\' understanding of Psalter Pahlavi writing.',
    wikicode: 'Psalter_Pahlavi',
    omnicode: 'psalter',
    font: {
      'name': 'Noto Sans PsalterPahlavi',
      'url': 'https://cdn.jsdelivr.net/gh/virtualvinodh/aksharamukha/aksharamukha-front/src/statics/NotoSansPsalterPahlavi-Regular.otf'
    },
    language: ['Others'],
    status: ['Extinct', 'Extinct: Ancient'],
    invented: ['Derived: Aramaic'],
    region: ['West Asian']
  }, {
    label: 'Inscriptional Pahlavi',
    value: 'Phli',
    sscode: 'Phli',
    ssdesc: 'Inscriptional Pahlavi is the earliest of the three forms of the Pahlavi script, used regularly as a monumental script from the 2nd century BC until the 5th century AD. Later forms of the script were called Psalter Pahlavi and Book Pahlavi. Psalter Pahlavi is so far attested in only two sources, so the bulk of our knowledge is related to the other two forms. The names of these, Inscriptional and Book Pahlavi are somewhat misleading; the Inscriptional form was used on monuments, coins, seals and amulets, as would be expected, but the Book form was used in manuscript texts as well as on stone monuments. The distinction then refers to whether the letters were connected (Book Pahlavi) or unconnected (Inscriptional Pahlavi) rather than to distinct uses of either form.',
    wikicode: 'Inscriptional_Pahlavi',
    omnicode: 'mpersian',
    font: {
      'name': 'Noto Sans InscriptionalPahlavi',
      'url': 'https://cdn.jsdelivr.net/gh/virtualvinodh/aksharamukha/aksharamukha-front/src/statics/NotoSansInscriptionalPahlavi-Regular.otf'
    },
    language: ['Others'],
    status: ['Extinct', 'Extinct: Ancient'],
    invented: ['Derived: Aramaic'],
    region: ['West Asian']
  }, {
    label: 'Palmyrene',
    value: 'Palm',
    sscode: 'Palm',
    ssdesc: 'The Palmyrene script was derived from cursive versions of Aramaic writing around the 1st century BC. It was initially used in the area between the city of Damascus and the Euphrates river, for writing the Palmyrene (also called Palmyrenean) dialect of West Aramaic. The latest extant documents written in the script are from the year 273 AD, the year that the Palmyrene empire was sacked by the Roman Emperor Aurelian.',
    wikicode: 'Palmyrene_alphabet',
    omnicode: '',
    font: {
      'name': 'Noto Sans Palmyrene',
      'url': 'https://github.com/googlefonts/noto-fonts/blob/main/hinted/ttf/NotoSansPalmyrene-Regular.otf'
    },
    language: ['Others'],
    status: ['Extinct', 'Extinct: Ancient'],
    invented: ['Derived: Aramaic'],
    region: ['West Asian']
  }, {
    label: 'Nabataean',
    value: 'Nbat',
    sscode: 'Nbat',
    ssdesc: 'The Nabataean script was used from the 2nd century BC until the 4th or 5th century AD for writing the Nabataean language, a Northwest Semitic language closely related to Arabic. The script was developed from Aramaic writing, and was the immediate precursor of Arabic writing.',
    wikicode: 'Nabataean_Aramaic',
    omnicode: 'nabataean',
    font: {
      'name': 'Noto Sans Nabataean',
      'url': 'https://github.com/googlefonts/noto-fonts/blob/main/hinted/ttf/Nabataean-Regular.otf'
    },
    language: ['Others'],
    status: ['Extinct', 'Extinct: Ancient'],
    invented: ['Derived: Aramaic'],
    region: ['West Asian']
  }, {
    label: 'Old North Arabian',
    value: 'Narb',
    sscode: 'Narb',
    ssdesc: 'Old North Arabian (also called Ancient North Arabian) is a collective term for a group of scripts found in rock inscriptions written in pre-Islamic dialects in the western two-thirds of the Arabian peninsula. The inscriptions have been dated to between the 8th century BC and the 4th century AD. Many are formal inscriptions, but most are graffiti, written in an informal style.',
    wikicode: 'Ancient_North_Arabian',
    omnicode: '',
    font: {
      'name': 'Noto Sans OldNorthAriabian',
      'url': 'https://github.com/googlefonts/noto-fonts/blob/main/hinted/ttf/OldNorthAriabian-Regular.otf'
    },
    language: ['Others'],
    status: ['Extinct', 'Extinct: Ancient'],
    invented: ['Derived: Proto-Sinaitic'],
    region: ['West Asian']
  }, {
    label: 'Manichaean',
    value: 'Mani',
    sscode: 'Mani',
    ssdesc: 'The Manichaean script was derived from the Estrangelo variant of the Syriac script. It was the vehicle employed for the spread of Manichaeanism, an Iranian Gnostic religion created by the Mesopotamian prophet Mani, between the 3rd and 14th centuries. It was Mani\'s desire that his teachings could be made available to speakers of every known language, so the script was used for writing the Middle and Early Modern Persian, Parthian, Sogdian, Bactrian, Ughur and Tocharian languages. ',
    wikicode: 'Manichaean_script',
    omnicode: 'manichaean',
    font: {
      'name': 'Noto Sans Manichaean',
      'url': 'https://github.com/googlefonts/noto-fonts/blob/main/hinted/ttf/NotoSansManichean-Regular.otf'
    },
    language: ['Others'],
    status: ['Extinct', 'Extinct: Ancient'],
    invented: ['Derived: Aramaic'],
    region: ['West Asian']
  }, {
    label: 'Hatran',
    value: 'Hatr',
    sscode: 'Hatr',
    ssdesc: 'Hatran writing was discovered in 1912 in present-day al-Hadr, an ancient city in the al-Jazira region of Iraq which used to be called Hatra. Over 100 stone inscriptions were uncovered by archaeologists working for Iraqi Department of Antiquities; since then approximately 500 more texts have been discovered. Most of these were short, and as a result it has been difficult to deduce a great deal about the Aramaic dialect, called Aramaic of Hatra, which the script represented.',
    wikicode: 'Hatran_Aramaic',
    omnicode: '',
    font: {
      'name': 'Noto Sans Hatran',
      'url': 'https://github.com/googlefonts/noto-fonts/blob/main/hinted/ttf/NotoSansHatran-Regular.otf'
    },
    language: ['Others'],
    status: ['Extinct', 'Extinct: Ancient'],
    invented: ['Derived: Aramaic'],
    region: ['West Asian']
  },
  /*
  {
  label: 'Greek (Semitic)',
  value: 'Grek',
  sscode: 'Grek',
  ssdesc: '',
  wikicode: '',
  omnicode: '',
  font: {
   'name': 'Noto Sans',
   'url': 'https://cdn.jsdelivr.net/gh/virtualvinodh/aksharamukha/aksharamukha-front/src/statics/-Regular.otf'
  },
  language: ['Others'],
  status: ['Extinct', 'Extinct: Ancient'],
  invented: ['Derived: Aramaic'],
  region: ['Mediterranean']
  }, */
  {
    label: 'Elymaic',
    value: 'Elym',
    sscode: 'Elym',
    ssdesc: 'The Elymaic script was an abjad used between approximately 250 BC - 500 AD in the state of Elymais, an ancient state located in the region southeast of the Tigris River in present-day Iran. The Elymaic script was descended from Aramaic, and was either the parent or a sibling script for Mandaic. It is poorly attested on coins and rock inscriptions from the second and third centuries.',
    wikicode: 'Elymaic',
    omnicode: '',
    font: {
      'name': 'Noto Sans Elymaic',
      'url': 'https://github.com/googlefonts/noto-fonts/blob/main/hinted/ttf/NotoSansElymaic-Regular.otf'
    },
    language: ['Others'],
    status: ['Extinct', 'Extinct: Ancient'],
    invented: ['Derived: Aramaic'],
    region: ['West Asian']
  },
  /* {
    label: 'Egyptian hieroglyphs (Semitic)',
    value: 'Egyp',
    sscode: 'Egyp',
    ssdesc: '',
    wikicode: '',
    omnicode: '',
    font: {
      'name': 'Noto Sans',
      'url': 'https://cdn.jsdelivr.net/gh/virtualvinodh/aksharamukha/aksharamukha-front/src/statics/-Regular.otf'
    },
    language: ['Others'],
    status: ['Extinct', 'Extinct: Ancient'],
    invented: ['Derived: Pictograms'],
    region: ['North African']
  }, */
  {
    label: 'Imperial Aramaic',
    value: 'Armi',
    sscode: 'Armi',
    ssdesc: 'The Aramaic script was used for writing the Aramaic language, which was the trade language of the Middle East from about 1000 BC to about 1000 AD. Aramaic writing is derived from the Phoenician script. Because the evolution from one to the other was a continuous process over about 2000 years it is difficult to divide it neatly into \'uniquely Phoenician\' and \'uniquely Aramaic\' blocks; however, it is generally agreed that a divergence into two distinct scripts was evident by about the 8th century BC. Both the Phoenician and Aramaic scripts were the antecedents of a large and geographically diverse family of writing systems.',
    wikicode: 'Imperial_Aramaic',
    omnicode: '',
    font: {
      'name': 'Noto Sans ImperialAramaic',
      'url': 'https://github.com/googlefonts/noto-fonts/blob/main/hinted/ttf/NotoSansImperialAramaic-Regular.otf'
    },
    language: ['Others'],
    status: ['Extinct', 'Extinct: Ancient'],
    invented: ['Derived: Phoenician'],
    region: ['West Asian']
  }, {
    label: 'Ethiopic (Abjad)',
    value: 'Ethi',
    sscode: 'Ethi',
    ssdesc: 'The Ethiopic (Ge\'ez) script was developed as the writing system of the Ge\'ez language, a Semitic language spoken in Ethiopia and Eritrea until the 10th to the 12th centuries. Although the language ceased to be used in vernacular speech (it now serves a liturgical function only), the script is still widely used for writing the Ethiopian and Eritrean Semitic languages such as Tigré, Amharic and Tigrinya. In some languages, the script is called fidäl (ፊደል), which means \'alphabet\', and individual letters are referred to as fidel.',
    wikicode: '/Geʽez_script',
    omnicode: 'ethiopic',
    font: {
      'name': '',
      'url': ''
    },
    language: ['Others'],
    status: ['Living', 'Living: Major'],
    invented: ['Derived: Proto-Sinaitic'],
    region: ['North African']
  }, {
    label: 'Arabic',
    value: 'Arab',
    sscode: 'Arab',
    ssdesc: 'Arabic writing is the second most broadly-used script in the world, after the Latin alphabet. It descended from the Nabataean abjad, itself a descendant of the Phoenician script, and has been used since the 4th century for writing the Arabic language. Since the words of the Prophet Muhammed can only be written in Arabic, the Arabic script has traveled far and wide with the spread of Islam and came to be used for a number of languages throughout Asia, Africa and the Middle East.',
    wikicode: 'Arabic_script',
    omnicode: 'arabic',
    font: {
      'name': '',
      'url': ''
    },
    language: ['Others'],
    status: ['Living', 'Living: Major'],
    invented: ['Derived: Aramaic'],
    region: ['West Asian']
  }, {
    label: 'Persian',
    value: 'Arab-Fa',
    sscode: '',
    miscsrc: '(From Wikipedia)',
    miscdesc: 'The Persian alphabet (Persian: الفبای فارسی‎, romanized: Alefbā-ye Fārsi) is a writing system used for the Persian language spoken in Iran (Western Persian) and Afghanistan (Dari Persian) since the 7th century after Muslim conquest of Persia. The Persian script is directly derived and developed from the Arabic script. After the Muslim conquest of Persia and the fall of the Sasanian Empire in the 7th century, Arabic became the language of government and especially religion in Persia for two centuries.',
    wikicode: 'Persian_alphabet',
    omnicode: 'persian',
    font: {
      'name': '',
      'url': ''
    },
    language: ['Others'],
    status: ['Living', 'Living: Major'],
    invented: ['Derived: Aramaic'],
    region: ['West Asian']
    /* {
      label: '',
      value: '',
      sscode: '',
      ssdesc: '',
      wikicode: '',
      omnicode: '',
      font: {
        'name': 'Noto Sans',
        'url': 'https://cdn.jsdelivr.net/gh/virtualvinodh/aksharamukha/aksharamukha-front/src/statics/-Regular.otf'
      },
      language: ['', '', ''],
      status: ['', ''],
      invented: [''],
      region: ['']
    } */

  }],
  scriptsLatin: [{
    label: 'Roman (Harvard-Kyoto)',
    value: 'HK'
  }, {
    label: 'Roman (Readable)',
    value: 'RomanReadable'
  }, {
    label: 'Roman (Colloquial)',
    value: 'RomanColloquial'
  }, {
    label: 'Roman (ITRANS)',
    value: 'Itrans'
  }, {
    label: 'Roman (IAST)',
    value: 'IAST'
  }, {
    label: 'Roman (IAST: Pāḷi)',
    value: 'IASTPali'
  }, {
    language: ['Others'],
    status: ['Living', 'Living: Minor'],
    invented: ['Derived: Latin'],
    region: ['Eurasia'],
    label: 'Roman (IPA Indic)',
    value: 'IPA',
    sscode: '',
    ssdesc: '',
    miscdesc: '',
    omnicode: '',
    wikicode: 'International_Phonetic_Alphabet',
    font: {
      'name': '',
      'url': ''
    },
    wikidesc: 'The International Phonetic Alphabet (IPA) is an alphabetic system of phonetic notation based primarily on the Latin alphabet. It was devised by the International Phonetic Association in the late 19th century as a standardized representation of the sounds of spoken language. The IPA is used by lexicographers, foreign language students and teachers, linguists, speech-language pathologists, singers, actors, constructed language creators and translators. The IPA is designed to represent only those qualities of speech that are part of oral language: phones, phonemes, intonation and the separation of words and syllables.'
  }, {
    label: 'Roman (ISO 15919 Indic)',
    value: 'ISO'
  }, {
    label: 'Roman (ISO 15919: Pāḷi)',
    value: 'ISOPali'
  }, {
    label: 'Roman (SLP1)',
    value: 'SLP1'
  }, {
    label: 'Roman (Titus)',
    value: 'Titus'
  }, {
    label: 'Roman (Velthuis)',
    value: 'Velthuis'
  }, {
    label: 'Roman (WX)',
    value: 'WX'
  }, {
    label: 'Roman (Baraha North)',
    value: 'BarahaNorth'
  }, {
    label: 'Roman (Baraha South)',
    value: 'BarahaSouth'
  }, {
    label: 'Roman (Semitic)',
    value: 'Latn'
  }, {
    label: 'Roman (Semitic Typeable)',
    value: 'Type'
  }, {
    label: 'Roman (ISO 259 Hebrew)',
    value: 'ISO259'
  }, {
    label: 'Roman (SBL Hebrew)',
    value: 'HebrewSBL'
  }, {
    label: 'Roman (ISO 233 Arabic)',
    value: 'ISO233'
  },
  /* {
    label: 'Roman (DIN Arabic)',
    value: 'ArabicDIN'
  }, */
  {
    label: 'Roman (DMG Persian)',
    value: 'PersianDMG'
  }, {
    label: 'Roman (Library of Congress)',
    value: 'RomanLoC'
  }, {
    language: ['Others'],
    status: ['Living', 'Living: Major'],
    invented: ['Derived: Greek'],
    region: ['Eurasia'],
    label: 'Cyrillic (Russian)',
    value: 'RussianCyrillic',
    sscode: '',
    ssdesc: '',
    miscdesc: '',
    omnicode: '',
    wikicode: 'Russian_alphabet',
    font: {
      'name': '',
      'url': ''
    },
    wikidesc: 'The Russian alphabet uses letters from the Cyrillic script. The modern Russian alphabet consists of 33 letters. The Cyrillic script is a writing system used for various alphabets across Eurasia, particularly in Eastern Europe, the Caucasus, Central Asia, and North Asia. It is based on the Early Cyrillic alphabet developed during the 9th century AD at the Preslav Literary School in the First Bulgarian Empire. It is the basis of alphabets used in various languages, especially those of Orthodox Slavic origin, and non-Slavic languages influenced by Russian.'
  }],
  semiticLatin: [{
    label: 'Semitic (Aksharamukha)',
    value: 'Latn'
  }, {
    label: 'Semitic Typeable (Aksharamukha)',
    value: 'Type'
  }, {
    label: 'ISO 259 Hebrew',
    value: 'ISO259'
  }, {
    label: 'SBL Hebrew',
    value: 'HebrewSBL'
  }, {
    label: 'ISO 233 Arabic',
    value: 'ISO233'
  },
  /* {
    label: 'Roman (DIN Arabic)',
    value: 'ArabicDIN'
  }, */
  {
    label: 'DMG Persian',
    value: 'PersianDMG'
  }],
  scriptsRomanization: [{
    label: 'Harvard-Kyoto',
    value: 'HK'
  }, {
    label: 'ITRANS',
    value: 'Itrans'
  }, {
    label: 'Velthuis',
    value: 'Velthuis'
  }, {
    label: 'IAST',
    value: 'IAST'
  }, {
    label: 'IAST (Pāḷi)',
    value: 'IASTPali'
  }, {
    label: 'ISO',
    value: 'ISO'
  }, {
    label: 'ISO (Pāḷi)',
    value: 'ISOPali'
  }, {
    label: 'Titus',
    value: 'Titus'
  }, {
    label: 'SLP1',
    value: 'SLP1'
  }, {
    label: 'WX',
    value: 'WX'
  }, {
    label: 'Roman (Readable)',
    value: 'RomanReadable'
  }, {
    label: 'Roman (Colloquial)',
    value: 'RomanColloquial'
  }, {
    label: 'Roman (Library of Congress)',
    value: 'RomanLoC'
  }],
  scriptsIME: [{
    label: 'Harvard-Kyoto',
    value: 'HK'
  }, {
    label: 'ITRANS',
    value: 'Itrans'
  }, {
    label: 'Velthuis',
    value: 'Velthuis'
  }, {
    label: 'Devanagari',
    value: 'Devanagari'
  }],
  Region: ['South Asia', 'East Asian', 'South East Asia'],
  RegionExpand: ['Iran', 'India', 'Sri Lanka', 'Burmese', 'Philippines', 'Indonesia', 'Japan'],
  Status: ['Living', 'Extinct'],
  StatusExpand: ['Extinct', 'Living: Major', 'Living: Minor'],
  indicSubset: ['LaoTham', 'LueTham', 'KhuenTham', 'PhagsPa', 'TaiLaing', 'Mon', 'Ahom', 'KhamtiShan', 'Khmer', 'Burmese', 'Lao', 'Thai', 'Balinese', 'Javanese', 'Tibetan', 'LaoPali', 'TaiTham', 'Cham', 'Lepcha', 'Ahom', 'ZanabazarSquare'],
  tagsUsageM: ['Living', 'Extinct'],
  tagsUsageS: ['Living: Minor', 'Living: Major', 'Extinct: Ancient', 'Extinct: Medieval', 'Extinct: Pre-Modern'],
  tagsLanguageM: ['Sanskrit', 'Pali', 'Others'],
  tagsRegionM1: ['Indic'],
  tagsRegionS1: ['Pan-Indic', 'East Indic', 'West Indic', 'North Indic', 'South Indic'],
  tagsRegionM2: ['East Asian', 'West Asian', 'Central Asian', 'South Asian: Other', 'South East Asian', 'Mediterranean', 'North African'],
  tagsRegionS2: ['South East Asian: Mainland', 'South East Asian: Insular'],
  tagsDerivationM: ['Derived: Brahmi', 'Derived: Pallava', 'Derived: Aramaic', 'Derived: Perso-Arabic', 'Derived: Cuneiform', 'Invented', 'Derived: Han', 'Derived: Proto-Sinaitic', 'Derived: Egyptian Hieroglyphics', 'Derived: Phoenician'],
  ocrLangOptions: [{
    label: 'Autodetect',
    value: 'osd'
  }, {
    label: 'Arabic',
    value: 'ara'
  }, {
    label: 'Assamese',
    value: 'asm'
  }, {
    label: 'Bengali',
    value: 'ben'
  }, {
    label: 'Burmese',
    value: 'mya'
  }, {
    label: 'Devanagari (Hindi)',
    value: 'hin'
  }, {
    label: 'Devanagari (Nepali)',
    value: 'nep'
  }, {
    label: 'Devanagari (Sanskrit)',
    value: 'san'
  }, {
    label: 'Latin',
    value: 'lat'
  }, {
    label: 'Gujarati',
    value: 'guj'
  }, {
    label: 'Hebrew',
    value: 'heb'
  }, {
    label: 'Javanese',
    value: 'jav'
  }, {
    label: 'Japanese',
    value: 'jpn'
  }, {
    label: 'Kannada',
    value: 'kan'
  }, {
    label: 'Khmer',
    value: 'khm'
  }, {
    label: 'Lao',
    value: 'lao'
  }, {
    label: 'Malayalam',
    value: 'mal'
  }, {
    label: 'Marathi',
    value: 'mar'
  }, {
    label: 'Oriya',
    value: 'ori'
  }, {
    label: 'Persian',
    value: 'fas'
  }, {
    label: 'Punjabi',
    value: 'pan'
  }, {
    label: 'Sinhala',
    value: 'sin'
  }, {
    label: 'Syriac',
    value: 'syr'
  }, {
    label: 'Tamil',
    value: 'tam'
  }, {
    label: 'Telugu',
    value: 'tel'
  }, {
    label: 'Thai',
    value: 'tha'
  }, {
    label: 'Tibetan',
    value: 'bod'
  }, {
    label: 'Urdu',
    value: 'urd'
  }, {
    label: 'Yiddish',
    value: 'yid'
  }]
}

function getOutputClass (tgt, postOptions = [], outputText = '') {
  if (postOptions.includes('tradOrtho') && tgt === 'Malayalam') {
    return 'malayalamold';
  } else if (postOptions.includes('LimbuDevanagariConvention') && tgt === 'Devanagari') {
    return 'limbudeva';
  } else if (postOptions.includes('egrantamil') && tgt === 'Grantha') {
    return 'granthagrantamil';
  } else if (postOptions.includes('nepaldevafont') && tgt === 'Newa') {
    return 'nepaldevafont';
  } else if (postOptions.includes('ranjanalantsa') && tgt === 'Ranjana') {
    return 'ranjanalantsa';
  } else if (postOptions.includes('ranjanawartu') && tgt === 'Ranjana') {
    return 'ranjanawartu';
  } else if (postOptions.includes('oldtamilortho') && tgt === 'Tamil') {
    return 'tamilold';
  } else if (postOptions.includes('tibetandbumed') && tgt === 'Tibetan') {
    return 'tibetandbumed';
  } else if (postOptions.includes('TaiThamLao') && tgt === 'TaiTham') {
    return 'taithamlao';
  } else if (postOptions.includes('TaiKuen') && tgt === 'TaiTham') {
    return 'taikuen';
  } else if (postOptions.includes('LaoPhonetic') && tgt === 'LaoPali') {
    return 'laophonetic';
  } else if (postOptions.includes('granthafinal') && postOptions.includes('granthaserif') && tgt === 'Grantha') {
    return 'granthaseriflig';
  } else if (postOptions.includes('granthaserif') && tgt === 'Grantha') {
    return 'granthaserif';
  } else if (postOptions.includes('granthafinal') && tgt === 'Grantha') {
    return 'granthalig';
  } else if (postOptions.includes('PhagsPaTib') && tgt === 'PhagsPa') {
    return 'phagspatib';
  } else if (postOptions.includes('PhagsPaSeal') && tgt === 'PhagsPa') {
    return 'phagspaseal';
  } else if (postOptions.includes('TeluguTamilZha') && tgt === 'Telugu') {
    return 'teluguzha';
  } else if (postOptions.includes('TeluguTamilRra') && tgt === 'Telugu') {
    return 'teluguzha';
  } else if (postOptions.includes('devanagaribalbodh') && tgt === 'Devanagari') {
    return 'devanagaribalbodh';
  } else if (postOptions.includes('devanagariuttara') && tgt === 'Devanagari') {
    return 'devanagariuttara';
  } else if (postOptions.includes('devanagarinepali') && tgt === 'Devanagari') {
    return 'devanagarinepali';
  } else if (postOptions.includes('devanagarijain') && tgt === 'Devanagari') {
    return 'devanagarijain';
  } else if (postOptions.includes('ThaiNativeConsonants') && tgt === 'Thai') {
    return 'thainative';
  } else if (postOptions.includes('verticalKana') && (tgt === 'Hiragana' || tgt === 'Katakana')) {
    return 'verticalKana';
  } else if (postOptions.includes('verticalSiddham') && postOptions.includes('siddhamap') && tgt === 'Siddham') {
    return 'verticalSiddhamap';
  } else if (postOptions.includes('verticalSiddham') && postOptions.includes('siddhammukta') && tgt === 'Siddham') {
    return 'verticalSiddhammukta';
  } else if (postOptions.includes('verticalSiddham') && tgt === 'Siddham') {
    return 'verticalSiddham';
  } else if (postOptions.includes('siddhamap') && tgt === 'Siddham') {
    return 'siddhamap';
  } else if (postOptions.includes('siddhammukta') && tgt === 'Siddham') {
    return 'siddhammukta';
  } else if (postOptions.includes('sundapura') && tgt === 'Pallava') {
    return 'sundapura';
  } else if (postOptions.includes('kawitan') && tgt === 'Pallava') {
    return 'kawitan';
  } else if (postOptions.includes('estrangelasyriac') && tgt === 'Syrc') {
    return 'estrangelasyriac';
  } else if (postOptions.includes('easternsyriac') && tgt === 'Syrc') {
    return 'easternsyriac';
  } else if (postOptions.includes('westernsyriac') && tgt === 'Syrc') {
    return 'westernsyriac';
  } else if (postOptions.includes('olddogra') && tgt === 'Dogra') {
    return 'olddogra';
  } else if (tgt === 'Oriya' && (String(outputText).includes('॒') || String(outputText).includes('᳚') || String(outputText).includes('॑'))) {
    return 'oriyavedic';
  } else if (tgt === 'Bengali' && (String(outputText).includes('॒') || String(outputText).includes('᳚') || String(outputText).includes('॑'))) {
    return 'bengalivedic';
  } else if (tgt === 'Gujarati' && (String(outputText).includes('॒') || String(outputText).includes('᳚') || String(outputText).includes('॑'))) {
    return 'gujarativedic';
  } else if (tgt === 'Telugu' && String(outputText).includes('\u0C3C')) {
    return 'telugunukta';
  } else if (tgt === 'Telugu' && String(outputText).includes('\u0C5D')) {
    return 'telugunukta';
  } else if (tgt === 'Kannada' && String(outputText).includes('\u0CDD')) {
    return 'kannadapollu';
  } else if (tgt === 'Gurmukhi' && (String(outputText).includes('॒') || String(outputText).includes('᳚') || String(outputText).includes('॑'))) {
    return 'gurmukhivedic';
  } else {
    return tgt.toLowerCase();
  }
}

// Aksharamukha Web Plugin v5 - source. Concatenated with script-data.generated.js
// by build-scripts/build-web-plugin-v5.js into ../aksharamukha-v5.js. Do not
// add a "use strict" or an outer IIFE here - the build script supplies both.
//
// Contract kept identical to v3/v4 so this is still a drop-in replacement:
//   <script src=".../aksharamukha-v5.js?source=autodetect&class=aksharamukha-text&..."></script>
// recognised query params: source, class, preoptions, scriptlist, prelist,
// changeurl (all same meaning as v3/v4), plus two new ones:
//   engine   - 'wasm' (default), 'api', or 'auto' (wasm, falling back to api
//              if the WASM assets fail to load)
//   wasmbase - URL prefix where wasm/pyodide + wasm/wheel live, default is
//              the "wasm/" folder next to this script

// Hebr/Thaa/Arab-Ur/Arab-Pa are the same 4 scripts (Hebrew, Thaana, Urdu,
// Shahmukhi) that already appear inside scriptsIndic under cleaner value
// codes - the front-end's own "scripts" list excludes them from
// scriptsSemitic for exactly this reason, to avoid listing each of those 4
// twice. Shared between Config (building the allowed script list) and
// Panel (building the picker's Semitic group).
var SEMITIC_DUPLICATE_CODES = ['Hebr', 'Thaa', 'Arab-Ur', 'Arab-Pa']

// ---------------------------------------------------------------------------
// Config: parsed once from this script tag's own URL.
// ---------------------------------------------------------------------------

var Config = (function () {
  var scriptEl = document.currentScript
  if (!scriptEl) {
    var tags = document.getElementsByTagName('script')
    scriptEl = tags[tags.length - 1]
  }
  var scriptURL = new URL(scriptEl.src, document.baseURI)
  var params = scriptURL.searchParams

  var PRESET_SCRIPT_LISTS = {
    majorindic: ['ISO', 'IAST', 'IPA', 'RomanReadable', 'RussianCyrillic', 'Assamese', 'Bengali', 'Devanagari', 'Grantha', 'Gujarati', 'Gurmukhi', 'Kannada', 'Malayalam', 'Oriya', 'Sharada', 'Tamil', 'TamilExtended', 'Telugu', 'Urdu'],
    majorall: ['ISO', 'IAST', 'IPA', 'RomanReadable', 'RussianCyrillic', 'Assamese', 'Bengali', 'Burmese', 'Devanagari', 'Grantha', 'Gujarati', 'Gurmukhi', 'Kannada', 'Khmer', 'Malayalam', 'Oriya', 'Sharada', 'Sinhala', 'Tamil', 'TamilExtended', 'Telugu', 'Thai', 'Tibetan', 'Urdu'],
    sansktradall: ['ISO', 'IAST', 'IPA', 'RomanReadable', 'RussianCyrillic', 'Assamese', 'Balinese', 'Bengali', 'Brahmi', 'Bhaikshuki', 'Burmese', 'Devanagari', 'Dogra', 'Grantha', 'GranthaPandya', 'Gujarati', 'Gurmukhi', 'Javanese', 'Kannada', 'Kharoshthi', 'KhomThai', 'Khmer', 'Malayalam', 'Mongolian', 'Newa', 'Oriya', 'PhagsPa', 'Ranjana', 'Saurashtra', 'Siddham', 'Sharada', 'Sinhala', 'Soyombo', 'TaiTham', 'Takri', 'Tamil', 'TamilExtended', 'Telugu', 'Thai', 'Tibetan', 'Tirhuta', 'Urdu', 'ZanabazarSquare'],
    sanskall: ['ISO', 'IAST', 'IPA', 'RomanReadable', 'RussianCyrillic', 'Ariyaka', 'Assamese', 'Balinese', 'Bengali', 'Brahmi', 'Bhaikshuki', 'Burmese', 'Chakma', 'Devanagari', 'Dogra', 'GunjalaGondi', 'MasaramGondi', 'Grantha', 'GranthaPandya', 'Gujarati', 'Gurmukhi', 'Javanese', 'Kaithi', 'Kannada', 'Kharoshthi', 'KhomThai', 'Khmer', 'Khudawadi', 'LaoPali', 'Malayalam', 'Mongolian', 'Modi', 'Newa', 'Oriya', 'PhagsPa', 'Ranjana', 'Santali', 'Saurashtra', 'Siddham', 'Sharada', 'Sinhala', 'Soyombo', 'TaiTham', 'Takri', 'Tamil', 'TamilExtended', 'Telugu', 'Thai', 'Tibetan', 'Tirhuta', 'Urdu', 'ZanabazarSquare']
  }

  var baseScriptList = ScriptData.scriptsIndic.map(function (s) { return s.value })
    .concat(ScriptData.scriptsSemitic
      .filter(function (s) { return SEMITIC_DUPLICATE_CODES.indexOf(s.value) === -1 })
      .map(function (s) { return s.value }))
    .concat(ScriptData.semiticLatin.map(function (s) { return s.value }))
    .concat(['RussianCyrillic', 'ISO', 'IAST', 'IASTPali', 'RomanReadable', 'IPA'])

  var scriptList
  var presetKey = params.get('prelist')
  if (params.has('scriptlist')) {
    scriptList = params.get('scriptlist').split(',')
  } else if (presetKey && PRESET_SCRIPT_LISTS[presetKey]) {
    scriptList = PRESET_SCRIPT_LISTS[presetKey].slice()
  } else {
    scriptList = baseScriptList
  }
  scriptList.push('Original')

  return {
    changeURLParams: params.get('changeurl') === '1',
    source: params.get('source') || 'autodetect',
    classURL: params.get('class') || 'aksharamukha-text',
    preOptionsURL: params.has('preoptions') ? params.get('preoptions').split(',') : [],
    scriptList: scriptList,
    // 'auto' (default): try the client-side WASM engine, fall back to the
    // hosted API if it fails to load/run. 'wasm'/'api' force one or the
    // other with no fallback (useful for testing/debugging).
    engine: params.get('engine') || 'auto',
    wasmBase: params.get('wasmbase')
      ? new URL(params.get('wasmbase'), document.baseURI)
      : new URL('wasm/', scriptURL),
    // Which viewport corner the launcher/panel live in. The launcher and
    // the expanded panel always share the same corner and swap visibility
    // (never both shown at once), so they never collide with each other.
    position: ['top-right', 'top-left', 'bottom-right', 'bottom-left'].indexOf(params.get('position')) > -1
      ? params.get('position')
      : 'top-right',
    // Distance in px from whichever edge(s) `position` puts the panel
    // against. Default (20px) assumes no fixed header/footer at that edge;
    // a site with one can pass e.g. ?offset=80 rather than forking the
    // script.
    offset: parseInt(params.get('offset'), 10) || 20
  }
})()

// ---------------------------------------------------------------------------
// Small helpers
// ---------------------------------------------------------------------------

function safeLocalStorage () {
  // Safari private mode (and any storage-disabled context) throws on
  // setItem/getItem rather than just failing silently, so every touch of
  // localStorage in this plugin goes through here.
  try {
    var testKey = '__aksharamukha_test__'
    window.localStorage.setItem(testKey, '1')
    window.localStorage.removeItem(testKey)
    return {
      get: function (k) { try { return window.localStorage.getItem(k) } catch (e) { return null } },
      set: function (k, v) { try { window.localStorage.setItem(k, v) } catch (e) {} }
    }
  } catch (e) {
    return { get: function () { return null }, set: function () {} }
  }
}
var Storage = safeLocalStorage()

// ---------------------------------------------------------------------------
// Engine: converts text, either locally via a WASM Python runtime (Pyodide +
// the aksharamukha wheel - no network calls after the one-time engine
// download) or via the hosted HTTP API, as a fallback. Both expose the same
// async convertAll(jobs) -> string[] shape, where each job is
// { source, target, text, nativize, preOptions, postOptions }.
// ---------------------------------------------------------------------------

var Engine = (function () {
  var wasmReadyPromise = null
  var transliterateModule = null

  // Explicit persistent caching for the WASM engine's assets (~20MB:
  // pyodide.asm.wasm, python_stdlib.zip, the core dep wheels, and the
  // aksharamukha wheel itself), so a returning visitor to THIS site
  // doesn't repeat that download every page load. Two things this is
  // NOT: it's not a service worker (impossible here anyway - the assets
  // are typically served from a shared CDN, and a service worker can
  // only be registered for the page's own origin, not the CDN's), and
  // it's not relying on the CDN's own HTTP cache headers (which modern
  // browsers now partition per top-level site, so a shared CDN URL no
  // longer transparently benefits every site that happens to load it).
  // Cache Storage, used directly from page script with no service worker
  // needed, is scoped to the embedding site's own origin and persists
  // across reloads there regardless of what the CDN sends.
  //
  // Pyodide's own loadPackage()/micropip machinery fetches its wheels via
  // plain fetch() in this same JS realm (Pyodide isn't run in a Worker
  // here), so a URL-scoped fetch patch - rather than just wrapping our
  // own direct fetch() calls in installLocalWheel() - is the only way to
  // cover THOSE fetches too, not just the ~3MB we fetch directly
  // ourselves. Every other fetch on the host page (or even ours, outside
  // wasmBase) passes through untouched.
  var WASM_CACHE_NAME = 'aksharamukha-wasm-v1'
  var cachingFetchInstalled = false

  function installCachingFetch (baseHref) {
    if (cachingFetchInstalled || !window.fetch || !window.caches) return
    cachingFetchInstalled = true
    var originalFetch = window.fetch.bind(window)

    // Bumping WASM_CACHE_NAME (e.g. on a Pyodide/wheel version upgrade)
    // starts fresh automatically - drop any previous version's cache
    // instead of letting it sit unused taking up quota forever.
    caches.keys().then(function (names) {
      names.forEach(function (name) {
        if (name.indexOf('aksharamukha-wasm-') === 0 && name !== WASM_CACHE_NAME) caches.delete(name)
      })
    }).catch(function () {})

    window.fetch = function (input, init) {
      // input can be a plain string, a Request (.url), or - this is the
      // one that was silently falling through uncached before - a URL
      // object (.href, not .url), which is exactly what Pyodide's own
      // loadPackage()/micropip pass for most of its wheel and the core
      // .wasm/.zip fetches. Falling back to String(input) covers
      // anything else with a sane toString().
      var url = typeof input === 'string' ? input : (input && (input.url || input.href || String(input)))
      var method = (init && init.method) || (typeof input !== 'string' && input && input.method) || 'GET'
      if (!url || method !== 'GET' || url.indexOf(baseHref) !== 0) {
        return originalFetch(input, init)
      }
      return caches.open(WASM_CACHE_NAME).then(function (cache) {
        return cache.match(url).then(function (cached) {
          if (cached) return cached
          return originalFetch(input, init).then(function (response) {
            if (response && response.ok) cache.put(url, response.clone())
            return response
          })
        })
      })
    }
  }

  function loadScriptTag (src) {
    return new Promise(function (resolve, reject) {
      var el = document.createElement('script')
      el.src = src
      el.onload = resolve
      el.onerror = function () { reject(new Error('Failed to load ' + src)) }
      document.head.appendChild(el)
    })
  }

  async function initWasm (onProgress) {
    if (wasmReadyPromise) return wasmReadyPromise
    wasmReadyPromise = (async function () {
      var base = Config.wasmBase
      installCachingFetch(base.href)
      onProgress('Loading transliteration engine…')
      await loadScriptTag(new URL('pyodide/pyodide.js', base).href)
      var pyodide = await self.loadPyodide({ indexURL: new URL('pyodide/', base).href })
      // requests is unconditionally imported at module scope by
      // aksharamukha/transliterate.py even though this plugin never uses
      // its network path (Convert_HTML/website features) - it must be
      // loaded regardless, or the import itself throws.
      await pyodide.loadPackage(['pyyaml', 'regex', 'requests', 'micropip'])
      var micropip = pyodide.pyimport('micropip')
      var localWheels = [
        'fonttools-4.51.0-py3-none-any.whl',
        'wrapt-2.4.0-py3-none-any.whl',
        'deprecated-1.3.1-py2.py3-none-any.whl',
        'jaconv-0.5.0-py3-none-any.whl',
        'pykakasi-2.3.0-py3-none-any.whl'
      ]
      for (var i = 0; i < localWheels.length; i++) {
        await installLocalWheel(pyodide, micropip, new URL('pyodide/' + localWheels[i], base).href, localWheels[i])
      }
      // The aksharamukha wheel itself lives under wasm/wheel/, not wasm/pyodide/.
      var wheelResp = await fetch(new URL('wheel/', base).href).catch(function () { return null })
      var aksharamukhaWheelName = 'aksharamukha-2.3-py3-none-any.whl'
      await installLocalWheel(pyodide, micropip, new URL('wheel/' + aksharamukhaWheelName, base).href, aksharamukhaWheelName)
      transliterateModule = pyodide.pyimport('aksharamukha.transliterate')
      onProgress('')
      return pyodide
    })()
    return wasmReadyPromise
  }

  async function installLocalWheel (pyodide, micropip, url, name) {
    var resp = await fetch(url)
    if (!resp.ok) throw new Error('Failed to fetch ' + url + ' (' + resp.status + ')')
    var bytes = new Uint8Array(await resp.arrayBuffer())
    var path = '/tmp/' + name
    pyodide.FS.writeFile(path, bytes)
    await micropip.install.callKwargs('emfs:' + path, { deps: false })
  }

  async function convertOneWasm (job) {
    await initWasm(job.onProgress || function () {})
    var kwargs = {
      nativize: job.nativize,
      pre_options: job.preOptions || [],
      post_options: job.postOptions || []
    }
    return transliterateModule.process.callKwargs(job.source, job.target, job.text, kwargs)
  }

  async function convertOneApi (job, signal) {
    var res = await fetch('https://aksharamukha-plugin.appspot.com/api/plugin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      signal: signal,
      body: JSON.stringify({
        source: job.source,
        target: job.target,
        nativize: job.nativize,
        text: job.text,
        postOptions: job.postOptions || [],
        preOptions: job.preOptions || []
      })
    })
    if (!res.ok) throw new Error('API request failed with status ' + res.status)
    return res.text()
  }

  async function convertAll (jobs, options) {
    options = options || {}
    var mode = Config.engine
    if (mode === 'api') {
      return Promise.all(jobs.map(function (job) { return convertOneApi(job, options.signal) }))
    }
    try {
      return await Promise.all(jobs.map(convertOneWasm))
    } catch (e) {
      if (mode === 'wasm') throw e
      // engine=auto (default 'wasm' with implicit fallback): if the WASM
      // engine failed to load or run, fall back to the hosted API rather
      // than breaking the widget on browsers/CDNs that can't serve/execute it.
      console.warn('Aksharamukha: WASM engine failed, falling back to API.', e)
      return Promise.all(jobs.map(function (job) { return convertOneApi(job, options.signal) }))
    }
  }

  function warmUp (onProgress) {
    // Fire-and-forget: starts the WASM cold start ahead of the user's
    // first actual selection. initWasm() memoizes on wasmReadyPromise, so
    // calling this early just means the real conversion request later
    // awaits an already-in-flight (or already-finished) promise instead of
    // starting one from scratch - the ~15-20s cold start happens while the
    // visitor is still reading the page instead of after they've asked for
    // a conversion and are staring at a spinner.
    if (Config.engine === 'api') return
    initWasm(onProgress || function () {}).catch(function (e) {
      console.warn('Aksharamukha: background WASM warm-up failed (will retry/fallback on first real use).', e)
    })
  }

  return { convertAll: convertAll, warmUp: warmUp }
})()

// ---------------------------------------------------------------------------
// Content: finds the page's transliteration targets and applies results.
// ---------------------------------------------------------------------------

var Content = (function () {
  // Per-element bookkeeping keyed by the element itself (a WeakMap so a
  // removed element's entry is GC'd for free) instead of the old parallel
  // arrays indexed by position. That indexing was the root of the "awkward
  // node looping" - a fixed snapshot taken once up front, with no way for
  // an element added after that scan to ever get picked up. A live registry
  // plus a MutationObserver (below) replaces it: elements are captured (and
  // converted, if a target is already selected) as they appear, and this
  // is now cheap to do per-element because WASM conversions have no
  // per-request network cost to batch away.
  var registry = new WeakMap() // el -> { texts, appliedOutputClass }
  var elements = [] // insertion-ordered list of currently known elements
  var observer = null

  function captureTexts (el) {
    var walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false)
    var texts = []
    var node
    while ((node = walker.nextNode())) {
      if (node.nodeValue.trim() !== '') texts.push(node.nodeValue)
    }
    return texts
  }

  function register (el) {
    if (registry.has(el)) return
    registry.set(el, { texts: captureTexts(el), appliedOutputClass: '' })
    elements.push(el)
  }

  function unregister (el) {
    var idx = elements.indexOf(el)
    if (idx > -1) elements.splice(idx, 1)
    registry.delete(el)
  }

  function findMatches (root) {
    var matches = []
    if (root.nodeType !== 1) return matches
    if (root.classList && root.classList.contains(Config.classURL)) matches.push(root)
    if (root.getElementsByClassName) {
      Array.prototype.push.apply(matches, root.getElementsByClassName(Config.classURL))
    }
    return matches
  }

  function collect () {
    var found = document.getElementsByClassName(Config.classURL)
    if (found.length === 0) {
      // No matching elements: wrap the whole page body, same auto-wrap
      // fallback behaviour as v3/v4, so a page with zero setup still works.
      var wrapper = document.createElement('span')
      wrapper.className = Config.classURL
      while (document.body.firstChild) wrapper.appendChild(document.body.firstChild)
      document.body.appendChild(wrapper)
      found = document.getElementsByClassName(Config.classURL)
    }
    Array.prototype.forEach.call(found, register)
  }

  function observe (onElementAdded) {
    observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (m) {
        Array.prototype.forEach.call(m.addedNodes, function (node) {
          if (node.nodeType !== 1 || node.id === 'aksharamukha-navbar') return
          findMatches(node).forEach(function (el) {
            if (registry.has(el)) return
            register(el)
            onElementAdded(el)
          })
        })
        Array.prototype.forEach.call(m.removedNodes, function (node) {
          findMatches(node).forEach(unregister)
        })
      })
    })
    observer.observe(document.body, { childList: true, subtree: true })
  }

  function sourceForElement (el) {
    var source = ''
    var preOptions = Config.preOptionsURL
    Array.prototype.forEach.call(el.classList, function (cls) {
      if (cls.indexOf('inputscript') === 0) source = cls.split('-')[1]
      if (cls.indexOf('preoptions') === 0 && cls.split('-')[1]) preOptions = cls.split('-')[1].split(',')
    })
    if (!source) source = Config.source !== 'autodetect' ? Config.source : 'autodetect'
    return { source: source, preOptions: preOptions }
  }

  function applyResult (el, texts, outputClass) {
    var entry = registry.get(el)
    var outputClassOld = entry ? entry.appliedOutputClass : ''
    var walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false)
    var node
    var i = 0
    while ((node = walker.nextNode())) {
      if (node.nodeValue.trim() === '') continue
      node.nodeValue = texts[i]
      i += 1
    }
    if (outputClassOld && outputClassOld !== outputClass) el.classList.remove(outputClassOld)
    if (outputClass) el.classList.add(outputClass)
    if (entry) entry.appliedOutputClass = outputClass || ''
  }

  function parseJsonOrArray (raw) {
    try { return JSON.parse(raw) } catch (e) { return raw }
  }

  return {
    collect: collect,
    observe: observe,
    // A snapshot, not a live reference - callers that start an async
    // operation should hold on to the array they got, since elements can be
    // added/removed (via the MutationObserver) while that operation is in
    // flight.
    snapshot: function () { return elements.slice() },
    textsFor: function (el) { var entry = registry.get(el); return entry ? entry.texts : [] },
    sourceForElement: sourceForElement,
    applyResult: applyResult,
    parseJsonOrArray: parseJsonOrArray
  }
})()

// ---------------------------------------------------------------------------
// State: the one mutable "current selection" record, plus the request-token
// guard that makes overlapping conversions safe (fixes the v3/v4 race where
// selecting scripts twice quickly could revert the page to source text).
// ---------------------------------------------------------------------------

var State = {
  target: 'Original',
  targetOld: '',
  postOptionsList: [],
  postOptionsListOld: [],
  preservePrevious: false,
  optionsHide: true,
  requestToken: 0,
  activeAbortController: null
}

// ---------------------------------------------------------------------------
// Panel: the injected UI. Built once; subsequent updates touch only the
// parts that changed instead of re-parsing one big innerHTML blob (which is
// what made the old v3/v4 rebuild-and-rewire-every-listener pattern racy).
// ---------------------------------------------------------------------------

var Panel = (function () {
  var els = {}

  function injectStyles () {
    var style = document.createElement('style')
    style.textContent = PANEL_CSS
    document.head.appendChild(style)
    var link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://cdn.jsdelivr.net/gh/virtualvinodh/aksharamukha/aksharamukha-front/src/statics/fonts.css'
    document.head.appendChild(link)
  }

  var ROMAN_LABELS = { IAST: 'IAST', IASTPali: 'IAST (Pali)', ISO: 'ISO', RomanReadable: 'Readable Roman', IPA: 'IPA', RussianCyrillic: 'Cyrillic (Russian)' }

  // Coarse region label used to group the ~150-script list into <optgroup>s
  // instead of one long flat list - script.region is an array from most-
  // to least-specific (e.g. ['East Indic','Indic']); the last entry is the
  // broad bucket we want ('Indic', 'South East Asian', 'West Asian', ...).
  function regionGroupFor (script) {
    if (!script.region || !script.region.length) return 'Other'
    return script.region[script.region.length - 1]
  }

  // Flat, ordered list of { group, value, label } - the single source of
  // truth for both what the combobox's listbox renders and what a typed
  // query filters against. group === '' renders with no group header
  // ('Original script' at the very top, ungrouped).
  function buildScriptOptionsData () {
    var data = [{ group: '', value: 'Original', label: 'Original script' }]

    ;['IAST', 'IASTPali', 'ISO', 'RomanReadable', 'IPA', 'RussianCyrillic'].forEach(function (v) {
      if (Config.scriptList.indexOf(v) > -1) data.push({ group: 'Romanization schemes', value: v, label: ROMAN_LABELS[v] })
    })

    ScriptData.semiticLatin.forEach(function (s) {
      if (Config.scriptList.indexOf(s.value) > -1) data.push({ group: 'Semitic romanization schemes', value: s.value, label: s.label })
    })

    var byGroup = {} // region label -> array, so same-region scripts stay contiguous
    var groupOrder = []
    ScriptData.scriptsIndic.forEach(function (script) {
      if (Config.scriptList.indexOf(script.value) === -1) return
      var groupLabel = regionGroupFor(script)
      if (!byGroup[groupLabel]) { byGroup[groupLabel] = []; groupOrder.push(groupLabel) }
      byGroup[groupLabel].push({ group: groupLabel, value: script.value, label: script.label })
    })
    groupOrder.sort().forEach(function (label) { data = data.concat(byGroup[label]) })

    // Kept as one deliberate "Semitic scripts" group rather than folded
    // into the region-based grouping above: nearly all of them share the
    // single region tag 'West Asian' anyway, but a couple (Phoenician:
    // Mediterranean, Ethiopic Abjad: North African) would otherwise get
    // split away from scripts they're closely related to and usually
    // discussed alongside.
    var semiticOptions = ScriptData.scriptsSemitic
      .filter(function (s) { return SEMITIC_DUPLICATE_CODES.indexOf(s.value) === -1 && Config.scriptList.indexOf(s.value) > -1 })
      .map(function (s) { return { group: 'Semitic scripts', value: s.value, label: s.label } })
    data = data.concat(semiticOptions)

    return data
  }

  function positionStyleFor (position) {
    var vertical = position.indexOf('top') === 0 ? 'top' : 'bottom'
    var horizontal = position.indexOf('right') > -1 ? 'right' : 'left'
    var style = {}
    style[vertical] = Config.offset + 'px'
    style[horizontal] = '20px'
    return style
  }

  function applyPosition (el) {
    var style = positionStyleFor(Config.position)
    el.style.top = el.style.bottom = el.style.left = el.style.right = ''
    Object.keys(style).forEach(function (prop) { el.style[prop] = style[prop] })
  }

  function build () {
    injectStyles()

    var launcher = document.createElement('button')
    launcher.type = 'button'
    launcher.id = 'aksharamukha-launcher'
    launcher.className = 'aksharamukha-printhide'
    launcher.title = 'Convert script (Aksharamukha)'
    launcher.setAttribute('aria-label', 'Open script converter')
    launcher.innerHTML = '<img src="https://cdn.jsdelivr.net/gh/virtualvinodh/aksharamukha-web-plugin/icon.png" width="22px" alt=""/>'
    document.body.appendChild(launcher)

    applyPosition(launcher)

    var root = document.createElement('div')
    root.id = 'aksharamukha-navbar'
    root.className = 'aksharamukha-printhide aksharamukha-collapsed'
    applyPosition(root)
    root.innerHTML =
      '<div class="aksharamukha-logosec">' +
      '<label for="aksharamukha-select-input" class="aksharamukha-name">Select script</label>' +
      '<button type="button" id="aksharamukha-pluginhidebutton"><small>Hide</small></button>' +
      '</div>' +
      '<div class="aksharamukha-combobox">' +
      '<input type="text" id="aksharamukha-select-input" autocomplete="off" spellcheck="false" placeholder="Search scripts…" ' +
      'role="combobox" aria-expanded="false" aria-autocomplete="list" aria-controls="aksharamukha-listbox"/>' +
      '<input type="hidden" id="aksharamukhaselect" name="scriptinput"/>' +
      '<ul id="aksharamukha-listbox" role="listbox" hidden></ul>' +
      '</div>' +
      '<div id="aksharamukha-options-slot"></div>' +
      '<div id="aksharamukha-loading" aria-live="polite"><div class="aksharamukha-progressbar"><div></div></div><small></small></div>' +
      '<div id="aksharamukha-error" hidden></div>' +
      '<div id="aksharamukha-branding">' +
      '<a href="https://aksharamukha.com" class="aksharamukha-hyperlink" target="_blank" rel="noopener">' +
      '<img src="https://cdn.jsdelivr.net/gh/virtualvinodh/aksharamukha-web-plugin/icon.png" width="15px" alt=""/> <small><sup>Aksharamukha</sup></small></a>' +
      '</div>'
    document.body.insertAdjacentElement('afterbegin', root)

    els.root = root
    els.launcher = launcher
    els.select = root.querySelector('#aksharamukhaselect')
    els.searchInput = root.querySelector('#aksharamukha-select-input')
    els.listbox = root.querySelector('#aksharamukha-listbox')
    els.optionsSlot = root.querySelector('#aksharamukha-options-slot')
    els.loading = root.querySelector('#aksharamukha-loading small')
    els.progressBar = root.querySelector('.aksharamukha-progressbar')
    els.error = root.querySelector('#aksharamukha-error')
    els.hideButton = root.querySelector('#aksharamukha-pluginhidebutton')

    optionsData = buildScriptOptionsData()

    var restoredTarget = Storage.get('target')
    if (restoredTarget && Config.scriptList.indexOf(restoredTarget) > -1) {
      selectValue(restoredTarget, false)
    } else {
      selectValue('Original', false)
    }
    State.preservePrevious = Storage.get('preservePrevious') === 'true'

    // One delegated listener per event type instead of re-attaching a
    // listener to every checkbox/button on every re-render.
    root.addEventListener('input', onRootInput)
    root.addEventListener('change', onRootInput)
    root.addEventListener('click', onRootInput)
    root.addEventListener('keydown', onRootKeydown)
    els.hideButton.addEventListener('click', hide)
    launcher.addEventListener('click', show)
    els.searchInput.addEventListener('focus', function () { openListbox(els.searchInput.value === currentLabel() ? '' : els.searchInput.value) })
    // mousedown (not click) fires before the search input's blur, so the
    // option gets selected before the listbox would otherwise close itself.
    els.listbox.addEventListener('mousedown', onListboxMouseDown)
    document.addEventListener('click', function (event) {
      if (!root.contains(event.target)) closeListbox()
    })

    // Open straight to the panel on a first-ever visit (nothing saved yet,
    // or the visitor previously reset to Original) so they discover it at
    // all. A returning visitor who already picked a real target starts
    // collapsed behind the launcher instead - they know how this works,
    // no need to reopen the panel every visit. Combined with the matching
    // auto-hide in selectValue() below (badge -> pick a script -> badge
    // again), the panel only ever stays open while there's something left
    // to decide.
    if (!restoredTarget || restoredTarget === 'Original') show()

    return restoredTarget
  }

  var optionsData = []
  var activeOptionId = null

  function currentLabel () {
    var match = optionsData.filter(function (o) { return o.value === els.select.value })[0]
    return match ? match.label : ''
  }

  function renderListbox (query) {
    query = (query || '').toLowerCase()
    var html = ''
    var currentGroup = null
    var matchCount = 0
    optionsData.forEach(function (item) {
      if (query && item.label.toLowerCase().indexOf(query) === -1) return
      if (item.group !== currentGroup) {
        html += '<li class="aksharamukha-optgroup-label" role="presentation">' + item.group + '</li>'
        currentGroup = item.group
      }
      html += '<li role="option" id="aksharamukha-opt-' + item.value + '" data-value="' + item.value + '" ' +
        (item.value === els.select.value ? 'aria-selected="true" class="is-selected"' : 'aria-selected="false"') + '>' + item.label + '</li>'
      matchCount += 1
    })
    els.listbox.innerHTML = matchCount ? html : '<li class="aksharamukha-empty" role="presentation">No matching script</li>'
    activeOptionId = null
  }

  function openListbox (query) {
    renderListbox(query != null ? query : els.searchInput.value)
    els.listbox.hidden = false
    els.searchInput.setAttribute('aria-expanded', 'true')
  }

  function closeListbox () {
    els.listbox.hidden = true
    els.searchInput.setAttribute('aria-expanded', 'false')
    activeOptionId = null
    // Typing without picking anything reverts to the last real selection,
    // so a half-typed query never gets mistaken for the active script.
    els.searchInput.value = currentLabel()
  }

  function moveActive (delta) {
    var opts = Array.prototype.filter.call(els.listbox.children, function (li) { return li.getAttribute('role') === 'option' })
    if (!opts.length) return
    var idx = opts.findIndex(function (li) { return li.id === activeOptionId })
    idx = (idx + delta + opts.length) % opts.length
    if (activeOptionId) {
      var prev = document.getElementById(activeOptionId)
      if (prev) prev.classList.remove('is-active')
    }
    activeOptionId = opts[idx].id
    opts[idx].classList.add('is-active')
    opts[idx].scrollIntoView({ block: 'nearest' })
    els.searchInput.setAttribute('aria-activedescendant', activeOptionId)
  }

  function selectValue (value, triggerChange) {
    els.select.value = value
    var match = optionsData.filter(function (o) { return o.value === value })[0]
    els.searchInput.value = match ? match.label : value
    closeListbox()
    // Deliberately does NOT auto-collapse the panel on a pick: someone
    // comparing scripts or fine-tuning post-options wants to keep making
    // choices without the panel snapping shut after each one. The panel
    // only starts collapsed on a later page load (see build()) - within
    // one visit, only the explicit Hide button closes it.
    if (triggerChange !== false) onSelectChanged()
  }

  function onListboxMouseDown (event) {
    var li = event.target.closest('li[role="option"]')
    if (!li) return
    event.preventDefault() // keep focus in the search input, skip its blur-close
    selectValue(li.getAttribute('data-value'))
  }

  function onRootKeydown (event) {
    if (event.target !== els.searchInput) return
    if (event.key === 'ArrowDown') { event.preventDefault(); if (els.listbox.hidden) openListbox(''); else moveActive(1) } else if (event.key === 'ArrowUp') { event.preventDefault(); if (!els.listbox.hidden) moveActive(-1) } else if (event.key === 'Enter') {
      event.preventDefault()
      if (activeOptionId) {
        selectValue(document.getElementById(activeOptionId).getAttribute('data-value'))
      } else {
        // Nothing arrow-keyed yet - typing a name and hitting Enter right
        // away is the expected way to use a search field. An exact label
        // match (e.g. "Arabic") must win over an earlier SUBSTRING match
        // in display order (e.g. "ISO 233 Arabic") - otherwise the wrong
        // script gets selected silently just because it happened to sort
        // first, which is exactly what happened here before this check
        // existed. Falls back to the first visible match only when there's
        // no exact match at all.
        var query = els.searchInput.value.trim().toLowerCase()
        var exact = optionsData.filter(function (o) { return o.label.toLowerCase() === query })[0]
        var firstVisible = els.listbox.querySelector('li[role="option"]')
        var value = exact ? exact.value : (firstVisible && firstVisible.getAttribute('data-value'))
        if (value) selectValue(value)
      }
    } else if (event.key === 'Escape') {
      closeListbox()
    }
  }

  function onRootInput (event) {
    // event.target may be a descendant of the actual interactive element
    // (e.g. the <small> label text inside a <button>), so match on the
    // nearest ancestor that carries the id/name, not an exact reference.
    var t = event.target.closest('#aksharamukha-select-input, #aksharamukha-preserve, [name="aksharamukha-optionpost"], #aksharamukha-more')
    if (!t) return
    if (t === els.searchInput) {
      // Typing filters the listbox; it does NOT change the actual
      // selection - that only happens via selectValue() (click or Enter
      // on an option), which calls onSelectChanged() itself.
      if (event.type === 'input') openListbox(t.value)
    } else if (t.id === 'aksharamukha-preserve') {
      State.preservePrevious = t.checked
      Storage.set('preservePrevious', String(t.checked))
      onSelectChanged()
    } else if (t.name === 'aksharamukha-optionpost') {
      applyRadioGroupExclusivity(t)
      onSelectChanged()
    } else if (t.id === 'aksharamukha-more') {
      toggleOptions()
    }
  }

  var onSelectChanged = function () {} // wired by init()
  function setOnSelectChanged (fn) { onSelectChanged = fn }

  function toggleOptions () {
    State.optionsHide = !State.optionsHide
    renderOptionsVisibility()
  }

  function renderOptionsVisibility () {
    var box = els.optionsSlot.querySelector('#options')
    var moreBtn = els.optionsSlot.querySelector('#aksharamukha-more')
    if (box) box.className = State.optionsHide ? 'aksharamukha-hidedown' : 'aksharamukha-showup'
    if (moreBtn) moreBtn.querySelector('small').textContent = State.optionsHide ? 'More options' : 'Hide options'
  }

  function getCheckedPostOptions () {
    var checked = []
    Array.prototype.forEach.call(
      els.optionsSlot.querySelectorAll('input[name="aksharamukha-optionpost"]:checked'),
      function (box) { checked.push(box.value) }
    )
    return checked
  }

  // Global numeral/danda toggles the front-end shows in OutputOptions.vue,
  // conditioned on which script-category lists the target script falls
  // into - not tied to any specific script the way postOptionsGroup is.
  // Exactly one of the first two ever applies to a given target (a script
  // is never in both branches), the danda toggle is independent of those.
  function numeralDandaOptionsFor (target) {
    var opts = []
    if (!ScriptData.romanNumeralScripts.includes(target) && !ScriptData.transliterationScripts.includes(target)) {
      opts.push({ label: 'Indo-Arabic numerals', value: 'romanNumerals' })
    } else if (ScriptData.romanNumeralScripts.includes(target)) {
      opts.push({ label: 'Native numerals', value: 'indicNumerals' })
    }
    if (ScriptData.romanPunctscripts.includes(target) || ScriptData.transliterationScripts.includes(target)) {
      opts.push({ label: 'Use dandas', value: 'indicDandas' })
    } else {
      // Exact complement of the "Use dandas" condition above (this is
      // OutputOptions.vue's romanFullStop toggle) - every target falls
      // into exactly one of the two branches, never both/neither.
      opts.push({ label: 'Use fullstop', value: 'romanFullStop' })
    }
    return opts
  }

  // Splits an option's raw label - a single HTML string mixing a plain-text
  // name with an optional before/after example, e.g.
  // 'Old orthography<br/><small><span class="tamil">லை னா</span> → ...</small>'
  // - into { name, example }. The name is everything before the first
  // <br>, tags stripped (handles a couple of genuinely malformed entries
  // in the source data, like a bare `</>`, since stripping "any <...>"
  // removes those too). The example is the concatenation of every
  // <small>...</small> block's inner HTML (kept, not stripped, since it
  // carries the script-specific font classes) - a few entries have more
  // than one such block (e.g. an "(Experimental)" aside plus the actual
  // example), joined with a space. Options with no <br> at all (about a
  // fifth of them) get name = the whole label, example = ''.
  function parseOptionLabel (rawLabel) {
    var brMatch = rawLabel.match(/<br\s*\/?>/i)
    var namePart = brMatch ? rawLabel.slice(0, brMatch.index) : rawLabel
    var name = namePart.replace(/<[^>]*>/g, '').trim()
    var exampleBlocks = rawLabel.match(/<small>[\s\S]*?<\/small>/gi) || []
    var example = exampleBlocks
      .map(function (block) { return block.replace(/^<small>/i, '').replace(/<\/small>$/i, '').trim() })
      .join(' ')
    return { name: name, example: example }
  }

  function renderChip (id, value, name, example, checked) {
    var html = '<span class="aksharamukha-chip' + (example ? ' aksharamukha-has-example' : '') + '">' +
      '<input type="checkbox" name="aksharamukha-optionpost" id="' + id + '" value="' + value + '"' + (checked ? ' checked' : '') + '/>' +
      '<label for="' + id + '">' + name + '</label>'
    if (example) {
      html += '<span class="aksharamukha-tooltip" role="tooltip">' + example + '</span>'
    }
    return html + '</span>'
  }

  function renderOptions (target, liveChecked, primarySource) {
    var postOptionDefs = (ScriptData.postOptionsGroup[target] || []).concat(numeralDandaOptionsFor(target))
    // Pair-specific options (e.g. Saurashtra<->Tamil's colon/haaru
    // conversion) are keyed target+source, the reverse order of the
    // pre-options equivalent - see resolvePrimarySource()'s comment for
    // why only one shared source is used here rather than per-element.
    if (primarySource) {
      postOptionDefs = postOptionDefs.concat(ScriptData.postOptionsGroupSpecific[target + primarySource] || [])
    }
    var preserveExample = ScriptData.preserveSourceExampleOut[target]
    var checkedSet = {}
    if (liveChecked) {
      // Re-rendering for the SAME target the options panel is already
      // showing (e.g. the user just toggled one of these checkboxes,
      // which triggers this very re-render) - use what's actually checked
      // in the DOM right now, not the last-saved snapshot, or the click
      // that caused this render would be immediately discarded.
      liveChecked.forEach(function (v) { checkedSet[v] = true })
    } else {
      var savedList = Storage.get('postOptionsList' + target)
      if (savedList) savedList.split(',').forEach(function (v) { if (v) checkedSet[v] = true })
    }

    if (!postOptionDefs.length && !preserveExample) {
      els.optionsSlot.innerHTML = ''
      State.postOptionsList = []
      return
    }

    var html = '<button type="button" id="aksharamukha-more"><small>' + (State.optionsHide ? 'More options' : 'Hide options') + '</small></button>'
    html += '<div id="options" class="' + (State.optionsHide ? 'aksharamukha-hidedown' : 'aksharamukha-showup') + '">'
    html += '<div class="aksharamukha-chip-row">'
    if (preserveExample && target !== 'Original') {
      html += '<span class="aksharamukha-chip aksharamukha-has-example">' +
        '<input type="checkbox" id="aksharamukha-preserve"/>' +
        '<label for="aksharamukha-preserve">Preserve source</label>' +
        '<span class="aksharamukha-tooltip" role="tooltip">' + preserveExample + '</span>' +
        '</span>'
    }
    postOptionDefs.forEach(function (opt) {
      var parsed = parseOptionLabel(opt.label)
      html += renderChip('aksharamukha-opt-' + opt.value, opt.value, parsed.name, parsed.example, checkedSet[opt.value])
    })
    html += '</div></div>'
    els.optionsSlot.innerHTML = html

    var preserveBox = els.optionsSlot.querySelector('#aksharamukha-preserve')
    if (preserveBox) preserveBox.checked = State.preservePrevious

    State.postOptionsList = postOptionDefs.map(function (o) { return o.value }).filter(function (v) { return checkedSet[v] })
  }

  // Mirrors the front-end's filterRadio(): some post-options for a given
  // target are mutually exclusive alternatives (e.g. Siddham's two "use
  // alternate I" variants), grouped in ScriptData.postOptionsRadioGroup.
  // Rendering them as plain checkboxes (rather than reworking the markup
  // to <input type="radio">, a bigger change) but enforcing the exclusion
  // in JS: checking one un-checks the others in its group, so a user can
  // no longer end up with two contradictory options both selected - which
  // the plugin previously allowed silently.
  function applyRadioGroupExclusivity (changedCheckbox) {
    if (!changedCheckbox.checked) return
    var groups = ScriptData.postOptionsRadioGroup[State.target]
    if (!groups) return
    var value = changedCheckbox.value
    groups.forEach(function (group) {
      if (group.indexOf(value) === -1) return
      var boxes = els.optionsSlot.querySelectorAll('input[name="aksharamukha-optionpost"]')
      Array.prototype.forEach.call(boxes, function (box) {
        if (box.value !== value && group.indexOf(box.value) > -1) box.checked = false
      })
    })
  }

  function setLoading (isLoading, message) {
    els.loading.textContent = isLoading ? (message || 'Converting…') : ''
    els.root.classList.toggle('is-loading', !!isLoading)
    els.progressBar.classList.toggle('active', !!isLoading)
    // The panel itself is display:none while collapsed to the badge (the
    // common case for a returning visitor, whose saved target kicks off
    // conversion - and the WASM cold start it may trigger - immediately
    // on load), so the loading state needs its own visible indicator on
    // the launcher, or it happens invisibly for ~15-20s with no feedback.
    els.launcher.classList.toggle('is-loading', !!isLoading)
    els.launcher.setAttribute('aria-label', isLoading ? (message || 'Loading…') : 'Open script converter')
    els.launcher.title = isLoading ? (message || 'Loading…') : 'Convert script (Aksharamukha)'
  }

  function setError (message) {
    if (message) {
      els.error.textContent = message
      els.error.hidden = false
    } else {
      els.error.hidden = true
    }
  }

  function hide () {
    els.root.classList.add('aksharamukha-collapsed')
    els.launcher.classList.remove('aksharamukha-collapsed')
  }

  function show () {
    els.root.classList.remove('aksharamukha-collapsed')
    els.launcher.classList.add('aksharamukha-collapsed')
  }

  return {
    build: build,
    setOnSelectChanged: setOnSelectChanged,
    renderOptions: renderOptions,
    getCheckedPostOptions: getCheckedPostOptions,
    setLoading: setLoading,
    setError: setError,
    get select () { return els.select },
    get postOptionCheckboxes () { return els.optionsSlot.querySelectorAll('input[name="aksharamukha-optionpost"]') }
  }
})()

// Colors/sizing referenced through CSS custom properties (var(--aksharamukha-X,
// default)), not hardcoded, so an embedding site can restyle the widget by
// setting these on :root (or any ancestor of <body>) in its own
// stylesheet - custom properties inherit normally regardless of which
// <style> tag declared the rule using them - without forking this file.
// Documented in README-v5-plugin.md's "Theming" section.
var PANEL_CSS = '\n' +
  '#aksharamukha-navbar, #aksharamukha-navbar * { box-sizing: border-box; }\n' +
  '#aksharamukha-navbar { position: fixed; font-family: var(--aksharamukha-font, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif); width: 220px; padding: 14px 16px 12px; border-radius: var(--aksharamukha-radius, 12px); background: var(--aksharamukha-bg, #fff); border: 1px solid var(--aksharamukha-border, #e7e8ee); box-shadow: 0 4px 18px rgba(20,20,40,.08); z-index: 1000; }\n' +
  '#aksharamukha-navbar.aksharamukha-collapsed { display: none; }\n' +
  '.aksharamukha-logosec { display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-bottom: 8px; }\n' +
  '.aksharamukha-name { font-weight: 600; color: var(--aksharamukha-text, #1f2430); }\n' +
  '.aksharamukha-combobox { position: relative; }\n' +
  '#aksharamukha-select-input { font-family: inherit; width: 100%; padding: 6px 10px; font-size: 13px; color: var(--aksharamukha-text, #1f2430); background: var(--aksharamukha-bg, #fff); border: 1px solid #d7dae1; border-radius: 7px; cursor: text; }\n' +
  '#aksharamukha-select-input:focus { outline: none; border-color: var(--aksharamukha-accent, #6c63ff); box-shadow: 0 0 0 3px var(--aksharamukha-accent-shadow, rgba(108,99,255,.15)); }\n' +
  '#aksharamukha-listbox { position: absolute; left: 0; right: 0; top: calc(100% + 4px); margin: 0; padding: 4px 0; list-style: none; background: var(--aksharamukha-bg, #fff); border: 1px solid #e2e4ea; border-radius: 8px; box-shadow: 0 10px 28px rgba(20,20,40,.14); max-height: 220px; overflow-y: auto; z-index: 1001; }\n' +
  '#aksharamukha-listbox li[role="option"] { padding: 6px 12px; font-size: 13px; color: var(--aksharamukha-text, #1f2430); cursor: pointer; }\n' +
  '#aksharamukha-listbox li[role="option"]:hover, #aksharamukha-listbox li.is-active { background: var(--aksharamukha-accent-tint, #f2f0ff); }\n' +
  '#aksharamukha-listbox li.is-selected { font-weight: 600; color: var(--aksharamukha-accent-strong, #4b3fd6); }\n' +
  '.aksharamukha-optgroup-label { padding: 8px 12px 2px; font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: .05em; color: var(--aksharamukha-text-faint, #9aa0ab); }\n' +
  '.aksharamukha-empty { padding: 8px 12px; font-size: 12px; color: var(--aksharamukha-text-faint, #9aa0ab); }\n' +
  '#aksharamukha-navbar button { font-family: inherit; font-size: 12px; font-weight: 500; color: var(--aksharamukha-text-muted, #4a4f5c); background: #f4f5f8; border: 1px solid #e2e4ea; border-radius: 6px; padding: 4px 10px; cursor: pointer; margin-top: 8px; }\n' +
  '#aksharamukha-navbar button:hover { background: var(--aksharamukha-accent-tint, #ebe9ff); border-color: #c9c3ff; color: var(--aksharamukha-accent-strong, #4b3fd6); }\n' +
  '#options { margin-top: 6px; padding-top: 6px; border-top: 1px solid #edeef2; }\n' +
  '.aksharamukha-chip-row { display: flex; flex-wrap: wrap; gap: 6px; }\n' +
  '.aksharamukha-chip { position: relative; display: inline-flex; align-items: center; }\n' +
  '.aksharamukha-chip input[type="checkbox"] { position: absolute; opacity: 0; width: 1px; height: 1px; overflow: hidden; }\n' +
  '.aksharamukha-chip label { display: inline-block; padding: 4px 9px; border-radius: 13px; border: 1px solid #d7dae1; background: #f8f8fb; color: var(--aksharamukha-text-muted, #4a4f5c); font-size: 11.5px; line-height: 1.3; cursor: pointer; user-select: none; }\n' +
  '.aksharamukha-chip input[type="checkbox"]:checked + label { background: var(--aksharamukha-accent, #6c63ff); border-color: var(--aksharamukha-accent, #6c63ff); color: var(--aksharamukha-accent-contrast, #fff); }\n' +
  '.aksharamukha-chip input[type="checkbox"]:focus-visible + label { outline: 2px solid var(--aksharamukha-accent, #6c63ff); outline-offset: 1px; }\n' +
  '.aksharamukha-has-example label { cursor: help; text-decoration: underline dotted; text-decoration-color: #b9bfcc; text-underline-offset: 2px; }\n' +
  '.aksharamukha-tooltip { visibility: hidden; opacity: 0; position: absolute; bottom: 135%; left: 50%; transform: translateX(-50%); background: var(--aksharamukha-text, #1f2430); color: #fff; padding: 6px 8px; border-radius: 6px; font-size: 11px; line-height: 1.5; width: max-content; max-width: 200px; white-space: normal; z-index: 1002; transition: opacity .1s ease; pointer-events: none; }\n' +
  '.aksharamukha-chip:hover .aksharamukha-tooltip, .aksharamukha-chip:focus-within .aksharamukha-tooltip { visibility: visible; opacity: 1; }\n' +
  '.aksharamukha-hidedown { display: none; }\n' +
  '.aksharamukha-showup { display: block; }\n' +
  '#aksharamukha-loading { min-height: 14px; margin-top: 4px; font-size: 11px; color: var(--aksharamukha-text-faint, #8a8f9c); }\n' +
  '#aksharamukha-error { margin-top: 6px; font-size: 11px; color: #a8352a; }\n' +
  '#aksharamukha-branding { margin-top: 10px; padding-top: 8px; border-top: 1px solid #edeef2; font-size: 90%; color: var(--aksharamukha-text-faint, #8a8f9c); }\n' +
  'a.aksharamukha-hyperlink, a.aksharamukha-hyperlink:visited { text-decoration: none; color: var(--aksharamukha-text-muted, #4a4f5c); }\n' +
  'a.aksharamukha-hyperlink:hover { color: var(--aksharamukha-accent, #6c63ff); }\n' +
  '.aksharamukha-progressbar { height: 3px; border-radius: 2px; background: #eeedf7; overflow: hidden; margin-top: 6px; display: none; }\n' +
  '.aksharamukha-progressbar.active { display: block; }\n' +
  '.aksharamukha-progressbar div { height: 100%; width: 40%; background: var(--aksharamukha-accent, #6c63ff); border-radius: 2px; animation: aksharamukha-indeterminate 1.1s ease-in-out infinite; }\n' +
  '@keyframes aksharamukha-indeterminate { 0% { transform: translateX(-100%); } 100% { transform: translateX(350%); } }\n' +
  '#aksharamukha-launcher { position: fixed; width: 44px; height: 44px; border-radius: 50%; background: var(--aksharamukha-bg, #fff); border: 1px solid var(--aksharamukha-border, #e7e8ee); box-shadow: 0 4px 14px rgba(20,20,40,.15); display: flex; align-items: center; justify-content: center; cursor: pointer; z-index: 1000; padding: 0; }\n' +
  '#aksharamukha-launcher:hover { box-shadow: 0 6px 18px rgba(20,20,40,.22); }\n' +
  '#aksharamukha-launcher.aksharamukha-collapsed { display: none; }\n' +
  '#aksharamukha-launcher.is-loading::after { content: ""; position: absolute; inset: -3px; border-radius: 50%; border: 2px solid transparent; border-top-color: var(--aksharamukha-accent, #6c63ff); border-right-color: var(--aksharamukha-accent, #6c63ff); animation: aksharamukha-spin .8s linear infinite; }\n' +
  '@keyframes aksharamukha-spin { to { transform: rotate(360deg); } }\n' +
  '@media print { .aksharamukha-printhide { display: none !important; } }\n'

// ---------------------------------------------------------------------------
// Orchestration
// ---------------------------------------------------------------------------

// postOptionsGroupSpecific (and preOptionsGroupSpecific, not wired into the
// UI - see the comment on that below) are keyed by a SOURCE+TARGET pair,
// not target alone, but the options panel is one shared panel for the
// whole page. Resolves one "primary" source to key that pair-specific
// lookup off: an explicit script-tag ?source=, or - if every element on
// the page shares an explicit inputscript-X - that shared source. Returns
// null (no pair-specific options offered) when the source is autodetect,
// since the actual source script isn't known until the engine resolves
// it - same limitation the main site has for its own Autodetect input.
function resolvePrimarySource () {
  if (Config.source !== 'autodetect') return Config.source
  var elements = Content.snapshot()
  if (!elements.length) return null
  var first = Content.sourceForElement(elements[0]).source
  if (first === 'autodetect') return null
  var allSame = elements.every(function (el) { return Content.sourceForElement(el).source === first })
  return allSame ? first : null
}

async function runConversion () {
  var target = Panel.select.value
  State.target = target

  if (Config.changeURLParams) updateURL(target)
  if (Config.scriptList.indexOf(target) === -1) return

  var liveChecked = target === State.targetOld ? Panel.getCheckedPostOptions() : null
  Panel.renderOptions(target, liveChecked, resolvePrimarySource())
  Storage.set('target', target)
  Storage.set('postOptionsList' + target, State.postOptionsList.join(','))

  // Cancel any still-in-flight run and claim a fresh token: only the result
  // matching the CURRENT token is ever written back to the page, so a user
  // flipping between scripts quickly can no longer cause a stale response
  // to clobber a newer one (the bug that shipped in v3/v4).
  if (State.activeAbortController) State.activeAbortController.abort()
  var controller = new AbortController()
  State.activeAbortController = controller
  var myToken = ++State.requestToken

  Panel.setError(null)
  Panel.setLoading(true)

  // Snapshot the current element list: it can change out from under an
  // in-flight run (elements added/removed via the MutationObserver), so the
  // jobs built here and the elements results get written back to must be
  // the SAME array, not two separate reads of Content's live list.
  var targetElements = Content.snapshot()
  var jobs = targetElements.map(function (el) {
    var meta = Content.sourceForElement(el)
    return {
      source: meta.source,
      target: target,
      preOptions: meta.preOptions,
      postOptions: State.postOptionsList,
      nativize: !State.preservePrevious,
      text: JSON.stringify(Content.textsFor(el)),
      onProgress: function (msg) { if (myToken === State.requestToken) Panel.setLoading(true, msg) }
    }
  })

  try {
    var results = target === 'Original'
      ? targetElements.map(function (el) { return JSON.stringify(Content.textsFor(el)) })
      : await Engine.convertAll(jobs, { signal: controller.signal })

    if (myToken !== State.requestToken) return // superseded by a newer run

    results.forEach(function (raw, i) {
      // getOutputClass's 3rd argument is content-dependent (e.g. Vedic
      // accent-mark detection), so it must be computed per element's own
      // result, not once for the whole batch.
      var outputClass = target === 'Original' ? '' : getOutputClass(target, State.postOptionsList, raw)
      Content.applyResult(targetElements[i], Content.parseJsonOrArray(raw), outputClass)
    })

    State.targetOld = target
    State.postOptionsListOld = State.postOptionsList
  } catch (e) {
    if (e.name === 'AbortError') return // superseded run, not a real failure
    if (myToken !== State.requestToken) return
    console.error('Aksharamukha plugin: conversion failed', e)
    Panel.setError('Could not reach the transliteration service. Please try again.')
  } finally {
    if (myToken === State.requestToken) Panel.setLoading(false)
  }
}

// Converts a single element that appeared on the page AFTER the last full
// run (picked up by the MutationObserver) to whatever script is currently
// selected, without disturbing the rest of the page or the request-token
// bookkeeping used by runConversion's page-wide passes.
async function convertNewElement (el) {
  if (!State.targetOld || State.targetOld === 'Original') return
  var meta = Content.sourceForElement(el)
  var job = {
    source: meta.source,
    target: State.targetOld,
    preOptions: meta.preOptions,
    postOptions: State.postOptionsListOld,
    nativize: !State.preservePrevious,
    text: JSON.stringify(Content.textsFor(el))
  }
  try {
    var results = await Engine.convertAll([job], {})
    var outputClass = getOutputClass(State.targetOld, State.postOptionsListOld, results[0])
    Content.applyResult(el, Content.parseJsonOrArray(results[0]), outputClass)
  } catch (e) {
    console.error('Aksharamukha plugin: failed to convert a dynamically added element', e)
  }
}

function updateURL (target) {
  var url = new URL(window.location.href)
  url.searchParams.set('akshrmkh', target)
  window.history.pushState({ path: url.href }, '', url.href)
}

function init () {
  // Guards against the script being included twice on the same page (an
  // easy copy-paste mistake, or a CMS plugin/theme both adding it) -
  // without this, a second run would build a second panel/launcher and
  // register every element a second time.
  if (document.getElementById('aksharamukha-navbar')) {
    console.warn('Aksharamukha plugin: already initialized on this page - ignoring a duplicate <script> inclusion.')
    return
  }
  Content.collect()
  var restoredTarget = Panel.build()
  Panel.setOnSelectChanged(runConversion)
  // Elements that appear later (SPA route changes, AJAX-loaded content,
  // anything added after this initial scan) get converted to whatever
  // script is currently selected as soon as they show up, instead of
  // silently being invisible to a one-time page scan.
  Content.observe(convertNewElement)
  if (restoredTarget) {
    runConversion()
  } else {
    // No target picked yet: warm the WASM engine in the background during
    // browser idle time, so the ~15-20s cold start happens while the
    // visitor is still reading the page rather than after they've picked a
    // script and are staring at the panel waiting. Harmless if they never
    // interact - the engine just never gets used. Skipped when a target
    // was restored above, since runConversion() already triggers the
    // exact same warm-up as a side effect of that real conversion.
    var scheduleIdle = window.requestIdleCallback || function (fn) { setTimeout(fn, 1500) }
    scheduleIdle(function () {
      Engine.warmUp(function (msg) { Panel.setLoading(!!msg, msg) })
    })
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init)
} else {
  init()
}

})();
