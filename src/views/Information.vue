<template>
  <div class="coreInfo">

    <div class="contentCore">
      
    <HeaderInfos 
      :subtitle="information.headSubtitle"
      :title="information.headTitle"
      :contentHeader="information.introductionText"
      />

    <!-- FULL PAGE Image -->
    <ImageL :imageFull="imageUrlFor(information.dividerImage)" />

    <p>
      {{information.introBiography}}
    </p>

    <!-- TABLE -->
    <h2 class="tableTitle">{{information.titleTable}}</h2>

    <div class="table">
      <div v-for="(singleItem, itemNum) in information.itemCell" :key="itemNum" class="itemContent">
        <TableItem
          :subtitle="singleItem.itemSubtitle"
          :mainTitle="singleItem.itemTitle"
          :textContent="singleItem.itemContent"
          class="itemTableCore" />
      </div>
    </div>

    <!-- EDUCATION -->
    <h2 class="tableTitle">Education</h2>

    <div class="educationTable">
      <div v-for="(place, placeNum) in information.educationPlace" :key="placeNum">
        <TwoColumnsInfosA
          :imgALT="place.altIMG"
          :subtitle="place.subtitle"
          :title="place.title"
          :content="place.content"
          v-if="placeNum%2 == 0"
          :image="imageUrlFor(place.image)"
          />
        <TwoColumnsInfosB
          :imgALT="place.altIMG"
          :subtitle="place.subtitle"
          :title="place.title"
          :content="place.content"
          v-if="placeNum%2 == 1"
          :image="imageUrlFor(place.image)"
          />
      </div>
    </div>

    </div><!-- CONTENT CORE -->

    <Footer />

    <aside></aside>
  </div>
</template>

<script>
// Sanity Fetch
import sanity from '@/sanity'
import imageUrlBuilder from '@sanity/image-url'
const imageBuilder = imageUrlBuilder(sanity)

// Components
import HeaderInfos from '@/components/informations/HeaderInfos'
import ImageL from '@/components/informations/ImageL.vue'
import TableItem from '@/components/informations/TableItem.vue'
import TwoColumnsInfosA from '@/components/informations/TwoColumnsInfosA.vue'
import TwoColumnsInfosB from '@/components/informations/TwoColumnsInfosB.vue'
import Footer from '@/components/projects/Footer.vue'

const query = `*[_type == 'information'][0]{
  headTitle,
  headSubtitle,
  introductionText,
  introBiography,
  dividerImage,
  titleTable,
  itemCell,
  itemTitle,
  itemSubtitle,
  itemContent,
  educationPlace
  }`

export default {
  data() {
    return {
      information: query
    }
  },
  components: {
    HeaderInfos,
    TableItem,
    TwoColumnsInfosA,
    TwoColumnsInfosB,
    Footer,
    ImageL
  },
  methods: {
      async fetchInformations() {
        console.log('Currently fetching')
        try {
          const response = await sanity.fetch(query)
          this.information = response
        } catch(error) {
          console.log('The error is: ', error)
        }
      },
      imageUrlFor(source) {
        const res = imageBuilder.image(source)
        console.log('image url for res', res)
        return res
      }
    },
  created() {
    this.fetchInformations()
    }
  }
</script>

<style lang="scss" scoped>

aside {
  position: fixed;
  top: 0;
  right: 0;
  width: 40px;
  height: 100%;
  background: $--color--02;

  @media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 667px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
    width: 10px;
    }
}

.navBloc {
  position: fixed;
  z-index: 9000;
  top: 62px;
  left: $--spacer--S;
}

.contentCore {
  position: relative;
  width: calc(100% - 40px);
  min-height: 100vh;
  padding: 200px 0;

  @media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 667px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
    width: calc(100% - 16px);
    margin-bottom: 0;
    padding: 140px 0;
    }
}

.tableTitle {
  @include title--desktop--h1;
  padding: 0 10vw;
  margin-top: 160px;

  @media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 667px) 
  and (-webkit-min-device-pixel-ratio: 2) {
    @include title--mobile--h1; 
    margin-top: 60px;
    }
}

p {
  @include text--desktop--medium;
  padding: 60px 10vw;

  @media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 667px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
    padding: 30px 10vw;
    @include text--mobile--medium;
    line-height: 1.4;
    }
}

.table {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding: 120px 10vw;

  @media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 667px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
    display: flex;
    flex-flow: column wrap;
    padding: 50px 10vw;
    }
}

.itemContent {
  display: flex;
  flex-flow: row nowrap;
}

.itemTableCore {
  margin-bottom: 100px;

  @media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 667px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
    margin-bottom: 50px;
    }
}

.educationTable {
  padding: 40px 10vw;
}

</style>