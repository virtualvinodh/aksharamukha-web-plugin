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
// Set by the build: the commit that last changed wasm/, the aksharamukha wheel in it,
// and every engine file (downloaded ahead of time on a first visit).
var ENGINE_COMMIT = "0705791980f3929936043b1ab4651ee86468751c"
var ENGINE_WHEEL = "aksharamukha-2.3-py3-none-any.whl"
var ENGINE_FILES = ["pyodide/PyYAML-6.0.1-cp312-cp312-pyodide_2024_0_wasm32.whl","pyodide/certifi-2024.2.2-py3-none-any.whl","pyodide/charset_normalizer-3.3.2-py3-none-any.whl","pyodide/deprecated-1.3.1-py2.py3-none-any.whl","pyodide/fonttools-4.51.0-py3-none-any.whl","pyodide/idna-3.7-py3-none-any.whl","pyodide/jaconv-0.5.0-py3-none-any.whl","pyodide/micropip-0.6.0-py3-none-any.whl","pyodide/packaging-23.2-py3-none-any.whl","pyodide/pykakasi-2.3.0-py3-none-any.whl","pyodide/pyodide-lock.json","pyodide/pyodide.asm.js","pyodide/pyodide.asm.wasm","pyodide/pyodide.js","pyodide/python_stdlib.zip","pyodide/regex-2024.4.16-cp312-cp312-pyodide_2024_0_wasm32.whl","pyodide/requests-2.31.0-py3-none-any.whl","pyodide/urllib3-2.2.1-py3-none-any.whl","pyodide/wrapt-2.4.0-py3-none-any.whl","wheel/aksharamukha-2.3-py3-none-any.whl"]
const ScriptData = {"postOptionsGroup":{"DivesAkuru":[{"label":"/y/ as vowel carrier<br/><small><span class=\"divesakuru\">𑤀 𑤁 𑤂 𑤃 → 𑤥 𑤥𑤰 𑤥𑤱 𑤥𑤲</span></small>","value":"DivesAkuruAlternateIndVowels"},{"label":"Use Alt. /y/<br/><small><span class=\"divesakuru\">𑤥 → 𑤦</span></small>","value":"UseAlternateYA"},{"label":"Use nasal sign<br/><small><span class=\"divesakuru\">𑤐𑤾𑤎 𑤤𑤾𑤢 𑤚𑤾𑤘 𑤟𑤾𑤞 → 𑤿𑤎 𑤿𑤢 𑤿𑤘 𑤿𑤞</span></small>","value":"DivesAkuruHomoOrganNasal"}],"Ahom":[{"label":"Remove Pali characters<br/><small><span class=\"ahom\">𑝀 𑝁 𑝂 𑝃 𑝄 𑝅 𑝆 → 𑜋 𑜄 𑜌 𑜓 𑜔 𑜃 𑜎</span></small>","value":"removePaliAhom"}],"Kawi":[{"label":"Use decomposed vowels<br/><small><span class=\"kawi\">𑼅 𑼇 𑼉 → 𑼄𑼴 𑼆𑼴 𑼈𑼴</span></small>","value":"KawiDecomposedVowel"},{"label":"Use Alt. AI/AU<br/><small><span class=\"kawi\">𑼒𑼿 𑼒𑼿𑼴 → 𑼒𑼾𑼾 𑼒𑼾𑼾𑼴</span></small>","value":"KawiAltAiAU"},{"label":"Arachaic jña<br/><small><span class=\"kawi\">𑼙𑽂𑼛 → 𑼳</span></small>","value":"KawiArchaicJNA"},{"label":"Move Repha<br/><small><span class=\"kawi\">𑼤𑼂𑼪 → 𑼂𑼤𑼪</span></small>","value":"KawiMoveRepha"}],"Javanese":[{"label":"Use a-based indendent vowels<br/><small><span class=\"javanese\">ꦆ ꦇ ꦈ ꦈꦴ → ꦄꦶ ꦄꦷ ꦄꦸ ꦄꦹ</span></small>","value":"JavaneseAvowels"},{"label":"Arachaic jña<br/><small><span class=\"javanese\">ꦗ꧀ꦚ → ꦘ</span></small>","value":"JavaneseArchaicJNA"},{"label":"Move repha<br/><small><span class=\"javanese\">ꦣꦂꦩ → ꦣꦩꦂ</span></small>","value":"JavaneseMoveRepha"}],"Balinese":[{"label":"Use a-based vowels<br/><small><span class=\"balinese\">ᬇ ᬈ ᬉ ᬊ → ᬅᬶ ᬅᬷ ᬅᬸ ᬅᬹ</span></small>","value":"BalineseAvowels"},{"label":"Arachaic jña<br/><small><span class=\"balinese\">ᬚ᭄ᬜ → ᭌ</span></small>","value":"BalineseArchaicJNA"},{"label":"Move repha<br/><small><span class=\"balinese\">ᬥᬃᬫ → ᬥᬫᬃ</span></small>","value":"BalineseMoveRepha"}],"RomanLoC":[{"label":"MARC-8 decomposed diacritics","value":"LoCMarc8"}],"HK":[{"label":"E/O for long, e/o for short","value":"swapEe"}],"Velthuis":[{"label":"E/O for long, e/o for short","value":"swapEe"}],"Arab":[{"label":"Remove Harakat <br/><small>غَانْدِي ← غاندي</small>","value":"removeDiacriticsArabic"},{"label":"Remove Sukun at end of words <br/><small>هِنْدْ ← هِنْد</small>","value":"removeSukunEnd"}],"Arab-Fa":[{"label":"Remove vowel diacritics <!--<br/><small>غَانْدِي ← غاندي</small> -->","value":"removeDiacriticsArabic"},{"label":"Remove Jazm at end of words <br/><small>هِنْدْ ← هِنْد</small>","value":"removeSukunEnd"},{"label":"/p g/ پ گ → /f j/ ف ج","value":"persianPaGaFaJa"}],"Syrj":[{"label":"Remove Majlīyānā<br/><small><span class=\"syrj\">ܟ ܓ ܙ</span> → <span class=\"syrj\">ܟ̰ ܓ̰ ܙ̰</span></small>","value":"removeMajliyana"},{"label":"Remove Rūkkāḵā <br/><small><span class=\"syrj\">ܒ</span> → <span class=\"syrj\">ܒ݁</span></small>","value":"removeRukkaka"},{"label":"Remove Quššāyā <br/><small><span class=\"syrj\">ܒ</span> → <span class=\"syrj\">ܒ݂</span></small>","value":"removeQussaya"},{"label":"Remove Vowel Diacritics <br/><small><span class=\"syrj\">ܠ ܠ ܠ ܠ ܠ ܠ</span> → <span class=\"syrj\">ܠܰ ܠܳ ܠܺ ܠܽ ܠܶ ܠّ</span></small>","value":"removeVowelsSyriac"}],"Syrn":[{"label":"Remove Majlīyānā<br/><small><span class=\"syrn\">ܟ ܓ ܙ</span> → <span class=\"syrn\">ܟ̰ ܓ̰ ܙ̰</span></small>","value":"removeMajliyana"},{"label":"Remove Rūkkāḵā <br/><small><span class=\"syrn\">ܒ</span> → <span class=\"syrn\">ܒ݁</span></small>","value":"removeRukkaka"},{"label":"Remove Quššāyā <br/><small><span class=\"syrn\">ܒ</span> → <span class=\"syrn\">ܒ݂</span></small>","value":"removeQussaya"},{"label":"Remove Vowel Diacritics <br/><small><span class=\"syrn\">ܠ ܠ ܠܝ ܠܘ ܠ ܠ ܠܘ</span> → <span class=\"syrn\">ܠܲ ܠܵ ܠܝܼ ܠܘܼ ܠܸ ܠܹ ܠܘܿ</span></small>","value":"removeVowelsSyriac"}],"Pallava":[{"label":"Sundapura font<br/><span class=\"sundapura\">ꦥꦭ꧀ꦭꦮ ꦒ꧀ꦫꦤ꧀","value":"sundapura"},{"label":"Kawitan font<br/><span class=\"kawitan\">ꦥꦭ꧀ꦭꦮ ꦒ꧀ꦫꦤ꧀ꦡ","value":"kawitan"}],"HebrewSBL":[{"label":"ḏ ṯ ḡ → d t g & d t g → d꞉ t꞉ g꞉","value":"removetddash"}],"Hiragana":[{"label":"Vertical text","value":"verticalKana"},{"label":"/v/ → /b/ <br/<small>ゔぃのお → びの</small>","value":"vtobJapanese"}],"Katakana":[{"label":"Vertical text","value":"verticalKana"},{"label":"/v/ → /b/ <br/<small>ヴィノー → ビノ</small>","value":"vtobJapanese"}],"Ranjana":[{"label":"Lantsa Style (Tibetan)<br/><small><span class=\"ranjana\">बुद्धः</span> → <span class=\"ranjanalantsa\">བུདྡྷཿ</span></small>","value":"ranjanalantsa"},{"label":"Wartu Style (Tibetan)<br/><small><span class=\"ranjana\">बुद्धः</span> → <span class=\"ranjanawartu\">བུདྡྷཿ</span></small>","value":"ranjanawartu"}],"Tamil":[{"label":"Disable <span class=\"tamil\">ஶ</span><br/><small><span class=\"tamil\">ஶ → ஷ²</span></small>","value":"TamilDisableSHA"},{"label":"Subscript numerals<br/><small><span class=\"tamil\">க²க³க⁴ → க₂க₃க₄</span></small>","value":"TamilSubScript"},{"label":"Mark the first varga<br/><small><span class=\"tamil\">தீ³பம் → தீ³ப¹ம்</span></small>","value":"TamilAddFirstVarga"},{"label":"Remove apostrophe<br/><small><span class=\"tamil\">ருʼம்ʼ → ரும்</span></small>","value":"TamilRemoveApostrophe"},{"label":"Remove diacritic numerals<br/><small><span class=\"tamil\">க²க³க⁴ → ககக</span></small>","value":"TamilRemoveNumbers"},{"label":"Old orthography<br/><small><span class=\"tamil\">லை னா</span> → <span class=\"tamilold\">லை னா</span></small>","value":"oldtamilortho"},{"label":"Grantha Visarga<br/><small><span class=\"tamil\">நம꞉ → நம𑌃</span></small>","value":"TamilGranthaVisarga"},{"label":"Disable ௐ<br/><small><span class=\"tamil\">ௐ → ஓம்</span></small>","value":"TamilOmDisable"},{"label":"Contextual <span class=\"tamil\">ள</><br/><small>(Experimental)</small><br/><small><span class=\"tamil\">ப்ரலய → ப்ரளய</span></small>","value":"ContextualLLa"},{"label":"Only word-final <span class=\"tamil\">ன</><br/><small><span class=\"tamil\">ஆனனன் → ஆநநன்</span></small>","value":"FinalNNa"}],"TamilExtended":[{"label":"Avoid Anusvara <br/><small><span class=\"tamilextended\">സംഘം → സങ്‌ഘമ്</span></small>","value":"TamilExtendedAnusvara"},{"label":"Contextual <span class=\"tamil\">ன</span> <br/><small><span class=\"tamilextended\">ഗജാനനന്‌ → ഗജാഩഩഩ്‌</span></small>","value":"TamilExtendedNNA"},{"label":"Tamil Style -u -ū <br/><small>(Core Grantha)</small><br/><small><span class=\"tamilextended\">ഗുബൂഫുഭൂ → ഗ‍ുബ‍ൂഫ‍ുഭ‍ൂ</span></small>","value":"TamilStyleUUCore"},{"label":"Tamil Style -u -ū <br/><small>(Tamilized Grantha)</small><br/><small><span class=\"tamilextended\">ജൂസുഷുഹൂ → ജ‍ൂസ‍ുഷ‍ുഹ‍ൂ</span></small>","value":"TamilStyleUUOther"}],"Chakma":[{"label":"Enable all conjuncts<br/><small><span class=\"chakma\">𑄇𑄴𑄈𑄧 𑄉𑄴𑄊𑄧 𑄚𑄴𑄖𑄧 → 𑄇𑄳𑄈𑄧 𑄉𑄳𑄊𑄧 𑄚𑄳𑄖𑄧</span></small>","value":"ChakmaEnableAllConjuncts"},{"label":"Enable independent i, u and e<br/><small><span class=\"chakma\">𑄃𑄨 𑄃𑄪 𑄃𑄬 → 𑄄 𑄅 𑄆</span></small>","value":"ChakmaVowelsIndependent"},{"label":"Pali orthography<br/><small><span class=\"chakma\">𑄖𑄧𑄗𑄉𑄧𑄖𑄧 → 𑄖𑄗𑄂𑄉𑄖</span></small>","value":"ChakmaPali"}],"Newa":[{"label":"Enable murmured consonants","value":"NewaMurmurConsonants"},{"label":"Disable repha<br/><small><span class=\"newa\">𑐢𑐬𑑂𑐩 → 𑐢𑐬𑑂‍𑐩</span></small>","value":"NewaDisableRepha"},{"label":"Special /ta/ conjunct<br/><small><span class=\"newa\">𑐟𑑂𑐥𑐟𑑂𑐩𑐟𑑂𑐰 → 𑐟𑑂‍𑐥𑐟𑑂‍𑐩𑐟𑑂‍𑐰</span></small>","value":"NewaSpecialTa"},{"label":"Devanagari-based Newa font<br/><small><span class=\"newa\">𑐧𑐸𑐡𑑂𑐢𑑅</span> →<span class=\"nepaldevafont\">बुद्धः</span></small>","value":"nepaldevafont"}],"Hebrew":[{"label":"Remove all Niqquds<br/><small>ב פ כ מ → בּ פּ כּ מֶּ</small>","value":"removeNikkud"},{"label":"Use Qof<br/><small>כּ ← ק</small>","value":"HeberewQoph"},{"label":"Use Kamats Katan for Short /o/<br/><small>לֹ ← לׇ</small>","value":"HebewShortO"}],"Nandinagari":[{"label":"Use Prishtamatra orthography<br/><small><span class=\"nandinagari\"> 𑦮𑧚 𑦮𑧜 𑦮𑧛 𑦮𑧝 → 𑦮𑧤 𑦮𑧤𑧑 𑦮𑧤𑧚 𑦮𑧤𑧜</span></small>","value":"NandinagariPrishtamatra"}],"Latn":[{"label":"Aleph as mater lectionis<br/><small> kʾ → kā</small>","value":"AlephMaterLectionis"},{"label":"ʾ ʿ → ʼ ʽ","value":"alephAyinLatnAlternate"},{"label":"ʾ ʿ → ʔ ʕ","value":"alephAyinLatnAlternate2"}],"Oriya":[{"label":"ଵ instead of ୱ<br/><small>ଭୱତି → ଭଵତି <br/>(Enable preserve source)</small>","value":"OriyaVaAlt"},{"label":"ୟ everywhere<br/><small>ଯୟାତି ଯଜ୍ଞ → ୟୟାତି ୟଜ୍ଞ</small>","value":"OriyaYYA"}],"Bengali":[{"label":"য় everywhere<br/><small>যয়াতি যজ্ঞ → য়য়াতি য়জ্ঞ</small>","value":"BengaliYYA"},{"label":"ẏa → য & ya → য়  ","value":"BengaliSwitchYaYYa"},{"label":"Old Bengali /ra/ <br/><small>র → ৰ</small>","value":"BengaliOldRA"},{"label":"ৰ as /b/ & ব as /v/ <br/>","value":"BengaliRaBa"},{"label":"দৃঢ আষাঢ → দৃঢ় আষাঢ়","value":"BengaliIntervocalicDDA"},{"label":"ৎব → ত্ৱ","value":"khandatabatova"}],"Assamese":[{"label":"য় everywhere<br/><small>যয়াতি যজ্ঞ → য়য়াতি য়জ্ঞ</small>","value":"BengaliYYA"},{"label":"ৎব → ত্ৱ","value":"khandatabatova"}],"KhamtiShan":[{"label":"Myanmar numerals<br/><small><span class=\"khamtishan\">႑႒႓</span> → <span class=\"khamtishan\">၁၂၃</span></small>","value":"KhamiShanMyanmarNumerals"},{"label":"Use ꩳ<br/><small><span class=\"khamtishan\">ရ</span> → <span class=\"khamtishan\">ꩳ</span></small>","value":"KhamtiShanRa"}],"Siddham":[{"label":"Variant vowel sign U <span class=\"siddham\">𑗜</span><br/><small> <span class=\"siddham\">𑖎𑖲𑖚𑖲𑖦𑖲 → 𑖎𑗜𑖚𑗜𑖦𑗜</span></small>","value":"UseAlternateVSU"},{"label":"Variant vowel sign UU <span class=\"siddham\">𑗝</span><br/><small> <span class=\"siddham\">𑖎𑖳𑖚𑖳𑖦𑖳 → 𑖎𑗝𑖚𑗝𑖦𑗝</span></small>","value":"UseAlternateVSUU"},{"label":"Variant I 1 <br/><small><span class=\"siddham\">𑖂 → 𑗘</span></small>","value":"UseAlternateI1"},{"label":"Variant I 2 <br/><small><span class=\"siddham\">𑖂 → 𑗙</span></small>","value":"UseAlternateI2"},{"label":"Variant II <br/><small><span class=\"siddham\">𑖃 → 𑗚</span></small>","value":"UseAlternateII"},{"label":"Variant U <br/><small><span class=\"siddham\">𑖄 → 𑗛</span></small>","value":"UseAlternateU"},{"label":"MuktamSiddham font","value":"siddhammukta"}],"Devanagari":[{"label":"Uttara Style<br/><small><span class=\"devanagariuttara\">अऋणझक्ष</span></small>","value":"devanagariuttara"},{"label":"Balbodh Style<br/><small><span class=\"devanagaribalbodh\">अऋणझक्ष</span></small>","value":"devanagaribalbodh"},{"label":"Nepali Style<br/><small><span class=\"devanagarinepali\">अऋणझक्ष</span></small>","value":"devanagarinepali"},{"label":"Jain Style<br/><small><span class=\"devanagarijain\">णमो सिद्धाणं</span></small>","value":"devanagarijain"},{"label":"Use Jain OM<br/><small>ॐ → ꣽ</small>","value":"jainomDevangari"},{"label":"ऍ → ॲ","value":"DevanagariACandra"},{"label":"Use Anusvara to nasalize<br/><small>पञ्चगङ्गा → पंचगंगा</small>","value":"DevanagariAnusvara"},{"label":"Show explicit schwa (Hindi) <small><div class=\"q-mt-sm\">rāma → राम॔, viracita → विर॔॔चित॔</div></small>","value":"ShowSchwaHindi"},{"label":"Prishthamatra orthography<br/><small>के कै को कौ → कॎ कॎे कॎा कॎो</small>","value":"DevanagariPrishtamatra"}],"Dogra":[{"label":"Use Old Dogra forms<br/><small><span class=\"dogra\">𑠂 𑠄 𑠈 𑠘 𑠧</span> → <span class=\"olddogra\">𑠂 𑠄 𑠈 𑠘 𑠧</span> </small>","value":"olddogra"},{"label":"<span class=\"dogra\">𑠨</span> → <span class=\"dogra\">𑠋</span>","value":"DograShaKha"}],"Takri":[{"label":"Medieval Takri orthography <br/><small><span class=\"takri\">𑚋</span> represents both /kha/ and /ṣa/</small>","value":"TakriArchaicKha"},{"label":"Avoid duplicated consonants<br/><small>Convert <span class=\"takri\">𑚄𑚙𑚶𑚙𑚤</span> → <span class=\"takri\">𑚄𑚙𑚤</span></small>","value":"TakriRemoveGemination"}],"Gurmukhi":[{"label":"Yakaash<br/><small>ਕ੍ਯ → ਕੵ</small>","value":"GurmukhiYakaash"}],"Thai":[{"label":"Thai orthography<br/><small><div>พุทฺธ → พุทธะ</div></small>","value":"ThaiTranscription"},{"label":"Sajjhāya orthography<br/><small><div>พุทฺธ → พุท์ธ</div></small>","value":"ThaiSajjhayaOrthography"},{"label":"Nativized sajjhaya<br/><small><div>พุทฺธํ → พุท์ธัง</div></small>","value":"ThaiSajjhayawithA"},{"label":"Thai phonetic<br/><small><div>พุทฺธตฺว → <span class=\"thainative\">บุดธะต͜วะ</span></div></small>","value":"ThaiNativeConsonants"},{"label":"Sara a ะ as Visarga<br/><small><div>นมัห์ → นมะ</div></small>","value":"ThaiVisargaSaraA"}],"LaoPali":[{"label":"Lao orthography<br/><small><span class=\"laopali\">ພຸທ຺ຘ → ພຸທຘະ</span></small>","value":"LaoTranscription"},{"label":"Sajjhāya orthography<br/><small><div class=\"laopali\">ພຸທ຺ຘ → ພຸທ໌ຘ</div></small>","value":"LaoSajjhaya"},{"label":"Nativized sajjhāya<br/><small><div  class=\"laopali\">ພຸທ຺ຘໍ → ພຸທ໌ຘັງ</div></small>","value":"LaoSajjhayawithA"},{"label":"Lao phonetic<br/><small><div  class=\"laopali\">ພຸທ຺ຘ → ບຸດຘະ</div></small>","value":"LaoPhonetic"}],"Lao":[{"label":"Lao Nativization<br/><small><span class=\"lao\">ພຸທທັງ ຄັຈຈາມິ ສັພພັງ → ພຸດທັງ ຄັຈສາມິ ສັບພັງ</span></small>","value":"LaoNative"}],"TaiTham":[{"label":"Shift Mai Kang Lai<br/><small><span class=\"taitham\">ᩈᩘᨥ</span> → <span class=\"taitham\">ᩈᨥᩘ</span></small>","value":"ThamShiftMaiKangLai"},{"label":"Tall -ā with ca/ba/ra/bha<br/><small><span class=\"taitham\">ᨣᨧ᩠ᨨᩣᨾᩥ</span> → <span class=\"taitham\">ᨣᨧ᩠ᨨᩤᨾᩥ</span></small>","value":"ThamTallAOthers"},{"label":"Disable explicit Tall -ā <br/><small>Font chooses the right form</small>","value":"ThamTallADisable"},{"label":"<span class=\"taitham\">ᨠᩮᩣ</span> → <span class=\"taitham\">ᨠᩰ</span></small>","value":"UseAlternateo1"}],"LueTham":[{"label":"Shift Mai Kang Lai<br/><small><span class=\"luetham\">ᩈᩘᨥ</span> → <span class=\"luetham\">ᩈᨥᩘ</span></small>","value":"ThamShiftMaiKangLai"},{"label":"Tall -ā with ca/ba/ra/bha<br/><small><span class=\"luetham\">ᨣᨧ᩠ᨨᩣᨾᩥ</span> → <span class=\"luetham\">ᨣᨧ᩠ᨨᩤᨾᩥ</span></small>","value":"ThamTallAOthers"},{"label":"Disable explicit Tall -ā <br/><small>Font chooses the right form</small>","value":"ThamTallADisable"},{"label":"<span class=\"luetham\">ᨠᩮᩣ</span> → <span class=\"luetham\">ᨠᩰ</span></small>","value":"UseAlternateo1"}],"LaoTham":[{"label":"Shift Mai Kang Lai<br/><small><span class=\"laotham\">ᩈᩘᨥ</span> → <span class=\"laotham\">ᩈᨥᩘ</span></small>","value":"ThamShiftMaiKangLai"},{"label":"Tall -ā with ca/ba/ra/bha<br/><small><span class=\"laotham\">ᨣᨧ᩠ᨨᩣᨾᩥ</span> → <span class=\"laotham\">ᨣᨧ᩠ᨨᩤᨾᩥ</span></small>","value":"ThamTallAOthers"},{"label":"Disable explicit Tall -ā <br/><small>Font chooses the right form</small>","value":"ThamTallADisable"},{"label":"<span class=\"laotham\">ᨠᩮᩣ</span> → <span class=\"laotham\">ᨠᩰ</span></small>","value":"UseAlternateo1"}],"KhuenTham":[{"label":"Shift Mai Kang Lai<br/><small><span class=\"khuentham\">ᩈᩘᨥ</span> → <span class=\"khuentham\">ᩈᨥᩘ</span></small>","value":"ThamShiftMaiKangLai"},{"label":"Tall -ā with ca/ba/ra/bha<br/><small><span class=\"khuentham\">ᨣᨧ᩠ᨨᩣᨾᩥ</span> → <span class=\"khuentham\">ᨣᨧ᩠ᨨᩤᨾᩥ</span></small>","value":"ThamTallAOthers"},{"label":"Disable explicit Tall -ā <br/><small>Font chooses the right form</small>","value":"ThamTallADisable"},{"label":"<span class=\"khuentham\">ᨠᩮᩣ</span> → <span class=\"khuentham\">ᨠᩰ</span></small>","value":"UseAlternateo1"}],"Soyombo":[{"label":"Syllabize input<br/><small><span class=\"soyombo → \">𑩲𑩖𑩮𑩑𑪁𑩫𑪘𑪙𑩾 → 𑩲𑩖 𑩮𑩑 𑪁 𑩫𑪘𑪙𑩾</span></small>","value":"SoyomboSyllabize"},{"label":"Sanskrit palatals<br/><small><span class=\"soyombo\">𑩵 𑩶 𑩷 → 𑩡 𑩢 𑩣</span></small>","value":"SoyomboSanskritPalatals"},{"label":"Mongolian finals<br/><small><span class=\"soyombo\">ak ag ad → 𑩐𑪋 𑩐𑪊 𑩐𑪍</span></small>","value":"SoyomboFinals"},{"label":"Initial-form /ra/, /la/, /sa/<br/><small><span class=\"soyombo\">𑩼𑪙𑩫 𑩽𑪙𑩫 𑪁𑪙𑩫 → 𑪆𑩫 𑪇𑩫 𑪉𑩫</span></small>","value":"SoyomboInitials"},{"label":"Use Tsheg<br/><small><span class=\"soyombo\">𑩯 𑩴𑩖 → 𑩯𑪚𑩴𑩖</span></small>","value":"SoyomboSpaceTscheg"}],"Marchen":[{"label":"Sanskrit palatals<br/><small><span class=\"marchen\">𑲂 𑲃 𑲄 𑲄𑲮 → 𑱶 𑱷 𑱸 𑱸𑲮</span></small>","value":"MarchenSanskritPalatals"}],"Mongolian":[{"label":"Syllabize input<br/><small><span class=\"mongolian\">ᠮᠠᢏᢈ → ᠮᠠ᠋ ᢏᢈ</span></small>","value":"MongolianSyllabize"}],"Tibetan":[{"label":"Syllabize input<br/><small><span class=\"tibetan → \">བོདྷིསཏྟྭ → བོ་དྷི་ས་ཏྟྭ</span></small>","value":"TibetanSyllabize"},{"label":"Sanskrit palatals<br/><small><span class=\"tibetan\">ཙ ཚ ཛ ཛྷ → ཅ ཆ ཇ ཇྷ</span></small>","value":"TibetanSanskritPalatals"},{"label":"Bindu with nada<br/><small><span class=\"tibetan\">ཨྃ → ཨྂ</span></small>","value":"TibetanNada"},{"label":"Use space<br/><small><span class=\"tibetan\">ན་མོ → ན མོ</span></small>","value":"TibetanTsheg"},{"label":"Dbu Med (Ume) style<br/><small><span class=\"tibetan\">བུདྡྷཿ</span> → <span class=\"tibetandbumed\">བུདྡྷཿ</span></small>","value":"tibetandbumed"}],"Sinhala":[{"label":"Sanskrit/Pali Orthography<br/><small><span class=\"sinhala\">නමෝ භගවතේ → නමො භගවතෙ</span></small>","value":"SinhalaPali"},{"label":"Enable all conjuncts<span><br/><small><span class=\"sinhala\">බුද්ධස්ස → බුද්‍ධස‍්ස</span></small>","value":"SinhalaConjuncts"}],"Telugu":[{"label":"Arasunna as Chandrabindu<br/><small><span class=\"telugu\"> హూఀ → హూఁ</span></small>","value":"TeluguArasunnaChandrabindu"},{"label":"Telugu repha <br/><small><i>(Valapala Gilaka)</i></small> <br/><small><span class=\"telugu\">ధర్మ → ధర్‍మ</span></small>","value":"TeluguReph"},{"label":"Telugu Nakaara Pollu <br/><small><span class=\"telugunukta\">భగవన్ → భగవౝ</span></small>","value":"TeluguNakaraPollu"},{"label":"Tamil-Style Zha <br/><small><span class=\"telugu\">ఆఴ్వార్</span> → <span class=\"teluguzha\">ఆఴ్వార్</span></span></small>","value":"TeluguTamilZha"},{"label":"Tamil-Style Rra <br/><small><span class=\"telugu\">ఆఱ్ఱు</span> → <span class=\"teluguzha\">ఆౘ్ౘు</span></small>","value":"TeluguTamilRra"}],"Gujarati":[],"PhagsPa":[{"label":"Tibetan style<br/><small><span class=\"phagspa\">ꡳꡛ ᠂ ꡂꡜ</span> → <span class=\"phagspatib\">ꡳꡛ ᠂ ꡂꡜ</span></small>","value":"PhagsPaTib"},{"label":"Seal style   <br/><small><span class=\"phagspa\">ꡳꡛ ᠂ ꡂꡜ</span> → <span class=\"phagspaseal\">ꡳꡛ ᠂ ꡂꡜ</span></span></small>","value":"PhagsPaSeal"}],"Kannada":[{"label":"Avoid Repha <br/><small><span class=\"kannada\">ಧರ್ಮ → ಧರ‍್ಮ</span></small>","value":"KannadaNotRepha"},{"label":"Kannada Nakaara Pollu <br/><small><span class=\"kannadapollu\">ಭಗವನ್ → ಭಗವೝ</span></small>","value":"KannadaNakaraPollu"},{"label":"Use spacing Chandrabindu <br/><small><span class=\"kannadapollu\">ಯಹಾಁ → ಯಹಾಀ</span></small>","value":"KannadaSpacingCandrabindu"}],"Grantha":[{"label":"Grantha old AU vowel sign <br/><small><span class=\"grantha\">𑌕𑍗 → 𑌕𑍌</span></small>","value":"GranthaOldau"},{"label":"Prakrit orthography <br/><small><span class=\"grantha\">𑌬𑍁𑌦𑍍𑌧𑌂 → 𑌬𑍁𑌂𑌧𑌀</span></small>","value":"GranthaPrakrit"},{"label":"Other final forms <br/><small><span class=\"grantha\">𑌦𑌿𑌕𑍍</span> → <span class=\"granthalig\">𑌦𑌿𑌕𑍍</span></small>","value":"granthafinal"},{"label":"Noto Serif Grantha <br/><small><span class=\"grantha\">𑌬𑍁𑌦𑍍𑌧𑌂</span> → <span class=\"granthaserif\">𑌬𑍁𑌦𑍍𑌧𑌂</span></small>","value":"granthaserif"},{"label":"E-Grantamil encoding","value":"egrantamil"}],"Urdu":[{"label":"Remove short vowels<br/><small><span class=\"urdu\">ہِنْدُوسْتانْ ← ہندوستان</span></small>","value":"UrduRemoveShortVowels"}],"Shahmukhi":[{"label":"Remove short vowels<br/><small><span class=\"urdu\">ہِنْدُوسْتانْ ← ہندوستان</span></small>","value":"UrduRemoveShortVowels"}],"IAST":[{"label":"Capitalize sentences","value":"capitalizeSentence"},{"label":"Anusvara to nasal<br/><small>gaṃgā → gaṅgā</small>","value":"AnusvaratoNasalASTISO"},{"label":"Use tilde for nasalization<br/><small>kaM ka~ kaMka ka~ka → kã kã kaṅka kãka</smal","value":"NasalTilde"},{"label":"ṃ → ṁ","value":"mDotAboveToBelow"},{"label":"Vedic retroflex /l/ <br/><small><span class=\"iast\">agnimīl̤e → agnimīḻe</span>","value":"RomanLoCSLaDotLaUnderscore"}],"IASTPali":[{"label":"Capitalize sentences","value":"capitalizeSentence"},{"label":"Anusvara to nasal<br/><small>gaṃgā → gaṅgā</small>","value":"AnusvaratoNasalASTISO"},{"label":"ṃ → ṁ","value":"mDotAboveToBelow"}],"RussianCyrillic":[{"label":"Pali Text","value":"CyrillicPali"},{"label":"Capitalize sentences","value":"capitalizeSentence"},{"label":"Remove diacritics<br/><small><span class=\"russiancyrillic\">сам̣кр̣там̣ → самкртам</span></small>","value":"removeDiacritics"}],"ISO":[{"label":"Capitalize sentences","value":"capitalizeSentence"},{"label":"Anusvara to nasal<br/><small>gaṁgā → gaṅgā</small>","value":"AnusvaratoNasalASTISO"},{"label":"Use tilde for nasalization<br/><small>kaM ka~ kaMka ka~ka → kã kã kaṅka kãka</smal","value":"NasalTilde"},{"label":"ē/ō → e/o","value":"noLongEO"}],"Itrans":[{"label":"Readable Itrans<br/><small>gR^ihalakShmI → gRRihalaxmii</small>","value":"readableItrans"},{"label":"E/O for long, e/o for short","value":"swapEeItrans"}],"RomanReadable":[{"label":"Alternate long/short e/o <br/><small>e' e o' o → e ae o oa</small>","value":"RomanReadableLongEO"},{"label":"Anusvara as n <br/><small>m' → n'</small>","value":"AnusvaraAsN"},{"label":"Capitalize sentences","value":"capitalizeSentence"}],"RomanColloquial":[{"label":"Anusvara as n <br/><small>maim → main</small>","value":"AnusvaraAsN"},{"label":"Capitalize sentences","value":"capitalizeSentence"}],"Khojki":[{"label":"Retain spaces","value":"KhojkiRetainSpace"},{"label":"Khojki QA<br/><small><span class=\"sundanese\">𑈈𑈶</span> → <span class=\"khojki\">𑈿</span></small>","value":"KhojkiQa"}],"WarangCiti":[{"label":"Capitalize sentences","value":"capitalizeSentence"}],"Kaithi":[{"label":"Retain spaces","value":"KaithiRetainSpace"}],"Bhaiksuki":[{"label":"Retain spaces","value":"BhaiksukiRetainSpace"}],"Limbu":[{"label":"SA-I for vowel length<small><br/><span class=\"limbu\">ᤁ᤺ᤢᤰ → ᤁᤢᤁ᤻</span></small>","value":"LimbuSpellingSaI"}],"Sundanese":[{"label":"Archaic conjuncts<br/><small><span class=\"sundanese\">ᮊ᮪ᮙ ᮊ᮪ᮝ ᮃᮊ᮪ ᮃᮙ᮪ → ᮊᮬ ᮊᮭ ᮃᮾ ᮃᮿ</span></small>","value":"SundaneseHistoricConjuncts"}],"Malayalam":[{"label":"Dot reph<br/><small><span class=\"malayalam\">ധർമ → ധൎമ</span></small>","value":"dotReph"},{"label":"Double consonants after reph<br/><small><span class=\"malayalam\">ധർമ → ധർമ്മ</span></small>","value":"RephaDoubleMalayalam"},{"label":"Archaic II & AU<br/><small><span class=\"malayalam\">ഈ കൗ → ൟ കൌ</span></small>","value":"archaicAIAU"},{"label":"Traditional orthography<br/><small><span class=\"malayalam\">തു തൂ</span> → <span class=\"malayalamold\">തു തൂ</span></small>","value":"tradOrtho"},{"label":"Archaic chillus<br/><small><span class=\"malayalam\">ൿ ൔ ൕ ൖ</small>","value":"historicChillu"},{"label":"Bar virama<br/><small><span class=\"malayalam\">ക്</span> → <span class=\"malayalamold\">ക഻</span></small>","value":"MalayalamLineVirama"},{"label":"Circle virama<br/><small><span class=\"malayalam\">ക്</span> → <span class=\"malayalamold\">ക഼</span></small>","value":"MalayalamCircVirama"},{"label":"Prakrit orthography<br/><small><span class=\"malayalam\">ബുദ്ധ → ബുംധ</span></small>","value":"MalayalamPrakrit"}],"ZanabazarSquare":[{"label":"Sanskrit palatals<br/><small><span class=\"zanabazarsquare\">𑨣 𑨤 𑨥 → 𑨐 𑨑 𑨒</span></small>","value":"ZanabazarSanskritPalatals"},{"label":"Tsheg<br/><small><span class=\"zanabazarsquare\">𑨝 𑨢𑨆 → 𑨝𑩁𑨢𑨆</span></small>","value":"ZanzabarSpaceTsheg"},{"label":"Contextual ya/ra/la/va & Repha<br/><small><span class=\"zanabazarsquare\">𑨋𑩇𑨪 𑨋𑩇𑨫 𑨋𑩇𑨬 𑨋𑩇𑨭 𑨫𑩇𑨋 → 𑨋𑨻 𑨋𑨼 𑨋𑨽 𑨋𑨾 𑨺𑨋</span></small>","value":"ZanabazarSquareContextual"},{"label":"Alternate ai/au<br/><small><span class=\"zanabazarsquare\">𑨀𑨄𑨊 𑨀𑨆𑨊 → 𑨀𑨇 𑨀𑨈</span></small>","value":"ZanabazarSquareAiAu"},{"label":"Mongolian final-mark<br/><small><span class=\"zanabazarsquare\">𑨀𑨋𑨴 → 𑨀𑨋𑨳</span></small>","value":"ZanabazarSquareMongolianFinal"}],"Sogd":[{"label":"Use <span class=\"sogd\">𐽀</span> <i>(Resh-Ayin)</i> for Ayin","value":"SogdReshAyin"}],"Sogo":[{"label":"Use <span class=\"sogo\">𐼘</span> <i>(Resh-Ayin-Dalesh)</i> for Ayin","value":"SogoReshAyinDaleth"}],"Hebr-Ar":[{"label":"<span class=\"\">עׄ</span> ← <span class=\"\">ג</span>","value":"gainGimel"},{"label":"<span class=\"\">ת</span> ← <span class=\"\">ת̈</span>","value":"tavTwodot"},{"label":"<span class=\"\">תׄ</span> ← <span class=\"\">ת֒</span>","value":"tavThreedot"},{"label":"<span class=\"\">ק</span> ← <span class=\"\">ק̈</span>","value":"qafTwodot"}]},"postOptionsGroupSpecific":{"RomanLoCDevanagari":[{"label":"Use Hindi/Marathi Mapping","value":"HindiMarathiRomanLoCFix"}],"TaiThamRomanLoC":[{"label":"Pali /o/ <br/><small><span class=\"taitham\">ᨠᩰ</span> → <span class=\"taitham\">ᨠᩮᩣ</span></small>","value":"UseAlternateo2"}],"RomanLoCLaoTham":[{"label":"Pali /o/ <br/><small><span class=\"laotham\">ᨠᩰ</span> → <span class=\"laotham\">ᨠᩮᩣ</span></small>","value":"UseAlternateo2"}],"RomanLoCKhuenTham":[{"label":"Pali /o/ <br/><small><span class=\"khuentham\">ᨠᩰ</span> → <span class=\"khuentham\">ᨠᩮᩣ</span></small>","value":"UseAlternateo2"}],"DevanagariLimbu":[{"label":"Limbu Devanagari conventions<small><br/><span class=\"limbu\">ᤀᤧ ᤀᤨ ᤀᤧ᤺ ᤁᤧ ᤁᤨ ᤁᤧ᤺</span> → <span class=\"limbudev\">ए़ ओ़ ए़ः के़ को़ के़ः</span></small>","value":"LimbuDevanagariConvention"}],"BurmeseRomanLoC":[{"label":"Join syllables<small><br/><span>le thai pyo‘ </span> → <span class=\"burmese\">လေထဲပျော်</span></small>","value":"removeSegmentSpacesBurmese"}],"ShanRomanLoC":[{"label":"Join syllables<small><br/><span>lèṅʻʺ munʻʺ mài̢</span> → <span class=\"burmese\">လႅင်းမုၼ်းမႂ်ႇ</span></small>","value":"removeSegmentSpacesBurmese"}],"TamilSaurashtra":[{"label":"Convert Saurashtra Haaru as :<small><br/><span class=\"saurashtra\">ꢥꢴꢷ</span> → <span class=\"tamil\">நீ:</span></small>","value":"SaurastraHaaruColon"}],"IASTUrdu":[{"label":"Remove all inherent /a/ <small><br/><span class=\"urdu\">ہندوستان</span> → /hndvstān/ not /hanadavasatāna/","value":"urduRemoveInherent"}],"ISOUrdu":[{"label":"Remove all inherent /a/ <small><br/><span class=\"urdu\">ہندوستان</span> → /hndvstān/ not /hanadavasatāna/","value":"urduRemoveInherent"}],"IASTShahmukhi":[{"label":"Remove all inherent /a/ <small><br/><span class=\"urdu\">ہندوستان</span> → /hndvstān/ not /hanadavasatāna/","value":"urduRemoveInherent"}],"ISOShahmukhi":[{"label":"Remove all inherent /a/ <small><br/><span class=\"urdu\">ہندوستان</span> → /hndvstān/ not /hanadavasatāna/","value":"urduRemoveInherent"}],"IASTBengali":[{"label":"inherent /a/ as /ô/","value":"inherentAO"}],"ISOBengali":[{"label":"inherent /a/ as /ô/","value":"inherentAO"}],"IASTOriya":[{"label":"inherent /a/ as /ô/","value":"inherentAO"}],"ISOOriya":[{"label":"inherent /a/ as /ô/","value":"inherentAO"}],"IASTMalayalam":[{"label":"റ്റ (ṟṟ) ന്റ (nṟa) → ṯṯ nṯ","value":"MalayalamTTNTA"}],"ISOMalayalam":[{"label":"റ്റ (ṟṟ) ന്റ (nṟa) → ṯṯ nṯ","value":"MalayalamTTNTA"}],"LatnSyrj":[{"label":"Syriac convention <small><br/> v ġ ḫ f → ḇ ḡ ḵ p̄","value":"syriacRoman"}],"LatnSyrn":[{"label":"Syriac convention <small><br/> v ġ ḫ f → ḇ ḡ ḵ p̄","value":"syriacRoman"}],"RomanLoCBalinese":[{"label":"Use simplified Mapping<small><br/><span class=\"balinese\">ᬡ ᬙ ᬣ → na ca ta</span>","value":"BalineseSimplified"}],"RomanLoCJavanese":[{"label":"Use simplified Mapping<small><br/><span class=\"javanese\">ꦟ ꦖ ꦡ → na ca ta</span>","value":"JavaneseSimplified"}]},"postOptionsRadioGroup":{"Ranjana":[["ranjanalantsa","ranjanawartu"]],"Siddham":[["UseAlternateI1","UseAlternateI2"],["siddhammukta","siddhamap"]],"PhagsPa":[["PhagsPaTib","PhagsPaSeal"]],"Malayalam":[["MalayalamLineVirama","MalayalamCircVirama"]],"Devanagari":[["devanagariuttara","devanagarijain","devanagarinepali","devanagaribalbodh"]],"IAST":[["mDotAboveToBelow","NasalTilde"]],"Pallava":[["sundapura","kawitan"]],"Thai":[["ThaiTranscription","ThaiSajjhayaOrthography","ThaiSajjhayawithA","ThaiNativeConsonants"]],"LaoPali":[["LaoTranscription","LaoSajjhaya","LaoSajjhayawithA","LaoPhonetic"]]},"preserveSourceExampleOut":{"Hiragana":"hulasi → ほぅら゚すぃ not  ふらし","Latn":"ʼiylwn māsk → ˀîylwn mʾsk","Arab":"g v p → ڨ ڤ پ","Katakana":"hulasi → ホゥラ゚スィ not  フラシ","WarangCiti":"akṣaramukha → <span class=\"warangciti\">𑣁𑣌‍𑣝𑣜𑣖𑣃𑣌‍𑣙</span> not <span class=\"warangciti\">𑣁𑣌𑣞𑣜𑣖𑣃𑣌</span>","Modi":"ki kī ku kū → <span class=\"modi\">𑘎𑘱 𑘎𑘲 𑘎𑘳 𑘎𑘴</span> not <span class=\"modi\">𑘎𑘲 𑘎𑘲 𑘎𑘳 𑘎𑘳</span>","Multani":"aśoka →<span class=\"multani\">𑊀𑊥𑊂𑊄</span> not <span class=\"multani\">𑊀𑊥𑊄</span>","Ahom":"ahoṃ →<span class=\"ahom\">𑜒𑜑𑜦𑜪𑜡</span> not <span class=\"ahom\">𑜒𑜑𑜪𑜨</span>","Khojki":"ahoṃ →<span class=\"khojki\">𑜒𑜑𑜦𑜪𑜡</span> not <span class=\"ahom\">𑜒𑜑𑜪𑜨</span>","Sundanese":"ṛ ḷ bha → <ahoṃ class=\"sundanese\">ᮻ ᮼ ᮽ</span> not <span class=\"sundanese\">ᮛᮩ ᮜᮩ ᮘ</span>","Avestan":"khyat  → <span class=\"avestan\">𐬑𐬌𐬌𐬀𐬙</span> not <span class=\"avestan\">𐬒𐬌𐬌𐬀𐬝</span>","Thaana":"maṇi → <span class=\"thaana\">މަޱި</span> not <span class=\"thaana\">މަނި</span>","Tibetan":"bhagavat → <span class=\"tibetan\">བྷགཝཏ྄</span> not <span class=\"tibetan\">བྷགབཏ</span>","Saurashtra":"simha → <span class=\"saurashtra\">ꢱꢶꢪ꣄ꢲ</span> not <span class=\"saurashtra\">ꢱꢶꢪꢴ</span>","Gurmukhi":"anna aṃta hām̐ → <span class=\"gurmukhi\">ਅੱਨ ਅਂਤ ਹਾਂ</span> not <span class=\"gurmukhi\">ਅੰਨ ਅੰਤ ਹਾਁ</span><br/> kṛpā → <span class=\"sinhala\">ਕ੍ਰੁʼਪਾ</span> not <span class=\"sinhala\">ਕ੍ਰੁਪਾ</span>","Chakma":"yayāti → <span class=\"chakma\">𑄡𑄧𑄡𑄖𑄨</span> not <span class=\"chakma\">𑄡𑄧𑄠𑄖𑄨</span>","Gujarati":"kŏl → <span class=\"gujarati\">કો˘લ્</span> not <span class=\"gujarati\">કોલ્</span>","Oriya":"vināyaka → <span class=\"oriya\">ୱିନାଯକ</span> not <span class=\"oriya\">ବିନାୟକ</span><br/>kŏlæṭ → <span class=\"oriya\">କୋ˘ଲେʼଟ୍</span> not <span class=\"oriya\">କୋଲେଟ୍</span>","Assamese":"vināyaka → <span class=\"assamese\">ৱিনাযক</span> not <span class=\"assamese\">ৱিনায়ক</span><br/>kŏlæṭ → <span class=\"assamese\">কো˘লেʼট্</span> not <span class=\"assamese\">কোলেট্</span><br/>aṃkha kaṃpa → <span class=\"assamese\">অংখ কংপ</span> not <span class=\"assamese\">অঙ্খ কম্প</span>","Bengali":"vināyaka → <span class=\"bengali\">ভ়িনাযক</span> not <span class=\"bengali\">বিনায়ক</span><br/>udvega udbodhana → <span class=\"bengali\">উদ্বেগ উদ্‌বোধন</span> not <span class=\"bengali\">উদ্বেগ উদ্বোধন</span><br/>kŏlæṭ → <span class=\"bengali\">কো˘লেʼট্</span> not <span class=\"bengali\">কোলেট্</span><br/>aṃkha kṃmpa → <span class=\"assamese\">অংখ কংপ</span> not <span class=\"assamese\">অঙ্খ কম্প</span>","Limbu":"jha ña ṣa ṃ → <span class=\"limbu\">ᤉ ᤊ ᤚ ᤲ</span> not <span class=\"limbu\">ᤈ ᤏ ᤙ ᤱ</span>","MeeteiMayek":"kūṭākṣara → <span class=\"meeteimayek\">ꯀꫬꫤꯥꯛꫪꯔ</span> not <span class=\"meeteimayek\">ꯀꯨꯇꯥꯛꯁꯔ</span>","Tamil":"maṃtana → <span class=\"tamil\">மம்ʼதந</span> not <span class=\"tamil\">மந்தன</span>","Malayalam":"daṃtam kaṉi → <span class=\"malayalam\">ദംതമ് കഩി</span> not <span class=\"malayalam\">ദന്തം കനി</span> <br/> kæpôḍ → <span class=\"malayalam\">കെʼപാʼഡ്</span> not <span class=\"malayalam\">കെപാഡ്</span>","Telugu":"khaṇḍam → <span class=\"telugu\">ఖణ్డమ్</span> not <span class=\"telugu\">ఖండం</span><br/>āzādī → <span class=\"telugunukta\">ఆజ఼ాదీ</span> not <span class=\"telugu\">ఆజాదీ</span><br/> kæpôḍ → <span class=\"telugu\">కె॒​పొ॒​డ్</span> not <span class=\"telugu\">కెపాడ్</span>","Kannada":"khaṇḍam → <span class=\"kannada\">ಖಣ್ಡಮ್</span> not <span class=\"kannada\">ಖಂಡಂ</span> <br/> kæpôḍ → <span class=\"kannada\">ಕೆʼಪಾʼಡ್</span> not <span class=\"kannada\">ಕೆಪಾಡ್</span>","Devanagari":"san̆dahan → <span class=\"devanagari\">सँˆदहन्</span> not <span class=\"devanagari\">सँदहन्</span>","Sinhala":"kôṭ hām̐ → <span class=\"sinhala\">කාʼට් හූඁ</span> not <span class=\"sinhala\">කාට් හූං</span>","Hebrew":"svāhā → <span class=\"sinhala\">סְוָהָ</span> not <span class=\"sinhala\">סְבָהָה</span>","Nandinagari":"saṅgha → <span class=\"nandinagari\">𑧍𑦲𑧠𑦱</span> not <span class=\"nandinagari\">𑧍𑧞𑦱</span>"},"romanNumeralScripts":["Tamil","Gurmukhi","Malayalam","Telugu","Sinhala"],"romanPunctscripts":["Tamil","Kannada","Malayalam","Telugu","Gujarati","TamilExtended","Sinhala"],"scriptsIndic":[{"value":"Ahom","label":"Ahom","region":["East Indic","Indic"]},{"value":"Ariyaka","label":"Ariyaka","region":["South East Asian: Mainland","South East Asian"]},{"value":"Assamese","label":"Assamese","region":["East Indic","Indic"]},{"value":"Avestan","label":"Avestan","region":["West Asian"]},{"value":"Balinese","label":"Balinese","region":["South East Asian: Insular","South East Asian"]},{"value":"BatakKaro","label":"Batak Karo","region":["South East Asian: Insular","South East Asian"]},{"value":"BatakManda","label":"Batak Mandailing","region":["South East Asian: Insular","South East Asian"]},{"value":"BatakPakpak","label":"Batak Pakpak","region":["South East Asian: Insular","South East Asian"]},{"value":"BatakToba","label":"Batak Toba","region":["South East Asian: Insular","South East Asian"]},{"value":"BatakSima","label":"Batak Simalungun","region":["South East Asian: Insular","South East Asian"]},{"value":"Bengali","label":"Bengali (Bangla)","region":["East Indic","Indic"]},{"value":"Brahmi","label":"Brahmi","region":["Pan-Indic","Indic"]},{"value":"Bhaiksuki","label":"Bhaiksuki","region":["North Indic","Indic"]},{"value":"Buginese","label":"Buginese (Lontara)","region":["South East Asian: Insular","South East Asian"]},{"value":"Buhid","label":"Buhid","region":["South East Asian: Insular","South East Asian"]},{"value":"Burmese","label":"Burmese (Myanmar)","region":["South East Asian: Mainland","South East Asian"]},{"value":"Chakma","label":"Chakma","region":["South East Asian: Mainland","South East Asian"]},{"value":"Cham","label":"Cham","region":["South East Asian: Mainland","South East Asian"]},{"value":"Devanagari","label":"Devanagari","region":["North Indic","Indic"]},{"value":"DivesAkuru","label":"Dives Akuru","region":["South Asian: Other","Indic"]},{"value":"Dogra","label":"Dogra","region":["North Indic","Indic"]},{"value":"GunjalaGondi","label":"Gondi (Gunjala)","region":["North Indic","Indic"]},{"value":"MasaramGondi","label":"Gondi (Masaram)","region":["North Indic","Indic"]},{"value":"Grantha","label":"Grantha","region":["South Indic","Indic"]},{"value":"GranthaPandya","label":"Grantha (Pandya)","region":["South Indic","Indic"]},{"value":"Gujarati","label":"Gujarati","region":["West Indic","Indic"]},{"value":"Hanunoo","label":"Hanunoo","region":["South East Asian: Insular","South East Asian"]},{"value":"Hebrew","label":"Hebrew","region":["West Asian"]},{"value":"Hiragana","label":"Japanese (Hiragana)","region":["East Asian"]},{"value":"Katakana","label":"Japanese (Katakana)","region":["East Asian"]},{"value":"Javanese","label":"Javanese","region":["South East Asian: Insular","South East Asian"]},{"value":"Kaithi","label":"Kaithi","region":["North Indic","Indic"]},{"value":"Kannada","label":"Kannada","region":["South Indic","Indic"]},{"value":"Kawi","label":"Kawi","region":["South East Asian: Insular","South East Asian"]},{"value":"KhamtiShan","label":"Khamti Shan","region":["South East Asian: Mainland","South East Asian"]},{"value":"Kharoshthi","label":"Kharoshthi","region":["West Indic","Indic"]},{"value":"Khmer","label":"Khmer (Cambodian)","region":["South East Asian: Mainland","South East Asian"]},{"value":"Khojki","label":"Khojki","region":["West Indic","Indic"]},{"value":"KhomThai","label":"Khom Thai","region":["South East Asian: Mainland","South East Asian"]},{"value":"Khudawadi","label":"Khudawadi","region":["West Indic","Indic"]},{"value":"Lao","label":"Lao","region":["South East Asian: Mainland","South East Asian"]},{"value":"LaoPali","label":"Lao (Pali)","region":["South East Asian: Mainland","South East Asian"]},{"value":"Lepcha","label":"Lepcha","region":["East Indic","Indic"]},{"value":"Limbu","label":"Limbu","region":["North Indic","Indic"]},{"value":"Makasar","label":"Makasar","region":["South East Asian: Insular","South East Asian"]},{"value":"Malayalam","label":"Malayalam","region":["South Indic","Indic"]},{"value":"Mahajani","label":"Mahajani","region":["North Indic","Indic"]},{"value":"Marchen","label":"Marchen","region":["Central Asian"]},{"value":"MeeteiMayek","label":"Meetei Mayek (Manipuri)","region":["East Indic","Indic"]},{"value":"Modi","label":"Modi","region":["North Indic","Indic"]},{"value":"Mon","label":"Mon","region":["South East Asian: Mainland","South East Asian"]},{"value":"Mongolian","label":"Mongolian (Ali Gali)","region":["Central Asian"]},{"value":"Mro","label":"Mro","region":["East Indic","Indic"]},{"value":"Multani","label":"Multani","region":["West Indic","Indic"]},{"value":"Nandinagari","label":"Nandinagari","region":["South Indic","Indic"]},{"value":"Newa","label":"Newa (Nepal Bhasa)","region":["North Indic","Indic"]},{"value":"OldPersian","label":"Old Persian","region":["West Asian"]},{"value":"Oriya","label":"Oriya (Odia)","region":["East Indic","Indic"]},{"value":"Pallava","label":"Pallava","region":["South Indic"]},{"value":"PhagsPa","label":"PhagsPa","region":["Central Asian"]},{"value":"Gurmukhi","label":"Punjabi (Gurmukhi)","region":["West Indic","Indic"]},{"value":"Ranjana","label":"Ranjana (Lantsa)","region":["North Indic","Indic"]},{"value":"Rejang","label":"Rejang","region":["South East Asian: Insular","South East Asian"]},{"value":"HanifiRohingya","label":"Rohingya (Hanifi)","region":["South East Asian: Mainland","South East Asian"]},{"value":"Santali","label":"Santali (Ol Chiki)","region":["East Indic","Indic"]},{"value":"Saurashtra","label":"Saurashtra","region":["South Indic","Indic"]},{"value":"Siddham","label":"Siddham","region":["East Asian"]},{"value":"Shahmukhi","label":"Shahmukhi","region":["North Indic","Indic"]},{"value":"Shan","label":"Shan","region":["South East Asian: Mainland","South East Asian"]},{"value":"Sharada","label":"Sharada","region":["North Indic","Indic"]},{"value":"Sinhala","label":"Sinhala","region":["South Indic","Indic"]},{"value":"SoraSompeng","label":"Sora Sompeng","region":["East Indic","Indic"]},{"value":"Soyombo","label":"Soyombo","region":["Central Asian"]},{"value":"Sundanese","label":"Sundanese","region":["South East Asian: Insular","South East Asian"]},{"value":"SylotiNagri","label":"Syloti Nagari","region":["East Indic","Indic"]},{"value":"Tagbanwa","label":"Tagbanwa","region":["South East Asian: Insular","South East Asian"]},{"value":"Tagalog","label":"Tagalog","region":["South East Asian: Insular","South East Asian"]},{"value":"TaiLaing","label":"Tai Laing","region":["South East Asian: Mainland","South East Asian"]},{"value":"Takri","label":"Takri","region":["West Indic","Indic"]},{"value":"Tamil","label":"Tamil","region":["South Indic","Indic"]},{"value":"TamilExtended","label":"Tamil (Extended)","region":["South Indic","Indic"]},{"value":"TamilBrahmi","label":"Tamil Brahmi","region":["South Indic","Indic"]},{"value":"Telugu","label":"Telugu","region":["South Indic","Indic"]},{"value":"Thaana","label":"Thaana (Dhivehi)","region":["South Asian: Other"]},{"value":"Thai","label":"Thai","region":["South East Asian: Mainland","South East Asian"]},{"value":"TaiTham","label":"Tham (Lanna)","region":["South East Asian: Mainland","South East Asian"]},{"value":"LaoTham","label":"Tham (Lao)","region":["South East Asian: Mainland","South East Asian"]},{"value":"KhuenTham","label":"Tham (Tai Khuen)","region":["South East Asian: Mainland","South East Asian"]},{"value":"LueTham","label":"Tham (Tai Lue)","region":["South East Asian: Mainland","South East Asian"]},{"value":"Tibetan","label":"Tibetan","region":["Central Asian"]},{"value":"Tirhuta","label":"Tirhuta (Maithili)","region":["East Indic","Indic"]},{"value":"Urdu","label":"Urdu","region":["North Indic","Indic"]},{"value":"Vatteluttu","label":"Vatteluttu","region":["South Indic","Indic"]},{"value":"Wancho","label":"Wancho","region":["East Indic","Indic"]},{"value":"WarangCiti","label":"Warang Citi","region":["East Indic","Indic"]},{"value":"ZanabazarSquare","label":"Zanabazar Square","region":["Central Asian"]}],"scriptsSemitic":[{"value":"Thaa","label":"Thaana (Dhivehi)","region":["South Asian: Other"]},{"value":"Hebr","label":"Hebrew","region":["West Asian"]},{"value":"Arab-Pa","label":"Shahmukhi","region":["North Indic","Indic"]},{"value":"Arab-Ur","label":"Urdu","region":["North Indic","Indic"]},{"value":"Hebr-Ar","label":"Hebrew (Judeo-Arabic)","region":["West Asian"]},{"value":"Ugar","label":"Ugaritic","region":["West Asian"]},{"value":"Syre","label":"Syriac (Estrangela)","region":["West Asian"]},{"value":"Syrj","label":"Syriac (Western)","region":["West Asian"]},{"value":"Syrn","label":"Syriac (Eastern)","region":["West Asian"]},{"value":"Sogo","label":"Old Sogdian","region":["West Asian"]},{"value":"Sogd","label":"Sogdian","region":["West Asian"]},{"value":"Sarb","label":"Old South Arabian","region":["West Asian"]},{"value":"Samr","label":"Samaritan","region":["West Asian"]},{"value":"Prti","label":"Inscriptional Parthian","region":["West Asian"]},{"value":"Phnx","label":"Phoenician","region":["Mediterranean"]},{"value":"Phlp","label":"Psalter Pahlavi","region":["West Asian"]},{"value":"Phli","label":"Inscriptional Pahlavi","region":["West Asian"]},{"value":"Palm","label":"Palmyrene","region":["West Asian"]},{"value":"Nbat","label":"Nabataean","region":["West Asian"]},{"value":"Narb","label":"Old North Arabian","region":["West Asian"]},{"value":"Mani","label":"Manichaean","region":["West Asian"]},{"value":"Hatr","label":"Hatran","region":["West Asian"]},{"value":"Elym","label":"Elymaic","region":["West Asian"]},{"value":"Armi","label":"Imperial Aramaic","region":["West Asian"]},{"value":"Ethi","label":"Ethiopic (Abjad)","region":["North African"]},{"value":"Arab","label":"Arabic","region":["West Asian"]},{"value":"Arab-Fa","label":"Persian","region":["West Asian"]}],"semiticLatin":[{"value":"Latn","label":"Semitic (Aksharamukha)"},{"value":"Type","label":"Semitic Typeable (Aksharamukha)"},{"value":"ISO259","label":"ISO 259 Hebrew"},{"value":"HebrewSBL","label":"SBL Hebrew"},{"value":"ISO233","label":"ISO 233 Arabic"},{"value":"PersianDMG","label":"DMG Persian"}],"transliterationScripts":["IASTPali","RomanReadable","Aksharaa","ISO","IAST","HK","Titus","Itrans","Velthuis","WX","IPA","RussianCyrillic","IASTPali","ISOPali","RomanLoC"]}

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

// On jsDelivr, the engine files load from the commit that last changed
// wasm/ (ENGINE_COMMIT, set by the build) rather than from next to this
// script. They're usually identical across plugin releases, and loading
// them from each release's own address would make every visitor download
// the ~9MB engine again with each release. Self-hosted copies use the
// wasm/ folder next to the script.
function defaultWasmBase (scriptURL) {
  var onJsDelivr = scriptURL.hostname === 'cdn.jsdelivr.net' &&
    scriptURL.pathname.indexOf('/gh/virtualvinodh/aksharamukha-web-plugin') === 0
  return onJsDelivr
    ? new URL('https://cdn.jsdelivr.net/gh/virtualvinodh/aksharamukha-web-plugin@' + ENGINE_COMMIT + '/wasm/')
    : new URL('wasm/', scriptURL)
}

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
    // fonts.css and icon.png are loaded from next to this script, so on the
    // CDN they're pinned to the same version as the script itself.
    assetBase: new URL('./', scriptURL),
    // A site whose Content-Security-Policy allows styles by nonce (not
    // 'unsafe-inline') gives the plugin's <script> tag that nonce; the
    // panel's <style> reuses it.
    nonce: scriptEl.nonce || scriptEl.getAttribute('nonce') || '',
    wasmBase: params.get('wasmbase')
      ? new URL(params.get('wasmbase'), document.baseURI)
      : defaultWasmBase(scriptURL),
    // Which viewport corner the launcher/panel live in. The launcher and
    // the expanded panel always share the same corner and swap visibility
    // (never both shown at once), so they never collide with each other.
    position: ['top-right', 'top-left', 'bottom-right', 'bottom-left'].indexOf(params.get('position')) > -1
      ? params.get('position')
      : 'top-right',
    // Distance in px from whichever edge(s) `position` puts the panel
    // against. Default (20px) assumes no fixed header/footer at that edge;
    // a site with one can pass e.g. ?offset=80 rather than forking the
    // script. Deliberately not `parseInt(...) || 20` - ?offset=0 is a
    // legitimate, meaningful value (flush against the edge), and `0` is
    // falsy in JS, so `||` would silently replace it with the default.
    offset: (function () {
      var parsed = parseInt(params.get('offset'), 10)
      return isNaN(parsed) ? 20 : parsed
    })()
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

// Text goes through the converter as a JSON array string of text-node
// contents. Some targets also convert the comma BETWEEN the array items
// into their own script's comma - "،" for Urdu, Shahmukhi, Arabic,
// Persian, Thaana and Hanifi Rohingya, "、" for Hiragana/Katakana - which
// makes the result invalid JSON. The brackets and quotes survive for
// every target, so when a plain parse fails, each quoted string is read
// out directly and whatever sits between them is ignored. Commas inside
// the text itself are left as the converter produced them.
function parseConvertedTexts (raw) {
  try {
    var parsed = JSON.parse(raw)
    if (Array.isArray(parsed)) return parsed
  } catch (e) {}
  var texts = []
  var stringLiteral = /"((?:[^"\\]|\\.)*)"/g
  var match
  while ((match = stringLiteral.exec(raw))) {
    try {
      texts.push(JSON.parse('"' + match[1] + '"'))
    } catch (e) {
      // e.g. a raw control character inside the string - JSON.parse
      // rejects those, but the text itself is still usable as-is.
      texts.push(match[1])
    }
  }
  return texts.length ? texts : null
}

// ---------------------------------------------------------------------------
// Engine: converts text, either locally via a WASM Python runtime (Pyodide +
// the aksharamukha wheel, running in a Web Worker - no network calls after
// the one-time engine download) or via the hosted HTTP API. Both expose the
// same async convertAll(jobs) -> string[] shape, where each job is
// { source, target, text, nativize, preOptions, postOptions } and text /
// each result is a JSON array string of text-node contents.
// ---------------------------------------------------------------------------

// Runs inside the Web Worker. Serialized with toString() and started from a
// Blob URL (see startWorker below), so it must not reference anything
// outside itself.
//
// Running Pyodide in a worker keeps its start-up (seconds of CPU:
// compiling the .wasm, starting Python, importing aksharamukha) and every
// conversion off the page's main thread - on the main thread these froze
// the host page for up to ~2s at a time, on every page view.
//
// Explicit persistent caching for the engine's assets (~20MB: pyodide.asm.wasm,
// python_stdlib.zip, the core dep wheels, and the aksharamukha wheel), so
// a returning visitor to THIS site doesn't repeat that download every page
// load. Not a service worker (impossible here - the assets are typically on
// a shared CDN, and a service worker can only be registered for the page's
// own origin) and not the CDN's HTTP cache headers (which browsers now
// partition per top-level site). Cache Storage is scoped to the embedding
// site's origin - a Blob-URL worker shares the page's origin - and persists
// across reloads there regardless of what the CDN sends. Pyodide's own
// loadPackage()/micropip fetch through plain fetch() in the worker, so a
// URL-scoped fetch patch covers those fetches too, not just ours.
function wasmWorkerMain () {
  var pyodide = null
  var transliterate = null
  var readyPromise = null

  function installCachingFetch (baseHref, cacheName) {
    if (!self.fetch || !self.caches) return
    var originalFetch = self.fetch.bind(self)
    // Bumping the cache name (e.g. on a Pyodide/wheel version upgrade)
    // starts fresh - drop any previous version's cache instead of letting
    // it sit unused taking up quota forever.
    self.caches.keys().then(function (names) {
      names.forEach(function (name) {
        if (name.indexOf('aksharamukha-wasm-') === 0 && name !== cacheName) self.caches.delete(name)
      })
    }).catch(function () {})
    self.fetch = function (input, init) {
      // input can be a string, a Request (.url) or a URL object (.href) -
      // Pyodide's own loaders pass URL objects for most of their fetches.
      var url = typeof input === 'string' ? input : (input && (input.url || input.href || String(input)))
      var method = (init && init.method) || (typeof input !== 'string' && input && input.method) || 'GET'
      if (!url || method !== 'GET' || url.indexOf(baseHref) !== 0) return originalFetch(input, init)
      return self.caches.open(cacheName).then(function (cache) {
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

  async function installLocalWheel (micropip, url, name) {
    var resp = await self.fetch(url)
    if (!resp.ok) throw new Error('Failed to fetch ' + url + ' (' + resp.status + ')')
    var path = '/tmp/' + name
    pyodide.FS.writeFile(path, new Uint8Array(await resp.arrayBuffer()))
    await micropip.install.callKwargs('emfs:' + path, { deps: false })
  }

  async function init (msg) {
    installCachingFetch(msg.base, msg.cacheName)
    self.importScripts(new URL('pyodide/pyodide.js', msg.base).href)
    pyodide = await self.loadPyodide({ indexURL: new URL('pyodide/', msg.base).href })
    // requests is imported at module scope by aksharamukha/transliterate.py
    // even though nothing here uses its network features - it must be
    // loaded regardless, or the import itself throws.
    await pyodide.loadPackage(['pyyaml', 'regex', 'requests', 'micropip'])
    // aksharamukha's sources trigger ~60 harmless SyntaxWarnings (invalid
    // escape sequences in regex strings) as they're compiled, which Pyodide
    // forwards to the host page's console on every page view.
    pyodide.runPython("import warnings\nwarnings.filterwarnings('ignore', category=SyntaxWarning)")
    var micropip = pyodide.pyimport('micropip')
    for (var i = 0; i < msg.depWheels.length; i++) {
      await installLocalWheel(micropip, new URL('pyodide/' + msg.depWheels[i], msg.base).href, msg.depWheels[i])
    }
    // The aksharamukha wheel itself lives under wasm/wheel/, not wasm/pyodide/.
    await installLocalWheel(micropip, new URL('wheel/' + msg.aksharamukhaWheel, msg.base).href, msg.aksharamukhaWheel)
    transliterate = pyodide.pyimport('aksharamukha.transliterate')
  }

  function errorText (err) { return String((err && err.message) || err) }

  self.onmessage = function (event) {
    var msg = event.data
    if (msg.type === 'init') {
      if (!readyPromise) readyPromise = init(msg)
      readyPromise.then(
        function () { self.postMessage({ type: 'ready' }) },
        function (err) { self.postMessage({ type: 'init-error', message: errorText(err) }) }
      )
    } else if (msg.type === 'convert') {
      readyPromise.then(function () {
        var preOptions = pyodide.toPy(msg.preOptions || [])
        var postOptions = pyodide.toPy(msg.postOptions || [])
        try {
          var result = transliterate.process.callKwargs(msg.source, msg.target, msg.text, {
            nativize: msg.nativize, pre_options: preOptions, post_options: postOptions
          })
          self.postMessage({ type: 'result', id: msg.id, result: result })
        } catch (err) {
          self.postMessage({ type: 'result', id: msg.id, error: errorText(err) })
        } finally {
          preOptions.destroy()
          postOptions.destroy()
        }
      }, function (err) {
        self.postMessage({ type: 'result', id: msg.id, error: errorText(err) })
      })
    }
  }
}

var Engine = (function () {
  var WASM_CACHE_NAME = 'aksharamukha-wasm-v1'
  var AKSHARAMUKHA_WHEEL = ENGINE_WHEEL // set by the build from wasm/wheel/
  // Wheels installed directly (not via Pyodide's own package list); the
  // build checks each one exists in wasm/pyodide/.
  var DEP_WHEELS = [
    'fonttools-4.51.0-py3-none-any.whl',
    'wrapt-2.4.0-py3-none-any.whl',
    'deprecated-1.3.1-py2.py3-none-any.whl',
    'jaconv-0.5.0-py3-none-any.whl',
    'pykakasi-2.3.0-py3-none-any.whl'
  ]
  // Above this much text, the hosted API's latency (which scales with
  // payload size) exceeds the engine's fixed start-up cost - measured, the
  // two cross over around ~350KB of source text.
  var AUTO_LARGE_TEXT_BYTES = 300 * 1024

  var worker = null
  var readyPromise = null
  var ready = false
  var failed = false
  var pending = {} // conversion id -> { resolve, reject }
  var nextId = 1
  var progressListeners = []
  var lastProgress = ''

  function wasmUrl (path) { return new URL(path, Config.wasmBase).href }

  function notifyProgress (message) {
    lastProgress = message
    progressListeners.forEach(function (fn) { fn(message) })
  }

  function fail (err) {
    failed = true
    ready = false
    notifyProgress('')
    progressListeners = []
    queue.splice(0).forEach(function (item) { item.reject(err) })
    var inFlight = pending
    pending = {}
    Object.keys(inFlight).forEach(function (id) { inFlight[id].reject(err) })
    return err
  }

  function startWorker () {
    var source = '(' + wasmWorkerMain.toString() + ')()'
    return new Worker(URL.createObjectURL(new Blob([source], { type: 'text/javascript' })))
  }

  function initWasm (onProgress) {
    if (onProgress && !ready && !failed) {
      progressListeners.push(onProgress)
      if (lastProgress) onProgress(lastProgress)
    }
    if (readyPromise) return readyPromise
    readyPromise = new Promise(function (resolve, reject) {
      try {
        worker = startWorker()
      } catch (e) {
        // e.g. a Content-Security-Policy that doesn't allow blob: workers.
        reject(fail(e))
        return
      }
      worker.onmessage = function (event) {
        var msg = event.data
        if (msg.type === 'ready') {
          ready = true
          notifyProgress('')
          progressListeners = []
          resolve()
          dropOtherEngineCopies()
        } else if (msg.type === 'init-error') {
          reject(fail(new Error(msg.message)))
        } else if (msg.type === 'result') {
          var p = pending[msg.id]
          delete pending[msg.id]
          if (p) msg.error ? p.reject(new Error(msg.error)) : p.resolve(msg.result)
        }
      }
      worker.onerror = function (event) {
        if (event.preventDefault) event.preventDefault()
        reject(fail(new Error(event.message || 'The conversion engine stopped unexpectedly.')))
      }
      notifyProgress('Loading transliteration engine…')
      worker.postMessage({
        type: 'init',
        base: Config.wasmBase.href,
        cacheName: WASM_CACHE_NAME,
        depWheels: DEP_WHEELS,
        aksharamukhaWheel: AKSHARAMUKHA_WHEEL
      })
    })
    return readyPromise
  }

  // Conversions go to the engine one at a time, from a queue kept here. The
  // engine works through everything it's sent, so a conversion already sent
  // can't be dropped - but one still waiting here can: when a newer pick
  // supersedes it (its run's AbortSignal fires), it's removed before the
  // engine ever starts on it. Otherwise picking several scripts quickly on
  // a large page made the last pick wait for every one before it.
  var queue = []
  var busy = false

  function abortError () {
    return new DOMException('Superseded by a newer conversion.', 'AbortError')
  }

  function pump () {
    if (busy || failed) return
    var item
    while ((item = queue.shift()) && item.signal && item.signal.aborted) item.reject(abortError())
    if (!item) return
    busy = true
    var id = nextId++
    pending[id] = {
      resolve: function (result) { busy = false; item.resolve(result); pump() },
      reject: function (err) { busy = false; item.reject(err); pump() }
    }
    var job = item.job
    worker.postMessage({
      type: 'convert',
      id: id,
      source: job.source,
      target: job.target,
      text: job.text,
      nativize: job.nativize,
      preOptions: job.preOptions || [],
      postOptions: job.postOptions || []
    })
  }

  async function convertOneWasm (job, signal) {
    // A first-visit download still running (e.g. a very large page needing
    // the engine straight away): let it finish instead of the engine
    // fetching the same files a second time.
    if (downloading && !readyPromise) await downloading.catch(function () {})
    await initWasm(job.onProgress)
    if (failed) throw new Error('The conversion engine is not available.')
    if (signal && signal.aborted) throw abortError()
    return new Promise(function (resolve, reject) {
      var item = { job: job, signal: signal, resolve: resolve, reject: reject }
      queue.push(item)
      if (signal) {
        signal.addEventListener('abort', function () {
          var i = queue.indexOf(item)
          if (i > -1) {
            queue.splice(i, 1)
            reject(abortError())
          }
        }, { once: true })
      }
      pump()
    })
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

  async function convertOne (job, useWasm, signal) {
    if (!useWasm) return convertOneApi(job, signal)
    try {
      return await convertOneWasm(job, signal)
    } catch (e) {
      // Superseded by a newer pick: not a failure, so no API fallback.
      if (e.name === 'AbortError' || Config.engine === 'wasm') throw e
      console.warn('Aksharamukha: WASM engine failed, falling back to API.', e)
      return convertOneApi(job, signal)
    }
  }

  function totalTextBytes (jobs) {
    var total = 0
    for (var i = 0; i < jobs.length; i++) total += new Blob([jobs[i].text || '']).size
    return total
  }

  // True if every engine file is already saved in Cache Storage (by an
  // earlier page view's download) - starting the engine then needs no
  // download, only its start-up, which runs in the worker.
  var filesCachedCheck = null
  function engineFilesCached () {
    if (!filesCachedCheck) {
      filesCachedCheck = !window.caches
        ? Promise.resolve(false)
        : caches.open(WASM_CACHE_NAME).then(function (cache) {
          return Promise.all(ENGINE_FILES.map(function (file) { return cache.match(wasmUrl(file)) }))
        }).then(function (hits) { return hits.every(Boolean) }).catch(function () { return false })
    }
    return filesCachedCheck
  }

  // A visitor's first page view: save the engine files for later page
  // views WITHOUT starting the engine. Starting it (loading Python,
  // importing aksharamukha) costs seconds of processing and ~90MB of
  // memory, worth paying only once a conversion needs it - while the
  // download itself only ever happens once per site.
  var downloading = null
  function downloadEngineFiles () {
    if (!downloading) {
      downloading = caches.open(WASM_CACHE_NAME).then(function (cache) {
        // Same clean-up the worker does: drop caches from an older
        // WASM_CACHE_NAME, which are never used again.
        caches.keys().then(function (names) {
          names.forEach(function (name) {
            if (name.indexOf('aksharamukha-wasm-') === 0 && name !== WASM_CACHE_NAME) caches.delete(name)
          })
        }).catch(function () {})
        return Promise.all(ENGINE_FILES.map(function (file) {
          var url = wasmUrl(file)
          return cache.match(url).then(function (hit) {
            if (hit) return
            return fetch(url).then(function (res) {
              if (!res.ok) throw new Error('Failed to download ' + url + ' (' + res.status + ')')
              return cache.put(url, res)
            })
          })
        }))
      }).then(function () {
        filesCachedCheck = Promise.resolve(true)
        dropOtherEngineCopies()
        Storage.set(DOWNLOADED_KEY, String(Date.now()))
      }, function (err) {
        Storage.set(DOWNLOADED_KEY, String(Date.now()))
        throw err
      })
    }
    return downloading
  }

  // When this browser last finished (or failed) downloading the engine
  // files. If they're missing again on a later page view within a day, the
  // browser isn't keeping them - writes failing, storage full, or storage
  // that doesn't last between page views (some private-browsing modes) -
  // and downloading ~9MB on every page view would be pure waste, so the
  // background download is skipped until a day has passed; conversions use
  // the API meanwhile. A download cut short by leaving the page records
  // nothing, so the next page view simply tries again.
  var DOWNLOADED_KEY = 'aksharamukhaEngineDownloaded'
  var DOWNLOAD_RETRY_MS = 24 * 60 * 60 * 1000
  function downloadedRecently () {
    return Date.now() - Number(Storage.get(DOWNLOADED_KEY) || 0) < DOWNLOAD_RETRY_MS
  }

  // Once this page has the current engine's files, deletes saved copies
  // from any other address: older plugin versions saved the engine under
  // their own folder (…@v5.0.8/wasm/…), and an engine update moves it to
  // a new commit. Safe now that the address only changes when the engine
  // itself does - different plugin versions on one site share it, so they
  // can't keep deleting each other's copy.
  function dropOtherEngineCopies () {
    if (!window.caches) return
    var base = Config.wasmBase.href
    caches.open(WASM_CACHE_NAME).then(function (cache) {
      return cache.keys().then(function (requests) {
        return Promise.all(requests
          .filter(function (request) { return request.url.indexOf(base) !== 0 })
          .map(function (request) { return cache.delete(request) }))
      })
    }).catch(function () {})
  }

  // engine=auto routing. The engine is preferred whenever using it costs no
  // download - it's already running, or its files were saved by an earlier
  // page view - to keep conversions off the hosted API. Large text always
  // goes to the engine, where it's clearly faster. The API is used only
  // for a visitor's first page view on this site (while the engine
  // downloads in the background for next time), or if the engine can't
  // run in this browser at all.
  async function shouldUseWasm (jobs) {
    if (Config.engine === 'wasm') return true
    if (Config.engine === 'api' || failed) return false
    if (ready) return true
    if (totalTextBytes(jobs) >= AUTO_LARGE_TEXT_BYTES) return true
    return engineFilesCached()
  }

  // Jobs that share the same settings go to the converter as ONE combined
  // array - one API request (or engine call) per page rather than one per
  // marked element - and the result is split back per job. Pages set to
  // autodetect keep one call per element: detecting the script over the
  // whole page at once could guess wrong for a page mixing scripts.
  async function convertGroup (group, useWasm, signal) {
    if (group.length === 1) return [await convertOne(group[0], useWasm, signal)]
    var pieces = group.map(function (job) { return JSON.parse(job.text) })
    var combined = Object.assign({}, group[0], { text: JSON.stringify([].concat.apply([], pieces)) })
    var texts = parseConvertedTexts(await convertOne(combined, useWasm, signal))
    var expected = pieces.reduce(function (n, p) { return n + p.length }, 0)
    if (!texts || texts.length !== expected) {
      // Can't split the combined result back reliably - convert each
      // element on its own instead.
      return Promise.all(group.map(function (job) { return convertOne(job, useWasm, signal) }))
    }
    var offset = 0
    return pieces.map(function (p) {
      var slice = texts.slice(offset, offset + p.length)
      offset += p.length
      return JSON.stringify(slice)
    })
  }

  async function convertAll (jobs, options) {
    options = options || {}
    var useWasm = await shouldUseWasm(jobs)
    var groups = {}
    jobs.forEach(function (job, i) {
      var key = job.source === 'autodetect'
        ? 'element:' + i
        : JSON.stringify([job.source, job.target, job.nativize, job.preOptions || [], job.postOptions || []])
      ;(groups[key] = groups[key] || []).push(i)
    })
    var results = new Array(jobs.length)
    await Promise.all(Object.keys(groups).map(function (key) {
      var indexes = groups[key]
      return convertGroup(indexes.map(function (i) { return jobs[i] }), useWasm, options.signal).then(function (converted) {
        indexes.forEach(function (jobIndex, k) { results[jobIndex] = converted[k] })
      })
    }))
    return results
  }

  function start () {
    initWasm().catch(function (e) {
      console.warn('Aksharamukha: the conversion engine failed to start (conversions will use the API).', e)
    })
  }

  // On page load, once the browser is idle. engine=auto doesn't start the
  // engine here - that happens when a conversion needs it, or when the
  // visitor opens the picker (startIfCached) - and only downloads its
  // files on the visitor's first page view on the site. engine=wasm starts
  // it straight away.
  function prepare () {
    if (Config.engine === 'api') return
    if (Config.engine === 'wasm') { start(); return }
    if (readyPromise || failed || !window.caches) return
    engineFilesCached().then(function (cached) {
      if (!cached && !readyPromise && !downloadedRecently()) return downloadEngineFiles()
    }).catch(function (e) {
      console.warn('Aksharamukha: could not download the conversion engine in the background (conversions will use the API).', e)
    })
  }

  // The visitor opened the picker: start the engine, so it's likely ready
  // by the time they pick. Not while its files are still downloading on a
  // first visit - starting it then would download them a second time;
  // those picks use the API until the download is done.
  function startIfCached () {
    if (Config.engine === 'api' || readyPromise || failed) return
    engineFilesCached().then(function (cached) { if (cached) start() })
  }

  return { convertAll: convertAll, prepare: prepare, startIfCached: startIfCached }
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
  var registry = new WeakMap() // el -> { appliedOutputClass, langs, fontCarriers, version }
  var elements = [] // insertion-ordered list of currently known elements
  var observer = null

  // The original (unconverted) text is tracked per text node rather than
  // as one snapshot of each element taken at start-up - a snapshot went
  // stale when the page changed its own text later, and the next pick then
  // wrote the OLD text back over the page's new text, converted. A node the
  // plugin hasn't seen yet holds original text by definition (the plugin
  // only ever changes the text of nodes it already knows), and when the
  // page changes a node's text, that becomes its original (see textWatcher).
  var originalText = new WeakMap() // text node -> its original text
  var pluginWrote = new WeakMap() // text node -> the text the plugin last wrote into it

  function textNodes (el) {
    var walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false)
    var nodes = []
    var node
    while ((node = walker.nextNode())) {
      if (node.nodeValue.trim() !== '') nodes.push(node)
    }
    return nodes
  }

  function originalOf (node) {
    if (!originalText.has(node)) originalText.set(node, node.nodeValue)
    return originalText.get(node)
  }

  // What a conversion converts: a list of text nodes and their original
  // text, read now. readText: every text node in the element (a pick
  // converting the whole page). readChangedText: only the nodes the page
  // changed or added since they were last converted - so a small change
  // inside a large element (a clock, say) converts just that, not the whole
  // element. Both take the nodes they read off the element's change list.
  function readText (el) {
    var entry = registry.get(el)
    if (entry) entry.changed.clear()
    var nodes = textNodes(el)
    return { nodes: nodes, texts: nodes.map(originalOf) }
  }

  function readChangedText (el) {
    var entry = registry.get(el)
    if (!entry) return { nodes: [], texts: [] }
    var nodes = Array.from(entry.changed).filter(function (node) {
      return el.contains(node) && node.nodeValue.trim() !== ''
    })
    entry.changed.clear()
    return { nodes: nodes, texts: nodes.map(originalOf) }
  }

  // Watches registered elements for text the PAGE changes or adds (the
  // plugin's own writes are recognized via pluginWrote and ignored), and
  // adds those nodes to the element's change list so they get converted too.
  var onTextChanged = function () {}
  var textWatcher = new MutationObserver(function (records) {
    var changedElements = []
    records.forEach(function (record) {
      var nodes = []
      if (record.type === 'characterData') {
        var node = record.target
        if (pluginWrote.has(node) && pluginWrote.get(node) === node.nodeValue) return
        originalText.set(node, node.nodeValue)
        pluginWrote.delete(node)
        nodes.push(node)
      } else {
        Array.prototype.forEach.call(record.addedNodes, function (added) {
          if (added.nodeType === 3) nodes.push(added)
          else if (added.nodeType === 1) nodes = nodes.concat(textNodes(added))
        })
      }
      nodes = nodes.filter(function (node) { return node.nodeValue.trim() !== '' })
      if (!nodes.length) return
      var el = record.target
      while (el && !registry.has(el)) el = el.parentNode
      if (!el) return
      var entry = registry.get(el)
      nodes.forEach(function (node) { entry.changed.add(node) })
      if (changedElements.indexOf(el) === -1) changedElements.push(el)
    })
    changedElements.forEach(function (el) { onTextChanged(el) })
  })

  // A host page's own CSS commonly keys font choices off a lang attribute
  // (e.g. sanskritdocuments.org's *[lang="sa"] { font-family: Shobhika }).
  // That's correct for the original text, but once converted to a different
  // script the outputClass we add to `el` (e.g. .granthapandya, meant to
  // pull in the matching web font) is inherited - and a lang-keyed rule
  // matching one of el's own descendants directly always beats an inherited
  // value, regardless of !important, since a direct match on the element
  // itself outranks inheritance from an ancestor. Left in place, the stale
  // lang attribute silently wins and the requested font never shows.
  // Stripping it while converted (and restoring it for "Original") keeps
  // the host page's own styling correct in both states.
  function captureLangs (el) {
    var withLang = el.hasAttribute && el.hasAttribute('lang') ? [el] : []
    if (el.querySelectorAll) withLang = withLang.concat(Array.prototype.slice.call(el.querySelectorAll('[lang]')))
    return withLang.map(function (node) { return { node: node, lang: node.getAttribute('lang') } })
  }

  // <pre> and <code> carry their own direct browser-default font-family
  // (monospace) - a direct rule on the element itself, not merely inherited
  // - so it beats whatever outputClass is inherited from an ancestor for
  // the exact same reason lang does above. Verse/poetry text wrapped in
  // <pre> for whitespace preservation is common enough (e.g. this is what
  // actually broke on sanskritdocuments.org) that it needs the same
  // outputClass applied directly to these descendants, not just to `el`.
  function captureFontCarriers (el) {
    var carriers = el.matches && el.matches('pre, code') ? [el] : []
    if (el.querySelectorAll) carriers = carriers.concat(Array.prototype.slice.call(el.querySelectorAll('pre, code')))
    return carriers
  }

  function register (el) {
    if (registry.has(el)) return
    registry.set(el, {
      appliedOutputClass: '',
      langs: captureLangs(el),
      fontCarriers: captureFontCarriers(el),
      changed: new Set() // text nodes the page changed or added, not yet converted
    })
    textNodes(el).forEach(originalOf) // record the original text of every node now
    textWatcher.observe(el, { characterData: true, childList: true, subtree: true })
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

  // Writes converted text into the nodes it was read from (see readText).
  // Returns false (and writes nothing) if `texts` isn't one converted
  // string per node read - writing anything else in would scramble the
  // page, e.g. a raw string spread across the nodes one character each.
  // A node the page removed, or changed again while this conversion was
  // running, is skipped: its current text is newer than this result, and
  // the change put it on the element's change list for its own conversion.
  function writeText (el, read, texts) {
    if (!Array.isArray(texts) || texts.length !== read.nodes.length) return false
    read.nodes.forEach(function (node, i) {
      if (!el.contains(node) || originalText.get(node) !== read.texts[i]) return
      pluginWrote.set(node, texts[i])
      node.nodeValue = texts[i]
    })
    return true
  }

  // The element's converted text as it is now - for working out its font
  // class after converting just part of it (for a few scripts the font
  // depends on marks in the text, e.g. Vedic accents).
  function currentText (el) {
    return JSON.stringify(textNodes(el).map(function (node) { return node.nodeValue }))
  }

  function setOutputClass (el, outputClass) {
    var entry = registry.get(el)
    var outputClassOld = entry ? entry.appliedOutputClass : ''
    if (outputClassOld && outputClassOld !== outputClass) el.classList.remove(outputClassOld)
    if (outputClass) el.classList.add(outputClass)
    if (entry) {
      entry.appliedOutputClass = outputClass || ''
      entry.langs.forEach(function (rec) {
        if (outputClass) rec.node.removeAttribute('lang')
        else rec.node.setAttribute('lang', rec.lang)
      })
      entry.fontCarriers.forEach(function (carrier) {
        if (outputClassOld && outputClassOld !== outputClass) carrier.classList.remove(outputClassOld)
        if (outputClass) carrier.classList.add(outputClass)
      })
    }
  }

  return {
    collect: collect,
    observe: observe,
    // A snapshot, not a live reference - callers that start an async
    // operation should hold on to the array they got, since elements can be
    // added/removed (via the MutationObserver) while that operation is in
    // flight.
    snapshot: function () { return elements.slice() },
    readText: readText,
    readChangedText: readChangedText,
    writeText: writeText,
    currentText: currentText,
    setOutputClass: setOutputClass,
    onTextChanged: function (fn) { onTextChanged = fn },
    sourceForElement: sourceForElement,
    parseConvertedTexts: parseConvertedTexts
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
    if (Config.nonce) style.nonce = Config.nonce
    style.textContent = PANEL_CSS
    document.head.appendChild(style)
    var link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = new URL('fonts.css', Config.assetBase).href
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
    var ICON_URL = new URL('icon.png', Config.assetBase).href

    var launcher = document.createElement('button')
    launcher.type = 'button'
    launcher.id = 'aksharamukha-launcher'
    launcher.className = 'aksharamukha-printhide'
    launcher.innerHTML = '<img src="' + ICON_URL + '" width="22px" alt=""/>' +
      '<span id="aksharamukha-launcher-label"></span>'
    document.body.appendChild(launcher)

    applyPosition(launcher)

    var root = document.createElement('div')
    root.id = 'aksharamukha-navbar'
    root.className = 'aksharamukha-printhide aksharamukha-collapsed'
    // Focusable from script only (not a Tab stop), so keyboard focus can
    // stay on the panel after a pick - see leaveSearchBox().
    root.tabIndex = -1
    root.setAttribute('role', 'group')
    root.setAttribute('aria-label', 'Script converter')
    applyPosition(root)
    root.innerHTML =
      '<div class="aksharamukha-logosec">' +
      '<label for="aksharamukha-select-input" class="aksharamukha-name">Select script</label>' +
      '<button type="button" id="aksharamukha-pluginhidebutton"><small>Hide</small></button>' +
      '</div>' +
      '<div class="aksharamukha-combobox">' +
      '<input type="text" id="aksharamukha-select-input" autocomplete="off" spellcheck="false" placeholder="' + SEARCH_PLACEHOLDER + '" ' +
      'role="combobox" aria-expanded="false" aria-autocomplete="list" aria-controls="aksharamukha-listbox"/>' +
      '<input type="hidden" id="aksharamukhaselect" name="scriptinput"/>' +
      '<ul id="aksharamukha-listbox" role="listbox" hidden></ul>' +
      '</div>' +
      '<div id="aksharamukha-options-slot"></div>' +
      '<div id="aksharamukha-loading" aria-live="polite"><div class="aksharamukha-progressbar"><div></div></div><small></small></div>' +
      '<div id="aksharamukha-error" hidden></div>' +
      '<div id="aksharamukha-branding">' +
      '<a href="https://aksharamukha.com" class="aksharamukha-hyperlink" target="_blank" rel="noopener">' +
      '<img src="' + ICON_URL + '" width="15px" alt=""/> <small><sup>Aksharamukha</sup></small></a>' +
      '</div>'
    document.body.insertAdjacentElement('afterbegin', root)

    els.root = root
    els.launcher = launcher
    els.launcherLabel = launcher.querySelector('#aksharamukha-launcher-label')
    els.select = root.querySelector('#aksharamukhaselect')
    els.searchInput = root.querySelector('#aksharamukha-select-input')
    els.listbox = root.querySelector('#aksharamukha-listbox')
    els.optionsSlot = root.querySelector('#aksharamukha-options-slot')
    els.loading = root.querySelector('#aksharamukha-loading small')
    els.progressBar = root.querySelector('.aksharamukha-progressbar')
    els.error = root.querySelector('#aksharamukha-error')
    els.hideButton = root.querySelector('#aksharamukha-pluginhidebutton')

    optionsData = buildScriptOptionsData()

    // A shared link's ?akshrmkh=Target (written by changeurl=1) wins over
    // the visitor's saved choice, as in v3.
    var urlTarget = new URLSearchParams(window.location.search).get('akshrmkh')
    var restoredTarget = urlTarget && Config.scriptList.indexOf(urlTarget) > -1 ? urlTarget : Storage.get('target')
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
    root.addEventListener('click', onInfoClick)
    // Only the visitor's own clicks are remembered - not the automatic
    // open on a first visit below.
    els.hideButton.addEventListener('click', function () { hide(); Storage.set(HIDDEN_KEY, 'true') })
    launcher.addEventListener('click', function () { show(); Storage.set(HIDDEN_KEY, 'false') })
    els.searchInput.addEventListener('focus', openFresh)
    // Opening the picker is the sign a conversion is coming: start the
    // engine now, so it has a few seconds' head start while they choose.
    // (Not on the automatic open on a first visit - that's no such sign.)
    launcher.addEventListener('click', Engine.startIfCached)
    els.searchInput.addEventListener('focus', Engine.startIfCached)
    // Focus alone doesn't cover a click on the box while it already has
    // focus (e.g. after Escape), which should reopen the list too.
    els.searchInput.addEventListener('click', function () { if (els.listbox.hidden) openFresh() })
    // mousedown (not click) fires before the search input's blur, so the
    // option gets selected before the listbox would otherwise close itself.
    els.listbox.addEventListener('mousedown', onListboxMouseDown)
    // pointerdown, not click: Safari on iPhone doesn't send a click for a
    // tap on something that isn't itself clickable (plain page text, empty
    // space), so tapping elsewhere never closed the list or an example.
    document.addEventListener('pointerdown', function (event) {
      if (root.contains(event.target)) return
      closeListbox()
      closeExamples()
    })

    // Open straight to the panel while the visitor is on the original
    // script, so they discover it at all - unless they've hidden it
    // themselves (otherwise a reader who doesn't want it would have to
    // close it again on every page of a multi-page site), or the screen is
    // too narrow for it not to cover the text. A visitor who already
    // picked a script starts collapsed behind the badge, which shows it.
    var onOriginal = !restoredTarget || restoredTarget === 'Original'
    var hiddenByVisitor = Storage.get(HIDDEN_KEY) === 'true'
    var narrowScreen = window.matchMedia && window.matchMedia(PHONE_MEDIA_QUERY).matches
    if (onOriginal && !hiddenByVisitor && !narrowScreen) show()

    return restoredTarget
  }

  // Same key v3 used, so a visitor who hid the v3 widget on a site keeps
  // that choice after the site moves to v5.
  var HIDDEN_KEY = 'hidePlugin'
  // The open panel is 220px wide plus margins: under 640px it covers a good
  // part of the screen. The touch-screen clause catches phones and tablets
  // on pages without <meta name="viewport">, which phones lay out ~980px
  // wide (so the width test alone never matches) and then zoom out.
  var PHONE_MEDIA_QUERY = '(max-width: 640px), (hover: none) and (pointer: coarse)'

  var optionsData = []
  var activeOptionId = null
  var SEARCH_PLACEHOLDER = 'Search scripts…'

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

  // Opening the picker (as opposed to filtering it while typing): the box
  // empties so a search can be typed straight away, the current script
  // stays visible as the placeholder, and the full list opens with the
  // current script highlighted and scrolled into view - arrow keys start
  // from there, and Enter keeps it.
  function openFresh () {
    els.searchInput.value = ''
    els.searchInput.placeholder = currentLabel() || SEARCH_PLACEHOLDER
    openListbox('')
    var current = els.listbox.querySelector('li[role="option"][data-value="' + els.select.value + '"]')
    if (current) setActive(current, true)
  }

  function closeListbox () {
    els.listbox.hidden = true
    els.searchInput.setAttribute('aria-expanded', 'false')
    els.searchInput.removeAttribute('aria-activedescendant')
    activeOptionId = null
    // Typing without picking anything reverts to the last real selection,
    // so a half-typed query never gets mistaken for the active script.
    els.searchInput.value = currentLabel()
    els.searchInput.placeholder = SEARCH_PLACEHOLDER
  }

  // After a pick, Escape, or Enter on an empty box: take the cursor out of
  // the text box - left there, the next keystroke appends to the script's
  // name ("Tamilk...") instead of starting a fresh search, a click on the
  // still-focused box wouldn't reopen the list, and on phones the keyboard
  // would stay up - but keep keyboard focus on the panel rather than
  // dropping it to the top of the page.
  function leaveSearchBox () {
    closeListbox()
    if (document.activeElement === els.searchInput) els.root.focus({ preventScroll: true })
  }

  // Scrolls only the listbox itself, never the host page - scrollIntoView()
  // would also scroll any scrollable ancestor, including the page.
  function setActive (li, center) {
    if (activeOptionId) {
      var prev = document.getElementById(activeOptionId)
      if (prev) prev.classList.remove('is-active')
    }
    activeOptionId = li.id
    li.classList.add('is-active')
    els.searchInput.setAttribute('aria-activedescendant', activeOptionId)
    var lb = els.listbox
    var top = li.offsetTop
    var bottom = top + li.offsetHeight
    if (center) lb.scrollTop = top - (lb.clientHeight - li.offsetHeight) / 2
    else if (top < lb.scrollTop) lb.scrollTop = top
    else if (bottom > lb.scrollTop + lb.clientHeight) lb.scrollTop = bottom - lb.clientHeight
  }

  function moveActive (delta) {
    var opts = Array.prototype.filter.call(els.listbox.children, function (li) { return li.getAttribute('role') === 'option' })
    if (!opts.length) return
    var idx = opts.findIndex(function (li) { return li.id === activeOptionId })
    idx = (idx + delta + opts.length) % opts.length
    setActive(opts[idx], false)
  }

  function selectValue (value, triggerChange) {
    els.select.value = value
    var match = optionsData.filter(function (o) { return o.value === value })[0]
    els.searchInput.value = match ? match.label : value
    // The launcher badge shows the current script's full name (not an
    // abbreviation - there's no reliable way to abbreviate "Zanabazar
    // Square" or "Meetei Mayek" that everyone would recognize) whenever a
    // real target is selected, so a visitor can see what's currently
    // displayed at a glance without expanding the panel - on any device,
    // not just on hover, which a tooltip alone wouldn't cover. For
    // "Original script" the label reads "Change script" instead of being
    // left blank - a bare icon with no text gives a first-time visitor no
    // hint that it's interactive at all (this is what v3/v4's old
    // "Displaying in X / Change script" indicator communicated, and site
    // owners relying on that wording noticed its absence).
    els.launcherLabel.textContent = value !== 'Original' && match ? match.label : 'Change script'
    els.launcher.classList.add('aksharamukha-has-label')
    updateLauncherName()
    leaveSearchBox()
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
    if (event.key === 'ArrowDown') { event.preventDefault(); if (els.listbox.hidden) openFresh(); else moveActive(1) } else if (event.key === 'ArrowUp') { event.preventDefault(); if (els.listbox.hidden) openFresh(); else moveActive(-1) } else if (event.key === 'Enter') {
      event.preventDefault()
      if (activeOptionId) {
        selectValue(document.getElementById(activeOptionId).getAttribute('data-value'))
      } else if (!els.searchInput.value.trim()) {
        // Empty box, nothing highlighted (e.g. typed then cleared): keep
        // the current script rather than falling through to the first
        // visible option, which would silently switch to "Original script".
        leaveSearchBox()
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
      leaveSearchBox()
    } else if (event.key === 'Tab') {
      // Focus moves on to the next control as usual; the list shouldn't
      // stay open behind it.
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
    if (example) html += exampleHtml(example)
    return html + '</span>'
  }

  // With a mouse, the example shows on hover (or keyboard focus). Touch
  // screens have no hover, and tapping the option's name switches it on,
  // so there an "i" button - shown only on touch screens, see PANEL_CSS -
  // opens the example without changing the option.
  function exampleHtml (example) {
    return '<button type="button" class="aksharamukha-info" aria-label="Show example" aria-expanded="false">i</button>' +
      '<span class="aksharamukha-tooltip" role="tooltip">' + example + '</span>'
  }

  function onInfoClick (event) {
    var button = event.target.closest('.aksharamukha-info')
    var chip = button && button.parentNode
    var wasOpen = chip && chip.classList.contains('is-open')
    closeExamples()
    if (!chip || wasOpen) return
    chip.classList.add('is-open')
    button.setAttribute('aria-expanded', 'true')
    keepOnScreen(chip.querySelector('.aksharamukha-tooltip'))
  }

  function closeExamples () {
    Array.prototype.forEach.call(els.root.querySelectorAll('.aksharamukha-chip.is-open'), function (chip) {
      chip.classList.remove('is-open')
      chip.querySelector('.aksharamukha-tooltip').style.transform = ''
      chip.querySelector('.aksharamukha-info').setAttribute('aria-expanded', 'false')
    })
  }

  // The example is centred over its chip, which on a phone can push it
  // past the edge of the screen - shift it back in if so.
  function keepOnScreen (tooltip) {
    var margin = 8
    var rect = tooltip.getBoundingClientRect()
    var shift = 0
    if (rect.left < margin) shift = margin - rect.left
    else if (rect.right > window.innerWidth - margin) shift = window.innerWidth - margin - rect.right
    if (shift) tooltip.style.transform = 'translateX(calc(-50% + ' + Math.round(shift) + 'px))'
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
        exampleHtml(preserveExample) +
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
    launcherLoading = isLoading ? (message || 'Loading…') : null
    updateLauncherName()
  }

  // The badge's accessible name (and tooltip) starts with the text it shows
  // - "Tamil", or "Change script" on the original - as accessibility
  // guidelines ask for. It used to be a fixed "Open script converter", so a
  // screen-reader user couldn't tell which script the page was in.
  var launcherLoading = null // the loading message while a conversion runs
  function updateLauncherName () {
    var shown = els.launcherLabel.textContent
    var name = launcherLoading
      ? shown + ' – ' + launcherLoading
      : (shown === 'Change script' ? shown : shown + ' – change script')
    els.launcher.setAttribute('aria-label', name)
    els.launcher.title = name
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
// Documented in README.md's "Theming" section.
var PANEL_CSS = '\n' +
  '#aksharamukha-navbar, #aksharamukha-navbar * { box-sizing: border-box; }\n' +
  '#aksharamukha-navbar { position: fixed; font-family: var(--aksharamukha-font, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif); width: 220px; padding: 14px 16px 12px; border-radius: var(--aksharamukha-radius, 12px); background: var(--aksharamukha-bg, #fff); border: 1px solid var(--aksharamukha-border, #e7e8ee); box-shadow: 0 4px 18px rgba(20,20,40,.08); z-index: 1000; }\n' +
  '#aksharamukha-navbar.aksharamukha-collapsed { display: none; }\n' +
  '#aksharamukha-navbar:focus { outline: none; }\n' +
  '#aksharamukha-navbar:focus-visible { outline: 2px solid var(--aksharamukha-accent, #6c63ff); outline-offset: 2px; }\n' +
  '.aksharamukha-logosec { display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-bottom: 8px; }\n' +
  '.aksharamukha-name { font-weight: 600; color: var(--aksharamukha-text, #1f2430); }\n' +
  '.aksharamukha-combobox { position: relative; }\n' +
  '#aksharamukha-select-input { font-family: inherit; width: 100%; padding: 6px 10px; font-size: 13px; color: var(--aksharamukha-text, #1f2430); background: var(--aksharamukha-bg, #fff); border: 1px solid #d7dae1; border-radius: 7px; cursor: text; }\n' +
  '#aksharamukha-select-input:focus { outline: none; border-color: var(--aksharamukha-accent, #6c63ff); box-shadow: 0 0 0 3px var(--aksharamukha-accent-shadow, rgba(108,99,255,.15)); }\n' +
  '#aksharamukha-listbox { position: absolute; left: 0; right: 0; top: calc(100% + 4px); margin: 0; padding: 4px 0; list-style: none; background: var(--aksharamukha-bg, #fff); border: 1px solid #e2e4ea; border-radius: 8px; box-shadow: 0 10px 28px rgba(20,20,40,.14); max-height: 220px; overflow-y: auto; z-index: 1001; }\n' +
  '#aksharamukha-listbox li[role="option"] { padding: 6px 12px; font-size: 13px; color: var(--aksharamukha-text, #1f2430); cursor: pointer; }\n' +
  '#aksharamukha-listbox li[role="option"]:hover, #aksharamukha-listbox li.is-active { background: var(--aksharamukha-accent-tint, #f2f0ff); }\n' +
  '#aksharamukha-listbox li.is-selected { font-weight: 600; color: var(--aksharamukha-accent-strong, #4b3fd6); }\n' +
  '.aksharamukha-optgroup-label { padding: 8px 12px 2px; font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: .05em; color: var(--aksharamukha-text-faint, #6b7080); }\n' +
  '.aksharamukha-empty { padding: 8px 12px; font-size: 12px; color: var(--aksharamukha-text-faint, #6b7080); }\n' +
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
  '#aksharamukha-navbar .aksharamukha-info { display: none; align-items: center; justify-content: center; width: 22px; height: 22px; margin: 0 0 0 3px; padding: 0; border-radius: 50%; font: italic 700 12px/1 Georgia, "Times New Roman", serif; }\n' +
  '@media (hover: none) {\n' +
  '  #aksharamukha-navbar .aksharamukha-info { display: inline-flex; }\n' +
  '  .aksharamukha-chip:hover .aksharamukha-tooltip, .aksharamukha-chip:focus-within .aksharamukha-tooltip { visibility: hidden; opacity: 0; }\n' +
  '  .aksharamukha-has-example label { cursor: pointer; text-decoration: none; }\n' +
  '}\n' +
  '.aksharamukha-chip.is-open .aksharamukha-tooltip { visibility: visible; opacity: 1; }\n' +
  '.aksharamukha-hidedown { display: none; }\n' +
  '.aksharamukha-showup { display: block; }\n' +
  '#aksharamukha-loading { min-height: 14px; margin-top: 4px; font-size: 11px; color: var(--aksharamukha-text-faint, #6b7080); }\n' +
  '#aksharamukha-error { margin-top: 6px; font-size: 11px; color: #a8352a; }\n' +
  '#aksharamukha-branding { margin-top: 10px; padding-top: 8px; border-top: 1px solid #edeef2; font-size: 90%; color: var(--aksharamukha-text-faint, #6b7080); }\n' +
  'a.aksharamukha-hyperlink, a.aksharamukha-hyperlink:visited { text-decoration: none; color: var(--aksharamukha-text-muted, #4a4f5c); }\n' +
  'a.aksharamukha-hyperlink:hover { color: var(--aksharamukha-accent, #6c63ff); }\n' +
  '.aksharamukha-progressbar { height: 3px; border-radius: 2px; background: #eeedf7; overflow: hidden; margin-top: 6px; display: none; }\n' +
  '.aksharamukha-progressbar.active { display: block; }\n' +
  '.aksharamukha-progressbar div { height: 100%; width: 40%; background: var(--aksharamukha-accent, #6c63ff); border-radius: 2px; animation: aksharamukha-indeterminate 1.1s ease-in-out infinite; }\n' +
  '@keyframes aksharamukha-indeterminate { 0% { transform: translateX(-100%); } 100% { transform: translateX(350%); } }\n' +
  '#aksharamukha-launcher { position: fixed; width: 44px; height: 44px; border-radius: 22px; background: var(--aksharamukha-bg, #fff); border: 1px solid var(--aksharamukha-border, #e7e8ee); box-shadow: 0 4px 14px rgba(20,20,40,.15); display: flex; align-items: center; justify-content: center; gap: 7px; cursor: pointer; z-index: 1000; padding: 0; overflow: hidden; transition: width .15s ease, padding .15s ease; }\n' +
  '#aksharamukha-launcher.aksharamukha-has-label { width: auto; max-width: 220px; padding: 0 14px 0 11px; }\n' +
  '#aksharamukha-launcher-label { font-family: var(--aksharamukha-font, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif); font-size: 13px; font-weight: 500; color: var(--aksharamukha-text, #1f2430); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n' +
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
  var reads = targetElements.map(Content.readText)
  var jobs = targetElements.map(function (el, i) {
    var meta = Content.sourceForElement(el)
    return {
      source: meta.source,
      target: target,
      preOptions: meta.preOptions,
      postOptions: State.postOptionsList,
      nativize: !State.preservePrevious,
      text: JSON.stringify(reads[i].texts),
      onProgress: function (msg) { if (myToken === State.requestToken) Panel.setLoading(true, msg) }
    }
  })

  try {
    var results = target === 'Original'
      ? reads.map(function (read) { return JSON.stringify(read.texts) })
      : await Engine.convertAll(jobs, { signal: controller.signal })

    if (myToken !== State.requestToken) return // superseded by a newer run

    var failed = 0
    results.forEach(function (raw, i) {
      // Text the page changed while this was running is skipped by
      // writeText and converted separately (see convertPending).
      if (!Content.writeText(targetElements[i], reads[i], Content.parseConvertedTexts(raw))) {
        failed += 1
        console.error('Aksharamukha plugin: unexpected conversion result, left this element unchanged', raw)
        return
      }
      // getOutputClass's 3rd argument is content-dependent (e.g. Vedic
      // accent-mark detection), so it must be computed per element's own
      // result, not once for the whole batch.
      Content.setOutputClass(targetElements[i], target === 'Original' ? '' : getOutputClass(target, State.postOptionsList, raw))
    })
    if (failed) Panel.setError('Part of this page could not be converted to this script.')

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

// Text that appears or changes on the page after start-up is converted to
// the currently selected script without disturbing the rest of the page:
// an element the page adds is converted whole; when the page changes or
// adds text inside a known element, only that text is converted (see
// Content.readChangedText) - a clock ticking inside a large element costs a
// few characters, not the element.
//
// Batched over a short delay, so a burst of changes (a page re-rendering
// several parts at once) is one conversion call. And throttled: an element
// that keeps changing is re-converted at most once per
// RECONVERT_INTERVAL_MS, its changes in between collected into the next
// conversion - a page updating something many times a second then costs at
// most one conversion (on a first visit, one API call) a second.
var RECONVERT_INTERVAL_MS = 1000
var pendingItems = [] // { el, whole }
var pendingTimer = null
var nextAllowed = new WeakMap() // el -> earliest time its next re-conversion may start

function queueForConversion (el, whole) {
  var item = pendingItems.filter(function (p) { return p.el === el })[0]
  if (item) item.whole = item.whole || !!whole
  else pendingItems.push({ el: el, whole: !!whole })
  schedulePending()
}

function schedulePending () {
  if (pendingTimer || !pendingItems.length) return
  var now = Date.now()
  var soonest = Math.min.apply(null, pendingItems.map(function (p) { return (nextAllowed.get(p.el) || 0) - now }))
  pendingTimer = setTimeout(convertPending, Math.max(100, soonest))
}

async function convertPending () {
  pendingTimer = null
  var now = Date.now()
  var due = pendingItems.filter(function (p) { return (nextAllowed.get(p.el) || 0) <= now })
  pendingItems = pendingItems.filter(function (p) { return due.indexOf(p) === -1 })
  schedulePending() // for items still waiting out their interval

  // "Original script": the page's own text is already what should show.
  var target = State.target
  if (!due.length || target === 'Original') return
  var postOptions = State.postOptionsList
  var items = due.map(function (p) {
    return { el: p.el, whole: p.whole, read: p.whole ? Content.readText(p.el) : Content.readChangedText(p.el) }
  }).filter(function (item) { return item.read.nodes.length })
  if (!items.length) return
  items.forEach(function (item) { nextAllowed.set(item.el, now + RECONVERT_INTERVAL_MS) })

  var jobs = items.map(function (item) {
    var meta = Content.sourceForElement(item.el)
    return {
      source: meta.source,
      target: target,
      preOptions: meta.preOptions,
      postOptions: postOptions,
      nativize: !State.preservePrevious,
      text: JSON.stringify(item.read.texts)
    }
  })
  try {
    var results = await Engine.convertAll(jobs, {})
    // A newer pick is converting the whole page anyway.
    if (State.target !== target) return
    results.forEach(function (raw, i) {
      var item = items[i]
      if (!Content.writeText(item.el, item.read, Content.parseConvertedTexts(raw))) {
        console.error('Aksharamukha plugin: unexpected conversion result, left this text unchanged', raw)
        return
      }
      // After converting part of an element, its font class is worked out
      // from all of its (now converted) text, not just the part converted.
      Content.setOutputClass(item.el, getOutputClass(target, postOptions, item.whole ? raw : Content.currentText(item.el)))
    })
  } catch (e) {
    console.error('Aksharamukha plugin: failed to convert new or changed text on the page', e)
  }
}

// replaceState, not pushState: each pick used to add a Back-button entry,
// and Back then changed the address without changing the page.
function updateURL (target) {
  var url = new URL(window.location.href)
  if (target === 'Original') url.searchParams.delete('akshrmkh')
  else url.searchParams.set('akshrmkh', target)
  window.history.replaceState(window.history.state, '', url.href)
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
  Content.observe(function (el) { queueForConversion(el, true) })
  Content.onTextChanged(function (el) { queueForConversion(el, false) })
  // A saved script converts right away - through the engine if its files
  // are saved from an earlier page view (starting it for that), otherwise
  // the API.
  if (restoredTarget) runConversion()
  // Once the page is idle: on a visitor's first page view, download the
  // engine files for later page views, without starting the engine (see
  // Engine.prepare). Readers who never convert then pay nothing on later
  // page views. A no-op with engine=api.
  var scheduleIdle = window.requestIdleCallback || function (fn) { setTimeout(fn, 1500) }
  scheduleIdle(function () { Engine.prepare() })
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init)
} else {
  init()
}

})();
