<template>
  <div class="popup">
    <div class="popup__content">
      <slot><p>Привет это PopUp</p></slot>
      <div class="close" @click="$emit('btnClick')"></div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/ui/Button';
export default {
  components: {
    Button,
  },
  data() {
    return {
      close: 'Close',
    };
  },
};
</script>

<style scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  display: flex;
}
.popup__content {
  width: 920px;
  min-height: 600px;
  background-color: #fff;
  border-radius: 0px;
  position: relative;
  box-sizing: border-box;
  padding: 40px;
}
.close {
  position: absolute;
  right: 42px;
  top: 42px;
  width: 20px;
  height: 20px;
  opacity: 1;
  cursor: pointer;
}
.close:hover {
  opacity: 0.5;
}
.close:before,
.close:after {
  position: absolute;
  left: 9px;
  content: ' ';
  height: 20px;
  width: 2px;
  background-color: #333;
}
.close:before {
  transform: rotate(45deg);
}
.close:after {
  transform: rotate(-45deg);
}
</style>
