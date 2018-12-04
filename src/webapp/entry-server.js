import {createApp} from './main';

// 1. 摘取每一个当前路由
// 2. components 异步的数据 组装成一个页面
export default context => {
    return new Promise((resolve, reject) => {
        const {app, router, store} = createApp();
        // 后台真实的路由
        // router 是前段的路由  context.url是后台的路由
        router.push(context.url);
        router.onReady(()=>{
            const matchComponents = router.getMatchedComponents();
            Promise.all(matchComponents.map(component=>{
                if(component.asyncData) {
                    return component.asyncData({store})
                }
            }))
            .then(()=>{
                context.state = store.state
                resolve(app);
            })
            .catch(reject)
        }, reject)
    })
}