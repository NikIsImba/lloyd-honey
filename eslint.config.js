import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import typescriptEslintParser from '@typescript-eslint/parser';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
  {
    files: ['**/*.ts', '**/*.js', '**/*.jsx'],
    ignores: ['node_modules/**/*', 'dist/**/*', 'build/**/*', '.angular/**/*'],
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
      'prettier/prettier': 'error',
      'prefer-const': 'error',
      'no-console': 'warn',
      ...typescriptEslintPlugin.configs.recommended.rules,
      ...prettierPlugin.configs.recommended.rules
    }
  }
];
