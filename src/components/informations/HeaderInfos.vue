<template>
  <div class="contentCenter">

    <div class="block">
      <div class="masterTitle">
        <h2>
          {{subtitle}}
        </h2>
        <h1>
          {{title}}
        </h1>
      </div>
    </div>

    <div class="block">
      <p>
        {{contentHeader}}
      </p>
    </div>

  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String
      },
      subtitle: {
        type: String
      },
      contentHeader: {
        type: String
      }
    }
  }
</script>

<style lang="scss" scoped>

@import '@/styles/main.scss';

.contentCenter {
  display: flex;
  flex-flow: row nowrap;
  padding: 60px 10vw;

  @media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 667px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
    display: flex;
    flex-flow: column nowrap;
    padding: 0 30px;
    }
  }

.block {
  width: 50%;

  &:first-child {
    padding-right: 60px;
  }

  @media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 667px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
    width: 100%;
    }
}


h1 {
  @include title--desktop--h1;
  line-height: 1.1;
  margin-bottom: 30px;

  @media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 667px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
    @include title--mobile--h1;
    line-height: 1.32;
    margin-bottom: 0;
    }
}

h2 {
  @include title--desktop--3($--color--02, $--weight--light);
  margin-bottom: 20px;

  @media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 667px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
    @include title--mobile--3($--color--02, $--weight--regular);
    line-height: 1.2;
    }
}


p {
  position: relative;
  padding: 30px 60px;
  @include text--desktop--medium;
  line-height: 1.38;

  @media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 667px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
    @include text--mobile--medium;
    padding: 32px 0 20px 0;
    }
}



</style>