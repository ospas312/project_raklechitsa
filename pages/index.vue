<template>
  <div class="container">
    <Header />
    <Intro />
    <Slider />
    <Slogan />
    <Stories />
    <Instagram />
    <TellStory />
    <Statistics />
    <About />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Intro from '@/components/Intro.vue';
import Slider from '@/components/Slider.vue';
import Slogan from '@/components/Slogan.vue';
import Stories from '@/components/Stories.vue';
import Instagram from '@/components/Instagram.vue';
import TellStory from '@/components/TellStory.vue';
import Statistics from '@/components/Statistics.vue';
import About from '@/components/About.vue';
import Footer from '@/components/Footer.vue';
export default {
  components: {
    Header,
    Intro,
    Slider,
    Slogan,
    Stories,
    Instagram,
    TellStory,
    Statistics,
    About,
    Footer,
  },
};
</script>

<style>
.container {
  width: 100%;
  min-width: 320px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Inter', monospace;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
</style>
