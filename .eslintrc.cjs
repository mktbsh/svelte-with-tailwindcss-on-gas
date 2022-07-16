module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:storybook/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
    extraFileExtensions: ['.svelte'],
  },
  plugins: ['svelte3', '@typescript-eslint'],
  ignorePatterns: ['.eslintrc.*', 'vite.config.*', 'svelte.config.*'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'error',
    // 型は明示的にtype-importする
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      {
        prefer: 'type-imports',
      },
    ],
    // export defaultを許容しない
    'import/no-default-export': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true, // devDependenciesのimportを許可
      },
    ],
    // enumの使用をエラーにする(ユニオン型を推奨)
    'no-restricted-syntax': [
      'error',
      {
        selector: 'TSEnumDeclaration',
        message: "Don't declare enums",
      },
    ],
  },
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3',
      rules: {
        'import/no-mutable-exports': 'off',
        'import/prefer-default-export': 'off',
        'import/first': 'off',
      },
    },
  ],
  settings: {
    'svelte3/ignore-styles': () => true,
    'svelte3/typescript': () => require('typescript'), // pass the TypeScript package to the Svelte plugin
    // OR
    // 'svelte3/typescript': true, // load TypeScript as peer dependency
  },
};
