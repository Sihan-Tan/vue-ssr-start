import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '../components/HelloWorld';
import Topics from '../components/Topics';
import Test from '../components/test/Test.vue';

Vue.use(Router);

export function createRouter() {
    const router = new Router({
        mode: 'history',
        routes: [
            {
                path: '/',
                name: 'HelloWorld',
                component: HelloWorld
            },
            {
                path: '/test',
                component: Test
            },
            {
                path: '/about',
                component: r => require(['../components/About'],r)
            },
            {
                path: '/topics',
                component: Topics
            }
        ]
    })
    return router;
}