<template>
  <section class="about">
    <div class="about-container">
      <h2 class="about__title">#РАКЛЕЧИТСЯ</h2>
      <!--Очень спорный момент, прямо над этим title, находится тоже h2.
      Но тот что выше, очень похож на тот, что в intro, который h1-->
      <my-title class="about__subtitle" :class="'section-title_place_about'"
        >О проекте</my-title
      >
      <div class="about__text-container">
        <p class="about__description-text about__description-text_creators">
          Этот проект был создан благотворительным фондом Константина
          Хабенского.
        </p>
        <div class="about__description-container">
          <ul class="about__link-list">
            <li class="about__link-item">
              <a class="about__link about__link_white" href="#">Рак Лечится</a>
            </li>
            <li class="about__link-item">
              <a class="about__link about__link_grey" href="#"
                >Фонд Хабенского</a
              >
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
import SectionTitle from '@/components/ui/SectionTitle.vue';
export default {
  components: {
    'my-title': SectionTitle,
  },
};
</script>

<style scoped>
.about {
  background: #613a93;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}

.about-container {
  max-width: 1440px;
  width: 100%;
  padding: 90px 60px 100px 60px;
  box-sizing: border-box;
}

.about__title {
  font-style: normal;
  font-weight: 800;
  font-size: 64px;
  line-height: 77px;
  text-align: center;
  color: #ffffff;
  margin: 0 0 73px;
}

.about__subtitle {
  justify-self: start;
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
}

.about__link_grey {
  color: #c9c9c9;
}

.about__link_grey:hover {
  color: #ffffff;
}

.about__link_white {
  color: #ffffff;
}

.about__link_white:hover {
  color: #c9c9c9;
}

.about__description-item:last-of-type {
  margin-bottom: 0;
}

.about__text-description-container {
  max-width: 44%;
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

.about__description-text:last-of-type {
  margin-bottom: 0;
}

.about__description-text_creators {
  max-width: 305px;
}

.about__description-column {
  display: flex;
  flex-direction: column;
  max-width: 640px;
}

.about__description-title-container {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 40px;
}

@media screen and (max-width: 1280px) {
  .about-container {
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

  .about__description-text_creators {
    font-size: 16px;
    line-height: 20px;
  }
}

@media screen and (max-width: 1024px) {
  .about-container {
    padding: 80px 50px;
  }
  .about__description-text {
    font-size: 15px;
    line-height: 19px;
  }
  .about__link {
    font-size: 15px;
    line-height: 19px;
  }
}

@media screen and (max-width: 768px) {
  .about-container {
    padding: 80px 40px;
  }
}

@media screen and (max-width: 480px) {
  .about-container {
    padding: 60px 30px;
  }
}

@media screen and (max-width: 320px) {
  .about-container {
    padding: 50px 15px;
  }
}
</style>
