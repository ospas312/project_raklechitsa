<template>
  <button @click="$emit('btnClick')" :type="buttonType" :class="buttonClass">
    {{ buttonText }} <slot> </slot>
  </button>
</template>

<script>
export default {
  props: ['buttonType', 'buttonClass', 'buttonText'],
};
</script>

<style scoped></style>
