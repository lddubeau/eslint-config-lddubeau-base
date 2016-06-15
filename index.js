"use strict";
module.exports = {
  extends: [
    "airbnb",
  ],
  parserOptions: {
    sourceType: "script",
  },
  env: {
    amd: true,
    browser: true,
    node: false,
    commonjs: false,
  },
  rules: {
    quotes: [2, "double"],
    indent: ["error", 2, { SwitchCase: 0, VariableDeclarator: 1 }],
    "vars-on-top": "off",
    "no-param-reassign": "off",
    "no-multi-str": "off",
    strict: ["error", "safe"],
    "brace-style": ["error", "stroustrup"],
    "no-underscore-dangle": "off",
    "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    // This is here primarily to remove the ForInStatement that
    // airbnb imposes.
    "no-restricted-syntax": [
      2,
      "DebuggerStatement",
      // "ForInStatement",
      "LabeledStatement",
      "WithStatement",
    ],
  },
};
