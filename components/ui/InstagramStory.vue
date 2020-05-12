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

@media screen and (min-width: 768px) and (max-width: 1440px) {
  .instagram__story {
    width: calc(
      103px + (195 - 103) * ((100vw - 768px)) / (1440 - 768)
    ); /* 103px – размер элемента на разрешении 768px при сохранении пропорции*/
    height: calc(
      103px + (195 - 103) * ((100vw - 768px)) / (1440 - 768)
    ); /* 103px – размер элемента на разрешении 768px при сохранении пропорции*/
  }
}

@media screen and (min-width: 480px) and (max-width: 768px) {
  .instagram__story {
    width: calc(
      98px + (157 - 98) * ((100vw - 480px)) / (768 - 480)
    ); /* 98px – размер элемента на разрешении 480px при сохранении пропорции*/
    height: calc(
      98px + (157 - 98) * ((100vw - 480px)) / (768 - 480)
    ); /* 98px – размер элемента на разрешении 480px при сохранении пропорции*/
  }
}

@media screen and (min-width: 320px) and (max-width: 480px) {
  .instagram__story {
    width: calc(
      141px + (210 - 141) * ((100vw - 320px)) / (480 - 320)
    ); /* 210px – размер элемента на разрешении 480px при сохранении пропорции*/
    height: calc(
      141px + (210 - 141) * ((100vw - 320px)) / (480 - 320)
    ); /* 210px – размер элемента на разрешении 480px при сохранении пропорции*/
  }
}
</style>
