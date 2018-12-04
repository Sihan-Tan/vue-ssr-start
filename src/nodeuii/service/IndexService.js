/**
/**
 * @fileOverview 实现index的数据模型
 * @author yuanzhijia@yidengxuetang.com
 */
import {
    createBundleRenderer
} from 'vue-server-renderer';
import {
    join
} from 'path';
const fs = require('fs');
const LRU = require('lru-cache');
/**
 * IndexModel类，生成一段异步的数据
 * @class
 */
class IndexService {
    /**
     * @constructor
     * @param {string} app koa2的上下文环境
     */
    constructor(app) {
        this.app = app;
        this.metaDictionaries = {
            index: {
                title: 'mufeng',
                meta: `<meta name="keywords" content="简介" />`
            }
        }
    }

    createRender(serverBundle, template, clientManifest) {
        return createBundleRenderer(serverBundle, {
            cache: LRU({
                max: 10000
            }),
            runInNewContext: false,
            template,
            clientManifest
        })
    }
    
    async init(ctx) {
        const rootPath = join(__dirname, '..');
        const clientManifest = require(rootPath + '/assets/vue-ssr-client-manifest.json');
        const serverBundle = require(rootPath + '/assets/vue-ssr-server-bundle.json');
        const template = fs.readFileSync(rootPath + '/assets/index.html', 'utf-8');
        // const $ = cheerio.load(template);
        // $.title(this.)
        const context = {
            url: ctx.url
        }
        const ssrRenderer = this.createRender(serverBundle, template, clientManifest);
        // server-entry 路由+数据 =》 可渲染的流
        function createSSRStream() {
            return new Promise((resolve, reject) => {
                if(!ssrRenderer) {
                    return ctx.body = `waiting for complication. refresh in a moment`
                }
                const ssrStream = ssrRenderer.renderToStream(context);
                ctx.status = 200;
                ctx.type = 'html';
                ssrStream.on('error', err => reject(err)).pipe(ctx.res);
            })
        }
        return await createSSRStream();
    }

}
export default IndexService;