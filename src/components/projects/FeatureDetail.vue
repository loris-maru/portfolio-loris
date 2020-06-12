<template>
<div class="mainContent">

  <div class="OutlineContainer">
    <div class="item introduction">
      <h1>01</h1>
      <h2>
        You can have a subtitle
      </h2>
    </div>

    <div class="item">
      <img src="../../assets/images/img_feature_numero2.png" alt="image of feature n°2" />
    </div>

    <div class="item">
      <img src="../../assets/images/img_feature_01.jpg" alt="image of feature n°2" />
    </div>
  </div>
  
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
@import '@/styles/main.scss';

h1 {
  @include title--desktop--h2;
  margin-bottom: 6px;
}

h2 {
  @include title--desktop--3($--color--02, $--weight--light);
  line-height: 1.2;
}


.mainContent {
  padding: 0 10vw;
}

.OutlineContainer {
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  border: solid 2px $--color--02;
}

.item {
  flex-basis: 34%;

  &:first-child {
    padding: 30px 34px;
  }
}

img {
  width: 100%;
  height: auto;
}

</style>