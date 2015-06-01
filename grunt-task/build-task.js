module.exports = function (grunt) {
	grunt.registerTask('build', [
		'concat:js',
		'uglify:build',
		'concat:css',
		'cssmin:css'
	]);

	grunt.registerTask('build-img', [
		'imagemin:default',
	]);

}