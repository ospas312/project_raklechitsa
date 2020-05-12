<template>
  <div class="container">
    <Intro />
    <Slider />
    <Slogan />
    <Stories />
    <Instagram />
    <TellStory @btnClick="popUpTongle"></TellStory>
    <Statistics />
    <About />
    <PopUp v-if="popup_is_opened" @btnClick="popUpTongle"></PopUp>
  </div>
</template>

<script>
import Intro from '@/components/Intro.vue';
import Slider from '@/components/Slider.vue';
import Slogan from '@/components/Slogan.vue';
import Stories from '@/components/Stories.vue';
import Instagram from '@/components/Instagram.vue';
import TellStory from '@/components/TellStory.vue';
import Statistics from '@/components/Statistics.vue';
import About from '@/components/About.vue';
import PopUp from '@/components/ui/PopUp';
export default {
  components: {
    Intro,
    Slider,
    Slogan,
    Stories,
    //Instagram,
    TellStory,
    Statistics,
    About,
    PopUp,
  },
  data() {
    return {
      popup_is_opened: false,
    };
  },
  methods: {
    popUpTongle() {
      this.popup_is_opened = !this.popup_is_opened;
    },
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
