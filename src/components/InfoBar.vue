<template>
  <div class="InfoBarCore">
    <section>
      <h2>project {{projectNum}}</h2>
      <h1>{{projName}}</h1>
    </section>

    <section class="optionalInfos">
      <h2>Field</h2>
      <h1>{{projField}}</h1>
    </section>

    <section class="optionalInfos">
      <h2>Year</h2>
      <h1>{{projYear}}</h1>
    </section>
  </div>
</template>

<script>
  export default {
    props: {
      projectNum: {
        type: Number,
        default: 12
      },
      projName: {
        type: String,
        default: 'My Project Name'
      },
      projField: {
        type: String,
        default: 'Design'
      },
      projYear: {
        type: Number,
        default: 2019
      }
    }
    
  }
</script>

<style lang="scss" scoped>

.InfoBarCore {
  display: flex;
  flex-flow: row nowrap;

  @media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 667px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
   flex-flow: column nowrap;
  }
}

section {
  width: 16vw;
  padding-right: 40px;

  @media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 667px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
    width: 60vw;
    padding-right: 0;
    margin-bottom: 20px;
  }
}

h1 {
  font: {
    family: 'McQueen';
    size: 1.5vw;
    variation-settings: 'wght' 400;
  }
  color: $--color--01;
  line-height: 1.2;

  @media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 667px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
    font: {
      family: 'McQueen';
      size: 5.8vw;
      variation-settings: 'wght' 500;
    }
  }
}

h2 {
  @include title--desktop--3($--color--01, $--weight--light);
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-bottom: 8px;

  @media screen and (min-device-width: 1800px)  {
    @include title--super-desktop--3($--color--01, $--weight--light);
  }

  @media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 667px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
    @include title--mobile--3($--color--01, $--weight--light);
  }
}

.optionalInfos {
  display: block;

  @media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 667px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
    display: none;
  }
}

</style>