<template>
  <div class="tell-story">
    <div class="tell-story__content">
      <div class="tell-story__content_left">
        <p class="tell-story__title">Расскажите свою историю</p>
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
        <Button class="asd">Заполнить форму</Button>
      </div>
    </div>
  </div>
</template>

<script>
let tabs = [
  {
    id: 1,
    text:
      'Заполнить подробную форму прямо на сайте и мы опубликуем вашу историю после проверки. Пожалуйста, заполняйте все пункты корректно, если вы испытаете какие-то сложности, воспользуйтесь 2-м вариантом.',
  },
  {
    id: 2,
    text:
      'Оставить контакт (почту или номер телефона) и мы свяжемся с вами, зададим вопросы, уточним детали вашей истории.',
  },
];
import Button from '@/components/ui/Button';
export default {
  components: {
    Button,
  },
  data() {
    return {
      tabs: tabs,
      currentTab: tabs[0],
    };
  },
};
</script>

<style scoped>
/deep/.button__class {
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
}
/deep/.button__class:hover {
  width: 280px;
  height: 52px;
  background: #613a93;
  opacity: 0.9;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #ffffff;
}
.tell-story {
  margin: 0 auto;
  max-width: 1440px;
  background-color: #f7f7f7;
  display: flex;
  color: #666666;
}
.tell-story__content {
  margin: 100px 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.tell-story__title {
  width: 65%;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: #000;
  margin: 0;
}
.tell-story__subtitle {
  width: 53%;
  margin: 0;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
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
  font-size: 18px;
  line-height: 22px;
  text-align: right;
  color: #a2a2a2;
  background: #f7f7f7;
  border: none;
  outline: none;
}
.tell-story__variant:hover {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  text-align: right;
  color: #000000;
}
.tell-story__variant_active {
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
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
  font-size: 18px;
  line-height: 22px;
}
</style>
