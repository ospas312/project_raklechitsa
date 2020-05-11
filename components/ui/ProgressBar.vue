<template>
  <div class="progress-bar">
    <div class="progress-bar__fill" :style="style"></div>
  </div>
</template>

<script>
export default {
  props: {
    value: Number,
    maxValue: Number,
  },
  computed: {
    style() {
      return `width: ${(this.value / this.maxValue) * 100}%;`;
    },
  },
};
</script>

<style scoped>
.progress-bar {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2.778vw;
  background: #f4f4f4;
}
.progress-bar__fill {
  grid-row: 1 / -1;
  height: 100%;
  background: #613a93;
}

@media screen and (min-width: 320px) and (max-width: 1024px) {
  .progress-bar {
    grid-template-rows: 28px;
  }
}
</style>
