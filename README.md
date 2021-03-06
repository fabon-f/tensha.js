# tensha.js ![main workflow](https://github.com/fabon-f/tensha.js/actions/workflows/main.yml/badge.svg)

Transliteration library from foreign languages to Japanese. It supports currently Russian.

## Installation

```
npm install tensha
```

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
import { transliterate, transliterateRu } from "https://cdn.skypack.dev/tensha@0.1.1?dts";
// or ESM
import { transliterate, transliterateRu } from "https://esm.sh/tensha@0.1.1";
```
