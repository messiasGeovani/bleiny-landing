<template>
  <nav class="menu__wrapper has-background-dark-invert">
    <a href="/css/"><img src="" alt="" /></a>
    <a href="/html/">HTML</a>
    <a href="/coldfusion/">ColdFusion</a>
    <a href="/database/">Database</a>
  </nav>
</template>

<script>
export default {
  name: 'ComunitiesMenu',
}
</script>

<style lang="scss" scoped>
.menu {
  &__wrapper {
    font-family: sans-serif;
    padding: 5px;
    width: 130px;
    z-index: 100;
    position: fixed;
  }
}
</style>
