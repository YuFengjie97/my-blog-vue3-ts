<template>
  <div class="con">
    <slot>HOVER</slot>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  //   setup() {},
});
</script>
<style lang="scss" scoped>
.con {
  font-size: 2rem;
  line-height: 4rem;
  padding: 0 3rem;
  cursor: pointer;
  color: #fff;
  text-align: center;
  border: 1px solid #fff;
  position: relative;
  overflow: hidden;
  &::before {
    position: absolute;
    content: "";
    width: 30px;
    height: 200%;
    background: rgba(#fff, 0.4);
    transform-origin: center center;
    transform: translate(-80px, -25%) rotate(40deg);
    transition: 200ms linear;
  }
  &:hover {
    &::before {
      transform: translate(400%, -25%) rotate(35deg);
    }
  }
}
</style>
