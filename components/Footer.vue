<template>
  <section class="footer">
    <Container :containerClass="containerClass">
      <div class="footer__content">
        <h5 class="footer__title">
          Спасибо всем, кто помог состояться этому проекту
        </h5>
        <div class="footer__menu">
          <nuxt-link class="footer__menu-link" to="/">Главная</nuxt-link>
          <nuxt-link class="footer__menu-link" to="/stories">Истории</nuxt-link>
        </div>
        <div class="footer__social">
          <p class="footer__social-info">Мы в Инстаграме и Youtube</p>
          <Button
            :buttonType="buttonType"
            :buttonClass="buttonClass"
            :buttonText="button"
            @btnClick="footerPopUpToggle"
          ></Button>
        </div>
      </div>
      <div class="footer__info">
        <p class="footer__info-name">Рак Лечится {{ timestamp }}</p>
        <a href="https://praktikum.yandex.ru/" class="footer__info-create"
          >Сделано студентами Яндекс Практикум</a
        >
      </div>
    </Container>
    <PopUp v-if="footerPopUpShow" @btnClick="footerPopUpToggle"
      >Footer-PopUp</PopUp
    >
  </section>
</template>

<script>
import Button from '@/components/ui/Button';
import PopUp from '@/components/ui/PopUp';
import Container from '@/components/ui/Container';
export default {
  components: {
    Button,
    PopUp,
    Container,
  },
  data() {
    return {
      buttonClass: 'footer__button',
      buttonType: 'button',
      button: 'Поделитесь' + '\u2197',
      containerClass: 'footer__container',
      footerPopUpShow: false,
      timestamp: new Date().getFullYear(),
    };
  },
  methods: {
    footerPopUpToggle() {
      this.footerPopUpShow = !this.footerPopUpShow;
    },
  },
};
</script>

<style scoped>
.footer {
  background-color: #fbfbfb;
  font-size: 18px;
  display: flex;
  justify-content: center;
}
.footer__container {
  padding-top: 60px;
  padding-bottom: 60px;
  display: flex;
  flex-direction: column;
  color: #000;
}
.footer__content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 110px;
}
.footer__info {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.footer__title {
  width: 340px;
  margin: 0;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
}
.footer__social {
  width: 300px;
}
.footer__social-info {
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
.footer__info-name {
  margin: 0;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  line-height: 18px;
  color: #898989;
}
.footer__info-create {
  margin: 0;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  line-height: 18px;
  color: #898989;
  text-decoration: none;
}
.footer__menu {
  width: 228px;
  display: flex;
  margin-right: 85px;
}
.footer__menu-link {
  text-decoration: none;
  margin-right: 40px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  line-height: 24px;
  color: #000;
}
@media screen and (max-width: 1280px) {
  .footer {
    font-size: 16px;
  }
  .footer__container {
    padding: 50px;
  }
  .footer__title {
    width: 305px;
    font-size: 28px;
    line-height: 32px;
  }
  .footer__content {
    margin-bottom: 104px;
  }
  .footer__button {
    font-size: 16px;
  }
  .footer__info-name {
    line-height: 16px;
  }
  .footer__menu {
    margin-right: 120px;
  }
  .footer__info-create {
    line-height: 16px;
  }
  .footer__social {
    width: 265px;
    line-height: 21px;
  }
}
@media screen and (max-width: 1024px) {
  .footer {
    font-size: 16px;
  }
  .footer__container {
    padding: 50px;
  }
  .footer__title {
    width: 288px;
    font-size: 24px;
    line-height: 28px;
  }
  .footer__content {
    margin-bottom: 90px;
  }
  .footer__button {
    font-size: 16px;
  }
  .footer__info-name {
    line-height: 18px;
  }
  .footer__menu {
    margin-right: 114px;
  }
  .footer__info-create {
    line-height: 18px;
  }
  .footer__social {
    width: 265px;
    line-height: 21px;
  }
  .footer__social-info {
    margin-bottom: 30px;
  }
}
@media screen and (max-width: 768px) {
  .footer {
    font-size: 16px;
  }
  .footer__container {
    padding: 50px;
  }
  .footer__title {
    width: 268px;
    font-size: 24px;
    line-height: 28px;
  }
  .footer__content {
    margin-bottom: 90px;
  }
  .footer__button {
    font-size: 16px;
  }
  .footer__info-name {
    line-height: 18px;
  }
  .footer__menu {
    margin-right: 0px;
    display: block;
    width: 70px;
  }
  .footer__info-create {
    line-height: 16px;
  }
  .footer__social {
    width: 225px;
    line-height: 21px;
  }
  .footer__social-info {
    margin-bottom: 14px;
  }
}
@media screen and (max-width: 320px) {
  .footer {
    font-size: 13px;
    line-height: 15px;
  }
  .footer__container {
    padding: 50px 15px;
  }
  .footer__title {
    width: 290px;
    font-size: 18px;
    line-height: 21px;
    margin-bottom: 50px;
  }
  .footer__content {
    margin-bottom: 50px;
    flex-direction: column;
  }
  .footer__button {
    font-size: 13px;
    line-height: 15px;
  }
  .footer__info {
    flex-direction: column;
  }
  .footer__info-name {
    line-height: 18px;
    margin-bottom: 10px;
  }
  .footer__menu {
    margin-right: 0px;
    display: block;
    width: 70px;
  }
  .footer__menu-link {
    margin-bottom: 18px;
    display: flex;
    width: 100%;
    line-height: 15px;
  }
  .footer__info-create {
    line-height: 18px;
  }
  .footer__social {
    width: 185px;
    line-height: 15px;
  }
  .footer__social-info {
    margin-bottom: 18px;
    line-height: 15px;
  }
  .footer__info-name {
    margin-bottom: 10px;
  }
}
</style>
