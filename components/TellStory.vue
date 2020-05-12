<template>
  <section class="tell-story">
    <div class="tell-story__content">
      <div class="tell-story__content_left">
        <my-title class="tell-story__title">Расскажите свою историю</my-title>
        <div class="tell-story__content_left-column">
          <p class="tell-story__subtitle">
            Мы публикуем новые истории на сайте раз в неделю. Есть 2 варианта
            поделиться своей историей неизлечимых привычек, навязчивых идей и
            болезненных привязанностей.
          </p>
          <div class="tell-story__variants">
            <button
              v-for="tab in tabs"
              v-bind:key="tab.id"
              v-bind:class="[
                'tell-story__variant',
                { 'tell-story__variant_active': currentTab.id === tab.id },
              ]"
              v-on:click="currentTab = tab"
            >
              {{ tab.id }}-й вариант
            </button>
          </div>
        </div>
      </div>
      <div class="tell-story__content_right">
        <p class="tell-story__info">{{ currentTab.text }}</p>
        <Button
          class="tell-story__button"
          :buttonText="button"
          @btnClick="$emit('btnClick')"
        ></Button>
      </div>
    </div>
  </section>
</template>

<script>
let tabs = [
  {
    id: 1,
    text:
      'Заполнить подробную форму прямо на сайте и мы опубликуем вашу историю после проверки. Пожалуйста, заполняйте все пункты корректно, если вы испытаете какие-то сложности, воспользуйтесь 2' +
      '\u2011' +
      'м вариантом.',
  },
  {
    id: 2,
    text:
      'Оставить контакт (почту или номер телефона) и мы свяжемся с вами, зададим вопросы, уточним детали вашей истории.',
  },
];
import Button from '@/components/ui/Button';
import SectionTitle from '@/components/ui/SectionTitle.vue';
export default {
  components: {
    'my-title': SectionTitle,
    Button,
  },
  data() {
    return {
      tabs: tabs,
      currentTab: tabs[0],
      button: 'Заполнить форму',
    };
  },
};
</script>

<style scoped>
.tell-story {
  max-width: 1440px;
  width: 100%;
  padding: 100px 60px;
  background-color: #f7f7f7;
  display: flex;
  color: #666666;
  font-size: 18px;
  box-sizing: border-box;
}
.tell-story__content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.tell-story__button {
  width: 280px;
  height: 52px;
  background-color: #613a93;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #ffffff;
  border: none;
  cursor: pointer;
}
.tell-story__button:hover {
  opacity: 0.9;
}

.tell-story__title {
  width: 65%; /* это неправильно */
}
.tell-story__subtitle {
  width: 54%;
  margin: 0;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  line-height: 22px;
}
.tell-story__content_left {
  width: calc((100% - 40px) / 2);
}
.tell-story__content_left-column {
  display: flex;
  margin: 32px 0 0 0;
  justify-content: space-between;
}
.tell-story__content_right {
  width: calc((100% - 40px) / 2);
  display: flex;
  flex-direction: column;
}
.tell-story__variants {
  display: flex;
  flex-direction: column;
}
.tell-story__variant {
  text-decoration: none;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  line-height: 22px;
  text-align: right;
  color: #a2a2a2;
  background: #f7f7f7;
  border: none;
  outline: none;
  cursor: pointer;
}
.tell-story__variant:hover {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  line-height: 22px;
  text-align: right;
  color: #000000;
}
.tell-story__variant_active {
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  text-align: right;
  color: #000;
}
.tell-story__info {
  min-height: 88px;
  margin: 104px 0 78px 0;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  line-height: 22px;
}
@media screen and (max-width: 1440px) and (min-width: 1280px) {
  .tell-story__content {
  }
  .tell-story__title {
    font-size: 28px;
    line-height: 32px;
  }
  .tell-story__subtitle {
    font-size: 16px;
    line-height: 20px;
  }
  .tell-story__button {
    width: 230px;
    height: 48px;
  }
}

@media screen and (max-width: 1280px) {
  .tell-story {
    padding: 80px 50px;
  }
}

@media screen and (max-width: 1024px) {
  .tell-story {
    padding: 80px 50px;
  }
}

@media screen and (max-width: 768px) {
  .tell-story {
    padding: 80px 40px;
  }
}

@media screen and (max-width: 480px) {
  .tell-story {
    padding: 60px 30px;
  }
}

@media screen and (max-width: 320px) {
  .tell-story {
    padding: 50px 15px;
  }
}
</style>
