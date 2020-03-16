const mix = require('laravel-mix');
require('laravel-mix-purgecss');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.postCss('resources/css/app.css', 'public/css', [
  require('postcss-import'),
  require('tailwindcss'),
  require('autoprefixer'),
  require("postcss-preset-env")({
    stage: 1,
    features: {
      'focus-within-pseudo-class': false
    }
  }),
]).browserSync({
  proxy: 'tailwindui.test',
  files: [
      './public/**/*.html'
  ]
});

if (mix.inProduction()) {
  mix.purgeCss({
    content: ["./public/**/*.html"],
    defaultExtractor: content => content.match(/[\w-/.:]+(?<!:)/g) || []
  });
}
