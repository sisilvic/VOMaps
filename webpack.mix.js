let mix = require('laravel-mix');

mix.js('src/app.js', 'dist').less('src/app.less', 'dist').setPublicPath('dist');