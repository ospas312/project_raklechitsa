<template>
  <nav class="stories-nav">
    <ul class="stories-nav__ul">
      <li v-for="index in pagesAmount" :key="index" class="stories-nav__li">
        <nxt-button
          @btnClick="setActive(index)"
          :buttonClass="[
            'stories-nav__button',
            { 'stories-nav__button_active': index === active },
          ]"
          buttonType="'button'"
          >{{ index }}</nxt-button
        >
      </li>
    </ul>
  </nav>
</template>

<script>
import Button from '@/components/ui/Button.vue';
export default {
  components: {
    'nxt-button': Button,
  },
  props: {
    totalStories: { type: Number, default: 0 },
    limitPerPage: { type: Number, default: 0 },
  },
  data() {
    return {
      active: 1,
    };
  },
  computed: {
    pagesAmount() {
      return Math.ceil(this.totalStories / this.limitPerPage);
    },
  },
  methods: {
    setActive(index) {
      this.active = index;
      this.$emit('onPageChange', index);
    },
  },
};
</script>

<style scoped>
.stories-nav {
  margin: 0 auto;
  max-width: 506px;
  padding: 140px 0 100px 0;
}
.stories-nav__ul {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, 58px);
  column-gap: 10px;
}
.stories-nav__li {
}
.stories-nav__button {
  width: 58px;
  height: 58px;
  text-decoration: none;
  position: absolute;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
  border: 0;
  outline: none;
  background-color: #fbfbfb;
}
.stories-nav__button_active {
  background-color: #f4f4f4;
}
.stories-nav__button:hover {
  cursor: pointer;
}
</style>
