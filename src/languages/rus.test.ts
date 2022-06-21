import test from "ava";
import translit from "./rus.js";

test("basic transliteration", t => {
    t.is(translit("Полтава"), "ポルタヴァ");
});

test("devoicing of letter 'в'", t => {
    t.is(translit("Николаев"), "ニコラエフ");
    t.is(translit("Киев"), "キエフ");
    t.is(translit("Ижевск"), "イジェフスク");
    t.is(translit("Ивантеевка"), "イヴァンテエフカ");
    t.is(translit("Кадыровцы"), "カディロフツィ");
});

test("successive same consonants", t => {
    t.is(translit("Спасск-Дальний"), "スパッスク・ダリニー");
    t.is(translit("Анна"), "アンナ");
});

test("suffix '-ый'", t => {
    t.is(translit("Грозный"), "グロズヌイ");
});

test("consonant 'тс' and 'дс'", t => {
    t.is(translit("Бача́тский"), "バチャツキー");
    t.is(translit("Петрозаводск"), "ペトロザヴォツク");
})

test("'ий'", t => {
    t.is(translit("Ха́нты-Манси\u0301йск"), "ハンティ・マンシースク");
    t.is(translit("Достоевский"), "ドストエフスキー");
});

test("compound words", t => {
    t.is(translit("Кривой Рог"), "クリヴォイ・ログ");
    t.is(translit("Ростов-на-Дону"), "ロストフ・ナ・ドヌ");
});

test("invalid characters", t => {
    const e = t.throws(() => translit("d"));
    t.is(e?.message?.startsWith("Invalid character:"), true);
});

test("suffix '-град'", t => {
    t.is(translit("Ленинград"), "レニングラード");
    t.is(translit("Волгогра́д"), "ヴォルゴグラード");
});
