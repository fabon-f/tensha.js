import test from "node:test";
import assert from "node:assert";

import translit from "./rus.js";

test("basic transliteration", () => {
    assert.strictEqual(translit("Полтава"), "ポルタヴァ");
    assert.strictEqual(translit("Йошка́р-Ола́"), "ヨシカル・オラ");
});

test("devoicing of letter 'в'", () => {
    assert.strictEqual(translit("Николаев"), "ニコラエフ");
    assert.strictEqual(translit("Киев"), "キエフ");
    assert.strictEqual(translit("Ижевск"), "イジェフスク");
    assert.strictEqual(translit("Ивантеевка"), "イヴァンテエフカ");
    assert.strictEqual(translit("Кадыровцы"), "カディロフツィ");
});

test("successive same consonants", () => {
    assert.strictEqual(translit("Спасск-Дальний"), "スパッスク・ダリニー");
    assert.strictEqual(translit("Анна"), "アンナ");
});

test("suffix '-ый'", () => {
    assert.strictEqual(translit("Грозный"), "グロズヌイ");
});

test("consonant 'тс' and 'дс'", () => {
    assert.strictEqual(translit("Бача́тский"), "バチャツキー");
    assert.strictEqual(translit("Петрозаводск"), "ペトロザヴォツク");
})

test("consonant 'дз' and 'дж'", () => {
    assert.strictEqual(translit("Биробиджан"), "ビロビジャン");
    assert.strictEqual(translit("Геленджик"), "ゲレンジク");
    assert.strictEqual(translit("Орджоники́дзе", { reflectAccent: true }), "オルジョニキーゼ");
});

test("'ий'", () => {
    assert.strictEqual(translit("Ха́нты-Манси\u0301йск"), "ハンティ・マンシースク");
    assert.strictEqual(translit("Достоевский"), "ドストエフスキー");
});

test("compound words", () => {
    assert.strictEqual(translit("Кривой Рог"), "クリヴォイ・ログ");
    assert.strictEqual(translit("Ростов-на-Дону"), "ロストフ・ナ・ドヌ");
});

test("invalid characters", () => {
    assert.throws(() => translit("d"), /Invalid character/);
});

test("suffix '-град'", () => {
    assert.strictEqual(translit("Ленинград"), "レニングラード");
    assert.strictEqual(translit("Волгогра́д"), "ヴォルゴグラード");
});

test("'reflectAccent' option", () => {
    const opts = { reflectAccent: true };
    assert.strictEqual(translit("Ирку\u0301тск", opts), "イルクーツク");
    assert.strictEqual(translit("Орёл", opts), "オリョール");
    assert.strictEqual(translit("Братск", opts), "ブラーツク");
    assert.strictEqual(translit("Ленинград", opts), "レニングラード");
    assert.strictEqual(translit("Балти\u0301йск", opts), "バルチースク");

    // can't detect where the accent falls
    assert.strictEqual(translit("Новосибирск", opts), "ノヴォシビルスク");

    assert.strictEqual(translit("трёхме\u0301рный", opts), "トリョフメールヌイ");
    assert.strictEqual(translit("Сёгу\u0301н", opts), "ショグーン");
});
