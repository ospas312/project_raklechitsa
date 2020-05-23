<template>
  <header class="header">
    <div v-if="menuOpened">
      <nav class="menu">
        <ul class="menu__ul">
          <li class="menu__li">
            <nuxt-link class="menu__link" to="/">Главная</nuxt-link>
          </li>
          <li class="menu__li">
            <nuxt-link class="menu__link" to="/stories">Истории</nuxt-link>
          </li>
          <li class="menu__li" @click="open">
            <nxt-button class="menu__button">Рассказать историю</nxt-button>
          </li>
        </ul>
      </nav>
    </div>
    <container class="header__container">
      <h2 class="header__title">
        <a href="/" class="header__logo-link"
          >Проект Благотворительного Фонда Константина Хабенского
        </a>
      </h2>
      <header-menu class="header__menu"></header-menu>
    </container>
  </header>
</template>

<script>
import Menu from '@/components/ui/Menu.vue';
import Container from '@/components/ui/Container.vue';
export default {
  components: {
    'header-menu': Menu,
    container: Container,
  },
  computed: {
    menuOpened() {
      const { menu } = this.$store.state;
      return menu.openMenu;
    },
  },
};
</script>

<style scoped>
.header {
  min-height: 72px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  font-family: 'Inter', monospace;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
.header__mobile_menu {
  width: 100%;
}
@media screen and (max-width: 1280px) {
  .header {
    padding: 0 50px;
  }
}

.header__container {
  display: flex;
  justify-content: space-between;
}

.header__title {
  max-width: 340px;
  min-height: 40px;
}

.header__logo-link {
  text-decoration: none;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: black;
}
.header__menu {
}
@media screen and (max-width: 320px) {
  .header {
    padding: 0;
  }
  .header__container {
    padding: 18px 15px;
  }
  .header__title {
    font-size: 12px;
    line-height: 14px;
  }
}
</style>
