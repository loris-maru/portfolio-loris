<template>
  <div class="core">

    <infoBar
      class="info"
      :projectNum="currentProjectIndex + 1"
      :projName="currentProject.name"
      :projField="currentProject.fieldName"
      :projYear="currentProject.year"
      ref="infoBar"
      />

    <HeroImage
      ref="projIMG"
      :imageURL="imageUrlFor(currentProject.heroImage)"
      :imageALT="currentProject.headline"
      class="imageHero"
      />

    <BottomCounter
      :projectNum="currentProjectIndex + 1"
      :totalProjects="projects.length"
      class="bottomCount"
      ref="bottomCounter"
      />

    <ButtonViewMore
      ref="buttonProject"
      class="buttonViewMore"
      @blurr="blurry += $event"
      @unblurr="blurry -= $event"
      @redirectToProject="redirectToProject"
      :slug="currentProjectSlug" />
    
    <full-page ref="fullpage" id="fullpage" :options="options" class="sliderProj">
      
      <div class="section">
        <div v-for="(proj, projIndex) in projects" :key="projIndex" class="slide">
          <HeadlineProj 
          ref="project" 
          :projectTitle="currentProject.headline" 
          :slug="currentProjectSlug"
          class="headlineContent" 
          @blurr="blurry += $event"
          @unblurr="blurry -= $event"
          @redirectToProject="redirectToProject"
          />
        </div>
      </div>

    </full-page>

    <div  class="filter"         
          :style="{backdropFilter: `blur(${blurry}px)`}">
    </div>
    <div ref="blueContainer" class="blueContainer"></div>
    <div ref="creamContainer" class="creamContainer"></div>

  </div>
</template>

<script>
// Sanity Fetch
import sanity from '@/sanity'
import imageUrlBuilder from '@sanity/image-url'
const imageBuilder = imageUrlBuilder(sanity)

import {TimelineLite} from 'gsap'
// Components
import infoBar from '@/components/InfoBar.vue'
import HeroImage from '@/components/HeroImage.vue'
import HeadlineProj from '@/components/ProjectCore.vue'
import BottomCounter from '@/components/BottomCounter.vue'
import ButtonViewMore from '@/components/ButtonViewMore.vue'
import {onMenuStateChange, removeOnMenuStateChangeListener} from '@/services/menuService'
const query = `*[_type == 'projects']{
  _id,
  name,
  year,
  headline,
  heroImage,
  'fieldName': field->name,
  'docCompTitle': components[].docTitle,
  'headerCompTitle': components[].title,
  'headerYear': components[0]{year},
  slug
  }`

  export default {
    name: 'Home',
    data() {
      return {
        blurry: 0,
        projects: query,
        currentProjectIndex: 0,
        options: {
          licenseKey: process.env.FULL_PAGE_LICENCE,
          scrollHorizontallyKey: process.env.FULL_PAGE_SCROLL_HORIZONTAL_LICENCE,
          scrollHorizontally: true,
          afterSlideLoad: this.onAfterSlideLoad,
          onSlideLeave: this.onSlideLeave,
          autoScrolling: true,
          scrollingSpeed: 900,
          scrollOverflow: true,
          loopHorizontal: false,
          controlArrows: false
        }
      }
    },
    components: {
      infoBar,
      HeroImage,
      HeadlineProj,
      BottomCounter,
      ButtonViewMore
    },
    computed: {
      currentProject() {
        return this.projects[this.currentProjectIndex]
      },
      currentProjectSlug() {
        return this.currentProject?.slug?.current || ''
      }
    },
    methods: {
      redirectToProject(url) {
        this.blurry = 0
        this.$refs.project[this.currentProjectIndex].setTitleOpacity(0, this.$options.animationSpeed, {
          onComplete: () => {
            this.$refs.projIMG.animateCurrentImage({
            borderRadius: '0%',
            height: '100%',
            top: '0%',
            onComplete: () => {
              const tl = new TimelineLite()
              const {blueContainer, creamContainer} = this.$refs
              const coreProj = this.$refs.project[this.currentProjectIndex].getContainerEl()
              const heroImage = this.$refs.projIMG.getHeroImageEl()
              tl.to(heroImage, 0.3, {
                left: '100%'
              })
              tl.to(this.$refs.buttonProject.$el, 0.3, {
                opacity: 0
              })
              tl.to(this.$refs.infoBar.$el, 0.3, {
                opacity: 0
              })
               tl.to(this.$refs.bottomCounter.$el, 0.3, {
                opacity: 0
              })
              tl.to(coreProj, 0.3, {
                opacity: 0
              })
              tl.to(blueContainer, 0.3, {
                width: '4vw'
              })
              tl.to(creamContainer, 0.3, {
                width: '50vw',
                onComplete: () => {
                  this.$router.push(url)
                }
              })
            }
          }, this.$options.animationSpeed + 0.25)
          }
        })

        
      },
      async fetchProjects() {
        console.log('Currently fetching: ')
        try {
          const response = await sanity.fetch(query)
          console.log('We are fetching that: ', response)
          this.projects = response
        } catch(error) {
          console.log('The errors are: ', error)
        }
      },
      imageUrlFor(source) {
        const res = imageBuilder.image(source)
        console.log('image url for res', res)
        return res
      },
      onSlideLeave(section, origin, destination, direction) {
        console.log('on slide leave', arguments)
        console.log('on leave refs', this.$refs)
        const {index: originIndex} = origin
        const {index: destIndex} = destination
        this.$refs.project[originIndex].setTitleOpacity(0, this.$options.animationSpeed)
        this.$refs.project[destIndex].setTitleOpacity(0, this.$options.animationSpeed)
        // ANIMATE the image
        this.$refs.projIMG.animateCurrentImage({
          borderRadius: '0%',
          height: '120vh',
          top: '-8%'
        }, this.$options.animationSpeed)
        // ANIMATE Blue Background
        const tlBlue = new TimelineLite()
        tlBlue.to(this.$refs.blueContainer, 0.4, {width: '100vw'})
      },

      onAfterSlideLoad(section, origin, destination, direction) {
        console.log('on after slide load', arguments)
        const {index: originIndex} = origin
        const {index: destIndex} = destination
        this.currentProjectIndex = destIndex
        this.$refs.project[originIndex].setTitleOpacity(1, this.$options.animationSpeed)
        this.$refs.project[destIndex].setTitleOpacity(1, this.$options.animationSpeed)
        // ANIMATE the image
        this.$refs.projIMG.animateCurrentImage({
          borderRadius: '50%',
          height: '90%',
          top: '5%'
        }, this.$options.animationSpeed)
        // ANIMATE Blue Background
        const tlBlue = new TimelineLite()
        tlBlue.to(this.$refs.blueContainer, 0.7, {width: '76vw'}) 
      },

    },
    created() {
      this.$options.animationSpeed = 0.25
      this.fetchProjects()
    },
    mounted() {
      // A callback to run when the site menu is opened or closed
      // If the menu is opened, then we want disabled fullpagejs scrolling
      // If the menu is closed, then we enable it back again
      const onMenuStateChangeCallback = (opend) => {
        this.$refs.fullpage.api.setAutoScrolling(!opend)
      }

      // Add on menu state change listener. It will be run when menu
      // is opened or closed
      onMenuStateChange(onMenuStateChangeCallback)
      // Remove the listener when this component is destroyed. This is done
      // to prevent a memory leak. It's important to pass callback function reference,
      // as otherwise it won't be removed.
      this.$on('hook:beforeDestroy', () => removeOnMenuStateChangeListener(onMenuStateChangeCallback))
    }
  }
</script>

<style lang="scss">
@import '@/styles/transition.scss';

.core {
  position: absolute;
  background: transparent;

  @media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 667px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  }
}

/*–––––––––––------––*/
/*--- BACKGROUNDS ---*/
.blueContainer {
  position: fixed;
  top: 0;
  right: 0;
  width: 76vw;
  height: 100vh;
  background: $--color--02;
  z-index: 5;

  @media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 667px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
    width: 72vw;
  }

}

.creamContainer {
  position: fixed;
  top: 0;
  right: 0;
  width: 82vw;
  height: 100vh;
  background: $--color--03;
  z-index: 0;

  @media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 667px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
    width: 89vw;
  }
}

.filter {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 8500;
  width: 100vw;
  height: 100vh;
  transition: all 0.5s;
}


/*–––––––––––------––*/
/*–––––––––––------––*/

h1 {
  font: {
    family: 'McQueen';
    size: 42px;
  }
  color: $--color--01;
  margin-bottom: 4px;
}

h2 {
  font: {
    family: 'Oni';
    size: 22px;
  }
  color: $--color--01;
  margin: 12px 0;
}

h3 {
  font: {
    family: 'McQueen';
    size: 14px;
  }
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: $--color--01;
  margin: 30px 0 12px 0;
}

ul { 
  display: flex;
  flex-flow: row nowrap;
}

li {
  font: {
    family: 'Oni';
    size: 24px;
    variation-settings: $--weight--medium;
  }
  color: $--color--01;
  margin-right: 28px;
}

/* SLIDING PARTS */
.imageHero {
  position: fixed;
  right: -4vw;
  z-index: 30;

  @media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 667px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
    right: 0;
    left: 8vw;
    /*top: 5vh;*/
  }
}

.sliderProj {
  position: relative;
  z-index: 8000;
}


/* MUST BE THE SAME LEFT POSITION */
.info {
  @include position-home;
  position: fixed;
  top: $--padding--XS;

  @media screen and (min-device-width: 1800px)  {
    top: 4.7vh;
  }

  @media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 667px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
    top: 4vh;;
    @include position-home-mobile;
  }
}

.headlineContent {
  position: relative;
  z-index: 900;
  @include position-home;
  position: relative;

  // Mobile Media Query
  @media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 667px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
    left: 20vw;
    top: -2vh;
  }
}

.buttonViewMore {
  position: fixed;
  top: 28vh;
  left: 76.5vw;
  // Must be at the top
  z-index: 9999;

  @media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 667px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
    top: 52vh;
    left: 64vw;
  }

}

.bottomCount {
  @include position-home;
  position: fixed;
  bottom: 0;

  @media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 667px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
    @include position-home-mobile;
  }
}


</style>