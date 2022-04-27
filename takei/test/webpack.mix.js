const mix = require('laravel-mix');
require('laravel-mix-polyfill');


mix.autoload({
    jquery: ['$', 'window.jQuery'],
    // React: ['React','window.React'],
    // ReactDOM: ['ReactDOM','window.ReactDOM'],
});
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

// mix.js('resources/js/apps/Contact.js', 'public/js').react().version();
// mix.js('resources/js/apps/ContactForm.js', 'public/js').react().version();
// mix.js('resources/js/apps/ContactList.js', 'public/js').react().version();

mix.js('resources/js/apps', 'public/js/test.js').react().version();
mix.styles('resources/css/app.css', 'public/css/all.css').version();


