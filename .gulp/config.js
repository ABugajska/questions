module.exports = {
    paths: {
        // libs
        vendor: 'bower_components',
        bowerfile: 'bower.json',

        // html
        templates: 'source/**/*.haml',
        index: 'source/index.haml',

        // js
        app: 'source/**/*.js',

        // styles
        style: 'source/application.sass',
        styles: 'source/**/*.scss',

        // dist
        build: 'dist',

        // server
        port: 3000,
        root: 'dist'
    }
};
