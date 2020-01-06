"use strict";

module.exports = {
  extends: [
    "./common.js",
  ],
  parserOptions: {
    sourceType: "script",
  },
  rules: {
    "strict": ["error", "safe"],
    "indent-legacy": ["error", 2, {
      SwitchCase: 0,
      VariableDeclarator: 1,
      ArrayExpression: "first",
      CallExpression: {
        arguments: "first",
      },
    }],
  },
};
