const OFF = 'off';
const ERROR = 'error';

module.exports = {
    root: true,
    env: {
        browser: true,
        es2023: true
    },
    settings: {
        react:{
            version: 'detect'
        }
    },
    overrides: [
        {
            files: ['*.js', '*.ts'],
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
            extends: [
                'eslint:recommended',
                './default-config.eslintrc.cjs',
                'plugin:prettier/recommended',
            ],
            env: {
                node: true,
                es6: true,
                browser: true,
            },
            plugins: [
                'eslint-plugin-import',
                'prettier',
                'eslint-plugin-no-cyrillic-string',
            ],
            rules: {
                'no-cyrillic-string/no-cyrillic-string': ERROR,
            },
        },
        {
            files: ['*.tsx', '*.ts'],
            env: {
                es6: true,
                browser: true,
            },
            extends: [
                'eslint:recommended',
                'plugin:react/recommended',
                'plugin:@typescript-eslint/eslint-recommended',
                'plugin:@typescript-eslint/recommended',
                './default-config.eslintrc.cjs',
                'plugin:prettier/recommended',
                'plugin:react-hooks/recommended',
            ],
            parser: '@typescript-eslint/parser',
            plugins: [
                'react',
                'react-hooks',
                '@typescript-eslint',
                'eslint-plugin-import',
                'eslint-plugin-no-cyrillic-string',
                'react-refresh',
            ],
            rules: {
                '@typescript-eslint/no-non-null-asserted-optional-chain': OFF,
                '@typescript-eslint/no-unused-vars': ERROR,
                '@typescript-eslint/no-explicit-any': [ERROR, {ignoreRestArgs: false, fixToUnknown: false}],
                '@typescript-eslint/ban-ts-ignore': OFF,
                '@typescript-eslint/naming-convention': [
                    ERROR,
                    {
                        selector: 'interface',
                        format: ['PascalCase'],
                        custom: {
                            regex: '^I[A-Z]',
                            match: true,
                        },
                    },
                ],
                '@typescript-eslint/no-namespace': [OFF],
                '@typescript-eslint/no-empty-interface': OFF,
                'react/prop-types': OFF,
                'react/display-name': OFF,
                'react/jsx-no-target-blank': OFF,
                'react/react-in-jsx-scope': OFF,
                'react-hooks/rules-of-hooks': ERROR,
                'react-hooks/exhaustive-deps': ERROR,
                'react/sort-comp': [
                    ERROR,
                    {
                        order: [
                            'static-variables',
                            'static-methods',
                            'instance-variables',
                            'getters',
                            'setters',
                            'lifecycle',
                            'rendering',
                            '/^handle.+$/',
                            '/^on.+$/',
                            'instance-methods',
                            'everything-else',
                        ],
                        groups: {
                            lifecycle: [
                                'displayName',
                                'propTypes',
                                'defaultProps',
                                'contextTypes',
                                'childContextTypes',
                                'mixins',
                                'statics',
                                'constructor',
                                'getDefaultProps',
                                'getInitialState',
                                'state',
                                'getChildContext',
                                'getDerivedStateFromProps',
                                'componentWillMount',
                                'UNSAFE_componentWillMount',
                                'componentDidMount',
                                'componentWillReceiveProps',
                                'UNSAFE_componentWillReceiveProps',
                                'shouldComponentUpdate',
                                'componentWillUpdate',
                                'UNSAFE_componentWillUpdate',
                                'getSnapshotBeforeUpdate',
                                'componentDidUpdate',
                                'componentDidCatch',
                                'componentWillUnmount',
                            ],
                            rendering: ['render', '/^render.+$/', '/^maybeRender.+$/'],
                        },
                    },
                ],
                'max-len': [
                    ERROR,
                    120,
                    4,
                    {
                        ignoreComments: true,
                        ignoreUrls: true,
                    },
                ],
                eqeqeq: [ERROR, 'always', {null: 'ignore'}],
                'no-console': ERROR,
                'no-implicit-coercion': ERROR,
                'no-else-return': ERROR,
                curly: [ERROR, 'all'],
                'id-match': [ERROR, '^[\\w$]+$'],
                'react/jsx-uses-react': 1,
                'react/jsx-uses-vars': 1,
                'no-cyrillic-string/no-cyrillic-string': ERROR,
                'prettier/prettier': ['error', {endOfLine: 'auto'}],
                'react-refresh/only-export-components': [
                    'warn',
                    {allowConstantExport: true},
                ],
            },
        },
        {
            files: ['**/i18n/**'],
            plugins: ['eslint-plugin-no-cyrillic-string'],
            rules: {
                'no-cyrillic-string/no-cyrillic-string': OFF,
            },
        },
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts', '**/tests/**'],
}
