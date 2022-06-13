import * as languages from "./languages/index.js";

export function transliterate(str: string, lang: keyof typeof languages) {
    if (typeof languages[lang] !== "function") {
        throw new Error(`Unavailable language: ${lang}`);
    }
    return languages[lang](str);
}
