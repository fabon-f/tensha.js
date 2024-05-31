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
