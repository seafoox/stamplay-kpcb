module.exports = {
	options: {
		preserveComments: false
	},

	'build': {
		options: {
			sourceMap: true
		},
		files: {
			'js/main.min.js': ['js/main.js']
		}
	}
}