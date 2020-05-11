<template>
  <div class="iframe">
    <iframe
      class="iframe__video"
      :src="url"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; mute"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  props: ['url'],
};
</script>

<style scoped>
.iframe {
  width: 100%;
  padding-bottom: calc((9 * 100%) / 16);
  position: relative;
}

.iframe__video {
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}
</style>
