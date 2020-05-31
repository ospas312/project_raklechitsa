<template>
  <div class="tell-story">
    <Container :containerClass="'tell-story__container'">
      <div class="tell-story__content-left">
        <p class="tell-story__title">{{ getBlock.title }}</p>
        <div class="tell-story__content-left tell-story__content-left_row">
          <p class="tell-story__subtitle">
            {{ getBlock.text.replace(/<\/?p[^>]*>/g, '') }}
          </p>
          <div class="tell-story__variants">
            <button
              v-for="tab in getBlock.extraTexts"
              currentTab="tab"
              v-bind:key="tab.id"
              v-bind:class="[
                'tell-story__variant',
                { 'tell-story__variant-active': currentTab.id === tab.id },
              ]"
              v-on:click="currentTab = tab"
            >
              {{ tab.title }}
            </button>
          </div>
        </div>
      </div>
      <div class="tell-story__content-right">
        <p class="tell-story__info">
          {{ currentTab.text.replace(/<\/?p[^>]*>/g, '') }}
        </p>
        <Button
          buttonType="button"
          buttonClass="tell-story__button"
          @btnClick="open"
          >{{ currentTab.id == 1 ? 'Заполнить форму' : 'Отправить' }}</Button
        >
      </div>
    </Container>
  </div>
</template>

<script>
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
export default {
  components: {
    Button,
    Container,
  },
  data() {
    return {
      currentTab: this.$store.state.blocks.blocks.find(
        el => el.block === 'story'
      ).extraTexts[0],
    };
  },
  computed: {
    getBlock() {
      return this.$store.state.blocks.blocks.find(el => el.block === 'story');
    },
  },
  methods: {
    open() {
      if (this.currentTab.id == 1) {
        return this.$store.commit('popup/open');
      }
      return this.$store.commit('popup/openContacts');
    },
    openContacts() {
      return this.$store.commit('popup/openContacts');
    },
  },
};
</script>

<style scoped>
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
.tell-story {
  width: 100%;
  background-color: #f7f7f7;
  color: #666666;
  font-size: 18px;
}
.tell-story__container {
  padding-top: 100px;
  padding-bottom: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.tell-story__title {
  width: 413px;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: #000;
  margin: 0;
}
.tell-story__subtitle {
  width: 340px;
  margin: 0;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  line-height: 22px;
}
.tell-story__content-left {
  width: 640px;
  height: 322px;
}
.tell-story__content-left_row {
  display: flex;
  margin: 32px 0 0 0;
  justify-content: space-between;
}
.tell-story__content-right {
  width: 640px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  font-size: 18px;
}
.tell-story__variant:hover {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  line-height: 22px;
  text-align: right;
  color: #000000;
}
.tell-story__variant-active {
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  text-align: right;
  color: #000;
}
.tell-story__info {
  margin: 104px 0 78px 0;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  line-height: 22px;
}
.tell-story__info:only-child {
  margin: 0;
}
@media screen and (max-width: 1280px) {
  .tell-story__container {
    padding-top: 90px;
    padding-bottom: 90px;
  }
  .tell-story__content-left {
    width: 570px;
    height: 308px;
  }
  .tell-story__content-right {
    width: 570px;
  }
  .tell-story__title {
    width: 367px;
    font-size: 28px;
    line-height: 32px;
  }
  .tell-story__content-left_row {
    margin: 30px 0 0 0;
  }
  .tell-story__subtitle {
    font-size: 16px;
    line-height: 20px;
  }
  .tell-story__button {
    width: 230px;
    height: 48px;
  }
  .tell-story__info {
    margin: 94px 0 78px 0;
  }
}
@media screen and (max-width: 1024px) {
  .tell-story {
    font-size: 15px;
  }
  .tell-story__container {
    padding-top: 80px;
    padding-bottom: 80px;
  }
  .tell-story__content-left {
    width: 447px;
    height: 286px;
  }
  .tell-story__content-right {
    width: 447px;
  }
  .tell-story__title {
    width: 288px;
    font-size: 24px;
    line-height: 28px;
  }
  .tell-story__content-left_row {
    margin: 20px 0 0 0;
  }
  .tell-story__subtitle {
    font-size: 13px;
    line-height: 16px;
    width: 260px;
  }
  .tell-story__variant {
    font-size: 15px;
    line-height: 19px;
  }
  .tell-story__button {
    width: 230px;
    height: 46px;
    font-size: 15px;
    line-height: 18px;
  }
  .tell-story__info {
    line-height: 19px;
    margin: 76px 0 78px 0;
  }
}
@media screen and (max-width: 768px) {
  .tell-story {
    font-size: 15px;
  }
  .tell-story__container {
    padding: 80px 194px;
    display: flex;
    flex-direction: column;
  }
  .tell-story__content-left {
    width: 380px;
    height: 219px;
    display: flex;
    flex-direction: column;
  }
  .tell-story__content-right {
    width: 380px;
    height: 219px;
  }
  .tell-story__title {
    width: 380px;
    text-align: center;
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 26px;
  }
  .tell-story__content-left_row {
    display: flex;
    flex-direction: column;
    margin: 0;
  }
  .tell-story__subtitle {
    width: 380px;
    font-size: 13px;
    line-height: 16px;
  }
  .tell-story__variants {
    display: block;
  }
  .tell-story__variant {
    font-size: 15px;
    line-height: 19px;
    padding: 0;
    margin-right: 30px;
  }
  .tell-story__variant-active {
    border-bottom: solid 2px;
  }
  .tell-story__button {
    width: 230px;
    height: 46px;
    font-size: 15px;
    line-height: 18px;
  }
  .tell-story__info {
    line-height: 19px;
    margin: 30px 0 0px 0;
  }
}
@media screen and (max-width: 321px) {
  .tell-story {
    font-size: 13px;
  }
  .tell-story__container {
    padding: 50px 15px;
    display: flex;
    flex-direction: column;
  }
  .tell-story__content-left {
    width: 290px;
    height: 181px;
  }
  .tell-story__content-right {
    width: 290px;
    height: 181px;
  }
  .tell-story__title {
    width: 290px;
    text-align: center;
    font-size: 18px;
    line-height: 21px;
    margin-bottom: 16px;
  }
  .tell-story__content-left_row {
    display: flex;
    flex-direction: column;
  }
  .tell-story__subtitle {
    width: 290px;
    font-size: 13px;
    line-height: 16px;
    margin-bottom: 40px;
  }
  .tell-story__variants {
    display: block;
    margin-bottom: 20px;
  }
  .tell-story__variant {
    font-size: 13px;
    line-height: 19px;
    padding: 0;
    margin-right: 20px;
  }
  .tell-story__variant-active {
    border-bottom: solid 1px;
  }
  .tell-story__button {
    width: 290px;
    height: 40px;
    font-size: 15px;
    line-height: 18px;
  }
  .tell-story__info {
    line-height: 16px;
    margin: 20px 0 0px 0;
  }
}
</style>
