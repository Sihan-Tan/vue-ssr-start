const path = require('path');
const rootPath = path.join(__dirname, '..');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
module.exports = {
    output: {
        filename: 'scripts/[name].[hash:5].bundle.js'
    },
    entry: [rootPath + '/src/webapp/entry-client.js'],
    plugins:[
        new VueSSRClientPlugin()
    ]
}