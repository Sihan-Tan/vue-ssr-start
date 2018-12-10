<template>
  <div class="full">
    <no-ssr placeholder="loading..." placeholader-tag="span">
      <full-page :options="options" id="fullpage" ref="fullpage">
        <div class="section">
          <h3>vue-fullpage.js</h3>
        </div>
        <div class="section">
          <div class="slide">
            <h3>Slide 2.1</h3>
          </div>
          <div class="slide">
            <h3>Slide 2.2</h3>
          </div>
          <div class="slide">
            <h3>Slide 2.3</h3>
          </div>
        </div>
        <div class="section">
          <h3>Section 3</h3>
        </div>
      </full-page>
    </no-ssr>
  </div>
</template>

<script>
import NoSSR from "vue-no-ssr";
export default {
  data() {
    return {
      options: {
        navigation: true,
        anchors: ["page1", "page2", "page3"],
        sectionsColor: [
          "#41b883",
          "#ff5f45",
          "#0798ec",
          "#fec401",
          "#1bcee6",
          "#ee1a59",
          "#2c3e4f",
          "#ba5be9",
          "#b4b8ab"
        ]
      }
    };
  },
  components: {
    "no-ssr": NoSSR
  },
  methods: {
    afterLoad() {
      console.log("Emitted 'after load' event.");
    }
  },
  beforeMount() {
    // 只会在浏览器执行
    // this.$options.components.MyPage = () =>require('../components/fullpage.vue');
  },
  mounted() {
    // let vm = this;
    // this.$nextTick(
    //   (this.$options.components.fullPage = () => {
    //     require("fullpage.js/vendors/scrolloverflow");
    //     const FullPage = require("vue-fullpage.js");
    //   })
    // );
  }
};
</script>
<style scoped>
.full {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
