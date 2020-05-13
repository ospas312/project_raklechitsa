<template>
  <section class="intro">
    <div class="intro__wrapper">
      <h1 class="intro__title">&#35;РАКЛЕЧИТСЯ</h1>
      <my-button
        class="intro__jump"
        :type="'button'"
        :class="'button_type_jump'"
      ></my-button>
    </div>
  </section>
</template>

<script>
import Button from '@/components/ui/Button.vue';
export default {
  components: {
    'my-button': Button,
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
  z-index: 1;
}

@media screen and (max-width: 1439px) {
  .intro__title {
    font-size: calc(78px + 14 * ((100vw - 1280px) / (1440 - 1280)));
    line-height: calc(94px + 17 * ((100vw - 1280px) / (1440 - 1280)));
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
    font-size: calc(64px + 13 * ((100vw - 768px) / (1024 - 768)));
    line-height: calc(77px + 17 * ((100vw - 768px) / (1024 - 768)));
    margin: 223px 0;
  }
}

@media screen and (max-width: 768px) {
  .intro__title {
    font-size: calc(36px + 28 * ((100vw - 320px) / (768 - 320)));
    line-height: calc(44px + 33 * ((100vw - 320px) / (768 - 320)));
    margin: 351px 0;
  }
}

@media screen and (max-width: 480px) {
  .intro__jump {
    margin-bottom: 30px;
  }
}

@media screen and (max-width: 320px) {
  .intro__title {
    margin: 218px 0;
  }
}
</style>
