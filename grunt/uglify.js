module.exports = {
	options: {
		preserveComments: false
	},

	'build': {
		options: {
			sourceMap: true
		},
		files: {
			'main.min.js': ['main.js']
		}
	}
}