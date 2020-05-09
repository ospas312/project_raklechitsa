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
          <p class="footer__social_info">Мы в Фейсбуке, Инстаграме и Youtube</p>
          <a class="footer__social_share" href="">Поделитесь &#8599;</a>
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
export default {};
</script>

<style scoped>
.footer {
  width: 1440px;
  background-color: #fbfbfb;
  margin: 0 auto;
  display: flex;
}
.footer__container {
  margin: 100px 60px;
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
  width: 24%;
}
.footer__social_info {
  margin: 0 0 20px 0;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
}
.footer__social_share {
  text-decoration: none;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  color: #121212;
}
.footer__social_share:hover {
  opacity: 0.8;
}
.footer__info_name {
  margin: 0;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 18px;
  color: #898989;
}
.footer__info_create {
  margin: 0;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
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
  font-size: 18px;
  line-height: 24px;
  color: #000000;
}
@media screen and (max-width: 1440px) and (min-width: 1280px) {
  .footer {
    width: 1280px;
  }
  .footer__container {
    margin: 60px;
  }
}
</style>
