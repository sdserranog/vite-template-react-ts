/* eslint-disable functional/no-expression-statements, functional/immutable-data */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'standard-with-typescript',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    project: './tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'sort-keys-fix', 'functional'],
  rules: {
    'functional/immutable-data': [
      'error',
      {
        assumeTypes: true,
        ignoreAccessorPattern: ['**.displayName', '**.current.*', '*.current'],
        ignoreImmediateMutation: true,
        ignorePattern: '^(displayName)$',
      },
    ],
    'sort-keys-fix/sort-keys-fix': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
