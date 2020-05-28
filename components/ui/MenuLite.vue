<template>
  <nav>
    <ul class="menu">
      <li class="menu__list">
        <nuxt-link class="menu__link" to="/">Главная</nuxt-link>
      </li>
      <li class="menu__list">
        <nuxt-link class="menu__link" to="/stories">Истории</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.menu {
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
}
.menu__link {
  text-decoration: none;
  color: #000;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
}
.menu__list:first-child {
  padding-right: 40px;
}
@media screen and (max-width: 1280px) {
  .menu__link {
    font-size: 16px;
    line-height: 24px;
  }
  .menu__list:first-child {
    padding-right: 40px;
  }
}
@media screen and (max-width: 1024px) {
  .menu__list:first-child {
    padding-right: 30px;
  }
}
@media screen and (max-width: 768px) {
  .menu__list {
    padding-bottom: 14px;
  }
  .menu {
    max-width: 70px;
  }
}
@media screen and (max-width: 320px) {
  .menu__link {
    font-size: 13px;
    line-height: 15px;
  }
  .menu__list {
    padding-bottom: 18px;
  }
}
</style>
