<template>
  <header class="header">
    <h2 class="header__title">
      Проект Благотворительного Фонда Константина Хабенского
    </h2>
    <header-menu class="header__menu"></header-menu>
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
  max-width: 1440px;
  min-width: 320px;
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

.header__title {
  max-width: 340px;
  min-height: 40px;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: black;
  margin-left: 60px;
}

.header__menu {
  margin-right: 60px;
}
</style>
