<template>
  <div class="card3D-con">
    <div class="card" :style="{ background: bgColor }">
      <slot>Hove Me</slot>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    bgColor: {
      type: String,
      default: "#22a6b3",
    },
  },
});
</script>
<style lang="scss" scoped>
.card3D-con {
  font-size: 1rem;
  cursor: pointer;
  perspective: 900px; //透视距离必须设置在容器!
}
.card {
  width: 150px;
  height: 250px;
  background-color: #22a6b3;
  transform: rotateX(60deg) scale(0.7);
  transition: 0.5s all ease;
  box-shadow: 0px 20px 100px #555;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: serif;
  color: #fff;
  font-size: 30px;
  font-weight: 700;
  white-space: nowrap;
}
.card:hover {
  transform: rotate(0deg) scale(1) translateY(10px);
  /* animation: entry 1s linear 0.4s; */
}
@keyframes entry {
  0% {
    top: -20%;
    opacity: 0.1;
  }
  100% {
    top: 0%;
    opacity: 1;
  }
}
</style>
