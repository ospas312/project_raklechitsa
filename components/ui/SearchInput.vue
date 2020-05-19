<template>
  <label class="search-input">
    {{ labelText }}
    <input
      class="search-input__item"
      :placeholder="placeholder"
      :type="type"
      :name="name"
      :value="value"
      :required="required ? true : false"
      @input="$emit('input', $event.target.value)"
    />
  </label>
</template>

<script>
export default {
  props: {
    labelText: String,
    type: String,
    name: String,
    placeholder: String,
    value: String,
    required: Boolean,
  },
};
</script>

<style>
.search-input {
  font-weight: 500;
  font-size: 16px;
  line-height: 1.3;
}

.search-input {
  width: 100%;
  box-sizing: border-box;
  padding: 10px 0;
  border: none;
  border-bottom: 1px solid #e7e7e7;
  transition: 0.3s;
}
</style>
