<template>
  <section class="instagram">
    <container class="instagram__container">
      <slogan block>
        <template #slogan-text
          >РАССКАЗЫВАЙТЕ ВАШИ ИСТОРИИ В ИНСТАГРАМ&nbsp;</template
        >
        <template #slogan-hashtag>#ЭТОНЕЛЕЧИТСЯ</template>
      </slogan>
      <div class="instagram__content">
        <div class="instagram__text">
          <h2 class="instagram__title">
            <a
              class="instagram__link"
              href="https://www.instagram.com/raklechitsa/"
              target="_blank"
              >Инстаграм</a
            >
          </h2>
          <p class="instagram__description">
            Два раза в неделю мы просматриваем все посты по хештегу
            #этонелечится. Все истории, где нет нецензурных выражений и
            запрещенного контента попадают сюда. Следите за правильным
            написанием хештега, чтобы мы не пропустили вашу историю.
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
      </div>
    </container>
  </section>
</template>

<script>
import InstagramStory from '@/components/ui/InstagramStory.vue';
import Container from '@/components/ui/Container.vue';
import Slogan from '@/components/ui/Slogan.vue';
export default {
  components: {
    container: Container,
    'instagram-story': InstagramStory,
    slogan: Slogan,
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
.instagram__container {
  padding-bottom: 100px;
}

.instagram__content {
  margin-top: 100px;
  display: flex;
}

.instagram__text {
  margin-right: 24px;
  min-width: 413px;
}

.instagram__title {
  margin: 0;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
}

.instagram__link {
  color: black;
  text-decoration: none;
  border-bottom: 3px solid black;
}

.instagram__link:hover {
  opacity: 0.6;
}

.instagram__description {
  margin: 32px 0 0;
  max-width: 340px;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #666;
}

.instagram__stories {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
}

@media screen and (max-width: 1280px) {
  .instagram__stories {
    grid-gap: 27px;
  }

  .instagram__title {
    max-width: 367px;
    font-size: 28px;
    line-height: 32px;
  }

  .instagram__description {
    margin-top: 30px;
    max-width: 305px;
    font-size: 16px;
    line-height: 20px;
  }
}

@media screen and (max-width: 1024px) {
  .instagram__stories {
    grid-gap: 20px;
  }

  .instagram__title {
    max-width: 288px;
    font-size: 24px;
    line-height: 28px;
  }

  .instagram__description {
    margin-top: 20px;
    max-width: 260px;
    font-size: 13px;
    line-height: 16px;
  }
}

@media screen and (max-width: 768px) {
  .instagram__content {
    flex-direction: column;
  }

  .instagram__stories {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
  }

  .instagram__title {
    max-width: 380px;
    margin: auto;
    text-align: center;
  }

  .instagram__text {
    min-width: 0;
  }

  .instagram__description {
    margin: 26px auto 0;
    max-width: 380px;
  }

  .instagram__text {
    margin-bottom: 60px;
  }
}

@media screen and (max-width: 425px) {
  .instagram__stories {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
  }

  .instagram__title {
    margin: 0;
    max-width: 367px;
    font-size: 18px;
    line-height: 21px;
  }

  .instagram__description {
    margin-top: 16px;
  }
}
</style>
