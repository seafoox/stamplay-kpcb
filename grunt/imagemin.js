module.exports = {
	'default': { // Target
		options: { // Target options
			optimizationLevel: 7,
			progressive: true
		},
		files: [{ // Dictionary of files
			expand: true, // Enable dynamic expansion
			cwd: 'images/', // Src matches are relative to this path
			src: ['slides/*.{png,jpg,gif}'], // Actual patterns to match
			dest: 'images/slidesOpt/' // Destination path prefix
		}]
	},
}