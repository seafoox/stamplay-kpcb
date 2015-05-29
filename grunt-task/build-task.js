module.exports = function (grunt) {
	grunt.registerTask('build', [
		'uglify:requirejs',
		'concat:libs',
		'uglify:libs',
		'requirejs:build',
		'uglify:build'
	]);

	grunt.registerTask('build-img', [
		'imagemin:default',
	]);

}