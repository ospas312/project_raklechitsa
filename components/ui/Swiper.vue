<template>
  <swiper ref="mySwiper" class=" swiper__slider" :options="swiperOption">
    <swiper-slide v-for="video in videos" :key="video.id" class="swiper__slide">
      <video-iframe :src="video.url" />
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
import Iframe from '@/components/ui/Iframe';

export default {
  name: 'VideoSlider',
  title: 'Navigation',
  components: {
    Swiper,
    SwiperSlide,
    'video-iframe': Iframe,
  },
  props: {
    videos: Array,
  },
  data() {
    return {
      swiperOption: {
        navigation: {
          nextEl: '.swiper-button_next',
          prevEl: '.swiper-button_prev',
        },
        spaceBetween: 0,
        loop: true,
      },
    };
  },
};
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .swiper__slider {
    margin-left: 54px;
    margin-right: 54px;
  }
}
@media screen and (max-width: 600px) {
  .swiper__slider {
    margin: 0;
  }
}
</style>
