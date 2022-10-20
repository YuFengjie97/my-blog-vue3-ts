<template>
  <div
    class="button"
    @click="clickHandler"
    :style="`background:${activate ? '#00b894' : ''}`"
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
  setup(props, { emit }) {
    const activate = ref(false);
    function clickHandler() {
      activate.value = !activate.value;
      emit("cc", activate.value);
    }
    return { activate, clickHandler };
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
