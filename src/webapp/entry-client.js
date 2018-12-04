import {createApp} from './main';
const {router, app} = createApp();
router.onReady(()=>{
    app.$mount('#app');
})