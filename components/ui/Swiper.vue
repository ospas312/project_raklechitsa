<template>
  <swiper
    ref="mySwiper"
    class="swiper__slider"
    :options="swiperOption"
    @from-edge="handleDisabled"
    @reach-end="handleBtnNext"
    @reach-beginning="handleBtnBack"
    @slide-change="slideChange"
  >
    <swiper-slide v-for="video in videos" :key="video.id" class="swiper__slide">
      <button v-if="hideVideo" class="slider__btn-play" @click="hideVideos" />
      <transition name="fade">
        <img
          v-if="hideVideo"
          class="swiper__slide-wrap"
          :src="getVideoOverlay(video)"
          :alt="video.id"
        />
      </transition>
      <video-iframe :src="video.url" />
      <slot />
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
      hideVideo: true,
      swiperOption: {
        navigation: {
          disabledClass: 'swiper-button__disabled',
          nextEl: '.slider__btn-forward',
          prevEl: '.slider__btn-back',
        },
        spaceBetween: 0,
        effect: 'coverflow',
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
      },
      on: {},
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {},
  methods: {
    getVideoOverlay(video) {
      return `/video/${video.id}.jpg`;
    },
    slideChange() {
      this.hideVideo = true;
    },
    handleDisabled() {
      document.querySelectorAll('#nav-button').forEach(btn => {
        btn.classList.remove(
          'slider__btn-forward_disabled',
          'slider__btn-back_disabled'
        );
      });
    },
    handleBtnNext() {
      document.querySelectorAll('.slider__btn-forward').forEach(btn => {
        btn.classList.add('slider__btn-forward_disabled');
      });
    },
    handleBtnBack() {
      document.querySelectorAll('.slider__btn-back').forEach(btn => {
        btn.classList.add('slider__btn-back_disabled');
      });
    },
    reach() {
      console.log('edge');
      document.querySelectorAll('.slider__btn-forward').forEach(el => {
        el.classList.add('slider__btn-forward_disabled');
      });
    },
    hideVideos() {
      this.hideVideo = false;
    },
  },
};
</script>

<style scoped>
.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter {
  opacity: 0;
}

.fade-leave-to {
  opacity: 0;
}

.swiper__slide-wrap {
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
}

.slider__btn-play {
  background-image: url('/play.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-color: transparent;
  width: 90px;
  height: 90px;
  border: none;
  position: absolute;
  top: calc(50% - 45px);
  left: calc(50% - 45px);
  padding: 0;
  cursor: pointer;
  border-radius: 50%;
  background-size: contain;
  z-index: 20;
  outline: none;
}

.slider__btn-play:hover {
  background-image: url('/playButtonHover.svg');
}

@media screen and (max-width: 1280px) {
  .slider__btn-play {
    width: 76px;
    height: 76px;
    background-image: url('/playMedium.svg');
    top: calc(50% - (76px / 2));
    left: calc(50% - (76px / 2));
  }
}

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
  .swiper-button_next {
    background-color: transparent;
  }
  .swiper-button_prev {
    background-color: transparent;
  }

  .slider__btn-play {
    background-image: url('/playSmall.svg');
    width: 38px;
    height: 38px;
    top: calc(50% - (38px / 2));
    left: calc(50% - (38px / 2));
  }
}
</style>
