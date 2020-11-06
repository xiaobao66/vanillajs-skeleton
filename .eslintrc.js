module.exports = {
  root: true,

  parser: 'babel-eslint',

  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018,
  },

  globals: {
    __DEV__: true,
  },

  env: {
    browser: true,
    es6: true,
  },

  extends: ['airbnb/base', 'plugin:prettier/recommended'],

  plugins: ['prettier'],

  rules: {
    'prettier/prettier': 'error',
    'import/no-extraneous-dependencies': ['error', { packageDir: '.' }],
    'import/prefer-default-export': 'off',
    'import/no-dynamic-require': 'off',
    'import/no-unresolved': ['error', { ignore: ['\\?local$'] }],
    'no-console': [
      'error',
      {
        allow: ['warn', 'error', 'info'],
      },
    ],
    'no-unused-vars': 'warn',
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: false,
          object: false,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    'global-require': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
      },
    ],
  },

  settings: {
    // Allow absolute paths in imports, e.g. import Button from 'components/Button'
    // https://github.com/benmosher/eslint-plugin-import/tree/master/resolvers
    'import/resolver': {
      node: {
        extensions: ['.js', '.json'],
        moduleDirectory: ['node_modules', 'src'],
      },
    },
  },
};
