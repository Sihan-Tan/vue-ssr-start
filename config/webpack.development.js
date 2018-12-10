const path = require('path');
const rootPath = path.join(__dirname, '..');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
module.exports = {
    target: 'web',
    entry: [rootPath + '/src/webapp/entry-client.js'],
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
            'process.env.VUE_ENV': '"client"'
        }),
        new VueSSRClientPlugin()
    ]
}