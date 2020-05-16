<template>
  <button @click="$emit('btnClick')" :type="buttonType" :class="buttonClass">
    {{ buttonText }} <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    buttonType: { type: String, required: true },
    buttonClass: { type: String, required: true },
    buttonText: { type: String, required: false },
  },
};
</script>

<style scoped></style>
