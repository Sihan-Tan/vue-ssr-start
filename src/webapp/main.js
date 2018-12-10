import Vue from "vue";
import App from "./App.vue";
import { createRouter } from "./router";
import { createStore } from './vuex/store.js';
import { sync } from 'vuex-router-sync';

if(typeof window != 'undefined') {
    require( 'fullpage.js/vendors/scrolloverflow' )
    const VueFullPage = require( 'vue-fullpage.js' )
    Vue.use(VueFullPage);
}
Vue.config.productionTip = false;

export function createApp(ssrContext) {
    
    const router = createRouter();
    const store = createStore();

    // 同步路由状态到store中
    sync(store, router)

    const app = new Vue({
        // el: '#app',
        router,
        store,
        ssrContext,
        render: h => h(App)
    })
    return {
        app,
        router,
        store
    }
}