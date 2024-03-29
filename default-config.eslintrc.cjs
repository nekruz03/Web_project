const OFF = 'off';
const ERROR = 'error';
const WARN = 'warn';

module.exports = {
    rules: {
        'import/order': [ERROR, { groups: ['external', 'builtin', 'internal', 'sibling', 'parent', 'index'] }],
        'constructor-super': ERROR,
        'for-direction': ERROR,
        'getter-return': OFF,
        'no-case-declarations': OFF,
        'no-compare-neg-zero': ERROR,
        'no-cond-assign': [ERROR, 'always'],
        'no-console': ERROR,
        'no-const-assign': ERROR,
        'no-constant-condition': ERROR,
        'no-control-regex': ERROR,
        'no-debugger': ERROR,
        'no-delete-var': ERROR,
        'no-dupe-args': ERROR,
        'no-dupe-class-members': ERROR,
        'no-dupe-keys': ERROR,
        'no-duplicate-case': ERROR,
        'no-empty': [ERROR, { allowEmptyCatch: true }],
        'no-empty-character-class': ERROR,
        'no-empty-pattern': ERROR,
        'no-ex-assign': ERROR,
        'no-extra-boolean-cast': ERROR,
        'no-extra-semi': ERROR,
        'no-fallthrough': ERROR,
        'no-func-assign': ERROR,
        'no-global-assign': ERROR,
        'no-inner-declarations': ERROR,
        'no-invalid-regexp': ERROR,
        'no-irregular-whitespace': ERROR,
        'no-mixed-spaces-and-tabs': ERROR,
        'no-new-symbol': ERROR,
        'no-obj-calls': ERROR,
        'no-octal': ERROR,
        'no-redeclare': ERROR,
        'no-regex-spaces': ERROR,
        'no-self-assign': ERROR,
        'no-sparse-arrays': ERROR,
        'no-this-before-super': ERROR,
        'no-undef': ERROR,
        'no-unexpected-multiline': ERROR,
        'no-unreachable': ERROR,
        'no-unsafe-finally': ERROR,
        'no-unsafe-negation': ERROR,
        'no-unused-labels': ERROR,
        'no-unused-vars': [
            ERROR,
            {
                vars: 'local',
                args: 'after-used',
            },
        ],
        'no-useless-escape': OFF,
        'require-yield': ERROR,
        'use-isnan': ERROR,
        'valid-typeof': ERROR,
        'no-async-promise-executor': ERROR,
        'no-extra-parens': [ERROR, 'functions'],
        'no-misleading-character-class': ERROR,
        'no-prototype-builtins': OFF,
        'no-template-curly-in-string': ERROR,
        'require-atomic-updates': ERROR,
        'accessor-pairs': OFF,
        'array-callback-return': OFF,
        'block-scoped-var': ERROR,
        'class-methods-use-this': OFF,
        complexity: [WARN, 20],
        'consistent-return': OFF,
        'default-case': ERROR,
        'dot-location': [ERROR, 'property'],
        'dot-notation': [WARN, { allowKeywords: true }],
        eqeqeq: ERROR,
        'guard-for-in': ERROR,
        'max-classes-per-file': OFF,
        'no-alert': ERROR,
        'no-caller': ERROR,
        'no-div-regex': ERROR,
        'no-else-return': ERROR,
        'no-empty-function': OFF,
        'no-eq-null': ERROR,
        'no-eval': ERROR,
        'no-extend-native': ERROR,
        'no-extra-bind': ERROR,
        'no-extra-label': ERROR,
        'no-floating-decimal': ERROR,
        'no-implicit-coercion': ERROR,
        'no-implicit-globals': ERROR,
        'no-implied-eval': ERROR,
        'no-invalid-this': OFF,
        'no-iterator': ERROR,
        'no-labels': ERROR,
        'no-lone-blocks': ERROR,
        'no-loop-func': ERROR,
        'no-magic-numbers': OFF,
        'no-multi-spaces': [ERROR, { ignoreEOLComments: true }],
        'no-multi-str': ERROR,
        'no-new': ERROR,
        'no-new-func': ERROR,
        'no-new-wrappers': ERROR,
        'no-octal-escape': ERROR,
        'no-param-reassign': OFF,
        'no-proto': ERROR,
        'no-restricted-properties': ERROR,
        'no-return-assign': OFF,
        'no-return-await': ERROR,
        'no-script-url': ERROR,
        'no-self-compare': ERROR,
        'no-sequences': ERROR,
        'no-throw-literal': OFF,
        'no-unmodified-loop-condition': ERROR,
        'no-unused-expressions': OFF,
        'no-useless-call': ERROR,
        'no-useless-catch': ERROR,
        'no-useless-concat': OFF,
        'no-useless-return': OFF,
        'no-void': ERROR,
        'no-warning-comments': OFF,
        'no-with': ERROR,
        'prefer-named-capture-group': OFF,
        'prefer-promise-reject-errors': OFF,
        radix: ERROR,
        'require-await': ERROR,
        'require-unicode-regexp': OFF,
        'vars-on-top': ERROR,
        'wrap-iife': [ERROR, 'any'],
        yoda: ERROR,
        strict: OFF,
        'init-declarations': OFF,
        'no-label-var': ERROR,
        'no-restricted-globals': ERROR,
        'no-shadow-restricted-names': ERROR,
        'no-undef-init': ERROR,
        'no-undefined': OFF,
        'no-use-before-define': ERROR,
        'callback-return': OFF,
        'global-require': OFF,
        'handle-callback-err': OFF,
        'no-buffer-constructor': ERROR,
        'no-mixed-requires': ERROR,
        'no-new-require': ERROR,
        'no-path-concat': ERROR,
        'no-process-env': OFF,
        'no-process-exit': OFF,
        'no-sync': OFF,
        'array-bracket-newline': [WARN, 'consistent'],
        'array-element-newline': OFF,
        'block-spacing': WARN,
        'brace-style': [ERROR, '1tbs', { allowSingleLine: true }],
        camelcase: [
            ERROR,
            {
                properties: 'never',
                allow: ['UNSAFE_componentWillMount', 'UNSAFE_componentWillReceiveProps', 'UNSAFE_componentWillUpdate'],
            },
        ],
        'capitalized-comments': OFF,
        'comma-dangle': [
            ERROR,
            {
                arrays: 'never',
                objects: 'always',
                imports: 'never',
                exports: 'never',
                functions: 'never',
            },
        ],
        'comma-spacing': [
            ERROR,
            {
                before: false,
                after: true,
            },
        ],
        'comma-style': [ERROR, 'last'],
        'computed-property-spacing': [ERROR, 'never'],
        'consistent-this': [ERROR, '_this'],
        'eol-last': ERROR,
        'func-call-spacing': ERROR,
        'func-name-matching': OFF,
        'func-names': OFF,
        'func-style': OFF,
        'function-paren-newline': OFF,
        'id-blacklist': OFF,
        'id-length': OFF,
        'id-match': [ERROR, '^[\\w$]+$'],
        'implicit-arrow-linebreak': OFF,
        indent: [ERROR, 4, { SwitchCase: 1 }],
        'jsx-quotes': OFF,
        'key-spacing': [
            ERROR,
            {
                beforeColon: false,
                afterColon: true,
            },
        ],
        'keyword-spacing': ERROR,
        'line-comment-position': OFF,
        'linebreak-style': OFF,
        'lines-around-comment': OFF,
        'lines-between-class-members': OFF,
        'max-depth': [ERROR, { max: 5 }],
        'max-len': [
            ERROR,
            120,
            4,
            {
                ignoreComments: true,
                ignoreUrls: true,
            },
        ],
        'max-lines': OFF,
        'max-lines-per-function': OFF,
        'max-nested-callbacks': ERROR,
        'max-params': OFF,
        'max-statements': OFF,
        'max-statements-per-line': ERROR,
        'multiline-comment-style': OFF,
        'multiline-ternary': OFF,
        'new-cap': [ERROR, { newIsCap: true }],
        'new-parens': ERROR,
        'newline-per-chained-call': OFF,
        'no-array-constructor': ERROR,
        'no-bitwise': OFF,
        'no-continue': ERROR,
        'no-inline-comments': OFF,
        'no-lonely-if': OFF,
        'no-mixed-operators': OFF,
        'no-multi-assign': OFF,
        'no-multiple-empty-lines': [ERROR, { max: 1 }],
        'no-negated-condition': OFF,
        'no-nested-ternary': ERROR,
        'no-new-object': ERROR,
        'no-plusplus': OFF,
        'no-tabs': ERROR,
        'no-ternary': OFF,
        'no-trailing-spaces': ERROR,
        'no-underscore-dangle': OFF,
        'no-unneeded-ternary': [ERROR, { defaultAssignment: false }],
        'no-whitespace-before-property': ERROR,
        'nonblock-statement-body-position': ERROR,
        'object-curly-newline': OFF,
        'object-curly-spacing': [ERROR, 'always'],
        'object-property-newline': OFF,
        'one-var': [ERROR, 'never'],
        'one-var-declaration-per-line': OFF,
        'operator-assignment': [ERROR, 'always'],
        'operator-linebreak': [ERROR, 'after'],
        'padded-blocks': [
            ERROR,
            {
                blocks: 'never',
                classes: 'never',
                switches: 'never',
            },
            { allowSingleLineBlocks: true },
        ],
        'padding-line-between-statements': [
            ERROR,
            { blankLine: 'always', prev: 'var', next: '*' },
            { blankLine: 'always', prev: 'let', next: '*' },
            { blankLine: 'always', prev: 'const', next: '*' },
            { blankLine: 'any', prev: 'var', next: 'var' },
            { blankLine: 'any', prev: 'let', next: 'let' },
            { blankLine: 'any', prev: 'let', next: 'const' },
            { blankLine: 'any', prev: 'const', next: 'const' },
            { blankLine: 'any', prev: 'const', next: 'let' },
        ],
        'prefer-object-spread': OFF,
        'quote-props': [ERROR, 'as-needed', { keywords: false, unnecessary: true, numbers: false }],
        quotes: [ERROR, 'single', 'avoid-escape'],
        semi: [ERROR, 'always'],
        'semi-spacing': [
            ERROR,
            {
                before: false,
                after: true,
            },
        ],
        'semi-style': OFF,
        'sort-keys': OFF,
        'sort-vars': OFF,
        'space-before-blocks': ERROR,
        'space-in-parens': [ERROR, 'never'],
        'space-infix-ops': ERROR,
        'spaced-comment': [ERROR, 'always'],
        'switch-colon-spacing': WARN,
        'template-tag-spacing': ERROR,
        'unicode-bom': ERROR,
        'wrap-regex': OFF,
        'arrow-body-style': OFF,
        'arrow-parens': [ERROR, 'as-needed'],
        'arrow-spacing': ERROR,
        'generator-star-spacing': [
            ERROR,
            {
                before: true,
                after: false,
            },
        ],
        'no-confusing-arrow': OFF,
        'no-duplicate-imports': OFF,
        'no-useless-computed-key': OFF,
        'no-useless-constructor': OFF,
        'no-useless-rename': ERROR,
        'no-var': ERROR,
        'object-shorthand': ERROR,
        'prefer-arrow-callback': OFF,
        'prefer-const': ERROR,
        'prefer-destructuring': OFF,
        'prefer-numeric-literals': ERROR,
        'prefer-rest-params': OFF,
        'prefer-spread': ERROR,
        'prefer-template': OFF,
        'rest-spread-spacing': ERROR,
        'symbol-description': ERROR,
        'template-curly-spacing': OFF,
        'yield-star-spacing': ERROR,
        'array-bracket-spacing': [ERROR, 'always'],
    },
};  
