module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'linebreak-style': 0,
    "indent": "off",
    "no-trailing-spaces": "off",
    "comma-dangle": "off"
  },
  parserOptions: {
    parser: 'babel-eslint',
  }
};
