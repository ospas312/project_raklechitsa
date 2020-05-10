<template>
  <div class="footer">
    <div class="footer__container">
      <div class="footer__content">
        <h5 class="footer_title">
          Спасибо всем, кто помог состояться этому проекту
        </h5>
        <div class="footer__menu">
          <nuxt-link class="footer__menu_link" to="/">Главная</nuxt-link>
          <nuxt-link class="footer__menu_link" to="/stories">Истории</nuxt-link>
          <Menu />
        </div>
        <div class="footer__socials">
          <p class="footer__social_info">Мы в Инстаграме и Youtube</p>
          <Button
            class="buttonClass"
            :buttonText="button"
            @btnClick="$emit('btnClick')"
          ></Button>
        </div>
      </div>
      <div class="footer__info">
        <p class="footer__info_name">Рак Лечится 2020</p>
        <p class="footer__info_create">Сделано студентами Яндекс Практикум</p>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/ui/Button';
export default {
  components: {
    Button,
  },
  data() {
    return {
      button: 'Поделитесь' + '\u2197',
    };
  },
};
</script>

<style scoped>
.footer {
  width: 1440px;
  background-color: #fbfbfb;
  margin: 0 auto;
  display: flex;
  font-size: 18px;
}
.footer__container {
  margin: 60px;
  display: flex;
  flex-direction: column;
  width: 100%;
  color: #000000;
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
  margin: 0;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
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
.buttonClass {
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
.buttonClass:hover {
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
    width: 1280px;
    font-size: 16px;
  }
  .footer__container {
    margin: 50px;
  }
  .footer_title {
    width: 26%;
    font-size: 28px;
    line-height: 32px;
  }
  .footer__content {
    margin-bottom: 104px;
  }
  .buttonClass {
    font-size: 16px;
  }
}
</style>
