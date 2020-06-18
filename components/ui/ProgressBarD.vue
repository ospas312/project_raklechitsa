<template>
  <div class="double-bar">
    <div class="double-bar__empty" :style="styleEmpty"></div>
    <div class="double-bar__fill" :style="styleFill"></div>
  </div>
</template>

<script>
export default {
  props: {
    valueEmpty: {
      type: Number,
      default: 0,
    },
    maxValueEmpty: {
      type: Number,
      default: 0,
    },
    valueFill: {
      type: Number,
      default: 0,
    },
    maxValueFill: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    styleEmpty() {
      return `width: ${(this.valueEmpty / this.maxValueEmpty) * 100}%;`;
    },
    styleFill() {
      return `width: ${(this.valueFill / this.maxValueFill) * 100}%;`;
    },
  },
};
</script>

<style scoped>
.double-bar {
  max-width: 260px;
  width: 100%;
  height: 40px;
  margin: auto;
  margin-bottom: 20px;
}
.double-bar__empty {
  width: 260px;
  height: 20px;
  background: #f4f4f4;
  margin: 0;
}
.double-bar__fill {
  width: 260px;
  height: 20px;
  background: #613a93;
}

@media screen and (max-width: 1280px) {
  .double-bar {
    width: 229px;
    height: 36px;
  }
  .double-bar__empty {
    width: 229px;
    height: 18px;
    margin: auto;
    margin-left: 0px;
  }
  .double-bar__fill {
    width: 229px;
    height: 18px;
    margin-left: 0px;
  }
}
@media screen and (max-width: 1166px) {
  .double-bar {
    width: 188px;
    height: 28px;
  }
  .double-bar__empty {
    width: 188px;
    height: 14px;
  }
  .double-bar__fill {
    width: 188px;
    height: 14px;
  }
}
@media screen and (max-width: 1024px) {
  .double-bar {
    margin-bottom: 10px;
  }
}
</style>
