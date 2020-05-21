<template>
  <section class="about">
    <container>
      <div class="about__container">
        <h2 class="about__title">
          {{ getTitle }}
        </h2>
        <p class="about__subtitle">
          О проекте
        </p>
        <div class="about__text-container">
          <p class="about__description-creators">
            {{ getSubtitle }}
          </p>
          <div class="about__description-container">
            <ul class="about__creators-list">
              <li
                v-for="aboutCreators in getText"
                :id="aboutCreators.id"
                :key="aboutCreators.id"
                class="about__list-item"
                @click="toggleTextState($event)"
              >
                {{ aboutCreators.title }}
              </li>
            </ul>
            <div class="about__description-column">
              <p class="about__description" v-html="defaultText" />
            </div>
          </div>
        </div>
      </div>
    </container>
  </section>
</template>
<script>
import Container from '@/components/ui/Container';

export default {
  components: {
    container: Container,
  },

  data() {
    return {
      defaultText: this.$store.state.about.extraTexts[0].text,
    };
  },
  computed: {
    getText() {
      return this.$store.getters['about/getAboutExtraTexts'];
    },
    getTitle() {
      return this.$store.getters['about/getTextTitle'];
    },
    getSubtitle() {
      return this.$store.getters['about/getTextSubtitle'];
    },
  },
  methods: {
    toggleTextState(event) {
      this.defaultText = this.$store.state.about.extraTexts[
        event.target.id - 1
      ].text;
    },
  },
};
</script>
<style scoped>
::v-deep br {
  margin-bottom: 20px;
}

.about {
  background: #613a93;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  padding-top: 90px;
  padding-bottom: 90px;
}

.about__container {
  max-width: 1440px;
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

.about__creators-list {
  margin: 0 40px 0 0;
  list-style: none;
  padding: 0;
}

.about__list-item {
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
  margin-bottom: 10px;
  text-align: right;
}

.about__list-item:hover {
  color: #fff;
}

.about__description-item:last-of-type {
  margin-bottom: 0;
}

.about__description {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #dedede;
  margin-top: 0;
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
    padding: 80px 0 90px 0;
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

  .about__list-item {
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

  .about__description-column {
    max-width: 470px;
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

  .about__creators-list {
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

  .about__list-item {
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

  .about__list-item {
    position: relative;
    margin-right: 30px;
    margin-bottom: 0;
  }

  .about__creators-list {
    margin-right: 0;
    margin-bottom: 30px;
  }

  .about__list-item:last-of-type {
    margin-right: 0;
  }

  .about__list-item:hover::after {
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
    width: 100%;
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
  .about__creators-list {
    margin-bottom: 20px;
  }

  .about__description-text {
    font-size: 15px;
    line-height: 19px;
  }
}
</style>
