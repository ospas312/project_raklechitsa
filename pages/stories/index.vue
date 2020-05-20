<template>
  <container>
    <div class="stories-index-container">
      <h2 class="stories__title">Истории неизлечимых привычек</h2>
      <div class="stories__container">
        <story
          v-for="story in storiesToRender"
          :key="story.id"
          :storyImageSrc="story.storyImageSrcData"
          :storyImageAlt="story.storyImageAltData"
          :storyTitle="story.storyTitleData"
          :storyQuote="story.storyQuoteData"
          :storyClass="'story'"
          :storyImageClass="'story__image'"
          :storyTitleClass="'story__title'"
          :storyQuoteClass="'story__quote'"
          @storyClick="storyClickHandler(story.id)"
        />
      </div>
      <stories-nav
        :totalStories="stories.length"
        :limitPerPage="limitPerPageData"
        @onPageChange="changeStartIndex"
      >
      </stories-nav>
    </div>
  </container>
</template>

<script>
import Story from '@/components/ui/Story.vue';
import Button from '@/components/ui/Button.vue';
import StoriesNav from '@/components/ui/StoriesNav.vue';
import Container from '@/components/ui/Container';
export default {
  components: {
    story: Story,
    'nxt-button': Button,
    'stories-nav': StoriesNav,
    container: Container,
  },
  data() {
    return {
      limitPerPageData: 8,
      startIndex: 0,
    };
  },
  computed: {
    stories: function() {
      return this.$store.getters['stories/getStories'];
    },
    /* Потом сделаем как у Палтуха когда  json будут развернуты на сервере */
    currentStory() {
      return this.stories.filter(item => item['id'] === this.$route.params.id);
    },
    totalStories() {
      return this.stories.length;
    },
    pagesAmount() {
      return Math.ceil(this.totalStories / this.limitPerPage);
    },
    storiesToRender() {
      return this.stories.filter(
        (item, index) =>
          index >= this.startIndex &&
          index <= this.startIndex + this.limitPerPageData - 1
      );
    },
  },
  methods: {
    changeStartIndex(index) {
      console.log('on page:', index);
      this.startIndex = (index - 1) * this.limitPerPageData;
    },
    storyClickHandler(id) {
      this.$router.push(`/stories/${id}`);
    },
  },
};
</script>

<style scoped>
.stories-index-container {
  /*max-width: 1440px;
  min-width: 320px;
  margin: 0 auto;*/
  font-family: 'Inter', monospace;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  padding: 100px 60px 100px 60px;
}
.stories__container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 40px;
  row-gap: 70px;
}
@media screen and (max-width: 768px) {
  .stories__container {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
.stories__title {
  margin: 0 0 70px 0;
  max-width: 413px;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  color: #000000;
}
</style>
