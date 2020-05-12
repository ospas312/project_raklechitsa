<template>
  <div>
    <story
      v-for="story in stories.slice(0, storiesOnMainPage)"
      :key="story.id"
      :storyImageSrc="story.storyImageSrcData"
      :storyImageAlt="story.storyImageAltData"
      :storyTitle="story.storyTitleData"
      :storyQuote="story.storyQuoteData"
      @storyClick="storyClickHandler(story.id)"
    />

    <p>{{ $route.path }}</p>
  </div>
</template>

<script>
import Story from '@/components/ui/Story.vue';
export default {
  components: {
    story: Story,
  },
  computed: {
    printConsole: function() {
      console.log(this.$route.path);
      console.log(this.$route.params.id);
    },
  },
};
</script>

<style scoped></style>
