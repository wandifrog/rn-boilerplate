const OFF = 0 // Turn the rule off
const WRN = 1 // Turn the rule on as a warning (doesn't affect exit code)
const ERR = 2 // Turn the rule on as an error (exit code will be 1)

module.exports = {
  root: true,
  env: {
    'es6': true
  },
  extends: [
    '@react-native-community',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended'
  ],
  plugins: [],
  reportUnusedDisableDirectives: true,
  rules: {
    '@typescript-eslint/explicit-function-return-type': OFF,
    '@typescript-eslint/explicit-module-boundary-types': OFF,
    '@typescript-eslint/member-delimiter-style': OFF,
    '@typescript-eslint/no-empty-function': OFF,
    'react-native/no-inline-styles': OFF,
    'array-element-newline': [ERR, 'consistent'],
    'arrow-parens': [ERR, 'always'],
    'comma-dangle': [ERR, 'never'],
    'comma-spacing': [ERR, { 'before': false, 'after': true }],
    'curly': [ERR, 'multi'],
    'eol-last': [WRN, 'always'],
    'eqeqeq': WRN,
    'indent': [ERR, 2, { 'SwitchCase': 1 }],
    'no-alert': OFF,
    'no-console': WRN,
    'no-multi-spaces': [ERR],
    'object-curly-spacing': [ERR, 'always'],
    'prettier/prettier': OFF,
    'quotes': [ERR, 'single'],
    'semi': [ERR, 'never']
  }
}
