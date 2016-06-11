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
        styles: 'source/application.sass',

        // dist
        build: 'dist',

        // server
        port: 3000,
        root: 'dist'
    }
};
