module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'prettier/@typescript-eslint',
    // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors.
    'plugin:prettier/recommended', // ** Make sure this is always the last configuration in the extends array. **
  ],
  plugins: ['react-hooks', 'formatjs', 'prefer-arrow'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: [
    'lib/',
    'node_modules/',
    'build/',
    '.dockerResources/',
    'dist/',
    'templates/',
  ],
  rules: {
    // This rule fires for js files and is a known "issue" with this rule
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        allowSingleExtends: true,
      },
    ],
    'react/prop-types': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/jsx-no-literals': ['error', { noStrings: true, ignoreProps: true }],
    'formatjs/enforce-description': 'error',
    'formatjs/enforce-default-message': 'error',
    'formatjs/enforce-placeholders': 'error',
    'formatjs/no-camel-case': 'error',
    'formatjs/no-emoji': 'error',
    'formatjs/no-multiple-whitespaces': 'error',
    'formatjs/no-multiple-plurals': 'error',
    'formatjs/no-offset': 'error',
    'no-restricted-imports': [
      'error',
      {
        patterns: ['@material-ui/core/*', '@material-ui/icons/*'],
      },
    ],
  },
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/interface-name-prefix': 0,
        'prefer-arrow/prefer-arrow-functions': [
          'error',
          {
            disallowPrototype: true,
            classPropertiesAllowed: false,
          },
        ],
      },
    },
    {
      files: ['*.test.tsx', '*.test.ts'],
      rules: {
        'react/jsx-no-literals': 0,
      },
    },
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 0,
      },
    },
  ],
}
