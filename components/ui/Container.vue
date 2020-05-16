<template>
  <div class="block-container">
    <slot></slot>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.block-container {
  max-width: 1440px;
  padding: 0px 60px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
}
@media screen and (max-width: 1280px) {
  .block-container {
    padding: 0px 50px;
  }
}
@media screen and (max-width: 1024px) {
  .block-container {
    padding: 0px 40px;
  }
}
@media screen and (max-width: 320px) {
  .block-container {
    padding: 0px 15px;
  }
}
</style>
