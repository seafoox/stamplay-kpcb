module.exports = {
	'js': {
		src: [
			'./bower_components/jquery/dist/jquery.min.js',
			'./bower_components/materialize/dist/js/materialize.min.js',
			'./js/migrate.js',
			'./external_components/slick/slick.min.js',
			'./js/typehead.min.js',
			'./js/algolia.min.js',
			'./js/app.js'
    ],
		dest: 'js/main.js'
	},
	'css': {
		src: [
			'bower_components/materialize/dist/css/materialize.min.css',
			'external_components/slick/slick.css',
			'external_components/slick/slick-theme.css'
		],
		dest: 'css/all.css'
	}
}