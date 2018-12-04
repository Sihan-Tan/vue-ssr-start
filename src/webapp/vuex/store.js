import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './action';
import * as getters from './getter';
import * as mutations from './mutations';

// 定义 初始化的 state
const defaultState = {
    count : 0,
    topics: []
}

// 判断当前的开发环境
const isBrowser = typeof window != 'undefined';

// if( !isBrowser || process.env.NODE_ENV == 'development') {
    Vue.use(Vuex);
// }

// ssr 一定要知道前段的异步请求， 后端先把异步的请求执行完
const state = (isBrowser && window.__INITIAL__STATE) || defaultState;

export function createStore() {
    const store = new Vuex.Store({
        state,
        actions,
        mutations,
        getters
    });
    return store;
}