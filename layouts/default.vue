<template>
  <div>
    <Header />
    <nuxt />
    <Footer @btnClick="$emit('btnClick')"></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style>

</style>
