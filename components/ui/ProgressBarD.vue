<template>
  <div class="progress-bar-double">
    <div class="progress-bar-double__fill" :style="styleOld"></div>
    <div
      class="progress-bar-double__fill progress-bar-double__fill_violet"
      :style="styleNew"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    newValue: Number,
    oldValue: Number,
    maxValue: Number,
  },
  computed: {
    styleOld() {
      return `width: ${(this.oldValue / this.maxValue) * 100}%;`;
    },
    styleNew() {
      return `width: ${(this.newValue / this.maxValue) * 100}%;`;
    },
  },
};
</script>

<style scoped>
.progress-bar-double {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1.389vw);
  background: white;
}

.progress-bar-double__old {
  grid-row: 1 / -1;
}

.progress-bar-double__new {
  grid-row: 2 / -2;
}

.progress-bar-double__fill {
  background: #f4f4f4;
}
.progress-bar-double__fill_violet {
  background: #613a93;
}

@media screen and (min-width: 320px) and (max-width: 1024px) {
  .progress-bar-double {
    grid-template-rows: repeat(2, 14px);
  }
}
</style>
