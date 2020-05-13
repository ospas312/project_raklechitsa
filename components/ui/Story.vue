<template>
  <div :class="storyClass">
    <img
      :class="storyImageClass"
      :src="storyImageSrc"
      :alt="storyImageAlt"
      @click="$emit('storyClick')"
    />
    <p :class="storyTitleClass">{{ storyTitle }}</p>
    <p :class="storyQuoteClass">{{ storyQuote }}</p>
    <p v-if="storyText != undefined" :class="storyTextClass">{{ storyText }}</p>
  </div>
</template>

<script>
export default {
  props: [
    'storyClass',
    'storyImageClass',
    'storyImageSrc',
    'storyImageAlt',
    'storyTitle',
    'storyQuote',
    'storyTextClass',
    'storyText',
    'storyQuoteClass',
    'storyTitleClass',
  ],
};
</script>

<style scoped>
.story {
  display: flex;
  flex-direction: column;
}

.story_detail {
  flex-direction: row;
}
.story__image {
  width: 100%;
  height: auto;
  object-fit: contain;
  margin-bottom: 20px;
}
.story__image:hover {
  cursor: pointer;
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
/* попробуем закрыть вопрос модификаторами к кажому элементу для страницы с детальной информацией истории */

.story__image-detail {
  width: 580px;
  height: auto;
  object-fit: contain;
}
.story__title-detail {
}
</style>
