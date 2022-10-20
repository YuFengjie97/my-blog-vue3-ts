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
  line-height: 40px;
  color: #fff;
  padding: 0 30px;
  text-align: center;
  border: 1px solid rgba(#fff, 0.3);
  position: relative;
  transition: 0.25s linear;

  &::before {
    content: "";
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    border: 1px solid rgba(#fff, 0.3);
    transition: 0.25s linear;
  }
  &:hover {
    & {
      border: 1px solid rgba(#fff, 1);
      box-shadow: inset 0 0 20px rgb(#fff, 0.5), 0 0 40px rgb(#fff, 0.2);
    }
    &::before {
      top: -15px;
      left: -15px;
      right: -15px;
      bottom: -15px;
      border: 1px solid rgba(#fff, 0);
    }
  }
}
</style>
