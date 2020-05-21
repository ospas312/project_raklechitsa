<template>
  <div>
    <Header />
    <PopUp v-if="popUpOpened"><QuestionForm /></PopUp>
    <PopUp v-if="contactsOpened"><ContactsForm /></PopUp>

    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import PopUp from '@/components/ui/PopUp';
import QuestionForm from '@/components/ui/QuestionForm';
import ContactsForm from '@/components/ui/ContactsForm';
export default {
  components: {
    Header,
    Footer,
    PopUp,
    QuestionForm,
    ContactsForm,
  },
  created() {},
  computed: {
    popUpOpened() {
      const { popup } = this.$store.state;
      return popup.opened;
    },
    contactsOpened() {
      return this.$store.getters['popup/getPopUpOpened'];
    },
  },
};
</script>

<style>
html {
  font-family: 'Inter', monospace;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}
</style>
