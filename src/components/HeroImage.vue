<template>
  <div class="imageCore">
    <div ref="imageHero" class="imageContent">
      <img ref="heroImageCurrent" class="heroImage current" :src="currentImg" :alt="imageALT" />
      <img v-show="!!newImg" v-if="newImg" ref="heroImageNew" class="heroImage new" :src="newImg" :alt="imageALT" />
    </div>
  </div>
</template>

<script>
import {TimelineLite} from 'gsap'

/*
  First image is loaded normally
  If the imageURL prop changes, we want to set it on the hidden image
  and when it is loaded, start fading it in, while fading the other image out


  Fade old one out
  Assign a new image
  Wait for the onload event
  Fade in the image
*/

  export default {
    props: {
      imageURL: {
        type: Object,
        required: true
      },
      imageALT: {
        type: String,
        default: "This is a description"
      }
    },
    data() {
      return {
        currentImg: '',
        newImg: ''
      }
    },
    watch: {
      imageURL: {
        handler: 'attachImage',
        immediate: true
      }
    },
    mounted() {
      
    },
    methods: {
      getHeroImageEl() {
        return this.$refs.heroImageCurrent
      },
      addOnNewImageLoad() {
        const {heroImageNew, heroImageCurrent} = this.$refs
        heroImageNew.onload = () => {
          //console.log('new image loaded', this, heroImageNew, heroImageCurrent)    
          //console.log('animating current image')    
          setTimeout(() => {
            const speed = 0.25         
            const timeline = new TimelineLite()
            timeline.to(heroImageCurrent, speed, {opacity: 0})
            timeline.to(heroImageNew, speed, {opacity: 1, onComplete: () => {
                this.currentImg = this.newImg
                heroImageCurrent.style.opacity = 1
                heroImageNew.style.opacity = 0
              }
            }, '-=0.25')// originall -0.15
            
            /*this.animateImage(heroImageCurrent, {opacity: 0, onComplete: () => {
              //console.log('animating new image')             
              this.animateImage(heroImageNew, {opacity: 1, onComplete: () => {
                this.currentImg = this.newImg
                heroImageCurrent.style.opacity = 1
                heroImageNew.style.opacity = 0
              }}, 0.25) 
            }}, 0.25)*/
          }, 10)
        }
      },
      attachImage(src, oldSrc) {
        console.log('attach image updated', src, oldSrc, this.currentImg)

        if (!src?.options.source) return

        /* if (src?.options?.projectId && oldSrc?.options?.projectId && src?.options?.projectId === oldSrc?.options?.projectId) return*/
        if (this.currentImg?.options?.source?.asset?._ref === src?.options?.source?.asset?._ref) return


        if (!this.currentImg || !this.currentImg?.options?.source) {
          this.currentImg = src
          return
        }
        if (!this.newImg) {
          this.$nextTick(() => {
            this.addOnNewImageLoad()
          })
        }
        this.newImg = src

},
      setImageRadius(value, speed = 1) {
        const {imageHero} = this.$refs
        const timeline = new TimelineLite()
        timeline.to(imageHero, speed, {
          'border-radius': value
        })
      },
      animateImage(image, value, speed = 1.5) {
        const timeline = new TimelineLite()
        timeline.to(image, speed, value)
      },
      animateCurrentImage(value, speed = 1) {
        const {heroImageCurrent} = this.$refs   
        const timeline = new TimelineLite()    
        timeline.to(heroImageCurrent, speed, value)
      }
    }
  }
</script>

<style lang="scss" scoped>
.imageCore {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  width: 88vh;
  height: 100vh;
  
  @media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 667px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
    width: 90vh;
    height: 90vh;
  }
}

.imageContent {
  width: 100%;
  height: 90%;
  border-radius: 50%;
  overflow: hidden;
}

.heroImage {
    position: absolute;
    top: 5%;
    height: 90%;
    border-radius: 50%;
    &.new {
      opacity: 0;
    }
}

img {
  width: auto;
  height: 100%;
}

</style>