<template>
  <div class="changeColor">
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
.changeColor {
  .con {
    position: relative;
    input {
      display: none;
      &:checked + label::before {
        transform: translateY(-50%) translateX(3.1rem);
      }
      &:checked + label {
        background: #4caf50;
      }
    }
    label {
      display: block;
      width: 5rem;
      height: 2rem;
      border-radius: 1rem;
      background: #af4c4c;
      box-shadow: inset 0px 0px 4px 0px rgb(0 0 0 / 20%),
        0 -3px 4px rgb(0 0 0 / 15%);
      position: relative;
      transition: 0.3s;
      &::before {
        position: absolute;
        top: 50%;
        transform: translateY(-50%) translateX(0.3rem);
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
