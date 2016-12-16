var webpack = require('webpack');

module.exports = {
    entry: [
        'script!jquery/dist/jquery.min.js',
        'script!tether/dist/js/tether.min.js',
        'script!bootstrap/dist/js/bootstrap.min.js',
        './app/app.jsx'
    ],
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        })
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        alias: {
            Main: 'app/components/Main.jsx',
            HotelList: 'app/components/HotelList.jsx',
            Hotel: 'app/components/Hotel.jsx',
            FilterComponent: 'app/components/FilterComponent.jsx',
            SortComponent: 'app/components/SortComponent.jsx',
            GetHotelData: 'app/components/GetHotelData.jsx',
            reducers: 'app/reducers/reducers.jsx',
            actions: 'app/actions/actions.jsx',
            configureStore: 'app/store/configureStore.jsx'
        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015']
            },
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/
        }]
    }
};