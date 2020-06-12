<template>
  <div class="imgContainer">
    <img :src="imageUrlFor(image)" :alt="project.altIMGfull" />
  </div>
</template>

<script>
import sanity from '@/sanity'
import imageUrlBuilder from '@sanity/image-url'
const imageBuilder = imageUrlBuilder(sanity)

  export default {
    props: {
      project: {
        type: Object,
        required: true
      },
      image: {
        type: Object,
        required: true
      }
    },
    methods: {
      imageUrlFor(source) {
        const res = imageBuilder.image(source)
        console.log('image url for res', res)
        return res
      }
    }
  }
</script>

<style lang="scss" scoped>

.imgContainer {
  padding: $--spacer--M 0 $--spacer--L 60px;
  @media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 667px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
    @include text--mobile--medium;
    padding: $--spacer--XS 0;
    }
}

img {
  width: 100%;
  height: auto;
}

</style>