<template>
  <div class="textContentCenter">
    <p>
      {{content}}
    </p>
    

  </div>
</template>

<script>
  export default {
    props: {
      project: {
        type: Object,
        required: true
      },
      content: {
        type: String,
        default: 'I am a string'
      }
    }
  }
</script>

<style lang="scss" scoped>
@import '@/styles/main.scss';

.textContentCenter {
  display: flex;
  flex-flow: column nowrap;
  padding: $--spacer--L 10vw;
}

p {
  @include text--desktop--large;
  margin-bottom: 40px;

  @media screen and (min-device-width: $--breakpoint--super-desktop){
    @include text--super-desktop--large;
    margin-bottom: 50px;
  }

  @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 667px) 
    and (-webkit-min-device-pixel-ratio: 2) { 
      @include text--mobile--large;
    }
}

</style>