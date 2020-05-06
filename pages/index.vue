<template>
  <div class="container">
    <Header />
    <Intro />
    <Slider />
    <Slogan />
    <Stories />
    <Instagram />
    <Tell_story />
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
import Tell_story from '@/components/Tell_story.vue';
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
    Tell_story,
    Statistics,
    About,
    Footer,
  },
};
</script>

<style></style>
