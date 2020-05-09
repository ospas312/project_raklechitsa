<template>
  <div class="stories-index-container">
    <h2 class="stories__title">Истории неизлечимых привычек</h2>
    <div class="stories__container">
      <story
        v-for="story in stories"
        :key="story.id"
        :storyImageSrc="story.storyImageSrcData"
        :storyTitle="story.storyTitleData"
        :storyQuote="story.storyQuoteData"
      />
    </div>
    <stories-nav />
  </div>
</template>

<script>
import Story from '@/components/ui/Story.vue';
import Button from '@/components/ui/Button.vue';
import StoriesNav from '@/components/ui/StoriesNav.vue';
export default {
  components: {
    story: Story,
    'nxt-button': Button,
    'stories-nav': StoriesNav,
  },
  data() {
    return {
      buttonMore: 'Больше статей',
      stories: [
        {
          id: '1',
          storyImageSrcData: '/story__image_1.jpg',
          storyImageAltData: 'Альт текст',
          storyTitleData: 'Владимир Тен',
          storyQuoteData:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
        {
          id: '2',
          storyImageSrcData: '/story__image_2.jpg',
          storyImageAltData: 'Альт текст',
          storyTitleData: 'Владимир Позднер',
          storyQuoteData:
            'Я боюсь акул — и, в отличии от рака, это не лечится.',
        },
        {
          id: '3',
          storyImageSrcData: '/story__image_3.jpg',
          storyImageAltData: 'Альт текст',
          storyTitleData: 'Александр Тарханов',
          storyQuoteData:
            'Я не могу победить свою пунктуальность в отличии от рака.',
        },
        {
          id: '4',
          storyImageSrcData: '/story__image_4.jpg',
          storyImageAltData: 'Альт текст',
          storyTitleData: 'Владимир Тен',
          storyQuoteData:
            'Я боюсь акул — и, в отличии от рака, это не лечится.',
        },
        {
          id: '5',
          storyImageSrcData: '/story__image_1.jpg',
          storyImageAltData: 'Альт текст',
          storyTitleData: 'Владимир Тен',
          storyQuoteData:
            'Я боюсь акул — и, в отличии от рака, это не лечится.',
        },
        {
          id: '6',
          storyImageSrcData: '/story__image_2.jpg',
          storyImageAltData: 'Альт текст',
          storyTitleData: 'Владимир Позднер',
          storyQuoteData:
            'Я боюсь акул — и, в отличии от рака, это не лечится.',
        },
        {
          id: '7',
          storyImageSrcData: '/story__image_3.jpg',
          storyImageAltData: 'Альт текст',
          storyTitleData: 'Александр Тарханов',
          storyQuoteData:
            'Я боюсь акул — и, в отличии от рака, это не лечится.',
        },
        {
          id: '8',
          storyImageSrcData: '/story__image_4.jpg',
          storyImageAltData: 'Альт текст',
          storyTitleData: 'Владимир Тен',
          storyQuoteData:
            'Я боюсь акул — и, в отличии от рака, это не лечится.',
        },
        {
          id: '9',
          storyImageSrcData: '/story__image_1.jpg',
          storyImageAltData: 'Альт текст',
          storyTitleData: 'Владимир Тен',
          storyQuoteData:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
        {
          id: '10',
          storyImageSrcData: '/story__image_2.jpg',
          storyImageAltData: 'Альт текст',
          storyTitleData: 'Владимир Позднер',
          storyQuoteData:
            'Я боюсь акул — и, в отличии от рака, это не лечится.',
        },
        {
          id: '11',
          storyImageSrcData: '/story__image_3.jpg',
          storyImageAltData: 'Альт текст',
          storyTitleData: 'Александр Тарханов',
          storyQuoteData:
            'Я не могу победить свою пунктуальность в отличии от рака.',
        },
        {
          id: '12',
          storyImageSrcData: '/story__image_4.jpg',
          storyImageAltData: 'Альт текст',
          storyTitleData: 'Владимир Тен',
          storyQuoteData:
            'Я боюсь акул — и, в отличии от рака, это не лечится.',
        },
        {
          id: '13',
          storyImageSrcData: '/story__image_1.jpg',
          storyImageAltData: 'Альт текст',
          storyTitleData: 'Владимир Тен',
          storyQuoteData:
            'Я боюсь акул — и, в отличии от рака, это не лечится.',
        },
        {
          id: '14',
          storyImageSrcData: '/story__image_2.jpg',
          storyImageAltData: 'Альт текст',
          storyTitleData: 'Владимир Позднер',
          storyQuoteData:
            'Я боюсь акул — и, в отличии от рака, это не лечится.',
        },
        {
          id: '15',
          storyImageSrcData: '/story__image_3.jpg',
          storyImageAltData: 'Альт текст',
          storyTitleData: 'Александр Тарханов',
          storyQuoteData:
            'Я боюсь акул — и, в отличии от рака, это не лечится.',
        },
        {
          id: '16',
          storyImageSrcData: '/story__image_4.jpg',
          storyImageAltData: 'Альт текст',
          storyTitleData: 'Владимир Тен',
          storyQuoteData:
            'Я боюсь акул — и, в отличии от рака, это не лечится.',
        },
      ],
    };
  },
};
</script>

<style scoped>
.stories-index-container {
  max-width: 1440px;
  margin: 0 auto;
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
