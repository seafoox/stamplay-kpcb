module.exports = {
	options: {
		preserveComments: false
	},

	'build': {
		options: {
			sourceMap: true
		},
		files: {
			'app/.min.js': ['app/.js']
		}
	}
}