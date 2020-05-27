<template>
  <section class="slider">
    <container>
      <div class="slider__wrap">
        <div class="slider__container">
          <div class="slider__text-column">
            <div class="slider__text-container">
              <h2 class="slider__title">
                {{ getTitle }}
              </h2>
              <p class="slider__text">
                {{ getText }}
              </p>
            </div>
            <div class="slider__btn-container">
              <button class="slider__btn-back swiper-button_prev" />
              <button class="slider__btn-forward swiper-button_next" />
            </div>
          </div>
          <div class="slider__video-column">
            <swiper :videos="videos" />
            <button class="slider__btn-play" />
            <div class="slider__btn-video-container">
              <button class="slider__btn-back swiper-button_prev" />
              <button class="slider__btn-forward swiper-button_next" />
            </div>
            <p class="slider__video-caption" v-html="getCaption"></p>
          </div>
        </div>
      </div>
      <slogan class="slider__slogan">
        <template #slogan-text>И В ОТЛИЧИЕ ОТ РАКА,&nbsp;</template>
        <template #slogan-hashtag>#ЭТОНЕЛЕЧИТСЯ</template>
      </slogan>
    </container>
  </section>
</template>

<script>
import Slogan from '@/components/ui/Slogan';
import Container from '@/components/ui/Container';
import Swiper from '@/components/ui/Swiper';

export default {
  components: {
    swiper: Swiper,
    slogan: Slogan,
    container: Container,
  },
  computed: {
    videos() {
      return this.$store.getters['video/getVideos'];
    },
    getBlock() {
      return this.$store.state.blocks.blocks.find(el => el.block === 'videos');
    },
    getTitle() {
      return this.getBlock.title;
    },
    getText() {
      return this.getBlock.text.replace(/<\/?p[^>]*>/g, '');
    },
    getCaption() {
      return this.getBlock.note.replace(
        'YouTube канале.',
        `<a href="https://www.youtube.com/channel/UCcxMSzN1R4JfW1vLu3swCaQ" target="_blank">YouTube канале.</a>`
      );
    },
  },
};
</script>

<style scoped>
.slider__video-caption >>> a {
  color: #666666;
}

.slider {
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
}
.slider__wrap {
  display: flex;
  flex-direction: column;
  margin-bottom: 74px;
}
.slider__container {
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
  box-sizing: border-box;
}
.slider__text-column {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 443px;
  margin-right: 10px;
}
.slider__text-container {
  display: flex;
  flex-direction: column;
}
.slider__title {
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  margin-bottom: 32px;
  margin-top: 0;
  max-width: 413px;
}
.slider__text {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #666666;
  max-width: 340px;
  margin-top: 0;
  margin-bottom: 0;
  max-width: 343px;
}
.slider__btn-container {
  display: flex;
  margin-bottom: 26px;
}
.slider__btn-video-container {
  display: none;
}
.slider__btn-forward {
  width: 40px;
  height: 40px;
  box-shadow: none;
  border: none;
  background-image: url('../assets/images/forward.svg');
  background-position: center;
  background-color: #fbfbfb;
  background-repeat: no-repeat;
  cursor: pointer;
  outline: none;
}
.slider__btn-back {
  width: 40px;
  height: 40px;
  background-color: #fbfbfb;
  box-shadow: none;
  border: none;
  background-image: url('../assets/images/back.svg');
  background-position: center;
  background-color: #fbfbfb;
  background-repeat: no-repeat;
  cursor: pointer;
  outline: none;
}

.slider__btn-play {
  background-image: url('../assets/images/play.svg');
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
}
.slider__btn-play:hover {
  background-image: url('../assets/images/playButtonHover.svg');
}
.slider__video-column {
  width: 100%;
  position: relative;
  max-width: 867px;
  overflow: hidden;
}
.slider__video {
  border: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.slider__video-caption {
  margin-top: 10px;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: #666666;
  top: 100%;
  margin-bottom: 0;
}

@media screen and (max-width: 1280px) {
  .slider__title {
    font-size: 28px;
    line-height: 32px;
    max-width: 367px;
  }
  .slider__btn-play {
    width: 76px;
    height: 76px;
    background-image: url('../assets/images/playMedium.svg');
    top: calc(50% - (76px / 2));
    left: calc(50% - (76px / 2));
  }
  .slider__text {
    font-size: 16px;
    line-height: 20px;
    max-width: 305px;
  }
  .slider__container {
    margin-top: 90px;
  }

  .slider__text-column {
    min-width: 367px;
    margin-right: 40px;
  }
}
@media screen and (max-width: 1024px) {
  .slider__title {
    font-size: 24px;
    line-height: 28px;
    max-width: 288px;
  }
  .slider__text {
    font-size: 13px;
    line-height: 16px;
    max-width: 260px;
  }
}
.slider__text-column {
  min-width: 288px;
  margin-right: 30px;
}
@media screen and (max-width: 768px) {
  .slider {
    align-items: center;
  }
  .slider__wrap {
    align-items: center;
    margin-bottom: 80px;
  }
  .slider__container {
    flex-direction: column;
    align-items: center;
    margin-top: 80px;
    width: 100%;
  }
  .slider__text-column {
    min-width: none;
    margin-bottom: 60px;
    margin-right: 0;
  }
  .slider__title {
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    margin-bottom: 26px;
    max-width: 380px;
  }
  .slider__text {
    font-size: 13px;
    line-height: 16px;
    max-width: 380px;
  }
  .slider__video-caption {
    margin-left: 54px;
  }
  .slider__btn-container {
    display: none;
  }
  .slider__video-column {
    width: 100%;
    margin: 0;
    position: relative;
    overflow: visible;
  }

  .slider__btn-video-container {
    display: flex;
    position: absolute;
    width: 100%;
    justify-content: space-between;
    top: calc(50% - 20px);
    left: auto;
    right: auto;
    z-index: 1;
  }
  .slider__video-caption {
    position: absolute;
    left: 54;
    top: 100%;
  }
  @media screen and (max-width: 600px) {
    .slider__wrap {
      margin-bottom: 50px;
    }
    .slider__title {
      font-size: 18px;
      line-height: 21px;
      text-align: left;
    }
    .slider__text {
      font-size: 13px;
      line-height: 16px;
    }
    .slider__video-caption {
      display: none;
    }
    .slider {
      width: 100%;
      margin: auto;
    }
    .slider__container {
      width: 100%;
    }
    .slider__text-column {
      width: 100%;
    }
    .slider__video-column {
      width: 100%;
    }
    .slider__video-caption {
      width: 100%;
    }

    .slider__btn-play {
      background-image: url('../assets/images/playSmall.svg');
      width: 38px;
      height: 38px;
      top: calc(50% - (38px / 2));
      left: calc(50% - (38px / 2));
    }
  }
}
</style>
