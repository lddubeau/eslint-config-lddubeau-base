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
    "indent-legacy": ["error", 2, {
      SwitchCase: 0,
      VariableDeclarator: 1,
      ArrayExpression: "first",
      CallExpression: {
        arguments: "first",
      },
    }],
    "vars-on-top": "off",
    "no-param-reassign": "off",
    "no-multi-str": "off",
    strict: ["error", "safe"],
    "brace-style": ["error", "stroustrup"],
    "no-underscore-dangle": "off",
    "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    // In pre-ES5 code, parseInt would interpret 0-prefixed decimals as
    // octal. ES5 removed that. We do not target pre-ES5 environments, so
    // the "always" setting is too much.
    radix: ["error", "as-needed"],
    // This is here primarily to remove the ForInStatement that
    // airbnb imposes.
    "no-restricted-syntax": [
      2,
      "DebuggerStatement",
      // "ForInStatement",
      "LabeledStatement",
      "WithStatement",
    ],
    "no-plusplus": "off",
    "generator-star-spacing": ["error", { before: true, after: false }],
    //
    // Work around: https://github.com/airbnb/javascript/issues/978
    //
    "react/require-extension": "off",
    "function-paren-newline": "off",
    indent: "off", // It just does not play well with Emacs modes.
    "no-multi-assign": "off",
    "comma-dangle": ["error", {
      arrays: "always-multiline",
      objects: "always-multiline",
      imports: "always-multiline",
      exports: "always-multiline",
      functions: "never", // Does not play well with Emacs modes.
    }],
    // Override airbnb's bad defaults.
    "object-curly-newline": ["error", {
      ObjectExpression: { multiline: true, consistent: true },
      ObjectPattern: { multiline: true, consistent: true },
    }],
  },
};
