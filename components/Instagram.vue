<template>
  <section class="instagram">
    <div class="instagram__text">
      <my-title
        class="instagram__title"
        :class="'section-title_place_instagram'"
        >Инстаграм</my-title
      >
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
import SectionTitle from '@/components/ui/SectionTitle.vue';
export default {
  components: {
    'my-title': SectionTitle,
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
  max-width: 1440px;
  width: 100%;
  padding: 100px 60px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
}

.instagram__title {
}

.instagram__text {
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
  .instagram {
    padding: 80px 50px;
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
    padding: 80px 50px;
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
}

@media screen and (max-width: 480px) {
  .instagram {
    padding: 60px 30px;
  }
}

@media screen and (max-width: 320px) {
  .instagram {
    padding: 50px 15px;
  }
}
</style>
