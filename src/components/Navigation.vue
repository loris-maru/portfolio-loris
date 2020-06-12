<template>
  <div class="navCore">
    <section>
      <button class="toggle-button">
        <img v-if="!visibility" src="@/assets/images/menu_icon_lorisolivier.svg" alt="menu icon">  
        <img v-if="visibility" src="@/assets/images/icn_close.svg" alt="icon Close" class="toggle-button">
        
        <span v-if="!visibility" class="mobileStatus">Menu</span>
      </button>
    </section>
    <div class="divider mobileStatus" v-if="!visibility"></div>
    <section v-if="!visibility" class="mobileStatus">
      <router-link to="/informations">
        Info
      </router-link>
    </section>

  </div>
</template>

<script>
  export default {
    props: {
      visibility: {
        type: Boolean
      }
    }
  }
</script>

<style lang="scss" scoped>

.navCore {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}

img {
  position: relative;
  margin-right: 32px;
}

.divider {
  width: 1px;
  height: 24px;
  margin: 0 14px;
  background: $--color--02;
  opacity: 0.3;
}

a {
  text-decoration: none;
  @include title--desktop--3($--color--02, $--weight--light);

  @media screen and (min-device-width: 1800px)  {
    @include title--super-desktop--3($--color--02, $--weight--light);
  }
}

section {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  @include title--desktop--3($--color--02, $--weight--light);

  @media screen and (min-device-width: 1800px)  {
    @include title--super-desktop--3($--color--02, $--weight--light);
  }
}

button {
  background: transparent;
  border: none;
  margin: 0;

  img {
    transition: all 0.4s ease-in-out;

    @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 667px) 
    and (-webkit-min-device-pixel-ratio: 2) { 
      height: 6vw;
    }
  }

  @include title--desktop--3($--color--02, $--weight--light);

  @media screen and (min-device-width: 1800px)  {
    @include title--super-desktop--3($--color--02, $--weight--light);
  }
}

.mobileStatus {
  @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 667px) 
    and (-webkit-min-device-pixel-ratio: 2) { 
      display: none;
    }
}

</style>