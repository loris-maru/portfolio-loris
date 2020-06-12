<template>
  <div class="CentralSpine">
    <div class="imageContent">
      <img :src="imageUrlFor(image)" :alt="altIMG">
    </div>

    <div class="textProject">
      <h2>{{subtitle}}</h2>
      <h1>{{title}}</h1>
      <p>
        {{content}}
      </p>
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
      image: {
        type: Object,
        required: true
      },
      altIMG: {
        type: String,
        default: "this is an image description"
      },
      subtitle: {
        type: String,
        default:'I am a Subtitle'
      },
      title: {
        type: String,
        default: 'Knowing when to do right'
      },
      content: {
        type: String,
        default: 'This is the content'
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

.CentralSpine {
  padding: $--spacer-MEGA 10vw;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  @media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 667px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
    flex-flow: column nowrap;
    padding: $--spacer--L 10vw;
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

.textProject {
  width: 45%;
  padding-left: 5vw;

  @media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 667px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
    width: 100%;
    padding: 40px 0;
    }
}

  @import '@/styles/main.scss';

  h1 {
    @include title--desktop--h2;
    margin-bottom: 14px;

    @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 667px) 
    and (-webkit-min-device-pixel-ratio: 2) { 
      @include title--mobile--h2;
      line-height: 1.3;
    }
  }

  h2 {
    @include title--desktop--3($--color--02, $--weight--light);
    margin-bottom: 14px;

    @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 667px) 
    and (-webkit-min-device-pixel-ratio: 2) { 
      @include title--mobile--3($--color--02, $--weight--light);
    }
  }

  p {
    @include text--desktop--small;

    @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 667px) 
    and (-webkit-min-device-pixel-ratio: 2) { 
      @include text--mobile--small;
    }
  }

</style>