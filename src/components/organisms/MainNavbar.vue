<template>
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
      <BNavbarDropdown id="docs-dropdown" label="Docs">
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
          <a
            href="https://c.tenor.com/IuD_d2xB31QAAAAC/shrek-shrek-is-love.gif"
            target="_blank"
          >
            <BButton type="is-primary">
              <strong>Marketplace</strong>
            </BButton>
          </a>
        </div>
      </BNavbarItem>
    </template>
  </BNavbar>
</template>

<script>
export default {
  name: 'MainNavbar',
}
</script>

<style lang="scss" scoped>
.navbar {
  &__title {
    font-family: 'Rochester', cursive;
    text-shadow: 4px 4px 4px rgba(191, 191, 191, 0.25);
    color: white;
    font-size: 2.1em;
  }
}
</style>
