<template>
  <div class="itemCore">
    <header>
      <h3>{{projectNum}}</h3>
      <div class="divider"></div>
      <h2>{{projectField}}</h2>
    </header>
    <section>
      <h1>{{projectName}}</h1>
    </section>

  </div>
</template>

<script>
  export default {
    props: {
      projectNum: {
        type: Number,
        default: 1
      },
      projectField: {
        type: String,
        default: 'Design'
      },
      projectName: {
        type: String,
        default: 'My Project Name'
      }
    }
  }
</script>

<style lang="scss" scoped>

.itemCore {
  display: flex;
  flex-flow: column nowrap;
}

header {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  margin-bottom: 12px;
}

.divider {
  width: 1px;
  height: 20px;
  background: $--color--02;
  opacity: 0.2;
  margin: 0 16px;
}

h1 {
  @include title--desktop--h2;
}

h2 {
  @include title--desktop--4($--color--02, $--weight--light);
}

h3 {
  @include title--desktop--4($--color--02, $--weight--bold);
}

</style>