const argv = require('yargs-parser')(process.argv.slice(2));
const merge = require('webpack-merge');
const {
    resolve,
    join,
    basename
} = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

var _mode = argv.mode || 'development';
const _modeFlag = _mode === 'production';
if (argv.env == 'server') {
    _mode = 'server';
}
console.log('🍎', _mode);
const _mergeConfig = require(`./config/webpack.${_mode}.js`);

let webpackConfig = {
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.js$/,
            loader: 'babel-loader'
        }, {
            test: /\.css$/,
            use: [
                'vue-style-loader',
                'css-loader'
            ]
        }]
    },
    watch: !_modeFlag,
    watchOptions: {
        ignored: /node_modules/,
        aggregateTimeout: 300,
        poll: 1
    },
    output: {
        path: join(__dirname, './dist/assets'),
        publicPath: '/',
        filename: 'scripts/[name].bundle.js'
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    resolve: {
        modules: [
            resolve(__dirname, 'node_modules')
        ],
        extensions: ['.vue', '.js', '.css']
    },
    resolve: {
        //配置别名，在项目中可缩减引用路径
        alias: {
            vue$: 'vue/dist/vue.esm.js',
            '@': resolve('src/webapp/'),
            '_c': resolve('src/webapp/components'),
            'api': resolve('src/webapp/api'),
            'assets': resolve('src/webapp/assets')
        }
    }
}

module.exports = merge(webpackConfig, _mergeConfig);