<template>
  <div class="gravityCon">
    <div class="gravity">
      <div class="con">
        <input type="checkbox" :id="id" />
        <label :for="id"></label>
      </div>
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
.gravityCon {
  margin: 0 10px;
  .gravity {
    .con {
      position: relative;
      input {
        display: none;
        &:checked + label {
          transform: rotate(90deg);
          &::before {
            transition-delay: 0.3s;
            transition-timing-function: ease-in;
            transform: translateY(-50%) translateX(3rem);
          }
        }
      }
      label {
        display: block;
        width: 5rem;
        height: 2rem;
        border-radius: 1rem;
        background: #2e394d;
        position: relative;
        transform-origin: 20% center;
        transition: 0.3s;
        &::before {
          position: absolute;
          border: 2px solid #88cf8f;
          top: 50%;
          transform: translateY(-50%) translateX(0.1rem);
          content: "";
          width: 1.6rem;
          height: 1.6rem;
          border-radius: 50%;
          transition: 0.3s;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
