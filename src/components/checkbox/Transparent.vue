<template>
  <div class="transparent">
    <div class="con">
      <input type="checkbox" :id="id" />
      <label :for="id"></label>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  props: {
    id: String,
  },
});
</script>
<style lang="scss" scoped>
.transparent {
  margin: 0 10px;
  .con {
    position: relative;
    input {
      display: none;
      &:checked + label::before {
        transform: translateY(-50%) translateX(3.1rem);
      }
    }
    label {
      display: block;
      width: 5rem;
      height: 2rem;
      border: 2px solid #fff;
      border-radius: 1rem;
      background: transparent;
      position: relative;
      &::before {
        position: absolute;
        top: 50%;
        transform: translateY(-50%) translateX(0.1rem);
        content: "";
        width: 1.6rem;
        height: 1.6rem;
        border-radius: 50%;
        background: #fff;
        transition: 0.3s;
        cursor: pointer;
      }
    }
  }
}
</style>
