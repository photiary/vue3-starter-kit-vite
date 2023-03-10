# vue3-starter-kit-vite

# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## ๐ฅก ์ฒดํฌ ๋ฆฌ์คํธ
- [ ] ์ฌ์ฉ ์๋ฒ, ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ฑ ํ๋ก์ ํธ ์ค๊ณ์ ๋ง๋ ๋ฒ์  ๊ตฌ์ฑ
- [ ] ํ์๊ด๋ฆฌ
- [ ] CI/CD ํ๊ฒฝ ๊ตฌ์ฑ ์ ํ
- [ ] ๊ฐ๋ฐ(๋ก์ปฌ, ์๋ฒ), ์ด์ ํ๊ฒฝ ๋ถ๋ฆฌ
  - [ ] ํ๊ฒฝ๋ณ์
  - [ ] Mock ํ์คํธ ํ๊ฒฝ
  - [ ] CORS
  - [ ] Log
  - [ ] devtool
- [ ] ๋๋ ํ ๋ฆฌ ๊ตฌ์กฐ
- [ ] ์ฝ๋ฉ ์ปจ๋ฒค์
- [ ] ๊ณตํต ์ฒ๋ฆฌ
  - [ ] HTTP Headers
  - [ ] API ํธ์ถ
  - [ ] API ์๋ฌ ํธ๋ค๋ฌ
  - [ ] ์๋ ฅ ๋ฐ์ดํฐ ๊ฒ์ฆ
  - [X] ๋ ์ง ์ฒ๋ฆฌ
  - [ ] ์ด๊ธฐ ์ํ, ์์ฒญ ์ค, ์๋ฃ, ์คํจ
  - [ ] ํ๋ฉด Layout
  - [ ] Dialog(๋ํ์์) modal
  - [X] ๋ฐ์ดํฐ ํ์ ์์
  - [ ] ๊ถํ ์ฒ๋ฆฌ
- [ ] ์ ์ญ ๋ฉ์์ง(์ฝ๋) ๊ด๋ฆฌ
  - [ ] Front-end
  - [ ] Back-end
- [ ] ์ ์ญ ์์(์ฝ๋) ๊ด๋ฆฌ
  - [ ] Front-end
  - [ ] Back-end
- [ ] ์น ์คํ ๋ฆฌ์ง(`sessionStorage` ๋๋ `localStorage`)
  - [ ] ๊ฐ์ธ์ ๋ณด ๋ฐ ์ ์ ํ ํฐ ์ ์ฅ

---

## ๐ ํ๋ก์ ํธ ๊ฐ๋ฐ ํ๊ฒฝ

- Node.js v18.14.0
- npm 9.3.0

## ๐ ํ๋ก์ ํธ ์์ฑ

- ์ฐธ์กฐ๋งํฌ: https://vitejs.dev/guide/
- Browser Compatibility ์ฐธ์กฐ๋งํฌ: https://vitejs.dev/guide/build.html

```shell
npm create vite@latest
```

- โ Project name: ... vue3-starter-kit-vite
- โ Select a framework: ยป Vue
- โ Select a variant: ยป JavaScript

```shell
# yarn install
npm install --global yarn
yarn --version

cd vue3-starter-kit-vite

yarn install
npm run dev

# Unresolved variable or type module ํด๊ฒฐํ๊ธฐ ์ํด ์ค์น
yarn add -D @types/node
```

## ๐ ์ฝ๋ฉ ์ปจ๋ฒค์ ๋๊ตฌ
- ์ฐธ์กฐ๋งํฌ: https://eslint.vuejs.org/user-guide/npm
- ์ฐธ์กฐ๋งํฌ: https://prettier.io/docs/en/install.html

```shell
yarn add -D eslint eslint-plugin-vue
yarn add -D --exact prettier
yarn add -D eslint-config-prettier
yarn add -D eslint-plugin-prettier
```

`.eslintrc.cjs` ํ์ผ ์์ฑ

```javascript
module.exports = {
  env: {
    browser: true,
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    sourceType: 'module'
  },
  plugins: [
    'vue',
    'prettier',
  ],
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'prettier',
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false,
        useTabs: false,
        tabWidth: 2,
        trailingComma: 'none',
        printWidth: 80,
        bracketSpacing: true,
        arrowParens: 'avoid',
        endOfLine: 'auto',
        bracketSameLine: true,
        singleAttributePerLine: true,
        htmlWhitespaceSensitivity: 'ignore',
      }
    ]
  }
}
```

## ๐ญ ์ถ๊ฐ ํจํค์ง
๊ฐ๋ฐ์ ํธ์๋ฅผ ๋๋ js ํจํค์ง๋ค์ ์ถ๊ฐํ๋ค

```shell
# Vue ์ํ ๊ด๋ฆฌ
yarn add pinia
# ์๋ ฅ ๋ฐ์ดํฐ ๊ฒ์ฆ
yarn add vee-validate
yarn add vue-router
yarn add axios
yarn add axios-mock-adapter

# URL querystring ํ์ฅ ํจํค์ง 
yarn add qs
# ๋ ์ง ํจํค์ง
yarn add dayjs
yarn add lodash
```

## ๐ฟ ๋๋ ํ ๋ฆฌ ๊ตฌ์กฐ


# ๊ฐ๋ฐ ๊ฐ์ด๋ ๋ผ์ธ

## Vue-router
- ์ฐธ์กฐ๋ฌธ์: https://router.vuejs.org/

## Pinia
- ์ฐธ์กฐ๋ฌธ์: https://pinia.vuejs.org/

## Vee-validate
- ์ฐธ์กฐ๋ฌธ์: https://vee-validate.logaretm.com/v4/

## ๋ฐ์ดํฐ ํ์ ์์
- `formatters.js` ๋ฅผ `import`ํ์ฌ ์ฌ์ฉ
- ์ฌ์์ ๋ง๊ฒ ํจ์๋ฅผ ์ถ๊ฐ

```vue
<script setup>
import { formatSimpleDate } from '@/plugins/formatters'
</script>

<template>
  <p>๋ ์ง: {{ formatSimpleDate(new Date()) }}</p>
</template>
```
