<template>
  <svg viewBox="0 0 202.9 45.5" style="position:absolute">
    <clipPath
      id="menu"
      clipPathUnits="objectBoundingBox"
      transform="scale(0.0049285362247413 0.021978021978022)"
    >
      <path
        d="M6.7,45.5c5.7,0.1,14.1-0.4,23.3-4c5.7-2.3,9.9-5,18.1-10.5c10.7-7.1,11.8-9.2,20.6-14.3c5-2.9,9.2-5.2,15.2-7
          c7.1-2.1,13.3-2.3,17.6-2.1c4.2-0.2,10.5,0.1,17.6,2.1c6.1,1.8,10.2,4.1,15.2,7c8.8,5,9.9,7.1,20.6,14.3c8.3,5.5,12.4,8.2,18.1,10.5
          c9.2,3.6,17.6,4.2,23.3,4H6.7z"
      />
    </clipPath>
  </svg>

  <div class="menuBar">
    <div
      class="button"
      v-for="(item, index) in menu"
      :key="index"
      :class="index == activeIndex ? 'active' : ''"
      @click="activeIndex = index"
    >
      <i :class="`fa fa-${item.icon}`" aria-hidden="true"></i>
      <div class="bg" :style="{ background: item.color }"></div>
    </div>
    <div
      class="menuBorder"
      :style="`transform:translateX(${activeIndex * 6}rem)`"
    ></div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const activeIndex = ref(0);
    const menu = ref([
      { icon: "bandcamp", color: "#ff8c00" },
      { icon: "id-card-o", color: "#f54888" },
      { icon: "snowflake-o", color: "#4343f5" },
      { icon: "thermometer-empty", color: "#e0b115" },
      { icon: "superpowers", color: "#65ddb7" },
    ]);

    return { menu, activeIndex };
  },
});
</script>
<style lang="scss" scoped>
.menuBar {
  font-size: 1rem;
  position: relative;
  margin-top: 4rem;
  padding: 0 1rem;
  height: 4rem;
  background: #1d1d27;
  display: flex;
  justify-content: center;
  align-items: center;
  * {
    transition: 0.3s;
  }
  .button {
    width: 4rem;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: relative;
    z-index: 100;
    margin: 0 1rem;
  }
  .fa {
    color: #fff;
    font-size: 1.8rem;
  }
  .bg {
    position: absolute;
    z-index: -1;
    width: 4.2rem;
    height: 4.2rem;
    border-radius: 50%;
    transform: scale(0);
  }
  .button.active {
    transform: translateY(-0.8rem);
    .bg {
      transform: scale(1);
    }
  }
  .menuBorder {
    left: 0.1rem;
    bottom: 99%;
    width: 8rem;
    height: 2rem;
    position: absolute;
    background: #1d1d27;
    clip-path: url(#menu);
  }
}
</style>
