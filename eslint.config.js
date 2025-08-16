import js from '@eslint/js'
import {globalIgnores} from 'eslint/config'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import storybook from 'eslint-plugin-storybook'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
    [
        globalIgnores(['dist']),
        {
            files: ['**/*.{ts,tsx}'],
            extends: [
                js.configs.recommended,
                tseslint.configs.recommended,
                reactHooks.configs['recommended-latest'],
                reactRefresh.configs.vite,
            ],
            languageOptions: {
                ecmaVersion: 2020,
                globals: globals.browser,
            },
            rules: {
                ...reactHooks.configs.recommended.rules,
                'react-refresh/only-export-components': [
                    'warn',
                    {allowConstantExport: true},
                ],
                'object-curly-spacing': ['error', 'never'],
                'array-bracket-spacing': ['error', 'never'],
                curly: ['error', 'all'],
                'brace-style': ['error', '1tbs', {allowSingleLine: false}],
            },
        },
    ],
    storybook.configs['flat/recommended'],
)
