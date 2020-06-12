<template>
  <div class="tableContainer">
    <div class="headSection">
      <img src="../../assets/images/icn_table_content.svg" alt="icon item cell" />
      <h2>{{subtitle}}</h2>
    </div>

    <div class="coreSection">
      <h1>{{mainTitle}}</h1>
      <p>{{textContent}}</p>
    </div>

  </div>
</template>

<script>
  export default {
    props: {
      subtitle: {
        type: String, 
        default: 'Subtitle of the cell'
      },
      mainTitle: {
        type: String, 
        default: 'Main Title'
      },
      textContent: {
        type: String, 
        default: 'This is a long text excerpt'
      }
    }
  }
</script>

<style lang="scss" scoped>

.tableContainer {
  width: 32vw;

  @media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 667px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
    width: 100%;
    }
}

.headSection {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  padding-bottom: 30px;
  border-bottom: 1px solid $--color--02;
  margin-bottom: 30px;

  img {
    margin-right: 20px;
  }

  @media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 667px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
    padding-bottom: 15px;
    margin-bottom: 15px;
    }
}

h1 {
  @include title--desktop--1($--color--02, $--weight--medium);
  margin-bottom: 15px;

  @media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 667px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
    @include title--mobile--1($--color--02, $--weight--bold);
    line-height: 1.2;
    }
}

h2 {
  @include title--desktop--3($--color--02, $--weight--regular);

  @media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 667px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
    @include title--mobile--3($--color--02, $--weight--regular);
    line-height: 1.2;
    }
}

p {
  @include text--desktop--small;

  @media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 667px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
    @include text--mobile--medium;
    line-height: 1.4;
    }
}

</style>