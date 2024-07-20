module.exports = {
    root    : true,
    parser  : '@typescript-eslint/parser',
    plugins : ['@typescript-eslint'],
    rules   : {
        '@typescript-eslint/no-explicit-any': 'off',
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
            },
        ],
    },
    env     : {
        node: true,
        browser: true,
        es6: true,
    },
    extends : [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
}
