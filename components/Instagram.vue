<template>
  <section class="instagram">
    <container class="instagram__container">
      <slogan block>
        <template #slogan-text>{{ secondSlogan.title }}&nbsp;</template>
        <template #slogan-hashtag>{{ secondSlogan.hashtag }}</template>
      </slogan>
      <div class="instagram__content">
        <div class="instagram__text">
          <h2 class="instagram__title">
            <a
              class="instagram__link"
              href="https://www.instagram.com/raklechitsa/"
              target="_blank"
              >{{ instagramData.title }}</a
            >
          </h2>
          <div v-html="instagramData.text" class="instagram__wrapper"></div>
        </div>
        <ul class="instagram__stories">
          <li
            class="instagram__story"
            v-for="photo in instagram"
            :key="photo.id"
          >
            <a class="instagram__story-link" :href="photo.url" target="_blank"
              ><img
                class="instagram__image"
                :src="photo.display_url"
                alt="Фотогорафия из инстаграм"
            /></a>
          </li>
        </ul>
      </div>
    </container>
  </section>
</template>

<script>
import Container from '@/components/ui/Container.vue';
import Slogan from '@/components/ui/Slogan.vue';

export default {
  components: {
    container: Container,
    slogan: Slogan,
  },
  computed: {
    instagramData() {
      return this.$store.getters['blocks/getInstagramBlock'];
    },
    instagram() {
      const { instagram } = this.$store.state;
      return instagram.photos.slice(0, 8);
    },
    secondSlogan() {
      return this.$store.getters['blocks/getSecondSloganBlock'];
    },
  },
  mounted() {
    document
      .querySelector('.instagram__wrapper')
      .classList.add('instagram__description');
  },
};
</script>

<style scoped>
.instagram__container {
  padding-bottom: 100px;
  padding-bottom: 100px;
}

.instagram__content {
  margin-top: 100px;
  display: flex;
  width: 100%;
}

.instagram__image {
  width: 100%;
  height: 100%;
  background: #ededed;
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  object-position: center;
}

.instagram__text {
  margin-right: 24px;
}

.instagram__title {
  margin: 0;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  min-width: 413px;
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
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
}

.instagram__story-link {
  width: 100%;
  padding-bottom: 100%;
  position: relative;
  display: block;
  transition: transform 0.1s linear;
}

.instagram__story-link:hover {
  transform: scale(1.04);
}

@media screen and (max-width: 1280px) {
  .instagram__stories {
    grid-gap: 27px;
  }

  .instagram__title {
    min-width: 367px;
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
    min-width: 288px;
    font-size: 24px;
    line-height: 28px;
  }

  .instagram__description {
    margin-top: 20px;
    min-width: 260px;
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
    min-width: none;
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
