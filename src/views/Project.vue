<template>
  <div ref="projectBody" class="projectBody">
    
    <div v-if="project" class="contentCore">
      <transition-group name="fade" tag="div" appear>
        <div class="component-container" v-for="(component, index) in project.components" :key="index">
          <component :is="getComponentTag(component._type)" v-bind="component" :project="project"  />
        </div>
      </transition-group>
    </div>

    <aside></aside>

    <transition name="fade" appear>
      <Footer class="footer" />
    </transition>
  </div>
</template>

<script>
// Components Fixed
import Footer from '@/components/projects/Footer.vue'

// Components Variable
import Header from '@/components/projects/Header.vue'
import ImageFull from '@/components/projects/FullFrameImage.vue'
import DetailTable from '@/components/projects/DetailTable.vue'
import DualOne from '@/components/projects/TwoColumns_IMGS.vue'
import TwoColumns_IMGText from '@/components/projects/TwoColumns_IMG-Text.vue'
import TwoColumns_TextIMG from '@/components/projects/TwoColumns_Text-IMG.vue'
import FeatureDetail from '@/components/projects/FeatureDetail.vue'
import Text from '@/components/projects/TextLevelOne.vue'

// Plugins
import sanity from '@/sanity'
import {TimelineLite} from 'gsap'

import {onMenuStateChange, removeOnMenuStateChangeListener} from '@/services/menuService'

const COMPONENT_MAP = {
  // first key is from Sanity
  // Second one is the component in Vue
  'header': Header,
  'imgFullPage': ImageFull,
  'feature': FeatureDetail,
  'largeText': Text,
  'imgText': TwoColumns_IMGText,
  'textImg': TwoColumns_TextIMG,
  'doubleImage': DualOne,
  'table': DetailTable,
}

  export default {
    name: 'project',
    props: {
      slug: String
    },
    components: {
      Header,
      ImageFull,
      DualOne,
      Footer
    },
    data() {
      return {
        project: null
      }
    },
    methods: {
      getComponentTag(docTitle) {
        const tag = COMPONENT_MAP?.[docTitle] || 'div'
        console.log('tag', tag, docTitle)
        return tag
      },
      async fetchProject(slug) {
        const query = `*[_type == "projects" && slug.current == $slug]{
          components,
          field,
          headline,
          heroImage,
          name,
          slug,
          year,
          'fieldName': field->name,
          image
        }`
        try {
          const params = {slug}
          const response = await sanity.fetch(query, params)
          console.log('RESPONSE', response)
          this.project = response[0]
        } catch(error) {
          console.error(error)
        }

      }
    },
    mounted() {
      const onMenuStateChangeCallback = (opend) => {
        this.$refs.fullpage.api.setAutoScrolling(!opend)

        onMenuStateChange(onMenuStateChangeCallback)

        this.$on('hook:beforeDestroy', () => removeOnMenuStateChangeListener(onMenuStateChangeCallback))
      }
    },
    created() {
      console.log('in project', this)
      // Go to homepage if there is no slug
      if (!this.slug) this.$router.replace('/')
      this.fetchProject(this.slug)
    }
  }
</script>

<style lang="scss" scoped>
@import '@/styles/main.scss';

.projectBody {
  position: relative;
}

.component-container {
  position: relative;
  top: 300px;

  @media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 667px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
    top: 100px;
    }
}

.fade-enter-active .fade-leave-active {
  transition: all 5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateY(50px);
}

aside {
  position: fixed;
  top: 0;
  right: 0;
  width: 40px;
  height: 100%;
  background: $--color--02;

  @media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 667px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
    width: 10px;
    }
}

.footer {
  position: relative;
  left: 60px;
  margin-bottom: 360px;

  @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 667px) 
    and (-webkit-min-device-pixel-ratio: 2) {
      left: 0;
      margin-bottom: 120px;
    }
}

.contentCore {
  position: relative;
  width: calc(100% - 4vw);
  margin-bottom: 400px;
  
  @media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 667px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
    width: calc(100% - 16px);
    margin-bottom: 200px;
    }
}

.navBloc {
  position: fixed;
  top: 40px;
  left: 60px;
  z-index: 999;
  background: rgba(255, 255, 255, 0.86);
}


/* TRANSITION */
.fadeIn-enter-active, .fadeIn-leave-active {
  transition: opacity .5s;
}
.fadeIn-enter, .fadeIn-leave-to {
  opacity: 0;
}


</style>