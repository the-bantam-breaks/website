const DISABLED = 0;
const ENABLED = 'error';

module.exports = {
    'env': {
        'browser': true,
        'es6': true,
        'node': true
    },
    'extends': 'standard',
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },
    'plugins': [
        'react'
    ],
    'rules': {
        'no-tabs': ENABLED,
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        indent: [
            ENABLED, 4,
            {
                SwitchCase: 0,
                VariableDeclarator: 1,
                outerIIFEBody: 1,
                // MemberExpression: null,
                FunctionDeclaration: {
                    parameters: 1,
                    body: 1
                },
                FunctionExpression: {
                    parameters: 1,
                    body: 1
                },
                CallExpression: {
                    arguments: 1
                },
                ArrayExpression: 1,
                ObjectExpression: 1,
                ImportDeclaration: 1,
                flatTernaryExpressions: false,
                ignoredNodes: [
                    'JSXElement', 'JSXElement *',
                    'TemplateLiteral', 'TemplateLiteral *'
                ]
            }
        ],
        semi: DISABLED
    }
}
