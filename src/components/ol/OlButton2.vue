<template>
  <div
    class="button"
    @mousedown="mouseDown"
    @mouseup="mouseUp"
    :style="`background:${isMouseDown ? '#00b894' : ''}`"
  >
    {{ title }}
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  props: {
    title: {
      type: String,
      default: "hello",
    },
  },
  setup() {
    const isMouseDown = ref(false);
    function mouseDown() {
      isMouseDown.value = true;
    }
    function mouseUp() {
      isMouseDown.value = false;
    }

    return { isMouseDown, mouseDown, mouseUp };
  },
});
</script>
<style lang="scss" scoped>
.button {
  margin: 1px;
  font-size: 0.75rem;
  display: inline-block;
  padding: 5px 10px;
  background: #d63031;
  user-select: none;
  cursor: pointer;
  color: #fff;
}
</style>
