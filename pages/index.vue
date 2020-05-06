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

<style></style>
