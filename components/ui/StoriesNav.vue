<template>
  <!-- Временный код, ждем 4 вебинара с Палтухом -->
  <nav class="stories-nav">
    <ul class="stories-nav__ul">
      <li class="stories-nav__li">
        <button class="stories-nav__button">1</button>
      </li>
      <li class="stories-nav__li">
        <button class="stories-nav__button">2</button>
      </li>
      <li class="stories-nav__li">
        <button class="stories-nav__button">3</button>
      </li>
      <li class="stories-nav__li">
        <button class="stories-nav__button">4</button>
      </li>
      <li class="stories-nav__li">
        <button class="stories-nav__button">5</button>
      </li>
      <li class="stories-nav__li">
        <button class="stories-nav__button">6</button>
      </li>
      <li class="stories-nav__li">
        <button class="stories-nav__button">7</button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
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
  background-color: #f4f4f4;
}
.stories-nav__button:hover {
  cursor: pointer;
}
</style>
