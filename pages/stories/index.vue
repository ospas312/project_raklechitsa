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
          v-for="story in storiesToRender"
          :key="story.id"
          :storyImageSrc="`${baseUrl}${story.ImageUrl[0].url}`"
          :storyImageAlt="story.author"
          :storyAuthor="story.author"
          :storyTitle="story.title"
          :storyClass="'story'"
          :storyImageClass="'story__image'"
          :storyAuthorClass="'story__author'"
          :storyTitleClass="'story__title'"
          @storyClick="storyClickHandler(story.id)"
        />
      </div>
      <stories-nav
        :totalStories="stories.length"
        :limitPerPage="storiesOnPage"
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
      search: '',
      storiesOnPage: 8,
      startIndex: 0,
      storiesOnPageDesktop: 8,
      storiesOnPageTabled: 9,
      storiesOnPageMobile: 6,
      baseUrl: process.env.BASE_URL,
    };
  },
  beforeMount() {
    this.$store.dispatch('stories/fetchStories');
  },
  computed: {
    stories: function() {
      return this.$store.getters['stories/getStories'];
    },
    currentStory() {
      return this.stories.filter(item => item['id'] === this.$route.params.id);
    },
    totalStories() {
      return this.stories.length;
    },
    pagesAmount() {
      return Math.ceil(this.totalStories / this.storiesOnPage);
    },
    storiesToRender() {
      return this.stories.filter(
        (item, index) =>
          index >= this.startIndex &&
          index <= this.startIndex + this.storiesOnPage - 1
      );
    },
    filteredList: function() {
      // return this.stories.filter(story => {
      //   return story.storyTitleData
      //     .toLowerCase()
      //     .includes(this.search.toLowerCase());
      // });
    },
  },
  methods: {
    changeStartIndex(index) {
      console.log('on page:', index);
      this.startIndex = (index - 1) * this.storiesOnPage;
    },
    storyClickHandler(id) {
      this.$router.push(`/stories/${id}`);
    },
  },
  mounted: function() {
    /*Adding listeners on resizing page */
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        this.storiesOnPage = this.storiesOnPageDesktop;
      }
      if (window.innerWidth <= 768 && window.innerWidth > 320) {
        this.storiesOnPage = this.storiesOnPageTabled;
      }
      if (window.innerWidth <= 320) {
        this.storiesOnPage = this.storiesOnPageMobile;
      }
    });
    /* Setting initiate value on page load */
    if (window.innerWidth > 768) {
      this.storiesOnPage = this.storiesOnPageDesktop;
    }
    if (window.innerWidth <= 768 && window.innerWidth > 320) {
      this.storiesOnPage = this.storiesOnPageTabled;
    }
    if (window.innerWidth <= 320) {
      this.storiesOnPage = this.storiesOnPageMobile;
    }
  },
};
</script>

<style scoped>
.stories-index-container {
  margin: 100px 0 0;
  font-family: 'Inter', monospace;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
.stories__search-container {
  margin: 60px 0 70px;
  display: grid;
  grid-template-columns: 1fr 226px;
  grid-template-rows: 52px;
  column-gap: 20px;
}
@media screen and (max-width: 1280px) {
  .stories__search-container {
    margin: 50px 0 60px;
    grid-template-rows: 48px;
  }
}
@media screen and (max-width: 1024px) {
  .stories__search-container {
    margin: 40px 0 46px;
    grid-template-columns: 1fr 208px;
    grid-template-rows: 46px;
  }
}
@media screen and (max-width: 768px) {
  .stories__search-container {
    margin: 50px 0 60px;
  }
}
@media screen and (max-width: 600px) {
  .stories__search-container {
    grid-template-columns: 1fr 48px;
    column-gap: 6px;
  }
}
.stories__search-input {
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #e8e8e8;
  padding: 0 15px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 20px;
}
.stories__search-button {
  width: 100%;
  background-color: #613a93;
  color: white;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  border: none;
}
@media screen and (max-width: 600px) {
  .stories__search-button {
    width: 100%;
    color: transparent;
    background-image: url('/search.svg');
    background-repeat: no-repeat;
    background-size: 20px;
    background-position: center;
  }
}
.stories__search-button:hover {
  opacity: 0.9;
  transition: opacity 0.3s ease;
}
.stories__container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 40px;
  row-gap: 70px;
  margin-top: 60px;
}
@media screen and (max-width: 1280px) {
  .stories__container {
    column-gap: 40px;
    row-gap: 60px;
  }
}
@media screen and (max-width: 1024px) {
  .stories__container {
    column-gap: 30px;
    row-gap: 46px;
  }
}
@media screen and (max-width: 768px) {
  .stories__container {
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 20px;
    row-gap: 40px;
  }
}
@media screen and (max-width: 600px) {
  .stories__container {
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
    row-gap: 40px;
  }
}
@media screen and (max-width: 320px) {
  .stories__container {
    grid-template-columns: 1fr;
    column-gap: 20px;
    row-gap: 30px;
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
  line-height: 36px;
  color: #000000;
}
@media screen and (max-width: 1280px) {
  .stories__title {
    margin: 0 0 60px 0;
    font-size: 28px;
    line-height: 32px;
  }
}
@media screen and (max-width: 1024px) {
  .stories__title {
    margin: 0 0 46px 0;
    font-size: 24px;
    line-height: 28px;
  }
}
@media screen and (max-width: 768px) {
  .stories__title {
    margin: 0 auto 60px;
    text-align: center;
  }
}
@media screen and (max-width: 320px) {
  .stories__title {
    margin: 0 auto 40px;
    font-size: 18px;
    line-height: 21px;
  }
}
</style>
