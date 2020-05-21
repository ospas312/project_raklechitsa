<template>
  <section class="slider">
    <container>
      <div class="slider__wrap">
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
            <p class="slider__video-caption">
              Все видео вы можете найте на нашем
              <a
                class="slider__link"
                href="https://www.youtube.com/channel/UCcxMSzN1R4JfW1vLu3swCaQ"
                target="_blank"
                >YouTube канале.</a
              >
            </p>
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
import Slogan from '@/components/ui/Slogan.vue';
import Container from '@/components/ui/Container';
export default {
  components: {
    slogan: Slogan,
    container: Container,
  },
};
</script>

<style scoped>
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
  position: absolute;
  top: 100%;
  left: 0;
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

  .slider__video-caption {
    margin-bottom: 64px;
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
    left: 54px;
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
    margin-left: 54px;
    margin-right: 54px;
    padding-bottom: calc(300 * 100% / 580);
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
      margin-bottom: 50px;
    }

    .slider__video-caption {
      width: 100%;
    }

    .slider__video-overlay {
      width: 100%;
      padding-bottom: calc(150 * 100% / 289);
      margin: 0;
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
