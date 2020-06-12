<template>
  <div class="dualCore">
    <div class="textBox">
      <h2>{{subtitle}}</h2>
      <h1>{{title}}</h1>
      <p>
        {{content}}
      </p>
    </div>

    <div class="imageBox">
      <img :src="image" :alt="imgALT" />
    </div>
    
  </div>
</template>

<script>
  export default {
    props: {
      subtitle: {
        type: String,
        default: 'This is a subtitle'
      },
      title: {
        type: String,
        default: 'There you have a title'
      },
      imgALT: {
        type: String, 
        default: 'There you have a desccription'
      },
      content: {
        type: String, 
        default: 'Text is always good'
      },
      image: {
        type: Object,
        required: true
      }
    } 
  }
</script>

<style lang="scss" scoped>

.dualCore {
  display: flex;
  flex-flow: row nowrap;
  padding: 150px 0;

  @media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 667px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
    display: flex;
    flex-flow: column wrap;
    padding: 80px 0;
    }
}

.imageBox {
  width: 50%;

  img {
    width: 100%;
    height: auto;

    @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 667px) 
    and (-webkit-min-device-pixel-ratio: 2) { 
      margin-top: 22px;
    }
  }

  @media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 667px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
    width: 100%;
    }
}

.textBox {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  width: 50%;
  padding-right: 8vw;

  @media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 667px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
    padding-left: 0;
    width: 100%;
    margin-top: 16px;
    }
}

h1 {
  width: 90%;
  @include title--desktop--1($--color--02, $--weight--bold);
  margin-bottom: 42px;
  line-height: 1.3;

  @media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 667px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
    @include title--mobile--1($--color--02, $--weight--bold);
    margin-bottom: 18px;
    }
}

h2{
  @include title--desktop--4($--color--02, $--weight--regular);
  margin-bottom: 12px;

  @media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 667px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
    @include title--mobile--3($--color--02, $--weight--regular);
    margin-bottom: 4px;
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