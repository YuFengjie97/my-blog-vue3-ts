<template>
  <div class="con">
    <svg>
      <rect x="0" y="0" width="100%" height="100%" />
    </svg>
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
  $width: 120px;
  $height: 40px;
  width: $width;
  height: $height;
  min-width: 120px;
  line-height: 40px;
  cursor: pointer;
  line-height: 40px;
  color: #fff;
  text-align: center;
  position: relative;
  transition: 0.35s;
  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    rect {
      fill: none;
      stroke: #fff;
      stroke-width: 2;
      stroke-dasharray: ($width + $height) * 2 0; //实 虚,总是长加宽*2
      transition: 0.35s linear;
    }
  }
  &:hover {
    font-weight: 700;
    letter-spacing: 2px;
    rect {
      stroke-width: 5;
      stroke-dasharray: 20, 320; //实 虚
      stroke-dashoffset: 20 + $height + $width/2 - 8 + 20; //虚线的偏移量
      transition: all 1.35s cubic-bezier(0.19, 1, 0.22, 1);
    }
  }
}
</style>
