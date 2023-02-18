module.exports = {
  root: true,
  plugins: ['react', '@typescript-eslint', 'deprecation', 'eslint-comments', 'prettier'],
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
  ignorePatterns: ['./.husky/pre-commit'],
  rules: {
    'prettier/prettier': 'error',
    'deprecation/deprecation': 'error',
    'require-await': 'off',
    'consistent-return': 'off',
    'no-console': ['error', { allow: ['warn', 'error', 'debug'] }],
    'no-shadow': 'off',
    'no-duplicate-imports': 'off',
    'no-mixed-operators': 'error',
    eqeqeq: [
      'error',
      'always',
      {
        null: 'never',
      },
    ],
    camelcase: 'off',

    // '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/non-nullable-type-assertion-style': 'off',
    '@typescript-eslint/consistent-type-exports': ['error', { fixMixedExportsWithInlineTypeSpecifier: true }],
    '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports', disallowTypeAnnotations: true }],
    '@typescript-eslint/require-await': 'error',
    '@typescript-eslint/no-floating-promises': ['error', { ignoreVoid: true, ignoreIIFE: true }],
    'no-void': ['error', { allowAsStatement: true }],
    '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: false }],
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/prefer-nullish-coalescing': 'error',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/prefer-as-const': 'error',

    '@typescript-eslint/no-shadow': [
      'error',
      {
        ignoreTypeValueShadow: true,
        ignoreFunctionTypeParameterNameValueShadow: true,
      },
    ],
    '@typescript-eslint/no-empty-function': ['error', { allow: ['arrowFunctions'] }],

    'import/prefer-default-export': 'off',
    'import/newline-after-import': ['error', { count: 1 }],
    'import/order': [
      'error',
      {
        groups: [['builtin', 'external'], 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],

    // 'react/no-unused-prop-types': 'off',
    // 'react/jsx-no-bind': 'warn',
    'react/function-component-definition': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/destructuring-assignment': 'error',

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
        'import/no-default-export': 'off',
        '@typescript-eslint/no-unnecessary-condition': 'off',
      },
    },
  ],
}
