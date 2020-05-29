<template>
  <header class="header">
    <container class="header__container">
      <header-menu class="mobile__menu" v-if="menuOpened"></header-menu>
      <div class="header__mobile-menu-container">
        <h2 class="header__title">
          <a href="/" class="header__logo-link"
            >Проект Благотворительного Фонда Константина Хабенского
          </a>
        </h2>
        <header-menu class="header__menu"></header-menu>
        <mobile-icon />
      </div>
    </container>
  </header>
</template>

<script>
import Menu from '@/components/ui/Menu.vue';
import MobileIcon from '@/components/ui/MobileIcon.vue';
import Container from '@/components/ui/Container.vue';
export default {
  components: {
    'header-menu': Menu,
    container: Container,
    'mobile-icon': MobileIcon,
  },
  computed: {
    menuOpened() {
      const { menu } = this.$store.state;
      return menu.menuOpened;
    },
  },
  methods: {
    toggleMenu() {
      this.$store.commit('menu/toggleMenu');
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
  border-bottom: 1px solid #efefef;
}
.header__mobile-menu-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.header__container {
  display: flex;
  justify-content: space-between;
}
@media screen and (max-width: 768px) {
  .header__container {
    display: grid;
    grid-template-columns: 1fr;
  }
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
  display: unset;
}
@media screen and (max-width: 768px) {
  .header__menu {
    display: none;
  }
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
