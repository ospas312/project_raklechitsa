<template>
  <div class="footer">
    <div class="footer__container">
      <div class="footer__content">
        <my-title class="footer_title"
          >Спасибо всем, кто помог состояться этому проекту</my-title
        >
        <div class="footer__menu">
          <nuxt-link class="footer__menu_link" to="/">Главная</nuxt-link>
          <nuxt-link class="footer__menu_link" to="/stories">Истории</nuxt-link>
          <Menu />
        </div>
        <div class="footer__socials">
          <p class="footer__social_info">Мы в Инстаграме и Youtube</p>
          <Button
            class="footer__button"
            :buttonText="button"
            @btnClick="footerpopUpTongle"
          ></Button>
        </div>
      </div>
      <div class="footer__info">
        <p class="footer__info_name">Рак Лечится 2020</p>
        <p class="footer__info_create">Сделано студентами Яндекс Практикум</p>
      </div>
    </div>
    <PopUp v-if="foterpopUp_show" @btnClick="footerpopUpTongle"
      >Footer-PopUp</PopUp
    >
  </div>
</template>

<script>
import SectionTitle from '@/components/ui/SectionTitle.vue';
import Button from '@/components/ui/Button';
import PopUp from '@/components/ui/PopUp';
export default {
  components: {
    'my-title': SectionTitle,
    Button,
    PopUp,
  },
  data() {
    return {
      button: 'Поделитесь' + '\u2197',
      foterpopUp_show: false,
    };
  },
  methods: {
    footerpopUpTongle() {
      this.foterpopUp_show = !this.foterpopUp_show;
    },
  },
};
</script>

<style scoped>
.footer {
  background-color: #fbfbfb;
  display: flex;
  justify-content: center;
  font-size: 18px;
}
.footer__container {
  max-width: 1440px;
  width: 100%;
  padding: 60px;
  display: flex;
  flex-direction: column;
  color: #000000;
  box-sizing: border-box;
}
.footer__content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 110px;
}
.footer__info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.footer_title {
  width: 26%;
}
.footer__socials {
  width: 23%;
}
.footer__social_info {
  margin: 0 0 44px 0;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  line-height: 24px;
}
.footer__button {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  line-height: 24px;
  color: #121212;
  border: none;
  background-color: unset;
  font-size: 18px;
  cursor: pointer;
  padding: 0;
  outline: none;
}
.footer__button:hover {
  opacity: 0.8;
}
.footer__info_name {
  margin: 0;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  line-height: 18px;
  color: #898989;
}
.footer__info_create {
  margin: 0;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  line-height: 18px;
  color: #898989;
}
.footer__menu {
  width: 36%;
}
.footer__menu_link {
  text-decoration: none;
  margin-right: 40px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  line-height: 24px;
  color: #000000;
}
@media screen and (max-width: 1440px) and (min-width: 1280px) {
  .footer {
    font-size: 16px;
  }
  .footer__container {
    padding: 50px;
  }
  .footer_title {
    width: 26%;
  }
  .footer__content {
    margin-bottom: 104px;
  }
  .footer__button {
    font-size: 16px;
  }
}

@media screen and (max-width: 1024px) {
  .footer__container {
    padding: 50px;
  }
}

@media screen and (max-width: 768px) {
  .footer__container {
    padding: 50px;
  }
}

@media screen and (max-width: 480px) {
  .footer__container {
    padding: 50px 30px;
  }
}

@media screen and (max-width: 320px) {
  .footer__container {
    padding: 50px 15px;
  }
}
</style>
