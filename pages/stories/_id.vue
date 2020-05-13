<template>
  <div class="full-story">
    <story
      :storyImageSrc="currentStory[0].storyImageSrcData"
      :storyImageAlt="currentStory[0].storyImageAltData"
      :storyTitle="currentStory[0].storyTitleData"
      :storyQuote="currentStory[0].storyQuoteData"
      :storyClass="'story story_detail'"
      :storyImageClass="'story__image-detail'"
      :storyTitleClass="'story__title-detail'"
      :storyQuoteClass="'story__quote-detail'"
      :storyText="currentStory[0].storytextData"
    />
  </div>
</template>

<script>
import Story from '@/components/ui/Story.vue';
export default {
  components: {
    story: Story,
  },
  computed: {
    stories: function() {
      return this.$store.getters['stories/getStories'];
    },
    /* Потом сделаем как у Палтуха когда  json будут развернуты на сервере */
    currentStory: function() {
      return this.stories.filter(item => item['id'] === this.$route.params.id);
    },

    /* дебаг */
    printConsole: function() {
      console.log(this.$route.path);
      console.log(this.$route.params.id);
    },
  },
};
</script>

<style scoped>
.full-story {
  padding: 100px 60px;
}
</style>
