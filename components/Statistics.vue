<template>
  <section class="statistics">
    <my-title class="statistics__title statistics__title_place_section"
      >Статистика по онкозаболеваниям</my-title
    >
    <div class="statistics__container">
      <div class="statistics__items">
        <div class="statistics__item">
          <div class="statistics__box">
            <p class="statistics__text">
              Каждый 3-й в стране уверен, что рак неизлечим. А это примерно 48
              918 000 человек.
            </p>
            <progress-bar
              :progress="progress"
              class="statistics__bar"
              :value="1"
              :maxValue="3"
            />
            <my-title class="statistics__title statistics__title_place_item"
              >1 из 3</my-title
            >
            <p class="statistics__author">Левада-Центр 2018</p>
          </div>
        </div>
        <div class="statistics__item">
          <div class="statistics__box">
            <p class="statistics__text">2,6% Россиян имеют онкозаболевания.</p>
            <progress-bar
              :progress="progress"
              class="statistics__bar"
              :value="2.6"
              :maxValue="100"
            />
            <my-title class="statistics__title statistics__title_place_item"
              >3 700 000</my-title
            >
            <p class="statistics__author">Росстат 2018</p>
          </div>
        </div>
        <div class="statistics__item">
          <div class="statistics__box">
            <p class="statistics__text">
              На 28% выросла доля выявления заболеваний на ранней стадии за 10
              лет.
            </p>
            <double-progress-bar
              class="statistics__bar"
              :doubleProgress="doubleProgress"
              :oldValue="55"
              :maxValue="100"
              :newValue="70"
            />
            <my-title class="statistics__title statistics__title_place_item"
              >&#8593;28%</my-title
            >
            <p class="statistics__author">МНИОИ Герцена 2018</p>
          </div>
        </div>
        <div class="statistics__item">
          <div class="statistics__box">
            <p class="statistics__text">
              На 25% снизилась смертность в течение первого года после
              постановки диагноза.
            </p>
            <double-progress-bar
              class="statistics__bar"
              :doubleProgress="doubleProgress"
              :oldValue="70"
              :maxValue="100"
              :newValue="55"
            />
            <my-title class="statistics__title statistics__title_place_item"
              >&#8595;25%</my-title
            >
            <p class="statistics__author">МНИОИ Герцена 2018</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Progress from '@/components/ui/ProgressBar';
import doubleProgress from '@/components/ui/ProgressBarD';
import SectionTitle from '@/components/ui/SectionTitle.vue';
export default {
  components: {
    'my-title': SectionTitle,
    'progress-bar': Progress,
    'double-progress-bar': doubleProgress,
  },
  data() {
    return {
      progress: '',
      doubleProgress: '',
    };
  },
};
</script>

<style scoped>
.statistics {
  max-width: 1440px;
  width: 100%;
  background-color: white;
  color: black;
  box-sizing: border-box;
  padding: 100px 0 100px 60px;
  z-index: 0;
  overflow: hidden;
}
.statistics__container {
  margin-top: 70px;
  overflow-x: auto;
  overflow-y: auto;
}
.statistics__items {
  display: grid;
  margin-right: 60px;
  grid-template-columns: repeat(4, minmax(216px, calc((100% - 8%) / 4)));
  grid-gap: 10px;
  justify-content: space-between;
}

.statistics__item {
  position: relative;
  max-width: 302px;
  width: 100%;
  border: 1px solid #efefef;
  box-sizing: border-box;
  z-index: 1;
}

.statistics__item::after {
  content: '';
  display: block;
  padding-top: 100%;
}

.statistics__box {
  display: grid;
  grid-template-rows: 3fr 1fr 1fr min-content;
  grid-gap: 7.692%;
  padding: 20px;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

.statistics__bar {
}

.statistics__text {
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  margin: 0;
}

.statistics__title {
}

.statistics__title_place_section {
}

.statistics__title_place_item {
  font-size: 2.64vw;
  line-height: 40px;
  justify-self: flex-end;
}

.statistics__author {
  justify-self: flex-end;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  text-align: end;
  margin: 0;
}

@media screen and (max-width: 1280px) {
  .statistics__container {
    margin-top: 50px;
  }
  .statistics {
    padding: 80px 0 80px 50px;
  }
  .statistics__items {
    margin-right: 50px;
  }
}

@media screen and (max-width: 1024px) {
  .statistics {
    padding: 80px 0 80px 50px;
  }
  .statistics__items {
    margin-right: 50px;
  }
  .statistics__container {
    margin-top: 46px;
  }
  .statistics__title_place_item {
    font-size: 26px;
    line-height: 30px;
  }
  .statistics__text {
    font-size: 10px;
    line-height: 14px;
  }
}

@media screen and (max-width: 768px) {
  .statistics {
    padding: 80px 0 80px 40px;
  }
  .statistics__items {
    margin-right: 40px;
  }
  .statistics__title_place_section {
    text-align: center;
    margin: 0 auto;
  }
  .statistics__container {
    margin-top: 60px;
  }
  .statistics__title_place_item {
    font-size: 26px;
    line-height: 30px;
  }
  .statistics__text {
    font-size: 10px;
    line-height: 14px;
  }
}

@media screen and (max-width: 480px) {
  .statistics {
    padding: 60px 0 60px 30px;
  }
  .statistics__items {
    margin-right: 30px;
  }
  .statistics__title_place_section {
    justify-self: flex-start;
    text-align: left;
  }
  .statistics__container {
    margin-top: 45px;
  }
  .statistics__title_place_item {
    font-size: 26px;
    line-height: 30px;
  }
}

@media screen and (max-width: 320px) {
  .statistics {
    padding: 50px 0 50px 15px;
  }
  .statistics__items {
    margin-right: 15px;
  }
  .statistics__container {
    margin-top: 30px;
  }
  .statistics__title_place_item {
    font-size: 26px;
    line-height: 30px;
  }
  .statistics__text {
    font-size: 10px;
    line-height: 14px;
  }
}
</style>
