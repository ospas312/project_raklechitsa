<template>
  <section class="intro">
    <div class="intro__wrapper">
      <h1 class="intro__title">&#35;РАКЛЕЧИТСЯ</h1>
      <my-button class="intro__jump" :class="'button_type_jump'"></my-button>
    </div>
  </section>
</template>

<script>
import Button from '@/components/ui/Button.vue';
export default {
  components: {
    'my-button': Button,
  },
  data() {
    return {
      //iframeUrl:
      //'https://www.youtube.com/embed/Ynh9rkHhxyQ?controls=0&showinfo=0&rel=0&autoplay=1&mute=1&loop=1&playlist=Ynh9rkHhxyQ',
    };
  },
};
</script>

<style scoped>
.intro {
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: rgba(97, 58, 147, 1);
}

.intro__wrapper {
  max-width: 1440px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  justify-items: center;
}

.intro__title {
  grid-row: 1 / -1;
  grid-column: 1 / -1;
  margin: 290px 0;
  font-style: normal;
  font-weight: 800;
  font-size: 92px;
  line-height: 111px;
  text-align: center;
  color: #ffffff;
  transition: 0.3s;
}

.intro__jump {
  grid-row: 1 / -1;
  grid-column: 1 / -1;
  align-self: flex-end;
  margin-bottom: 40px;
}

@media screen and (max-width: 1439px) {
  .intro__title {
    font-size: calc(6.389vw - 4px);
    line-height: 7.75vw;
  }
}

@media screen and (max-width: 1280px) {
  .intro__title {
    font-size: 78px;
    line-height: 94px;
    margin: 263px 0;
  }
}

@media screen and (max-width: 1024px) {
  .intro__title {
    font-size: calc(7vw + 5px);
    line-height: 7.4vw;
    margin: 223px 0;
  }
}

@media screen and (max-width: 768px) {
  .intro__title {
    font-size: 8.334vw;
    line-height: 77px;
    margin: 351px 0;
  }
}

@media screen and (max-width: 480px) {
  .intro__title {
    font-size: 36px;
    line-height: 44px;
    margin: 218px 0;
  }
  .intro__jump {
    margin-bottom: 30px;
  }
}
</style>
