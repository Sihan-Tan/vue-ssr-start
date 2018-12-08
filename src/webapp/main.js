import Vue from "vue";
import App from "./App.vue";
import {
    createRouter
} from "./router";
import {
    createStore
} from './vuex/store.js';

// import 'fullpage.js/vendors/scrolloverflow';
// import VueFullPage from 'vue-fullpage.js';

if (typeof window !== 'undefined') {
    // require('velocity-animate')
    // require( 'hammerjs' )
    // require( 'ks-vue-fullpage/dist/ks-vue-fullpage.min.css' )
    // const KsVueFullpage = require( 'ks-vue-fullpage' )
    // Vue.use(KsVueFullpage);
}

Vue.config.productionTip = false;

export function createApp() {
    
    const router = createRouter();
    const store = createStore();
    const app = new Vue({
        // el: '#app',
        router,
        store,
        render: h => h(App)
    })
    return {
        app,
        router,
        store
    }
}