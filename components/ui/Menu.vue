<template>
  <nav class="menu">
    <ul class="menu__ul">
      <li class="menu__li">
        <nuxt-link class="menu__link" to="/">Главная</nuxt-link>
      </li>
      <li class="menu__li">
        <nuxt-link class="menu__link" to="/stories">Истории</nuxt-link>
      </li>
      <li class="menu__li">
        <nuxt-link class="menu__link" to="#">Рассказать историю</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.menu {
}
.menu__ul {
  list-style: none;
  display: grid;
  column-gap: 40px;
  grid-template-columns: auto auto auto;
  justify-content: end;
}

.menu__link {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  text-decoration: none;
  color: #000000;
}
.nuxt-link-exact-active {
  text-decoration-line: underline;
}
</style>
