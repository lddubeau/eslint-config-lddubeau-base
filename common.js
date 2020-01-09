"use strict";

// These are the rules that pertain to any language that eslint supports (JS and
// TS).

module.exports = {
  extends: [
    "airbnb",
  ],
  plugins: [
    "prefer-arrow",
  ],
  reportUnusedDisableDirectives: true,
  rules: {
    "quotes": ["error", "double", {
      allowTemplateLiterals: true,
    }],
    "vars-on-top": "off",
    "no-param-reassign": "off",
    "no-multi-str": "off",
    "brace-style": ["error", "stroustrup"],
    "no-underscore-dangle": "off",
    "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    // In pre-ES5 code, parseInt would interpret 0-prefixed decimals as
    // octal. ES5 removed that. We do not target pre-ES5 environments, so it
    // would be tempting to have as-needed here. However, there are still cases
    // where we can shoot ourselves in the foot if we leave it unspecified.
    "radix": ["error", "always"],
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
    "indent": "off", // It just does not play well with Emacs modes.
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
    // Override airbnb's bad default.
    "operator-linebreak": ["error", "after"],
    // We never use default exports.
    "import/prefer-default-export": "off",
    "import/no-default-export": ["error"],
    "no-console": "error",
    "max-classes-per-file": "off", // Sigh... another stupid rule.
    "arrow-body-style": "error",
    "arrow-parens": [
      "error",
      "as-needed",
    ],
    "camelcase": "error",
    "constructor-super": "error",
    "curly": "error",
    "dot-notation": "error",
    "eol-last": "error",
    "eqeqeq": [
      "error",
      "smart",
    ],
    "guard-for-in": "error",
    "id-match": "error",
    "import/order": "error",
    "max-len": [
      "error",
      {
        code: 80,
        // These directives can get quite long. Ignore them.
        ignorePattern: "//\\s*eslint-disable-next-line\\b",
      },
    ],
    "new-parens": "error",
    "no-bitwise": "error",
    "no-caller": "error",
    "no-cond-assign": "error",
    "no-constant-condition": "error",
    "no-control-regex": "error",
    "no-debugger": "error",
    "no-empty": "error",
    "no-eval": "error",
    "no-extra-semi": "error",
    "no-fallthrough": "error",
    "no-invalid-regexp": "error",
    "no-invalid-this": "error",
    "no-mixed-operators": [
        "error",
        {
          groups: [
            ["+", "-", "*", "/", "%", "**"],
            ["&", "|", "^", "~", "<<", ">>", ">>>"],
            ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
            ["&&", "||"],
            ["in", "instanceof"],
          ],
          allowSamePrecedence: true,
        },
    ],
    "no-multiple-empty-lines": "error",
    "no-new-wrappers": "error",
    "no-octal": "error",
    "no-octal-escape": "error",
    "no-regex-spaces": "error",
    "no-shadow": [
      "error",
      {
        hoist: "all",
        builtinGlobals: true,
      },
    ],
    "no-throw-literal": "error",
    "no-trailing-spaces": "error",
    "no-undef-init": "error",
    "no-unsafe-finally": "error",
    "no-unused-expressions": "error",
    "no-unused-labels": "error",
    "no-var": "error",
    "object-shorthand": "error",
    "one-var": [
      "error",
      "never",
    ],
    "prefer-arrow/prefer-arrow-functions": ["error", {
      singleReturnOnly: true,
    }],
    "prefer-const": "error",
    "quote-props": [
      "error",
      "consistent-as-needed",
    ],
    "space-before-function-paren": [
      "error",
      {
        anonymous: "never",
        asyncArrow: "always",
        named: "never",
      },
    ],
    "spaced-comment": "error",
    "use-isnan": "error",
    "valid-typeof": "off",
    "lines-between-class-members": "off",
  },
};
