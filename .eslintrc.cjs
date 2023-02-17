module.exports = {
  root: true,
  plugins: ['react', 'eslint-comments', '@typescript-eslint', 'prettier'],
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@typescript-eslint/strict',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
    ecmaVersion: 'latest',
    sourceType: 'module',
    cacheLifetime: {
      glob: 'Infinity',
    },
  },
  ignorePatterns: ['vite-config.ts', 'tsconfig.json', 'temp.js', '**/vendor/*.js'],
  rules: {
    'prettier/prettier': 'error',

    'consistent-return': 0,
    // '@typescript-eslint/explicit-module-boundary-types': 'warn',
    'no-duplicate-imports': 0,
    '@typescript-eslint/non-nullable-type-assertion-style': 0,
    '@typescript-eslint/consistent-type-exports': ['warn', { fixMixedExportsWithInlineTypeSpecifier: true }],
    '@typescript-eslint/consistent-type-imports': ['warn', { prefer: 'type-imports' }],
    'import/prefer-default-export': 0,
    'import/newline-after-import': ['error', { count: 1 }],
    'import/order': [
      'error',
      {
        groups: [['builtin', 'external'], 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    'no-console': ['error', { allow: ['warn', 'error', 'debug'] }],

    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': [
      'error',
      {
        ignoreTypeValueShadow: true,
        ignoreFunctionTypeParameterNameValueShadow: true,
      },
    ],

    // 'react/jsx-no-bind': 'warn',
    'react/function-component-definition': 0,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'react/display-name': 0,
    // 'react/no-unused-prop-types': 0,
    'react/require-default-props': 0,
    'react/jsx-props-no-spreading': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/destructuring-assignment': 'error',

    camelcase: 'off',
    'require-await': 'off',
    '@typescript-eslint/require-await': 'error',
    // '@typescript-eslint/consistent-type-definitions': 0,
    '@typescript-eslint/no-floating-promises': ['warn', { ignoreVoid: true, ignoreIIFE: true }],
    'no-void': ['warn', { allowAsStatement: true }],
    '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: false }],

    // disallow duplicate eslint-disable comments
    'eslint-comments/no-duplicate-disable': 'error',
    // disallow eslint-disable comments without rule names
    'eslint-comments/no-unlimited-disable': 'error',
    // disallow unused eslint-disable comments
    'eslint-comments/no-unused-disable': 'error',
  },
  overrides: [
    {
      files: ['src/utils/**'], // Or *.test.js
      rules: {
        'import/no-default-export': 0,
        '@typescript-eslint/no-unnecessary-condition': 0,
      },
    },
  ],
}
