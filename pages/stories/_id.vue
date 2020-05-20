<template>
  <section class="full-story">
    <container>
      <div class="full-story__container">
        <img
          class="full-story__image"
          :src="currentStory[0].storyImageSrcData"
          :alt="currentStory[0].storyImageAltData"
        />
        <div class="full-story__content">
          <p class="full-story__author">
            {{ `${currentStory[0].storyTitleData}:` }}
            <span class="full-story__quote">{{
              currentStory[0].storyQuoteData
            }}</span>
          </p>
          <div class="full-story__inner-container">
            <a href="#" class="full-story__share"
              >Поделитесь &UpperRightArrow;</a
            >
            <p class="full-story__date">{{ currentStory[0].storyDateData }}</p>
          </div>
        </div>
      </div>
      <p class="full-story__text">{{ currentStory[0].storytextData }}</p>

      <div class="full-story__flying-borders">
        <a href="#" class="full-story__share-social"
          >Поделитесь этой статьей в своих социальных сетях &UpperRightArrow;</a
        >
      </div>
    </container>
  </section>
</template>

<script>
import Story from '@/components/ui/Story.vue';
import Container from '@/components/ui/Container';
export default {
  components: {
    story: Story,
    container: Container,
  },
  computed: {
    stories() {
      return this.$store.getters['stories/getStories'];
    },
    /* Потом сделаем как у А. Палтуха когда  json будут развернуты на сервере */
    currentStory() {
      return this.stories.filter(item => item['id'] === this.$route.params.id);
    },
  },
};
</script>

<style scoped>
.full-story {
  padding: 100px 0;
}

.full-story__container {
  display: grid;
  grid-template-columns: 580px 1fr;
  column-gap: 60px;
}

.full-story__image {
  width: 580px;
  height: 580px;
}

.full-story__content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-top: 1px solid #efefef;
}
.full-story__author {
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 38px;
  line-height: 48px;
  color: #000000;
  padding: 0;
  margin: 0;
}
.full-story__quote {
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 38px;
  line-height: 48px;
  color: #000000;
  padding: 0;
  margin: 0;
}

.full-story__inner-container {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #efefef;
}

.full-story__share {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  color: #121212;
  text-decoration: none;
  transition: 0.3s;
  padding: 0;
  margin: 0 0 30px 0;
}

.full-story__share:hover {
  opacity: 0.8;
}
.full-story__date {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  text-align: right;
  color: #121212;
  padding: 0;
  margin: 0 0 30px 0;
}
.full-story__text {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 30px;
  color: #000000;
  padding: 130px 270px 70px;
}
.full-story__flying-borders {
  border-top: 1px solid #efefef;
  border-bottom: 1px solid #efefef;
  max-width: 780px;
  margin: 0 auto;
  min-height: 84px;
}
.full-story__share-social {
  max-width: 780px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  color: #121212;
  margin: 30px auto 0px;
  text-decoration: none;
  transition: 0.3s;
  display: block;
}

.full-story__share-social:hover {
  opacity: 0.8;
}
</style>
