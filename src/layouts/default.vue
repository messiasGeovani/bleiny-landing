<template>
  <div class="root__container has-background-black">
    <BNavbar type="is-dark-invert" fixed-top>
      <template #brand>
        <BNavbarItem tag="router-link" :to="{ path: '/' }">
          <span class="navbar__title">Bleiny</span>
        </BNavbarItem>
      </template>
      <template #start>
        <BNavbarItem href="#"> News </BNavbarItem>
        <BNavbarItem href="#"> Assets </BNavbarItem>
        <BNavbarItem href="#"> Tokenomics </BNavbarItem>
        <BNavbarDropdown label="Docs">
          <BNavbarItem href="#"> Roadmap </BNavbarItem>
          <BNavbarItem href="#"> Bleiny Wiki </BNavbarItem>
          <BNavbarItem href="#"> Whitepaper </BNavbarItem>
          <BNavbarItem href="#"> FAQs </BNavbarItem>
        </BNavbarDropdown>
        <BNavbarItem href="#"> Team </BNavbarItem>
        <BNavbarItem href="#"> Partner </BNavbarItem>
      </template>

      <template #end>
        <BNavbarItem tag="div">
          <div class="buttons">
            <BButton type="is-primary">
              <strong>Marketplace</strong>
            </BButton>
          </div>
        </BNavbarItem>
      </template>
    </BNavbar>

    <section class="main-content">
      <div class="container">
        <Nuxt />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
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

.navbar {
  &__title {
    font-family: 'Rochester', cursive;
    text-shadow: 4px 4px 4px rgba(191, 191, 191, 0.25);
    color: white;
    font-size: 2.1em;
  }
}
</style>
