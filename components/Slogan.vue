<template>
  <section class="slogan">
    <div class="slogan__container">
      <h2 class="slogan__phrase">
        И&nbsp;В&nbsp;ОТЛИЧИЕ ОТ&nbsp;РАКА,
        <span class="slogan__bold">#ЭТОНЕЛЕЧИТСЯ</span>
      </h2>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.slogan {
  max-width: 1440px;
  min-width: 320px;
  width: 100%;
  box-sizing: border-box;
  padding: 0 60px;
  text-align: center;
  font-weight: normal;
}

.slogan__container {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #613a93;
  padding: 20px 0;
}

.slogan__phrase {
  max-width: 750px;
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

.slogan__phrase {
  font-size: calc(
    16px + (30 - 16) * ((100vw - 320px)) / (1440 - 320)
  ); /* formula is (minFontSize + (maxFontSize - minFontSize) * ((windowWidth - minWidth) / (maxWidth - minWidth). Provides smooth adaptive of font-size */
  line-height: calc(18px + (46 - 18) * ((100vw - 320px)) / (1440 - 320));
}

@media screen and (max-width: 1280px) {
  .slogan {
    padding: 0 50px;
  }
  .slogan__container {
    padding: 20px 0;
  }
}

@media screen and (max-width: 1024px) {
  .slogan {
    padding: 0 50px;
  }
  .slogan__container {
    padding: 20px 0;
  }
}

@media screen and (max-width: 768px) {
  .slogan {
    padding: 0 40px;
  }
  .slogan__container {
    padding: 12px 0;
  }
  .slogan__phrase {
    max-width: 444px;
  }
}

@media screen and (max-width: 480px) {
  .slogan {
    padding: 0 30px;
  }
  .slogan__container {
    padding: 12px 0;
  }
}

@media screen and (max-width: 320px) {
  .slogan {
    padding: 0 15px;
  }
  .slogan__container {
    padding: 15px 0;
  }
  .slogan__phrase {
    max-width: 220px;
  }
}
</style>
