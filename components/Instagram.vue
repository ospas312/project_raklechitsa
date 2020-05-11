<template>
  <section class="instagram">
    <div class="instagram__text">
      <h2 class="instagram__title">Инстаграм</h2>
      <p class="instagram__description">
        Два раза в неделю мы просматриваем все посты по хештегу #этонелечится.
        Все истории, где нет нецензурных выражений и запрещенного контента
        попадают сюда. Следите за правильным написанием хештега, чтобы мы не
        пропустили вашу историю.
      </p>
    </div>
    <div class="instagram__stories">
      <instagram-story
        v-for="instagramStory in instagramStories.slice(0, 8)"
        :key="instagramStory.id"
        :picUrl="instagramStory.instagramPicUrl"
        :instagramPicAlt="instagramStory.instagramStoryImageAltData"
      />
    </div>
  </section>
</template>

<script>
import InstagramStory from '@/components/ui/InstagramStory.vue';
export default {
  components: {
    'instagram-story': InstagramStory,
  },
  data() {
    return {
      instagramStories: [
        {
          id: '1',
          instagramPicUrl: './images/inst1.jpg',
          instagramStoryImageAltData: 'Альт текст',
        },
        {
          id: '2',
          instagramPicUrl: './images/inst2.jpg',
          instagramStoryImageAltData: 'Альт текст',
        },
        {
          id: '3',
          instagramPicUrl: './images/inst3.jpg',
          instagramStoryImageAltData: 'Альт текст',
        },
        {
          id: '4',
          instagramPicUrl: './images/inst4.jpg',
          instagramStoryImageAltData: 'Альт текст',
        },
        {
          id: '5',
          instagramPicUrl: './images/inst5.jpg',
          instagramStoryImageAltData: 'Альт текст',
        },
        {
          id: '6',
          instagramPicUrl: './images/inst6.jpg',
          instagramStoryImageAltData: 'Альт текст',
        },
        {
          id: '7',
          instagramPicUrl: './images/inst7.jpg',
          instagramStoryImageAltData: 'Альт текст',
        },
        {
          id: '8',
          instagramPicUrl: './images/inst8.jpg',
          instagramStoryImageAltData: 'Альт текст',
        },
      ],
    };
  },
};
</script>

<style scoped>
.instagram {
  padding-top: 90px;
  padding-bottom: 90px;
  display: flex;
  margin-left: 4.16%;
  margin-right: 4.16%;
}

.instagram__title {
  max-width: 177px;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: #000;
  border-bottom: 2px solid black;
}

.instagram__text {
  margin-right: 110px;
}

.instagram__description {
  max-width: 340px;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #666;
}

.instagram__stories {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 30px;
}

@media screen and (max-width: 1280px) {
  .instagram__title {
    font-size: 28px;
    line-height: 32px;
  }

  .instagram__description {
    font-size: 16px;
    line-height: 20px;
  }

  .instagram__stories {
    grid-gap: 27px;
  }
}

@media screen and (max-width: 1024px) {
  .instagram {
    padding-top: 80px;
    padding-bottom: 80px;
  }

  .instagram__title {
    font-size: 24px;
    line-height: 28px;
  }

  .instagram__description {
    font-size: 13px;
    line-height: 16px;
  }

  .instagram__text {
    margin-right: 60px;
  }

  .instagram__stories {
    grid-gap: 20px;
  }
}

@media screen and (max-width: 768px) {
  .instagram {
    flex-direction: column;
  }

  .instagram__text {
    margin: 0 auto 60px;
  }

  .instagram__title {
    margin: 0 auto;
    max-width: 130px;
  }
}
</style>
