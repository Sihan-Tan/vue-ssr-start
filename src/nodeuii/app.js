import Koa from "koa";
import config from "./config"
import errorHandler from './middleware/errorHandler.js';
import { createContainer, Lifetime } from "awilix";
import { loadControllers, scopePerRequest } from "awilix-koa";
import serve from "koa-static";
import render from "koa-swig";
import co from 'co';
import logger from './logger';
// import { createBundleRenderer } from 'vue-server-renderer';
// import { join } from 'path';
// import fs from 'fs';
// import LRU from 'lru-cache';

const app = new Koa();
//创建IOC容器
const container = createContainer();
// ssr 相关资源
// const rootPath = join(__dirname, '.');
// const clientManifest = require(rootPath + '/assets/vue-ssr-client-manifest.json');
// const serverBundle = require(rootPath + '/assets/vue-ssr-server-bundle.json');
// const template = fs.readFileSync(rootPath + '/assets/index.html', 'utf-8');
// 创建 ssr 资源
// const ssrRenderer =  createBundleRenderer(serverBundle, {
//     cache: LRU({
//         max: 10000
//     }),
//     runInNewContext: false,
//     template,
//     clientManifest
// })
//每一次请求
// app.use(async function(ctx, next) {
//     const context = {
//         url: ctx.req.url
//     }
//     if (/\.\w+$/.test(context.url)) {
//         return await next()
//     }
//     const ssrRenderer =  createBundleRenderer(serverBundle, {
//         cache: LRU({
//             max: 10000
//         }),
//         runInNewContext: false,
//         template,
//         clientManifest
//     })
//     // server-entry 路由+数据 => 可渲染的流
//     return new Promise((resolve, reject) => {
//         if(!ssrRenderer) {
//             return ctx.body = `waiting for complication. refresh in a moment`
//         }
//         const ssrStream = ssrRenderer.renderToStream(context);
//         ctx.status = 200;
//         ctx.type = 'text/html; charset=utf-8';
//         ssrStream.on('error',err => {
//             console.log(err);
//             if(err.status == 404) {
//                 ctx.body = '404'
//             }
//         }).pipe(ctx.res);
//     })  
// })
app.use(scopePerRequest(container));

//装载所有的Service到容器里去
container.loadModules([__dirname + '/service/*.js'], {
    formatName: "camelCase",
    resolverOptions: {
        lifetime: Lifetime.SCOPED
    }
});
app.context.render = co.wrap(render({
    root: config.viewDir,
    autoescape: true,
    cache: 'memory', // disable, set to false
    ext: 'html',
    writeBody: false
}));
errorHandler.error(app, logger);
//自动化装载路由
app.use(loadControllers(__dirname+"/controller/*.js"));
app.use(serve(config.staticDir));
app.listen(config.port, () => {
    console.log(`ysSystem listening on ${config.port}`)
});