import { buildCharacterMap } from "../util.js";

const map = {
    "а": "ア", "я": "ヤ", "и": "イ", "ы": "ウィ", "у": "ウ", "ю": "ユ", "э": "エ", "е": "エ", "о": "オ", "ё": "ヨ",
    "ба": "バ", "бя": "ビャ", "би": "ビ", "бь": "ビ", "бы": "ブィ", "бу": "ブ", "бю": "ビュ", "бэ": "ベ", "бе": "ベ", "бо": "ボ", "бё": "ビョー", "б": "ブ",
    "ва": "ヴァ", "вя": "ヴャ", "ви": "ヴィ", "вь": "ヴィ", "вы": "ヴィ", "ву": "ヴ", "вю": "ヴュ", "вэ": "ヴェ", "ве": "ヴェ", "во": "ヴォ", "вё": "ヴョ", "в": "ヴ",
    "га": "ガ", "гя": "ギャ", "ги": "ギ", "гь": "ギ", "гы": "ギ", "гу": "グ", "гю": "ギュ", "гэ": "ゲ", "ге": "ゲ", "го": "ゴ", "гё": "ギョ", "г": "グ",
    "да": "ダ", "дя": "ジャ", "ди": "ディ", "дь": "ディ", "ды": "ディ", "ду": "ドゥ", "дю": "ジュ", "дэ": "デ", "де": "デ", "до": "ド", "дё": "ジョ", "д": "ド",
    "жа": "ジャ", "жя": "ジャ", "жи": "ジ", "жь": "ジ", "жы": "ジ", "жу": "ジュ", "жю": "ジュ", "жэ": "ジェ", "же": "ジェ", "жо": "ジョ", "жё": "ジョ", "ж": "ジ",
    "за": "ザ", "зя": "ジャ", "зи": "ジ", "зь": "ジ", "зы": "ズィ", "зу": "ズ", "зю": "ジュ", "зэ": "ゼ", "зе": "ゼ", "зо": "ゾ", "зё": "ジョ", "з": "ズ",
    "ка": "カ", "кя": "キャ", "ки": "キ", "кь": "キ", "кы": "キ", "ку": "ク", "кю": "キュ", "кэ": "ケ", "ке": "ケ", "ко": "コ", "кё": "キョ", "к": "ク",
    "ла": "ラ", "ля": "リャ", "ли": "リ", "ль": "リ", "лы": "ルィ", "лу": "ル", "лю": "リュ", "лэ": "レ", "ле": "レ", "ло": "ロ", "лё": "リョ", "л": "ル",
    "ма": "マ", "мя": "ミャ", "ми": "ミ", "мь": "ミ", "мы": "ムィ", "му": "ム", "мю": "ミュ", "мэ": "メ", "ме": "メ", "мо": "モ", "мё": "ミョ", "м": "ム",
    "на": "ナ", "ня": "ニャ", "ни": "ニ", "нь": "ニ", "ны": "ヌィ", "ну": "ヌ", "ню": "ニュ", "нэ": "ネ", "не": "ネ", "но": "ノ", "нё": "ニョ", "н": "ン",
    "па": "パ", "пя": "ピャ", "пи": "ピ", "пь": "ピ", "пы": "プィ", "пу": "プ", "пю": "ピュ", "пэ": "ペ", "пе": "ペ", "по": "ポ", "пё": "ピョ", "п": "プ",
    "ра": "ラ", "ря": "リャ", "ри": "リ", "рь": "リ", "ры": "ルィ", "ру": "ル", "рю": "リュ", "рэ": "レ", "ре": "レ", "ро": "ロ", "рё": "リョ", "р": "ル",
    "са": "サ", "ся": "シャ", "си": "シ", "сь": "シ", "сы": "スィ", "су": "ス", "сю": "シュ", "сэ": "セ", "се": "セ", "со": "ソ", "сё": "ショ", "с": "ス",
    "та": "タ", "тя": "チャ", "ти": "チ", "ть": "チ", "ты": "ティ", "ту": "トゥ", "тю": "チュ", "тэ": "テ", "те": "テ", "то": "ト", "тё": "チョ", "т": "ト",
    "фа": "ファ", "фя": "フャ", "фи": "フィ", "фь": "フィ", "фы": "フィ", "фу": "フ", "фю": "フュ", "фэ": "フェ", "фе": "フェ", "фо": "フォ", "фё": "フョ", "ф": "フ",
    "ха": "ハ", "хя": "ヒャ", "хи": "ヒ", "хь": "ヒ", "хы": "ヒ", "ху": "フ", "хю": "ヒュ", "хэ": "ヘ", "хе": "ヘ", "хо": "ホ", "хё": "ヒョ", "х": "フ",
    "ца": "ツァ", "ця": "ツャ", "ци": "ツィ", "ць": "ツィ", "цы": "ツィ", "цу": "ツ", "цю": "ツュ", "цэ": "ツェ", "це": "ツェ", "цо": "ツォ", "цё": "ツョ", "ц": "ツ",
    "ча": "チャ", "чя": "チャ", "чи": "チ", "чь": "チ", "чы": "チ", "чу": "チュ", "чю": "チュ", "чэ": "チェ", "че": "チェ", "чо": "チョ", "чё": "チョ", "ч": "チ",
    "ша": "シャ", "шя": "シャ", "ши": "シ", "шь": "シ", "шы": "シ", "шу": "シュ", "шю": "シュ", "шэ": "シェ", "ше": "シェ", "шо": "ショ", "шё": "ショ", "ш": "シ",
    "ща": "シチャ", "щя": "シチャ", "щи": "シチ", "щь": "シチ", "щы": "シチ", "щу": "シチュ", "щю": "シチュ", "щэ": "シチェ", "ще": "シチェ", "що": "シチョ", "щё": "シチョ", "щ": "シチ",
    "й": "イ", "ъ": "", "ь": "",

    "бый": "ブイ", "вый": "ヴイ", "дый": "ドゥイ", "зый": "ズイ", "лый": "ルイ", "мый": "ムイ", "ный": "ヌイ", "пый": "プイ", "рый": "ルイ", "сый": "スイ", "тый": "トゥイ"
} as { [key: string]: string };

function convertWord(str: string) {
    if (/гра\u0301?д/.test(str)) {
        const prefix = str.replace(/гра\u0301?д$/, "");
        if (!prefix.includes("\u0301")) {
            return transliterateCharacters(prefix) + "グラード";
        }
    }

    return transliterateCharacters(str);
}

function transliterateCharacters(str: string) {
    let out = "";
    for (let i = 0; i < str.length; ) {
        if (str[i] === "\u0301") {
            i++;
            continue;
        }
        if (i + 3 === str.length && str.substring(i + 1, i + 3) === "ый" && map[str.substring(i, i + 3)]) {
            out += map[str.substring(i, i + 3)];
            i += 3;
            continue;
        }
        if (i !== str.length - 1 && map[str.substring(i, i + 2)]) {
            out += map[str.substring(i, i + 2)];
            i += 2;
            continue;
        }
        if ((str.substring(i, i + 2) === "тс" || str.substring(i, i + 2) === "дс") && str[i + 2] === "к") {
            out += "ツ";
            i += 2;
            continue;
        }

        if (str[i] === str[i + 1] && !"аеёиоуыэюянм".includes(str[i])) {
            out += "ッ";
            i++;
            continue;
        }

        if (str[i] === "й" && (str[i - 1] === "и" || str.substring(i - 2, i) === "и\u0301") && (i + 1 === str.length || str[i + 1] === "с")) {
            if (!out.endsWith("ー")) {
                out += "ー";
            }
            i++;
            continue;
        }

        if (!map[str[i]]) { throw new Error(); }
        if (str[i] === "в" && ("ксц".includes(str[i + 1]) || i + 1 === str.length)) {
            out += "フ";
            i++;
            continue;
        }
        out += map[str[i]];
        i++;
    }

    return out;
}

export default function transliterateRussian(str: string) {
    const reform1918 = buildCharacterMap("ѢѣѲѳІі", "ЕеФфИи");
    const largeToSmall = buildCharacterMap("АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ", "абвгдеёжзийклмнопрстуфхцчшщъыьэюя");
    str = str.replace(/[ѢѣѲѳІі]/g, s => reform1918[s]).replace(/[АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ]/g, s => largeToSmall[s]);

    const invalidCharMatch = str.match(/[^абвгдеёжзийклмнопрстуфхцчшщъыьэюя\- \u{0301}]/u);
    if (invalidCharMatch) { throw new Error(`Invalid character: ${invalidCharMatch[0]}`); }

    return str.split(/[- ]/).map(convertWord).join("・");
}
