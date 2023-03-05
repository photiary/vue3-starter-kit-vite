# vue3-starter-kit-vite

# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## 🍕 프로젝트 개발 환경

- Node.js v18.14.0
- npm 9.3.0

## 🍔 프로젝트 생성

- 참조링크: https://vitejs.dev/guide/
- Browser Compatibility 참조링크: https://vitejs.dev/guide/build.html

```shell
npm create vite@latest
```

- √ Project name: ... vue3-starter-kit-vite
- √ Select a framework: » Vue
- √ Select a variant: » JavaScript

```shell
# yarn install
npm install --global yarn
yarn --version

cd vue3-starter-kit-vite

yarn install
npm run dev

# Unresolved variable or type module 해결하기 위해 설치
yarn add -D @types/node
```

## 🍟 코딩 컨벤션 도구
- 참고링크: https://eslint.vuejs.org/user-guide/npm
- 참조링크: https://prettier.io/docs/en/install.html

```shell
yarn add -D eslint eslint-plugin-vue
yarn add -D --exact prettier
yarn add -D eslint-config-prettier
yarn add -D eslint-plugin-prettier
```

`.eslintrc.cjs` 파일 생성

```javascript
module.exports = {
  env: {
    browser: true,
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
