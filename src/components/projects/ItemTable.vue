<template>
  <div class="itemCore">
    <header>
      <img src="../../assets/images/icn_table_content.svg" alt="icon menu" />
      <h2>{{subtitle}}</h2>
    </header>
    <h1>
      {{ tableItemTitle }}
    </h1>
    <p>
      {{ tableItemText }}
    </p>
  </div>
</template>

<script>
  export default {
    props: {
      subtitle: {
        type: String,
        default: 'Title'
      },
      tableItemTitle: {
        type: String,
        default: 'This is a title'
      },
      tableItemText: {
        type: String,
        default: 'Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac facilisis in, egestas eget quam.'
      }
    }
    
  }
</script>

<style lang="scss" scoped>
@import '@/styles/main.scss';

header {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  border-bottom: 1px solid $--color--02;
  padding-bottom: 14px;
  margin-bottom: 14px;

  img {
    margin-right: 12px;
  }
}

h1 {
  @include title--desktop--h2;
  line-height: 1.15;
  margin-bottom: 20px;

  @media screen and (min-device-width: $--breakpoint--super-desktop){
    @include title--super-desktop--h2;
  }
}

h2 {
  @include title--desktop--4($--color--02, $--weight--regular);

  @media screen and (min-device-width: $--breakpoint--super-desktop){
    @include title--super-desktop--4($--color--02, $--weight--light);
  }
}

p {
  @include text--desktop--small;

  @media screen and (min-device-width: $--breakpoint--super-desktop){
    @include text--super-desktop--small;
  }
}

</style>