module.exports = {
  env: {
    browser: true,
    node: true,
    jquery: true,
  },
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'prettier',
  ],
  ignorePatterns: ['*.min.js'],
  rules: {
    '@typescript-eslint/no-explicit-any': ['off']
  }
};
