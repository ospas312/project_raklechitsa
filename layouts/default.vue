<template>
  <div>
    <Header />
    <nuxt />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
export default {
  components: {
    Header,
  },
};
</script>

<style>
/*
html {
  font-family: 'Inter', monospace;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*/
</style>
