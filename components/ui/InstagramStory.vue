<template>
  <article class="instagram__story">
    <a :href="picUrl" class="instagram__link"
      ><img :src="picUrl" :alt="instagramPicAlt" class="instagram__image"
    /></a>
  </article>
</template>

<script>
export default {
  props: ['picUrl', 'instagramPicAlt'],
};
</script>

<style scoped>
.instagram__story {
  width: 195px;
  height: 195px;
}

.instagram__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media screen and (max-width: 1280px) {
  .instagram__story {
    width: 171px;
    height: 171px;
  }
}

@media screen and (max-width: 1024px) {
  .instagram__story {
    width: 136px;
    height: 136px;
  }
}

@media screen and (max-width: 768px) {
  .instagram__story {
    width: 157px;
    height: 157px;
  }
}
</style>
