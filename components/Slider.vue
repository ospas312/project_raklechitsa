<template>
  <section class="slider">
    <div class="slider__container">
      <div class="slider__text-column">
        <div class="slider__text-container">
          <h2 class="slider__title">
            Истории людей, победивших рак, но не свои привычки
          </h2>
          <p class="slider__text">
            Есть вещи, которые не лечатся. Вещи ставшие частью нашего «я»,
            фобии, страхи. Но это точно не рак. Рак лечится. Лучшее
            доказательство — люди с их историями.
          </p>
        </div>
        <div class="slider__btn-container">
          <button class="slider__btn-back" />
          <button class="slider__btn-forward" />
        </div>
      </div>
      <div class="slider__video-column">
        <div class="slider__video-overlay">
          <iframe src="" class="slider__video" />
          <button class="slider__btn-play" />
        </div>
        <div class="slider__btn-video-container">
          <button class="slider__btn-back" />
          <button class="slider__btn-forward" />
        </div>
      </div>
    </div>
    <p class="slider__video-caption">
      Все видео вы можете найте на нашем
      <a
        class="slider__link"
        href="https://www.youtube.com/channel/UCcxMSzN1R4JfW1vLu3swCaQ"
        target="_blank"
        >YouTube канале.</a
      >
    </p>
    <slogan class="slider__slogan">
      <template #slogan-text>И В ОТЛИЧИЕ ОТ РАКА,&nbsp;</template>
      <template #slogan-hashtag>#ЭТОНЕЛЕЧИТСЯ</template>
    </slogan>
  </section>
</template>

<script>
import Slogan from '@/components/ui/Slogan.vue';
export default {
  components: {
    slogan: Slogan,
  },
};
</script>

<style scoped>
.slider {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1440px;
}

.slider__container {
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
}

.slider__text-column {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 28.6%;
  margin-left: 60px;
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
}

.slider__btn-container {
  display: flex;
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
}

.slider__video-overlay {
  width: 100%;
  padding-bottom: calc(450 * 100% / 867);
  position: relative;
  background-color: #fbfbfb;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
}

.slider__btn-play {
  background-image: url('../assets/images/play.svg');
  background-position: center;
  background-repeat: no-repeat;
  width: 90px;
  height: 90px;
  border: none;
  background-color: transparent;
  position: absolute;
  top: calc(50% - 45px);
  left: calc(50% - 45px);
  padding: 0;
  cursor: pointer;
}
.slider__video-column {
  width: 60%;
  margin-right: 60px;
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
  width: calc(60% + 60px);
  align-self: flex-end;
  margin-bottom: 74px;
}

.slider__link {
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: #666666;
}

@media screen and (max-width: 1280px) {
  .slider__title {
    font-size: 28px;
    line-height: 32px;
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
  }

  .slider__container {
    margin-top: 90px;
  }

  .slider__video-caption {
    margin-bottom: 64px;
    width: calc(60% + 50px);
  }

  .slider__text-column {
    margin-left: 50px;
  }

  .slider__video-column {
    margin-right: 50px;
  }
}

@media screen and (max-width: 1024px) {
  .slider__title {
    font-size: 24px;
    line-height: 28px;
  }

  .slider__text {
    font-size: 13px;
    line-height: 16px;
  }
}

@media screen and (max-width: 768px) {
  .slider {
    align-items: center;
  }

  .slider__container {
    flex-direction: column;
    align-items: center;
    width: 90%;
    margin-top: 80px;
  }

  .slider__text-column {
    width: 55%;
    margin-bottom: 60px;
    margin-left: 0;
  }

  .slider__title {
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    margin-bottom: 26px;
  }

  .slider__text {
    font-size: 13px;
    line-height: 16px;
    max-width: 100%;
  }

  .slider__video-caption {
    width: 90%;
  }

  .slider__btn-container {
    display: none;
  }

  .slider__video-column {
    width: 100%;
    margin: 0;
    display: flex;
    justify-content: center;
    position: relative;
  }

  .slider__video-overlay {
    width: 75%;
    padding-bottom: calc(300 * 75% / 580);
  }

  .slider__btn-video-container {
    display: flex;
    position: absolute;
    width: 100%;
    justify-content: space-between;
    top: calc(50% - 20px);
    left: auto;
    right: auto;
  }

  .slider__video-caption {
    width: calc(90% * 0.75);
    align-self: center;
  }

  @media screen and (max-width: 600px) {
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
      width: 90%;
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
      margin-bottom: 50px;
    }

    .slider__video-caption {
      width: 100%;
    }

    .slider__video-overlay {
      width: 100%;
      padding-bottom: calc(150 * 100% / 289);
    }

    .slider__btn-play {
      background-image: url('../assets/images/playSmall.svg');
      width: 38px;
      top: calc(50% - (38px / 2));
      left: calc(50% - (38px / 2));
    }
  }
}
</style>
