import eslintPluginAstro from 'eslint-plugin-astro';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y';

export default [
  ...eslintPluginAstro.configs.recommended,
  ...eslintPluginPrettier.configs.recommended,
  ...eslintPluginJsxA11y.configs.recommended,
  {
    rules: {
      "prettier/prettier": "error"
    }
  }
];