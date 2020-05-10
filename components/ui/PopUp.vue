<template>
  <div class="popup">
    <div class="popup__content">
      <p>Привет</p>
      <Button @btnClick="$emit('btnClick')" :buttonText="close"></Button>
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
  width: 430px;
  min-height: 330px;
  background-color: #fff;
  border-radius: 10px;
  position: relative;
  box-sizing: border-box;
  padding: 34px 36px;
}
</style>
