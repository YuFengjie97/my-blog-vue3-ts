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
  width: 12rem;
  line-height: 4rem;
  letter-spacing: 0px;
  color: #fff;
  text-align: center;
  cursor: pointer;
  position: relative;
  transition: 0.3s;
  &::after,
  &::before {
    display: block;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    content: "";
    backface-visibility: hidden;
    transition: 0.3s ease-in-out;
    width: 0px;
    border: 1px solid rgba(#fff, 0);
    border-width: 0;
  }
  &::before {
    height: 0px;
    top: 0;
    background: #fff;
  }
  &::after {
    height: 0px;
    bottom: 0;
  }
  &:hover {
    &::before,
    &::after {
      width: 100%;
      border: 1px solid rgba(#fff, 1);
    }
    letter-spacing: 4px;
  }
}
</style>
