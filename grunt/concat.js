module.exports = {
	js: {
		src: [
              '<%= assets.bower %>/jquery/dist/jquery.js',
              '<%= assets.bower %>/foundation/js/foundation.min.js',
              '<%= assets.js %>/.js',
              '<%= assets.bower %>/stamplay-js-sdk/dist/stamplay.js'
             ],
		dest: '<%= assets.js %>/plugins.js'
	},
	'libs': {
		src: [
		  'app/components/foundation/js/foundation.js',
		  'app/components/fancybox/source/jquery.fancybox.pack.js',
			'app/assets/js/app.js',
			'app/components/blueimp-load-image/js/load-image.js',
			'app/components/blueimp-load-image/js/load-image-ios.js',
			'app/components/blueimp-load-image/js/load-image-orientation.js',
			'app/components/blueimp-load-image/js/load-image-meta.js',
			'app/components/blueimp-load-image/js/load-image-exif.js',
			'app/components/blueimp-load-image/js/load-image-exif-map.js',
		  "app/components/blueimp-canvas-to-blob/js/canvas-to-blob.min.js",
			'app/components/spinjs/spin.js',
			'app/assets/js/cookiechoices.js'
      ],
		dest: 'app/dist/libs.js'
	}
}