<template>
  <div class="contentCenter">

    <div class="block">
      <div class="masterTitle">
        <h1>
          {{title}}
        </h1>
      </div>
      <!-- ////////// -->
      <div class="projectInfo">
        <section>
          <h3>Year</h3>
          <h2>{{project.year}}</h2>
        </section>

        <section>
          <h3>field</h3>
          <h2>{{project.fieldName}}</h2>
        </section>
      </div>
    </div><!-- BLOCK -->

    <div class="block">
      <p>
        {{introText}}
      </p>  
    </div>

  </div>
</template>

<script>
  export default {
    props: {
      project: {
        type: Object,
        required: true
      },
      title: {
        type: String
      },
      introText: {
        type: String
      },
      fieldName: {
        type: String
      },
      year: {
        type: Number, 
        default: 2019
      }
    }
  }
</script>

<style lang="scss" scoped>

@import '@/styles/main.scss';

.contentCenter {
  display: flex;
  flex-flow: row nowrap;
  padding: 0 10vw;
  padding-bottom: 120px;

  @media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 667px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
    flex-flow: column nowrap;
    padding-bottom: 10px;
    }
  }

.block {
  width: 50%;

  p {
    position: relative;
    top: -28px;
  }

  @media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 667px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
    width: 100%;
    margin-bottom: 25px;
    }
    &:last-child {
      max-width: 100%;
    }
}

.projectInfo {
  display: flex;
  flex-flow: row nowrap;
}

.masterTitle {
  width: 80%;
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
    margin-bottom: 18px;
    }
}

h2 {
  @include title--desktop--1($--color--02, $--weight--light);
  

  @media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 667px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
    @include title--mobile--1($--color--02, $--weight--medium);
    line-height: 1.2;
    text-transform: capitalize;
    }
}

h3 {
  @include title--desktop--4($--color--02, $--weight--light);

  @media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 667px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
    @include title--mobile--3($--color--02, $--weight--light);
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
    padding: 60px 0 20px 0;
    }
}

/*----- MASTER TITLE -----*/

.masterTitle h3 {
  margin-bottom: 18px;
}

section {
  margin-right: 60px;
}

section h3 {
  margin: 12px 0;
}



</style>