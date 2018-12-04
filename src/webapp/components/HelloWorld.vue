<template>
    <div>
        <h4>{{msg}}</h4>
        <div class="hello">
            <button class="hello__btn" @click="increment">加一</button>
            <button class="hello__btn" @click="decrement">减一</button>
            <h3> Count is {{ count }} </h3>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name: 'HelloWorld',
    methods: {
        test() {
            console.log('测试初始化成功');
        },
        ...mapActions(['increment', 'decrement'])
    },
    computed: {
        ...mapGetters({count: 'getCount'})
    },
    data() {
        return {
            msg: 'Hello World'
        }
    }
}
</script>
<style scoped>
.hello {
    border: 1px solid pink;
}
.hello__btn {
    background-color: aquamarine;
    color: violet;
}
</style>
