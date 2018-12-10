import Vue from 'vue';
import Router from 'vue-router';
import Index from '../pages/index.vue';

Vue.use(Router);

export function createRouter() {
    
    const router = new Router({
        mode: 'history',
        routes: [
            {
                path: '/',
                name: 'index',
                component: Index
            }
        ]
    })
    return router;
}