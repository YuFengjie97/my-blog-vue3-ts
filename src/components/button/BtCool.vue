<template>
  <div class="btCoolCon" :style="{ '--color': color }">
    <div class="light"></div>
    <div class="info">
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
      default: "red",
    },
  },
  // setup() {},
});
</script>
<style lang="scss" scoped>
.btCoolCon {
  font-size: 2rem;
  display: inline-block;
  $height: 60px;
  min-width: 120px;
  text-align: center;
  cursor: pointer;
  user-select: none;
  height: $height;
  line-height: $height;
  border-radius: 30px;
  position: relative;
  color: #fff;
  &:hover {
    .light::before {
      top: 4px;
      width: 70%;
      height: $height/2;
    }
    .light::after {
      bottom: 4px;
      width: 70%;
      height: $height/2;
    }
  }

  .light {
    @mixin light {
      content: "";
      background: var(--color);
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      height: 20px;
      width: 16px;
      border-radius: 8px;
      box-shadow: 0 0 5px var(--color), 0 0 10px var(--color),
        0 0 25px var(--color), 0 0 50px var(--color);
      transition: 0.3s;
    }
    &::before {
      @include light;
      top: -8px;
    }
    &::after {
      @include light;
      bottom: -8px;
    }
  }

  .info {
    width: 100%;
    height: 100%;
    border-radius: $height/2;
    backdrop-filter: blur(15px);
    background: rgba(255, 255, 255, 0.05);
    padding: 0 20px;
    overflow: hidden;
    &::before {
      position: absolute;
      top: 0;
      left: 0;
      content: "";
      width: 50%;
      height: 100%;
      transform: skewX(45deg) translateX(0);
      background-image: linear-gradient(
        to right,
        transparent,
        rgba(255, 255, 255, 0.2)
      );
      transition: 0.3s;
      transition-delay: 0.3s;
    }
    &:hover {
      &::before {
        transform: skewX(45deg) translateX(150%);
      }
    }
  }
}
</style>
