<template>
  <div class="centralGrid">
    <div class="headTitle">
      {{ headTableTitle }}
    </div>

    <div class="listing">
      <div  v-for="(item, index) in object"
            :key="index"
            class="itemCell">
        <Item/>
      </div>
    </div>
    
  </div>
</template>

<script>
import Item from '@/components/projects/ItemTable.vue'
  export default {
    data() {
      return {
        object: {
          itemOne: 'Hello',
          itemTwo: 'Hi',
          itemThree: 'Ohe',
          itemFour: 'Ola',
          itemFive: 'Merci',  
          itemSix: 'De rien'
        }
      }
    },
    components: {
      Item
    },
    props: {
      headTableTitle: {
        type: String,
        default: 'Category 1'
      }
    }
    
  }
</script>

<style lang="scss" scoped>
@import '@/styles/main.scss';

.centralGrid {
  display: flex;
  flex-flow: column wrap;
  padding: 0 20vw;
}

.listing {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}

.itemCell {
  margin-bottom: 80px;
  flex-basis: 42%;
}

.headTitle {
  @include title--desktop--h1;
  margin-bottom: 80px;

  @media screen and (min-device-width: $--breakpoint--super-desktop){
    @include title--super-desktop--h1;
  }
}

</style>