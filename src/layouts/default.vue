<template>
  <div class="has-background-black">
    <BNavbar type="is-dark-invert">
      <template #brand>
        <BNavbarItem tag="router-link" :to="{ path: '/' }">
          <img
            src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
            alt="Lightweight UI components for Vue.js based on Bulma"
          />
        </BNavbarItem>
      </template>
      <template #start>
        <BNavbarItem href="#"> Home </BNavbarItem>
        <BNavbarItem href="#"> Documentation </BNavbarItem>
        <BNavbarDropdown label="Info">
          <BNavbarItem href="#"> About </BNavbarItem>
          <BNavbarItem href="#"> Contact </BNavbarItem>
        </BNavbarDropdown>
      </template>

      <template #end>
        <BNavbarItem tag="div">
          <div class="buttons">
            <BButton type="is-primary">
              <strong>Sign up</strong>
            </BButton>
            <BButton type="is-text">Log in</BButton>
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
