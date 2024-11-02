import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import typescriptEslintParser from '@typescript-eslint/parser';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
  {
    files: ['**/*.ts', '**/*.js', '**/*.jsx'],
    languageOptions: {
      parser: typescriptEslintParser,
      ecmaVersion: 2020,
      sourceType: 'module'
    },
    plugins: {
      '@typescript-eslint': typescriptEslintPlugin,
      prettier: prettierPlugin
    },
    rules: {
      'prefer-const': 'error',
      ...typescriptEslintPlugin.configs.recommended.rules,
      ...prettierPlugin.configs.recommended.rules
    }
  }
];
