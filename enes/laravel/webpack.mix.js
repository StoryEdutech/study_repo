const mix = require('laravel-mix');

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

mix.autoload({
    // jquery: ['$', 'window.jQuery'],
    React: ['React','window.React'],
    ReactDOM: ['React','window.ReactDOM'],
});

mix.js('resources/js/app.js', 'public/js')
    .react().extract().version()
    .sass('resources/sass/app.scss', 'public/css').postCss('resources/css/app.css', 'public/css', [
        require('postcss-import'),
        require('tailwindcss'),
        require('autoprefixer'),
    ]);
