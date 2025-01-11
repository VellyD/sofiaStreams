import { defineConfig } from 'eslint-define-config';

export default defineConfig({
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier',
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  rules: {
    'vue/component-tags-order': [
      'error',
      {
        order: ['script', 'template', 'style'],
      },
    ],
    'vue/first-attribute-linebreak': [
      'error',
      {
        singleline: 'ignore',
        multiline: 'below',
      },
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 2,
        multiline: {
          max: 1,
          allowFirstLine: false,
        },
      },
    ],
    'vue/attributes-order': [
      'error',
      {
        order: [
          'DEFINITION',
          'LIST_RENDERING',
          'CONDITIONALS',
          'RENDER_MODIFIERS',
          'GLOBAL',
          'UNIQUE',
          'TWO_WAY_BINDING',
          'OTHER_DIRECTIVES',
          'OTHER_ATTR',
          'EVENTS',
          'CONTENT',
        ],
        alphabetical: false,
      },
    ],
    'vue/padding-line-between-blocks': ['error', 'always'],
    'vue/script-setup-uses-vars': 'error',
    'vue/order-in-components': [
      'error',
      {
        order: [
          'props',
          'emits',
          'data',
          'watch',
          'computed',
          'mounted',
          'methods',
        ],
      },
    ],
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        'vue/multi-word-component-names': 0,
      },
    },
  ],
});
