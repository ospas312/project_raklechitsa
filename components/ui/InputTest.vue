<template>
  <div>
    <input
      :class="[
        '',
        inputClass,
        {
          'input_bottom-bordered': bottomBordered,
        },
      ]"
      :type="inputType"
      :placeholder="inputPlaceholder"
      @input="handleInput"
      v-model="content"
    />
  </div>
</template>

<script>
export default {
  props: {
    inputClass: String,
    bottomBordered: Boolean,
    inputType: String,
    inputPlaceholder: String,
    value: String,
  },
  data() {
    return {
      content: this.value,
    };
  },
  methods: {
    handleInput() {
      this.$emit('input', this.content);
    },
  },
};
</script>

<style scoped></style>
