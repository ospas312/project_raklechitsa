<template>
  <p class="policy-link">
    Нажимая на кнопку «отправить», вы даете согласие на&nbsp;<nuxt-link
      to="/policy"
      class="police-link"
    >
      <span class="policy-link" @click="close"
        >обработку персональных данных</span
      ></nuxt-link
    >
  </p>
</template>

<script>
export default {
  methods: {
    close(e) {
      this.$store.commit('popup/close');
    },
  },
};
</script>

<style scoped>
.policy-link {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #666;
  text-decoration-color: #666;
  margin: 0;
  width: 50%;
}

@media screen and (max-width: 768px) {

  .policy-link {
    width: 100%;
    font-size: 11px;
    line-height: 13px;
    margin-top: 10px;
  }
}
</style>
