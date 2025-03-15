import js from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettierConfig from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';
import reactHooksPlugin from 'eslint-plugin-react-hooks';

export default [
  js.configs.recommended,
  prettierConfig,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      globals: {
        window: 'readonly',
        document: 'readonly',
      },
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      'react-hooks': reactHooksPlugin,
      import: importPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      'prettier/prettier': 'error',
      'import/order': [
        'error',
        {
          groups: [
            'builtin', // Built-in imports (come from NodeJS)
            'external', // External imports
            'internal', // Absolute imports
            ['sibling', 'parent'], // Relative imports
            'index', // Imports from the same folder
            'unknown',
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
          pathGroups: [
            {
              pattern: 'react',
              group: 'external',
              position: 'before',
            },
            {
              pattern: '@/**',
              group: 'internal',
            },
          ],
          pathGroupsExcludedImportTypes: ['react'],
        },
      ],
      'import/no-duplicates': 'error',
    },
  },
  {
    ignores: ['dist/**', 'node_modules/**'],
  },
];
