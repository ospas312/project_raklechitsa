<template>
  <button
    class="button"
    :type="buttonType"
    :class="buttonClass"
    @click="$emit('btnClick')"
  >
    {{ buttonText }} <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    buttonType: { type: String, required: true },
    buttonClass: { type: String, required: true },
    buttonText: { type: [String, Array], required: false },
  },
};
</script>

<style scoped></style>
