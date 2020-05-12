<template>
  <header class="header">
    <div class="header__container">
      <h2 class="header__title">
        Проект Благотворительного Фонда Константина Хабенского
      </h2>
      <header-menu class="header__menu"></header-menu>
    </div>
  </header>
</template>

<script>
import Menu from '@/components/ui/Menu.vue';

export default {
  components: {
    'header-menu': Menu,
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: center;
  min-height: 72px;
  font-family: 'Inter', monospace;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.header__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  min-width: 320px;
  width: 100%;
  padding: 0 60px;
  box-sizing: border-box;
}

@media screen and (max-width: 1280px) {
  .header__container {
    padding: 0 50px;
  }
}

.header__title {
  max-width: 340px;
  min-height: 40px;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: black;
  /*margin-left:calc(1440px * 4.16vw); /*60px; */
}

.header__menu {
  /*margin-right: 60px; */
}
</style>
