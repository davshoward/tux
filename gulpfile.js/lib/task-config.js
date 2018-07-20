module.exports = {
	browserSync: {
		files: [],
		server: {
			baseDir: 'public',
			middleware: []
		},
		watchOptions: {
			debounceDelay: 2000
		}
	},

	scripts: {
		entry: {
			app: 'app.js'
		},
		ext: ['js']
	},

	styles: {
		autoprefixer: {
			browsers: ['> 1%', 'last 2 versions']
		},
		cssnano: {
			safe: true,
			autoprefixer: false
		},
		ext: ['sass', 'scss', 'css'],
		sass: {},
		stylelint: {}
	},

	html: {
		dataPath: 'data/data.json',
		nunjucksRender: {
			envOptions: {
				watch: false
			}
		},
		htmlmin: {
			collapseWhitespace: true
		},
		excludeFolders: ['layouts', 'components', 'macros', 'data'],
		ext: ['html', 'njk', 'json']
	},

	images: {
		ext: ['jpg', 'png', 'svg', 'gif', 'webp']
	},

	videos: {
		ext: ['mp4', 'webm']
	},

	fonts: {
		ext: ['woff2', 'woff', 'eot', 'ttf', 'svg']
	}
};
