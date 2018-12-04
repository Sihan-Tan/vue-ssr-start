<template>
    <div id="app">
        <p>
            <router-link to="/" exact>回到首页</router-link>
            <router-link to="/test">去 test</router-link>
            <router-link to="/about">去 about</router-link>
            <router-link to="/topics">去 topics</router-link>
        </p>
        <router-view></router-view>
    </div>
</template>