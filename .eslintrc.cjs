module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  ignorePatterns: ['node_modules/'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    singleQuote: true,
    'regexp/match': [
      'error',
      {
        // Match class names in JSX attributes
        pattern: '^[a-z]+(-[a-z]+)*$',
        flags: 'i',
      },
      "JSXAttribute[name.name='className']",
    ],
    'stylelint/declaration-property-value': [
      'margin',
      'padding',
      {
        ignoreProperties: ['font-size'], // You can add more properties to ignore
      },
    ],
    'promise/no-then': 'error',
    camelcase: 'error',
    'no-console': 'error',
  },
};
