<template>
  <section class="stories">
    <h2 class="stories__title">Истории неизлечимых привычек</h2>
    <div class="stories__container">
      <story
        v-for="story in stories.slice(0, storiesOnMainPage)"
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
      :buttonType="'button'"
      :buttonClass="'stories__button-more'"
      :buttonText="buttonMoreData"
    />
  </section>
</template>

<script>
import Story from '@/components/ui/Story.vue';
import Button from '@/components/ui/Button.vue';
export default {
  components: {
    story: Story,
    'nxt-button': Button,
  },
  methods: {
    storyClickHandler(id) {
      this.$router.push(`/stories/${id}`);
      console.log('story clicked'); /*debug */
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
      storiesOnMainPage: 8,
    };
  },
};
</script>

<style scoped>
.stories {
  max-width: 1440px;
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
.stories__button-more {
  width: 100%;
  min-height: 82px;
  margin: 70px auto 0px;
  background-color: #fbfbfb;
  border: 0;
  outline: none;
}
.stories__button-more:hover {
  cursor: pointer;
}
</style>
