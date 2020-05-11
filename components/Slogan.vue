<template>
  <section class="slogan">
    <h2 class="slogan__phrase">
      И&nbsp;В&nbsp;ОТЛИЧИЕ ОТ&nbsp;РАКА,
      <span class="slogan__bold">#ЭТОНЕЛЕЧИТСЯ</span>
    </h2>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.slogan {
  max-width: 1440px;
  min-width: 320px;
  height: 84px;
  box-sizing: border-box;
  background-color: #613a93;
  border: 1px solid #000000;
  margin: 0 4.16%;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;
  font-weight: normal;
}

.slogan__phrase {
  margin: 0;
  color: white;
  font-size: 30px;
  line-height: 46px;
  font-weight: normal;
}

.slogan__bold {
  font-weight: bold;
  font-size: 1.2em;
}
 feature/insta

@media screen and (min-width: 768px) and (max-width: 1440px) {
=======
@media screen and (min-width: 320px) and (max-width: 1440px) {
 develop
  .slogan__phrase {
    font-size: calc(
      22px + (30 - 22) * ((100vw - 768px)) / (1440 - 768)
    ); /* formula is (minFontSize + (maxFontSize - minFontSize) * ((windowWidth - minWidth) / (maxWidth - minWidth). Provides smooth adaptive of font-size */
    line-height: calc(36px + (46 - 36) * ((100vw - 768px)) / (1440 - 768));
  }
}

@media screen and (max-width: 780px) {
  .slogan {
    height: 100px;
    padding-top: 12px;
    padding-bottom: 12px;
  }
}
</style>