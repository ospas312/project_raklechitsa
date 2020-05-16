<template>
  <div class="bloсk-container">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.bloсk-container {
  max-width: 1320px;
  margin: 0 auto;
}

@media screen and (max-width: 1280px) {
  .bloсk-container {
    max-width: 1180px;
  }
}

@media screen and (max-width: 1024px) {
  .bloсk-container {
    max-width: 924px;
  }
}

@media screen and (max-width: 768px) {
  .bloсk-container {
    max-width: 688px;
  }
}

@media screen and (max-width: 320px) {
  .bloсk-container {
    max-width: 290px;
  }
}
</style>
