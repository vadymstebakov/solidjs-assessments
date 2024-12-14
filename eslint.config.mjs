import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import solid from 'eslint-plugin-solid/configs/typescript';

export default tseslint.config({
    ignores: ['**/dist/**', '**/tmp/**', '.prettierrc.mjs', 'eslint.config.mjs', 'postcss.config.cjs'],
    files: ['**/*.{js,ts,tsx,cjs,mjs}'],
    extends: [eslint.configs.recommended, tseslint.configs.recommended, eslintPluginPrettierRecommended, solid],
    languageOptions: {
        parserOptions: {
            projectService: true,
            ecmaVersion: 2020,
        },
    },
    rules: {
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                args: 'all',
                argsIgnorePattern: '^_',
                destructuredArrayIgnorePattern: '^_',
                varsIgnorePattern: '^_',
            },
        ],
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        'arrow-body-style': ['error', 'always'],
        'no-nested-ternary': ['error'],
        eqeqeq: ['error', 'always'],
        'no-alert': ['error'],
        'no-unneeded-ternary': ['error'],
        'require-await': ['error'],
        'no-tabs': ['error'],
        'max-len': [
            'error',
            {
                code: 120,
                ignoreUrls: true,
                ignoreRegExpLiterals: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
            },
        ],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'no-loop-func': ['error'],
        'comma-style': ['error', 'last'],
        'space-before-blocks': ['error', 'always'],
        'no-mixed-spaces-and-tabs': ['error'],
        'no-unused-vars': [
            'error',
            {
                args: 'all',
                argsIgnorePattern: '^_',
                destructuredArrayIgnorePattern: '^_',
                varsIgnorePattern: '^_',
            },
        ],
        'no-extra-semi': ['error'],
        'no-console': ['warn'],
        'no-debugger': ['error'],
        'block-spacing': ['error', 'always'],
        'max-nested-callbacks': [
            'error',
            {
                max: 7,
            },
        ],
        'no-trailing-spaces': ['error'],
        'semi-spacing': [
            'error',
            {
                before: false,
                after: true,
            },
        ],
        'no-var': ['error'],
        'no-multi-spaces': ['error'],
        'no-control-regex': ['off'],
    },
});
