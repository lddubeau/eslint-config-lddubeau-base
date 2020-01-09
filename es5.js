"use strict";

module.exports = {
  extends: [
    "./index.js",
  ],
  parserOptions: {
    ecmaVersion: 5,
  },
  env: {
    es6: false,
  },
  rules: {
    // eslint is a bit stupid, because it turns on some rules that pertain only
    // to ES6 code even if we set ecmaVersion to 5 and even if es6 is false.
    "object-shorthand": "off",
    "prefer-arrow-callback": "off",
    "no-var": "off",
    "prefer-template": "off",
    "prefer-rest-params": "off",
    "prefer-spread": "off",
    "prefer-destructuring": "off",
    "prefer-arrow/prefer-arrow-functions": "off",
  },
};
