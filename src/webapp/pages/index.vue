<template>
  <div class="full">
    <ksvuefp 
      :options="options"
      :sections="sections"> 
      <ksvuefp-section
        v-for="(s,index) in sections"
        :section="s"
        :key="s.id"
        :section-index="index"
        :background-image="'url('+ s.img_url +')'"
        :background-color="'#123456'"
        class="whatever" >

        <h2> {{ s.any_data }} </h2>

      </ksvuefp-section>

    </ksvuefp>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sections: [
        {
          id: 1,
          any_data: "I'm section 1",
          img_url:
            'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2973361948,989603971&fm=26&gp=0.jpg'
        },
        {
          id: 2,
          any_data: "I'm section 2",
          img_url:
            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3307195760,3077679471&fm=26&gp=0.jpg'
        },
        {
          id: 3,
          any_data: "I'm section 3",
          img_url:
            'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2056352042,1750741603&fm=26&gp=0.jpg'
        },
        {
          id: 4,
          any_data: "I'm section 4",
          img_url:
            'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4022829865,3519379100&fm=26&gp=0.jpg'
        }
      ],
      options: {
        duration: 800,
        easing: [1, 0, 0, 1],
        loopBottom: true
      }
    }
  },
  methods: {
    afterLoad() {
      console.log("Emitted 'after load' event.")
    }
  },
  mounted() {
    setTimeout(
      this.$options.components.ksvuefp = () => {
      require('velocity-animate')
      require( 'hammerjs' )
      require( 'ks-vue-fullpage/dist/ks-vue-fullpage.min.css' )
      const KsVueFullpage = require( 'ks-vue-fullpage' )
    })
  }
}
</script>
<style scoped>
.full {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
