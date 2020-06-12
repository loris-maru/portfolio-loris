<template>
  <div class="contentCounter">
    <h2>{{projectNum}}</h2>
    <div class="continuation"></div>
    <h2>{{totalProjects}}</h2>
  </div>
</template>

<script>
  export default {
    props: {
      projectNum: {
        type: Number, 
        default: 1
      },
      totalProjects: {
        type: Number,
        default: 12
      }
    }
  }
</script>

<style lang="scss" scoped>

.contentCounter {
  width: 10vw;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  border-bottom: 10px solid $--color--01;
  padding-bottom: $--padding--XXS;

  @media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 667px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
    width: 30vw;
    padding-bottom: $--padding--XS;
  }
}

h2 {
  @include title--desktop--3($--color--01, $--weight--light);

  @media screen and (min-device-width: 1600px)  {
    @include title--super-desktop--3($--color--01, $--weight--light);
  }

  @media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 667px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
    @include title--mobile--3($--color--01, $--weight--light);
  }
}

.continuation {
  width: 20px;
  height: 1px;
  background: $--color--01;
  flex-grow: 2;
  margin: 0 16px;
}


</style>