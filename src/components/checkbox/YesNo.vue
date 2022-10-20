<template>
  <div class="yesno">
    <div class="con">
      <input type="checkbox" :id="id" v-model="isChecked" />
      <label :for="id">
        <i
          class="fa "
          :class="isChecked ? 'fa-check' : 'fa-close'"
          aria-hidden="true"
        ></i>
      </label>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  props: {
    id: String,
  },
  setup() {
    const isChecked = ref(false);
    return { isChecked };
  },
});
</script>
<style lang="scss" scoped>
.yesno {
  margin: 0 10px;
  .con {
    position: relative;
    input {
      display: none;
      &:checked + label i {
        background: #8bc34a !important;
        transform: translateY(-50%) translateX(0.3rem);
      }
    }
    label {
      display: block;
      width: 5rem;
      height: 2rem;
      border-radius: 1rem;
      background: #2e394d;
      box-shadow: inset 0px 0px 4px 0px rgb(0 0 0 / 20%),
        0 -3px 4px rgb(0 0 0 / 15%);
      position: relative;
      transition: 0.3s;
      i {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #c34a4a !important;
        transform: translateY(-50%) translateX(3.1rem) rotate(360deg);

        color: #fff;
        position: absolute;
        top: 50%;
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
