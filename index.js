module.exports = {
	parserPreset: './parser-preset.js',
	rules: {
		'body-max-line-length': [2, 'always', 72],
		'body-leading-blank': [1, 'always'],

		'footer-max-line-length': [2, 'always', 72],
		'footer-leading-blank': [1, 'always'],

		'header-max-length': [2, 'always', 72],

		'scope-case': [2, 'always', 'lower-case'],

		'subject-case': [2, 'always', 'sentence-case'],
		'subject-max-length': [2, 'always', 50],
		'subject-full-stop': [2, 'never', '.'],
		'subject-empty': [2, 'never'],

		'type-case': [2, 'always', 'lower-case'],
		'type-empty': [2, 'never'],
		'type-enum': [
			2,
			'always',
			[
				'build',
				'chore',
				'ci',
				'docs',
				'feat',
				'fix',
				'perf',
				'refactor',
				'revert',
				'style',
				'test',
				'deps',
			]
		]
	}
};
