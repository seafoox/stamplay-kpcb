module.exports = function (grunt) {
	grunt.registerTask('build', [
		'concat:js',
		'uglify:build',
		'cssmin:style'
	]);

	grunt.registerTask('build-img', [
		'imagemin:default',
	]);

}