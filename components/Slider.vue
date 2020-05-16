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
  </section>
</template>

<script>
export default {};
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
  background-image: url("data:image/svg+xml,%3Csvg width='10' height='18' viewBox='0 0 10 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 17L9 9L1 1' stroke='black'/%3E%3C/svg%3E%0A");
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
  background-image: url("data:image/svg+xml,%3Csvg width='10' height='18' viewBox='0 0 10 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 1L1 9L9 17' stroke='%23BFBFBF'/%3E%3C/svg%3E%0A");
  background-position: center;
  background-color: #fbfbfb;
  background-repeat: no-repeat;
  cursor: pointer;
}

.slider__video-overlay {
  width: 100%;
  padding-bottom: calc(150 * 100% / 289);
  position: relative;
  background-color: #fbfbfb;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
}

.slider__btn-play {
  background-image: url("data:image/svg+xml,%3Csvg width='90' height='90' viewBox='0 0 90 90' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath opacity='0.8' fill-rule='evenodd' clip-rule='evenodd' d='M45 90C69.8528 90 90 69.8528 90 45C90 20.1472 69.8528 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8528 20.1472 90 45 90ZM36.0659 63.8536L63.3131 46.6923C64.5586 45.9078 64.5586 44.0922 63.3131 43.3077L36.0659 26.1464C34.734 25.3076 33 26.2647 33 27.8387V62.1613C33 63.7353 34.734 64.6924 36.0659 63.8536Z' fill='%23CECECE'/%3E%3C/svg%3E%0A");
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
    background-image: url("data:image/svg+xml,%3Csvg width='76' height='76' viewBox='0 0 76 76' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath opacity='0.8' fill-rule='evenodd' clip-rule='evenodd' d='M38 76C58.9868 76 76 58.9868 76 38C76 17.0132 58.9868 0 38 0C17.0132 0 0 17.0132 0 38C0 58.9868 17.0132 76 38 76ZM53.0477 39.6926C54.2932 38.9082 54.2932 37.0925 53.0477 36.308L30.9338 22.3799C29.6019 21.541 27.8679 22.4982 27.8679 24.0722V51.9284C27.8679 53.5024 29.6019 54.4596 30.9338 53.6208L53.0477 39.6926Z' fill='%23CECECE'/%3E%3C/svg%3E%0A");
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

@media screen and (max-width: 788px) {
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
    padding-bottom: calc(150 * 75% / 289);
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
      background-image: url("data:image/svg+xml,%3Csvg width='38' height='39' viewBox='0 0 38 39' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath opacity='0.8' fill-rule='evenodd' clip-rule='evenodd' d='M19 38.6987C29.4934 38.6987 38 30.1921 38 19.6987C38 9.20532 29.4934 0.69873 19 0.69873C8.50659 0.69873 0 9.20532 0 19.6987C0 30.1921 8.50659 38.6987 19 38.6987ZM25.1808 21.3912C26.4263 20.6067 26.4263 18.791 25.1808 18.0066L17.0002 12.8542C15.6684 12.0153 13.9344 12.9725 13.9344 14.5465V24.8513C13.9344 26.4253 15.6684 27.3824 17.0002 26.5436L25.1808 21.3912Z' fill='%23CECECE'/%3E%3C/svg%3E%0A");
      height: 38px;
      width: 38px;
      top: calc(50% - (38px / 2));
      left: calc(50% - (38px / 2));
    }
  }
}
</style>
