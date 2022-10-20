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
  cursor: pointer;
  color: #fff;
  font-weight: 700;
  text-align: center;
  background: rgb(227, 64, 58);
  //   backdrop-filter: opacity(0.5);
  border: 1px solid rgb(218, 37, 31);
  box-shadow: 0px 2px 0 #d6251f, 2px 4px 6px #e02a24;
  transition: all 150ms linear;
  &:hover {
    background: #e02c26;
    text-shadow: 1px 2px 3px #000;
    border: 1px solid rgba(0, 0, 0, 0.05);
    box-shadow: 1px 1px 2px rgb(255 255 255 / 20%);
    color: #ec817d;
    // transition: all 250ms linear;
  }
}
</style>
