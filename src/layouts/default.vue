<template>
  <div class="root__container has-background-black">
    <MainNavbar />

    <section class="main-content">
      <aside>
        <ComunitiesMenu />
      </aside>

      <div class="container">
        <Nuxt />
      </div>
    </section>
  </div>
</template>

<script>
import MainNavbar from '@/components/organisms/MainNavbar.vue'
import ComunitiesMenu from '~/components/atoms/ComunitiesMenu.vue'

export default {
  name: 'DefaultLayout',
  components: {
    ComunitiesMenu,
    MainNavbar,
  },
  data() {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' },
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.root {
  &__container {
    height: 100vh;
    width: 100%;
  }
}
</style>
