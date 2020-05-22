<template>
  <nav class="menu">
    <ul v-if="!mobileMenu == true" class="menu__ul">
      <li class="menu__li">
        <nuxt-link class="menu__link" to="/">Главная</nuxt-link>
      </li>
      <li class="menu__li">
        <nuxt-link class="menu__link" to="/stories">Истории</nuxt-link>
      </li>
      <li class="menu__li" @click="open">
        <nxt-button class="menu__button">Рассказать историю</nxt-button>
      </li>
    </ul>
    <nxt-button
      :buttonType="'button'"
      :buttonClass="'menu__mobile-btn'"
      v-if="mobileMenu == true"
    >
      <ul class="menu__ul">
        <li class="menu__li">
          <nuxt-link class="menu__link" to="/">Главная</nuxt-link>
        </li>
        <li class="menu__li">
          <nuxt-link class="menu__link" to="/stories">Истории</nuxt-link>
        </li>
        <li class="menu__li" @click="open">
          <nuxt-link class="menu__button">Рассказать историю</nuxt-link>
        </li>
      </ul>
    </nxt-button>
  </nav>
</template>

<script>
import Button from '@/components/ui/Button.vue';
export default {
  components: {
    'nxt-button': Button,
  },
  data() {
    return {
      mobileMenu: false,
    };
  },
  methods: {
    open() {
      console.log('open_menu');
      return this.$store.commit('popup/open');
    },
  },
  mounted: function() {
    window.addEventListener('resize', () => {
      if (window.innerWidth <= 768) {
        this.mobileMenu = true;
      } else {
        this.mobileMenu = false;
      }
    });
    if (window.innerWidth <= 768) {
      this.mobileMenu = true;
    } else {
      this.mobileMenu = false;
    }
  },
};
</script>

<style scoped>
.menu {
}

.menu__ul {
  list-style: none;
  display: grid;
  column-gap: 40px;
  grid-template-columns: auto auto auto;
  justify-content: end;
}

@media screen and (max-width: 1024px) {
  .menu__ul {
    column-gap: 30px;
  }
}

@media screen and (max-width: 768px) {
  .menu__ul {
    row-gap: 9px;
    grid-template-columns: unset;
    grid-template-rows: auto auto auto;
    margin: 0;
    padding: 0;
  }
}

@media screen and (max-width: 768px) {
  .menu__li {
    width: 32px;
    height: 0px;
    border-bottom: 3px solid #000000;
  }
}
.menu__link {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  text-decoration: none;
  color: #000000;
}
@media screen and (max-width: 768px) {
  .menu__link {
    display: none;
  }
}

.nuxt-link-exact-active {
  text-decoration-line: underline;
}

.menu__button {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  text-decoration: none;
  color: #000000;
  background-color: transparent;
  border: none;
}
.menu__button:hover {
  cursor: pointer;
}
.menu__mobile-btn {
  width: 32px;
  height: 27px;
  border: none;
  background-color: unset;
  padding: 0;
}
</style>
