<template>
  <p class="slogan">
    <slot name="slogan-text"></slot
    ><span class="slogan__hashtag" :class="{ slogan__hashtag_block: block }"
      ><slot name="slogan-hashtag"></slot
    ></span>
  </p>
</template>

<script>
export default {
  props: {
    block: Boolean,
  },
};
</script>
<style scoped>
.slogan {
  margin: 0;
  padding: 20px;
  background-color: #613a93;
  color: #fff;
  font-size: 30px;
  line-height: 46px;
  text-align: center;
}

.slogan_column {
  flex-direction: column;
}

.slogan__hashtag {
  color: #fff;
  font-size: 1.25em;
  line-height: 1.2;
  font-weight: bold;
}

@media screen and (max-width: 1280px) {
  .slogan {
    font-size: 28px;
  }
}

@media screen and (max-width: 1024px) {
  .slogan {
    font-size: 24px;
    line-height: 40px;
  }
}

@media screen and (max-width: 768px) {
  .slogan {
    font-size: 22px;
    line-height: 36px;
  }
}

@media screen and (max-width: 480px) {
  .slogan {
    font-size: 16px;
    line-height: 18px;
    padding: 10px;
  }

  .slogan__hashtag {
    font-size: 20px;
  }
}
</style>
