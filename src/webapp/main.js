import Vue from "vue";
import App from "./App.vue";
import {
    createRouter
} from "./router";
import { createStore} from './vuex/store.js';

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