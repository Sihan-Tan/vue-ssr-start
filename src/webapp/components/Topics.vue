<template>
    <div>
        <p v-for="(topic, index) in topics" :key="index">
            {{ topic.title }}
        </p>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
const fetchInitialData = ({store}) => {
    return store.dispatch('getTopics')
}
// asyncData 留占位过程 异步请求 告知ssr 先去占位
export default {
    name: 'Topics',
    computed: {
        ...mapGetters({
            topics: 'getTopics'
        })
    },
    mounted() {
        fetchInitialData({store:this.$store})
    },
    asyncData: fetchInitialData
}
</script>