<template>
  <container>
    <div class="stories-index-container">
      <h2 class="stories__title">Истории неизлечимых привычек</h2>
      <div class="stories__search-container">
        <input class="stories__search-input" type="text" v-model="search" />
        <nxt-button
          class="stories__search-button"
          type="button"
          @click="filteredList"
          >Поиск</nxt-button
        >
      </div>
      <div class="stories__container">
        <story
          v-for="story in filteredList.slice(0, limitPerPageData)"
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
        <stories-nav
          :totalStories="stories.length"
          :limitPerPage="limitPerPageData"
          @onPageChange="changeStartIndex"
        >
        </stories-nav>
      </div>
    </div>
  </container>
</template>

<script>
import Story from '@/components/ui/Story.vue';
import Button from '@/components/ui/Button.vue';
import StoriesNav from '@/components/ui/StoriesNav.vue';
import Container from '@/components/ui/Container';
import SearchInput from '@/components/ui/SearchInput.vue';
export default {
  components: {
    story: Story,
    'nxt-button': Button,
    'stories-nav': StoriesNav,
    container: Container,
    search: SearchInput,
  },
  data() {
    return {
      search: '',
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
    filteredList: function() {
      return this.stories.filter(story => {
        return story.storyTitleData
          .toLowerCase()
          .includes(this.search.toLowerCase());
      });
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
  font-family: 'Inter', monospace;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
.stories__container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 40px;
  row-gap: 70px;
  margin-top: 60px;
}

.stories__search-container {
  margin: 60px 0 70px;
  display: flex;
}

.stories__search-input {
  width: 1074px;
  box-sizing: border-box;
  border: 1px solid #e8e8e8;
  min-height: 52px;
  padding: 0 15px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 20px;
}

.stories__search-button {
  width: 226px;
  min-height: 52px;
  background-color: #613a93;
  color: white;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  margin-left: 20px;
}

.stories__search-button:hover {
  opacity: 0.9;
  transition: opacity 0.3s ease;
}

@media screen and (max-width: 768px) {
  .stories__container {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media screen and (max-width: 600px) {
  .stories__search-button {
    width: 48px;
    color: transparent;
    background-image: url('/search.svg');
    background-repeat: no-repeat;
    background-size: 20px;
    background-position: center;
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
