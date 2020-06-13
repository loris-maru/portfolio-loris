<template>
  <div class="menuCore">

    <div v-for="(proj, projectNum) in projects" :key="projectNum" class="projectItems">
      <MenuItem
        :projectNum="projectNum + 1"
        :projectField="proj.fieldname"
        :projectName="proj.name"
      />
    </div>

  </div>
</template>

<script>
import MenuItem from '@/components/menu/MenuItem.vue'

import sanity from '@/sanity'
const query = `*[_type == 'projects']{
  name,
  'fieldname': field->name
  }`

  export default {
    data() {
      return {
        projects: query,
        show: true
      }
    },
    components: {
      MenuItem
    },
    methods: {
      async fetchProjects() {
        try {
          const response = await sanity.fetch(query)
          console.log('I am fetching that: ', response)
          this.projects = response
        } catch(error) {
          console.log ('This is an error', error)
        }
      }
    },
    created() {
      this.fetchProjects()
    }
    
  }
</script>

<style lang="scss" scoped>

.menuCore {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  position: absolute;
  background: transparent;
  width: 80vw;
  height: 100vh;
  padding: 300px 4.4vw 120px 4.4vw;
  overflow-y: auto;

  @media screen and (min-device-width: 1800px)  {
    padding-top: 200px;
  }
}

.projectItems {
  flex-basis: 30%;
  position: relative;
  margin-bottom: 8vh;

@media screen and (min-device-width: 1800px)  {
    margin-bottom: 14vh;
  }
}

</style>