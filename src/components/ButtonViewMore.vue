<template>
  <div>
    <a @click.prevent="$emit('redirectToProject', projectSlug)" class="buttonPosition">
      <button 
        v-on:mouseenter="$emit('blurr', 4)"
        v-on:mouseleave="$emit('unblurr', 4)"
        ref="buttonContent">
        View<br>
        project
      </button>
    </a>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        blurry: 0
      }
    },
    props: {
      slug: {
        type: [Number, String],
        required: true
      }
    },
    computed: {
      projectSlug() {
        return `/project/${this.slug}`
      }
    }
  }
</script>

<style lang="scss" scoped>

button {
  position: relative;
  right: 9vw;
  width: 42vh;
  height: 42vh;
  /*background: transparent;*/
  background: rgba(42, 102, 131, 0.15);
  border: {
    radius: 50%;
    width: 4px;
    color: $--color--01;
  }
  font: {
    family: 'Oni';
    size: 2.8vw;
    variation-settings: 'wght' 600;
  }
  
  line-height: 0.9;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 0.06em;
  color: $--color--01;
  box-sizing: border-box;
  z-index: 900;
  transform: scale(1);

  transition: all ease-in-out 0.35s;

  &:hover {
    border: solid 6px $--color--01;
    transform: scale(1.1);
    line-height: 1;
  }

  // Mobile Query

  @media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 667px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
    width:28vh;
    height:28vh;

    border: {
      radius: 50%;
      width: 2px;
      color: $--color--01;
    }

    font: {
      family: 'Oni';
      size: 6vw;
      variation-settings: 'wght' 600;
    }
  }
}

</style>