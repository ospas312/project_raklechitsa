<template>
  <section class="about">
    <div class="about__container">
      <h2 class="about__title">
        #РАКЛЕЧИТСЯ
      </h2>
      <p class="about__subtitle">
        О проекте
      </p>
      <div class="about__text-container">
        <p class="about__description-creators">
          Этот проект был создан благотворительным фондом Константина
          Хабенского.
        </p>
        <div class="about__description-container">
          <ul class="about__link-list">
            <li class="about__link-item">
              <a class="about__link" href="#">
                Рак Лечится
              </a>
            </li>
            <li class="about__link-item">
              <a class="about__link" href="#"> Фонд Хабенского</a>
            </li>
          </ul>
          <div class="about__description-column">
            <p class="about__description-text">
              Есть вещи, которые не лечатся. Особенности характера, страстные
              увлечения, привычки, ставшие частью нашего «я», фобии, которые мы
              приобрели в детстве. Список можно продолжать до бесконечности, но
              одна болезнь в него точно не войдет. Эта болезнь — рак. Рак
              лечится, и лучшее доказательство — люди с их неизлечимыми
              особенностями, которые сумели победить рак.
            </p>
            <p class="about__description-text">
              Рак лечится — проект Благотворительного Фонда Константина
              Хабенского и Leo Burnett Moscow. С его помощью мы надеемся
              изменить отношение людей к раку и заставить каждого поверить:
              онкологическое заболевание — это не приговор.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>

<style scoped>
.about {
  background: #613a93;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 90px 60px 100px 60px;
  box-sizing: border-box;
}

.about__container {
  max-width: 1320px;
  width: 100%;
}

.about__title {
  font-style: normal;
  font-weight: 800;
  font-size: 64px;
  line-height: 77px;
  text-align: center;
  color: #fff;
  width: 50%;
  margin-top: 0;
  margin-bottom: 73px;
  margin-left: auto;
  margin-right: auto;
}

.about__subtitle {
  justify-self: start;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: #fff;
  margin-top: 0;
  margin-bottom: 32px;
}

.about__text-container {
  display: flex;
  justify-content: space-between;
}

.about__description-container {
  display: flex;
}

.about__link-list {
  margin: 0 40px 0 0;
  list-style: none;
  padding: 0;
}

.about__link-item {
  margin-bottom: 10px;
  text-align: right;
}

.about__link {
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  text-align: right;
  margin-bottom: 10px;
  margin-top: 0;
  text-decoration: none;
  cursor: pointer;
  color: #c9c9c9;
}

.about__link:hover {
  color: #fff;
}

.about__description-item:last-of-type {
  margin-bottom: 0;
}

.about__description-text {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #dedede;
  margin-top: 0;
  margin-bottom: 22px;
}

.about__description-text_disabled {
  display: none;
}

.about__description-text:last-of-type {
  margin-bottom: 0;
}

.about__description-creators {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #dedede;
  margin-top: 0;
  max-width: 305px;
}

.about__description-column {
  display: flex;
  flex-direction: column;
  max-width: 570px;
}

.about__description-title-container {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 40px;
}

@media screen and (max-width: 1280px) {
  .about {
    padding: 80px 50px 90px 50px;
  }

  .about__title {
    font-size: 58px;
    line-height: 70px;
  }

  .about__subtitle {
    font-size: 28px;
    line-height: 32px;
  }

  .about__description-creators {
    font-size: 16px;
    line-height: 20px;
    max-width: 224px;
  }
}

@media screen and (max-width: 1138px) {
  .about__title {
    font-size: 52px;
    line-height: 63px;
  }

  .about__subtitle {
    font-size: 24px;
    line-height: 28px;
  }

  .about__description-text {
    font-size: 13px;
    line-height: 16px;
  }

  .about__link {
    font-size: 15px;
    line-height: 19px;
  }

  .about__description-text {
    font-size: 15px;
    line-height: 19px;
    max-width: 447px;
  }

  .about__description-creators {
    font-size: 13px;
    line-height: 16px;
  }
}

@media screen and (max-width: 768px) {
  .about {
    padding: 0;
  }

  .about__container {
    margin-left: auto;
    margin-right: auto;
    max-width: 380px;
    display: flex;
    flex-direction: column;
    margin-top: 80px;
    margin-bottom: 80px;
  }

  .about__text-container {
    flex-direction: column;
  }

  .about__description-container {
    flex-direction: column;
  }

  .about__link-list {
    display: flex;
  }

  .about__title {
    display: none;
  }

  .about__subtitle {
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    margin-bottom: 26px;
  }

  .about__link {
    font-size: 15px;
    line-height: 19px;
  }

  .about__description-text {
    font-size: 15px;
    line-height: 19px;
  }

  .about__description-creators {
    margin-bottom: 80px;
    font-size: 13px;
    line-height: 16px;
    width: 100%;
  }

  .about__link-item {
    position: relative;
    margin-right: 30px;
    margin-bottom: 0;
  }

  .about__link-list {
    margin-right: 0;
    margin-bottom: 30px;
  }

  .about__link-item:last-of-type {
    margin-right: 0;
  }

  .about__link:hover::after {
    content: '';
    border: 2px solid white;
    margin-top: 5px;
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 100%;
  }
}

@media screen and (max-width: 600px) {
  .about__container {
    width: 90%;
  }

  .about__subtitle {
    text-align: left;
    margin-bottom: 16px;
    font-size: 18px;
    line-height: 21px;
  }

  .about__description-creators {
    margin-bottom: 40px;
    font-size: 13px;
    line-height: 16px;
  }

  .about__link {
    font-size: 13px;
    line-height: 19px;
  }

  .about__text-container {
    width: 100%;
  }
  .about__link-list {
    margin-bottom: 20px;
  }

  .about__description-text {
    font-size: 15px;
    line-height: 19px;
  }
}
</style>
