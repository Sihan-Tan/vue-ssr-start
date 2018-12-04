const path = require('path');
const rootPath = path.join(__dirname, '..');
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');
module.exports = {
    entry: [rootPath + '/src/webapp/entry-server.js'],
    target: 'node',
    plugins:[
        new VueSSRServerPlugin()
    ],
    output: {
        libraryTarget: 'commonjs2'
    }
}