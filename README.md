# tensha.js

Transliteration library from foreign languages to Japanese. It supports currently Russian.

## Usage

This package is ESM only. Please use `import` instead of `require`.

```js
import { transliterate, transliterateRu } from "tensha";
transliterate("Алиса", "ru"); // "アリサ"

// or
transliterateRu("Антон"); // "アントン"
```

### Deno

```ts
// import library with type definitions using skypack
import { transliterate, transliterateRu } from "https://cdn.skypack.dev/tensha@0.1.0?dts";
```
