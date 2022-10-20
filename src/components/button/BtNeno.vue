<template>
  <div class="buttonNeno">
    <div class="bt" :style="`--color:${color}`">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <slot>Hove Me</slot>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  props: {
    color: {
      type: String,
      default: "#03e9f4",
    },
  },
});
</script>
<style lang="scss" scoped>
.buttonNeno {
  font-size: 1rem;
  display: inline-block;
  margin-bottom: 70px;
  .bt {
    font-family: consolas;
    position: relative;
    display: inline-block;
    padding: 15px 30px;
    font-size: 24px;
    text-transform: uppercase;
    transition: 0.5s;
    letter-spacing: 4px;
    color: var(--color);
    overflow: hidden;
    cursor: pointer;
    white-space: nowrap;
    //倒影
    -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
    &:hover {
      background: var(--color);
      color: #050801;
      box-shadow: 0 0 5px var(--color), 0 0 25px var(--color),
        0 0 50px var(--color), 0 0 200px var(--color);
    }
    span {
      display: block;
      position: absolute;
    }

    span:nth-child(1) {
      top: 0px;
      left: -100%;
      width: 100%;
      height: 2px;
      background: linear-gradient(90deg, transparent, var(--color));
      animation: animate1 1s linear infinite;
    }
    @keyframes animate1 {
      0% {
        left: -100%;
      }
      50%,
      100% {
        left: 100%;
      }
    }
    span:nth-child(2) {
      top: -100%;
      right: 0;
      width: 2px;
      height: 100%;
      background: linear-gradient(180deg, transparent, var(--color));
      animation: animate2 1s linear infinite;
      animation-delay: 0.25s;
    }
    @keyframes animate2 {
      0% {
        top: -100%;
      }
      50%,
      100% {
        top: 100%;
      }
    }
    span:nth-child(3) {
      bottom: 0;
      right: -100%;
      width: 100%;
      height: 2px;
      background: linear-gradient(-90deg, transparent, var(--color));
      animation: animate3 1s linear infinite;
      animation-delay: 0.5s;
    }
    @keyframes animate3 {
      0% {
        right: -100%;
      }
      50%,
      100% {
        right: 100%;
      }
    }
    span:nth-child(4) {
      bottom: -100%;
      left: 0;
      width: 2px;
      height: 100%;
      background: linear-gradient(360deg, transparent, var(--color));
      animation: animate4 1s linear infinite;
      animation-delay: 0.75s;
    }
    @keyframes animate4 {
      0% {
        bottom: -100%;
      }
      50%,
      100% {
        bottom: 100%;
      }
    }
  }
}
</style>
