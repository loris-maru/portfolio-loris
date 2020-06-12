<template>
  <div ref="coreProj" class="coreProj">

    <div ref="masterTitle" class="masterTitle">
      <h1>{{projectTitle}}</h1>
    </div>

  </div>
</template>

<script>
import {TimelineLite} from 'gsap'

  export default {
    data() {
      return {
        blurry: 0
      }
    },
    props: {
      projectTitle: {
        type: String,
        default: 'This is a title'
      },
      slug: {
        type: [Number, String],
        required: true
      },
      blurrEffect: {
        type: Number,
        default: 0
      }
    },
    computed: {
      projectSlug() {
        return `/project/${this.slug}`
      }
    },
    methods: {
      getContainerEl() {
        return this.$refs.coreProj
      },
      setTitleOpacity(opacity, speed = 1, config = {}) {
        console.log('set title opacity', speed)
        const {masterTitle} = this.$refs
        const timeline = new TimelineLite()
        timeline.to(masterTitle, speed, {
          opacity,
          ...config
        })
      }
    }
  }
</script>

<style lang="scss" scoped>

.coreProj {
  width: 50vw;
  height: 100vh;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}

.masterTitle {
  position: relative;
  @media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 667px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
    width: 62vw;
    ovverflow: hidden;
  }
}

h1 {
  position: relative;
  z-index: 800;
  font: {
    family: 'Oni';
    size: 9vw;
    variation-settings: 'wght' 900;
  }
  line-height: 1.1;
   // Mobile Media Query
  @media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 667px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
    font: {
      family: 'Oni';
      size: 14vw;
      variation-settings: 'wght' 900;
    }
    line-height: 1.2;
  }
}

</style>