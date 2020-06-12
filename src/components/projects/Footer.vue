<template>
  <div class="footerCore">
    <section>
      <h1>
        Latest projects
      </h1>
      <div class="additionalInfo">
        <div v-for="(lastProj, projeIndex) in footer.featuredProject" :key="projeIndex" class="itemsTable">
          <h3>{{lastProj.footerItemSubtitle}}</h3>
          <h2>{{lastProj.itemTitle}}</h2>
        </div>
      </div>

    </section>

    <section>
      <h1>
        More information
      </h1>

      <div class="additionalInfo">
        <div v-for="(aboutInfo, aboutItemNum) in footer.aboutInfos" :key="aboutItemNum" class="itemsTable">
          <h3>{{aboutInfo.footerItemSubtitle}}</h3>
          <h2>{{aboutInfo.itemTitle}}</h2>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
// Sanity Fetch
import sanity from '@/sanity'
import imageUrlBuilder from '@sanity/image-url'
const imageBuilder = imageUrlBuilder(sanity)

const query = `*[_type == 'footer'][0]{
  featuredProject,
  aboutInfos,
  itemTitle,
  footerItemSubtitle,
  'projName': featuredProject[].footerItemSubtitle
  }`

  export default {
    props: {
      category: {
        type: String,
        default: 'digital'
      },
      projectTitle: {
        type: String,
        default: 'Nissan Box'
      }
    },
    data() {
      return {
        footer: query
      }
    },
    methods: {
      async fetchInfos() {
        console.log('Currently fetching the footer')
        try {
          const response = await sanity.fetch(query)
          this.footer = response
        } catch(error) {
          console.log('The error is: ', error)
        }
      },
      imageUrlFor(source) {
        const res = imageBuilder.image(source)
        console.log('image url for res', res)
        return res
      },
    },
    created() {
      this.fetchInfos()
    }
  }
</script>

<style lang="scss" scoped>
@import '@/styles/main.scss';


.footerCore {
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  background: $--color--02;
  padding: 200px 7vw;

  @media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 667px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
    flex-flow: column nowrap;
    padding: 120px 8vw;
    }
}

section {
  width: 50%;

  @media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 667px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
    width: 100%;
    margin-bottom: 50px;
    }
}

section:first-child {
  margin-right: 60px;
}

/*------ Table additional Info ------*/

.additionalInfo {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 667px) 
    and (-webkit-min-device-pixel-ratio: 2) { 
      display: flex;
      flex-flow: column wrap;
    }
}

.itemsTable {
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  flex-basis: 50%;
  margin-top: 80px;
  //margin-bottom: 100px;

  @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 667px) 
    and (-webkit-min-device-pixel-ratio: 2) { 
      margin: 25px 0;
    }
}

/*-----------------------------------*/

h1 {
  display: flex;
  align-items: center;
  @include title--desktop--3($--color--03, $--weight--medium);
  padding-bottom: 12px;
  border-bottom: 1px $--color--03 solid;
  margin-bottom: 80px;

  @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 667px) 
    and (-webkit-min-device-pixel-ratio: 2) { 
      @include title--mobile--3($--color--03, $--weight--medium);
      margin-bottom: 30px;
    }
}

h2 {
  @include title--desktop--1($--color--03, $--weight--light);
  
  @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 667px) 
    and (-webkit-min-device-pixel-ratio: 2) { 
      @include title--mobile--1($--color--03, $--weight--medium);
      text-transform: capitalize;
    }
}

h3 {
  @include title--desktop--3($--color--03, $--weight--light);
  margin-bottom: 10px;
  letter-spacing: 0.25em;
  opacity: 0.7;

  @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 667px) 
    and (-webkit-min-device-pixel-ratio: 2) { 
      @include title--mobile--3($--color--03, $--weight--medium);
    }
}

section:last-child {
  h1 {
    @include title--desktop--3($--color--01, $--weight--medium);
    border-bottom: 1px $--color--01 solid;

    @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 667px) 
    and (-webkit-min-device-pixel-ratio: 2) { 
      @include title--mobile--3($--color--01, $--weight--medium);
    }
  }
  h2 {
    @include title--desktop--1($--color--01, $--weight--light);

    @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 667px) 
    and (-webkit-min-device-pixel-ratio: 2) { 
      @include title--mobile--1($--color--01, $--weight--medium);
      text-transform: capitalize;
    }
  }

  h3 {
    @include title--desktop--3($--color--01, $--weight--light);

    @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 667px) 
    and (-webkit-min-device-pixel-ratio: 2) { 
      @include title--mobile--3($--color--01, $--weight--medium);
    }
  }
}

</style>