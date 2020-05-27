<template>
  <container>
    <section class="stories">
      <h2 class="stories__title">Истории неизлечимых привычек</h2>
      <div class="stories__container">
        <story
          v-for="story in stories.slice(0, storiesOnPage)"
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
      <nxt-button
        @btnClick="$router.push('/stories')"
        :buttonType="button"
        :buttonClass="'stories__button-more'"
        :buttonText="buttonMoreData"
      />
    </section>
  </container>
</template>

<script>
import Story from '@/components/ui/Story.vue';
import Button from '@/components/ui/Button.vue';
import Container from '@/components/ui/Container';
export default {
  components: {
    story: Story,
    'nxt-button': Button,
    container: Container,
  },
  methods: {
    storyClickHandler(id) {
      this.$router.push(`/stories/${id}`);
    },
  },
  computed: {
    stories() {
      return this.$store.getters['stories/getStories'];
    },
  },
  data() {
    return {
      buttonMoreData: 'Больше статей',
      storiesOnPage: 8,
      storiesOnPageDesktop: 8,
      storiesOnPageTabled: 9,
      storiesOnPageMobile: 6,
    };
  },
  mounted: function() {
    /*вешаем слушатель на ресайз окна пусть реагирует, нам не жалко */
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
    /* При загузке станицы выставляем значение */
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
.stories {
  padding: 100px 0;
}
@media screen and (max-width: 1280px) {
  .stories {
    padding: 90px 0;
  }
}

@media screen and (max-width: 1024px) {
  .stories {
    padding: 80px 0;
  }
}

@media screen and (max-width: 320px) {
  .stories {
    padding: 50px 0;
  }
}

.stories__container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 40px;
  row-gap: 70px;
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
  }
}
@media screen and (max-width: 320px) {
  .stories__container {
    grid-template-columns: 1fr;
    column-gap: 20px;
    row-gap: 30px;
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
.stories__button-more {
  width: 100%;
  min-height: 82px;
  margin: 70px auto 0px;
  background-color: #fbfbfb;
  border: 0;
  outline: none;
  padding: 0;
}
@media screen and (max-width: 1280px) {
  .stories__button-more {
    margin: 60px auto 0px;
    min-height: 78px;
  }
}


@media screen and (max-width: 1024px) {
  .stories__button-more {
    margin: 46px auto 0px;
    min-height: 50px;
    font-size: 13px;
    line-height: 20px;
  }
}

.stories__button-more:hover {
  cursor: pointer;
}
</style>
