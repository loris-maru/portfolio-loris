<template>
  <div class="coreButton">
    <router-link :to="projectId">
      <button 
        v-on:mouseenter="$emit('blurr', 6)"
        v-on:mouseleave="$emit('unblurr', 6)">
        View<br>
        project
      </button>
    </router-link>
  </div>
</template>

<script>
import {TimelineLite} from 'gsap'
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
      },
      blurrEffect: {
        type: Number,
        default: 0
      }
    },
    computed: {
      projectId() {
        return `/project/${this.slug}`
      }
    }
  }
</script>

<style lang="scss" scoped>

.coreButton {
  width: 70vw;
  height: 100vh;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}

button {
  position: relative;
  right: 9vw;
  width: 42vh;
  height: 42vh;
  background: rgba(42, 102, 131, 0.5);
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
}


</style>