![Tux](/logo.jpg)

A baseline toolkit to ease the building of static HTML sites or templated CMS builds. Using Webpack 4, Gulp, PostCSS, Nunjunks and BrowserSync.

## Features 💪 
* HTML - Build templates with Nunjucks 
* CSS - PostCSS with autoprefixing, nesting, custom media queries and more - "Use tomorrow’s CSS syntax, today"
* JS - Bundle and transpile ES6 JavaScript with Webpack and Babel
* Assets - Automatically optimise images, manage fonts and static assets
* Development - Live reload with BrowserSync and Webpack's HMR. 

## Getting started 📖
### Requirements
* Node.js
* npm

### Off you go
#### Clone
```bash
git clone https://github.com/davshoward/tux <my-project-name>
cd <my-project-name>
```

#### Install with npm
```bash
npm install
```

#### Start
```bash
npm start
```

#### Build
```bash
npm run build
```

#### Configure
Customise your own file paths within gulpfile.js/config.js

## Contributing
Welcome any improvements or suggestions :-)

## Changelog

### 1.2.1
* Added JS-free FOUC fix
* Minor CSS update
* Remove Aria role=document (from PR #1)

### 1.2.0
* Updated foundation css
* Introduce spacing rhythm and fluid headers
* Allow urls to not require .html
* Added css-to-JS breakpoint sync
* Updated dependencies - including adding postcss color-mod

### 1.1.1
* Added focus-visible usage for better baseline accessibility

### 1.1.0
* Fully migrate from SASS to PostCSS
* Updated dependencies

### 1.0.0
* Initial commit