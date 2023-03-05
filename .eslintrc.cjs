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
