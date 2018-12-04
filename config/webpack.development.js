const path = require('path');
const rootPath = path.join(__dirname, '..');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
module.exports = {
    entry: [rootPath + '/src/webapp/entry-client.js'],
    plugins:[
        new VueSSRClientPlugin()
    ]
}