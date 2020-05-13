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
  props: ['buttonType', 'buttonClass', 'buttonText'],
};
</script>

<style scoped>
.button {
  display: block;
  outline: none;
  cursor: pointer;
}

.button:active {
  outline: none;
}

.button:focus {
  outline: none;
}

.button_type_jump {
  width: 36px;
  height: 12px;
  background: transparent;
  background-image: url("data:image/svg+xml,%3Csvg width='38' height='15' viewBox='0 0 38 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M37 1L19 13L1 1' stroke='white' stroke-width='2'/%3E%3C/svg%3E%0A");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 0;
  border: none;
}
</style>
