<template>
  <div class="centerApp">
    <Slideout
      menu="#menu"
      panel="#panel"
      :padding="menuWidth"
      duration="800"
      easing= 'ease-in-out'
      :toggleSelectors="['.toggle-button']"
      @on-open="open"
      @on-close="close"
      @on-beforeopen="removingContainer"
      @on-beforeclose="disappearMenu"
      >
    
      <Navigation 
        class="navContainer"
        :visibility="opend" />

      <nav id="menu" ref="menuBloc">
        <Menu :style="{left: `${positionMenu}vw`}" class="MenuContentBloc" />
      </nav>

      <div ref="blueContainer" class="blueContainer"></div>
      <div ref="creamContainer" class="creamContainer"></div>
      
      <!-- MAIN Panel Sliding on Right -->
      <main id="panel">
        <router-view />
      </main>

    </Slideout>
  </div>
</template>

<script>
//Plugins
import Slideout from 'vue-slideout'
import {TimelineLite} from 'gsap'

// Components
import Navigation from '@/components/Navigation.vue'
import Menu from '@/components/menu/Menu.vue'
import {opend} from '@/services/menuService'

  export default {
    data() {
      return {
        //opend: false,
        positionMenu: -14
      }
    },
    components: {
      Navigation,
      Menu,
      Slideout
    },
    computed: {
      opend,
      menuWidth: function() {
        return Math.floor(this.windowWidth * 0.76)
      }
    },
    methods: {
      open: function() {
        console.log('slideoutOpen')
        this.opend = true
        this.positionMenu += 14

        const transparentTimeline = new TimelineLite()
        transparentTimeline.to(this.$refs.menuBloc, 0.3, {opacity: 1})
        transparentTimeline.to(this.$refs.blueContainer, 0.4, {width: '1vw'})
        console.log('adding scroll', this.$el)
        this.$el.querySelector('.menuCore').addEventListener('scroll', (e) => {
          console.log('scroll')
          e.stopPropagation()
          e.stopImmediatePropagation()
          e.preventDefault()
        })
      },

      removingContainer: function() {
        const slideCream = new TimelineLite()
        slideCream.to(this.$refs.creamContainer, 0.6, {width: '2vw'})
      },

      disappearMenu: function(){
        const tl = new TimelineLite()
        tl.to(this.$refs.menuBloc, 0.3, {opacity: 0})
      },

      close: function() {
        this.opend = false
        this.positionMenu -= 14
      },

      somethingClicked: function () {
        this.$children[0].slideout.toggle()
      }
    }
  }
  
</script>

<style lang="scss" scoped>


.blueContainer {
  position: fixed;
  top: 0;
  right: 0;
  width: 4vw;
  height: 100vh;
  background: $--color--02;
  z-index: 0;
}

.creamContainer {
  position: fixed;
  top: 0;
  right: 4vw;
  width: 48%;
  height: 120vh;
  background: $--color--03;
  z-index: 0;
}

.navContainer {
  position: fixed;
  z-index: 9000;
  top: 62px;
  left: $--spacer--S;

  @media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 667px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
    top: 30px;
    left: 28px;
  }

}

#menu {
  position: relative;
  z-index: 7000;
  opacity: 0;
}



#panel {
  position: relative;
  z-index: 8000;
}


</style>