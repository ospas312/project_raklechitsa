<template>
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
    </div>
    <stories-nav
      v-if="pageID == 1"
      @btnClick="pageSelectorClickHandler"
      :totalStories="stories.length"
      :limitPerPage="limitPerPageData"
    >
    </stories-nav>
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
      search: '',
      limitPerPageData: 8,
      pageID: 1,
      /* переписать пагинацию путем генерации одной ссылки меню в блоке сторис нав */
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
        {
          id: '17',
          storyImageSrcData: '/story__image_1.jpg',
          storyImageAltData: 'Альт текст',
          storyTitleData: 'Владимир Тен',
          storyQuoteData:
            'Я боюсь акул — и, в отличии от рака, это не лечится.',
        },
        {
          id: '18',
          storyImageSrcData: '/story__image_2.jpg',
          storyImageAltData: 'Альт текст',
          storyTitleData: 'Владимир Позднер',
          storyQuoteData:
            'Я боюсь акул — и, в отличии от рака, это не лечится.',
        },
        {
          id: '19',
          storyImageSrcData: '/story__image_3.jpg',
          storyImageAltData: 'Альт текст',
          storyTitleData: 'Александр Тарханов',
          storyQuoteData:
            'Я боюсь акул — и, в отличии от рака, это не лечится.',
        },
        {
          id: '20',
          storyImageSrcData: '/story__image_4.jpg',
          storyImageAltData: 'Альт текст',
          storyTitleData: 'Владимир Тен',
          storyQuoteData:
            'Я боюсь акул — и, в отличии от рака, это не лечится.',
        },
      ],
    };
  },
  computed: {
    totalStoriesCalc: function() {
      return this.stories.length;
    },
    pagesAmount: function() {
      return Math.ceil(this.totalStories / this.limitPerPage);
    },
    stopIndex: function() {
      return this.limitPerPageData;
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
    pageSelectorClickHandler(pageNum) {
      console.log(pageNum);
      console.log('click');
    },
  },
};
</script>

<style scoped>
.stories-index-container {
  max-width: 1440px;
  min-width: 320px;
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
