<template>
  <div class="btFlash">
    <slot>Hover Me</slot>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  // setup() {},
});
</script>
<style lang="scss" scoped>
.btFlash {
  font-size: 2rem;
  $height: 60px;
  border-radius: $height/2;
  padding: 0 20px;
  min-width: 120px;
  text-align: center;
  cursor: pointer;
  user-select: none;
  color: #fff;
  height: $height;
  line-height: $height;
  background-image: linear-gradient(
    to right,
    #03a9f4,
    #f441a5,
    #ffeb3b,
    #09a8f4
  );
  background-size: 400%;
  position: relative;
  z-index: 1;
  &::before {
    z-index: -1;
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 100%;
    width: 100%;
    filter: blur(20px);
    border-radius: $height/2;
    background-image: linear-gradient(
      to right,
      #03a9f4,
      #f441a5,
      #ffeb3b,
      #09a8f4
    );
    background-size: 400%;
  }
  &:hover {
    animation: sun linear infinite 5s;
  }
  &:hover::before {
    animation: sun 5s linear infinite;
  }
  @keyframes sun {
    100% {
      background-position: 400% 0;
    }
  }
}
</style>
