<template>
  <section class="instagram">
    <div class="instagram__text">
      <h3 class="instagram__title">Инстаграм</h3>
      <p class="instagram__description">
        Два раза в неделю мы просматриваем все посты по хештегу #этонелечится.
        Все истории, где нет нецензурных выражений и запрещенного контента
        попадают сюда. Следите за правильным написанием хештега, чтобы мы не
        пропустили вашу историю.
      </p>
    </div>
    <div class="instagram__stories">
      <article class="instagram__story"></article>
      <article class="instagram__story"></article>
      <article class="instagram__story"></article>
      <article class="instagram__story"></article>
      <article class="instagram__story"></article>
      <article class="instagram__story"></article>
      <article class="instagram__story"></article>
      <article class="instagram__story"></article>
    </div>
  </section>
</template>

<script>
export default {};
</script>


<style scoped>
.instagram {
  padding-top: 90px;
  padding-bottom: 90px;
  display: flex;
  margin-left: 4.16%;
  margin-right: 4.16%;
  justify-content: space-between;
}
.instagram__title {
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: #000;
  border-bottom: 2px solid black;
}

.instagram__text {
  margin-right: 110px;
}

.instagram__description {
  max-width: 340px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #666;
}

.instagram__stories {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 30px;
}

.instagram__story {
  width: 195px;
  height: 195px;
  background-color: #ededed;
}
</style>