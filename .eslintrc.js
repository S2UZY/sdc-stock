module.exports = {
  extends: [
    'prettier',
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:json/recommended',
    'plugin:react/recommended',
  ],
  ignorePatterns: ['dist'],
  overrides: [
    {
      files: ['*.ts', '*[^.spec|^.test].ts'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'error',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', '@typescript-eslint', 'unused-imports', 'sort-keys-fix', 'react'],
  root: true,
  rules: {
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/no-explicit-any': 2,
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-var-requires': 0,
    camelcase: ['error'],
    'class-methods-use-this': 0,
    'global-require': 0,
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-import-module-exports': 0,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'max-classes-per-file': 0,
    'no-alert': 0,
    'no-console': 0,
    'no-continue': 0,
    'no-empty-pattern': 0,
    'no-await-in-loop': 0,
    'no-nested-ternary': 0,
    'no-new': 0,
    'no-param-reassign': 0,
    'no-plusplus': 0,
    'no-restricted-globals': 0,
    'no-restricted-syntax': 0,
    'no-shadow': 0,
    'no-underscore-dangle': 0,
    'no-use-before-define': 0,
    'no-useless-constructor': 0,
    'prefer-default-export': 0,
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        orderedImports: true,
        parser: 'typescript',
        printWidth: 120,
        semi: true,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'all',
        useTabs: false,
      },
    ],
    'react-hooks/exhaustive-deps': [
      'error',
      {
        additionalHooks:
          '(useRecoilCallback|useRecoilTransaction_UNSTABLE|useSpring|useSprings|useTrail|useisomorphiclayouteffect)',
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react/button-has-type': 0,
    'react/function-component-definition': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-no-useless-fragment': 0,
    'react/jsx-props-no-spreading': 0,
    'react/no-arrow-function-lifecycle': 0,
    'react/no-danger': 0,
    'react/no-unescaped-entities': 0,
    'react/no-unknown-property': 0,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'react/require-default-props': 0,
    'sort-keys-fix/sort-keys-fix': 'warn',
    'spaced-comment': ['error', 'always', { markers: ['/'] }],
    'unused-imports/no-unused-imports-ts': 'error',
    'unused-imports/no-unused-vars-ts': [
      'warn',
      {
        args: 'after-used',
        argsIgnorePattern: '^_',
        vars: 'all',
        varsIgnorePattern: '^_',
      },
    ],
  },
};
