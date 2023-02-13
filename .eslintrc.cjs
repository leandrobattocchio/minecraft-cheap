module.exports = {
	env: {
		browser: true,
		es2021: true,
		'jest/globals': true,
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	extends: [
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'standard',
		'eslint-config-prettier',
	],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', 'jest'],
	rules: {
		'react/prop-types': ['off'],
		'react/no-unknown-property': [
			'error',
			{ ignore: ['intensity', 'attach', 'args', 'map'] },
		],
		'jest/no-disabled-tests': 'warn',
		'jest/no-focused-tests': 'error',
		'jest/no-identical-title': 'error',
		'jest/prefer-to-have-length': 'warn',
		'jest/valid-expect': 'error',
	},
}
