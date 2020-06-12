<template>
  <div class="mainContainer">
    <!-- TYPE -->
    <div class="navItem toggle-button">
      <img  src="@/assets/image/menu_icon_lorisolivier.svg" alt="icon menu" />
    </div>
    <div class="navItem lower">
      <img  src="@/assets/image/icn_chevron_back.svg" class="chevron" alt="icon menu" />
        <router-link to="/">
          back
        </router-link>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="scss" scoped>
@import '@/styles/main.scss';

.mainContainer {
  padding: 20px;
  border-radius: 4px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-start;
  background: rgba(255, 255, 255, 0.8);
}

.navItem {
  @include title--desktop--4($--color--02, $--weight--regular);
  display: flex;
  flex-flow: row nowrap;

  /* SUPER DESKTOP */
  @media screen and (min-device-width: $--breakpoint--super-desktop) {
    @include title--super-desktop--4($--color--02, $--weight--regular);
  }

  /* MOBILE */
  @media screen and (min-device-width: $--breakpoint--mobile) and (max-device-width: 760px) {
    @include title--mobile--4($--color--02, $--weight--medium);
  }
}

img {
    margin-right: 44px;
  }

.chevron {
  position: relative;
  top: 1px;
  width: 8px;
  margin-right: 16px;
}

a {
  position: relative;
  top: 2px;
  text-decoration: none;
  color: $--color--02;
}

</style>