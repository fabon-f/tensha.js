export function buildCharacterMap(beforeChars: string, afterChars: string) {
    const chars1 = Array.from(beforeChars);
    const chars2 = Array.from(afterChars);
    if (chars1.length !== chars2.length) { throw new Error("Character size mismatch"); }

    const map: { [key: string]: string } = {};
    for (let i = 0; i < chars1.length; i++) {
        const c1 = chars1[i];
        const c2 = chars2[i];
        if (c1 === undefined || c2 === undefined) {
            throw new Error();
        }
        map[c1] = c2;
    }
    return map;
}
