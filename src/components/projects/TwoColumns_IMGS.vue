<template>
  <div class="CentralSpine">
    <!-- IMAGE 1 -->
    <div class="imageContent">
      <img :src="imageUrlFor(firstImage)" :alt="altOne">
    </div>

    <!-- IMAGE 2 -->
    <div class="imageContent">
      <img :src="imageUrlFor(secondImage)" :alt="altTwo">
    </div>

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
      firstImage: {
        type: Object,
        required: true
      },
      secondImage: {
        type: Object,
        required: true
      },
      altOne: {
        type: String,
        default: 'First image description'
      },
      altTwo: {
        type: String,
        default: 'Second image description'
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
@import '@/styles/main.scss';

.CentralSpine {
  padding: $--spacer--XXL 10vw;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  @media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 667px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
    flex-flow: column nowrap;
    padding: 80px 10vw;
    }
}

.imageContent {
  width: 50%;
  img {
    width: 100%;
  }

  @media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 667px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
    width: 100%;
    }
}


</style>