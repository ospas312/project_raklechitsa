<template>
  <div class="story">
    <img class="story__image" :src="storyImageSrc" :alt="storyImageAlt" />
    <p class="story__title">{{ storyTitle }}</p>
    <p class="story__quote">{{ storyQuote }}</p>
  </div>
</template>

<script>
export default {
  props: ['storyImageSrc', 'storyImageAlt', 'storyTitle', 'storyQuote'],
};
</script>

<style scoped>
.story {
  display: flex;
  flex-direction: column;
}
.story__image {
  width: 100%;
  height: auto;
  object-fit: contain;
  margin-bottom: 20px;
}

.story__title {
  max-width: 300px;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 22px;
  color: #000000;
  margin: 0 0 14px 0;
}

.story__quote {
  max-width: 250px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: #666666;
  margin: 0;
}
</style>
