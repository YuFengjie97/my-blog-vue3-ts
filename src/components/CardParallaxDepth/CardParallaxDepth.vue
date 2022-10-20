<template>
  <div
    class="card-wrap"
    @mousemove="handleMouseMove"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    ref="cardDom"
  >
    <div class="card" :style="card.style">
      <div class="card-info">
        <slot name="header"></slot>
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>
<script>
import { computed, onMounted, reactive, ref } from "vue";
export default {
  setup() {
    let mouseLeaveDelay = null;
    const cardDom = ref();
    const card = reactive({
      width: 0,
      height: 0,
      mouseX: 0,
      mouseY: 0,
      mousePX: computed(() => {
        return card.mouseX / card.width;
      }),
      mousePY: computed(() => {
        return card.mouseY / card.height;
      }),
      style: computed(() => {
        const rX = card.mousePX * 30;
        const rY = card.mousePY * -30;
        return {
          transform: `rotateY(${rX}deg) rotateX(${rY}deg)`,
        };
      }),
    });
    onMounted(() => {
      card.width = cardDom.value.offsetWidth;
      card.height = cardDom.value.offsetHeight;
    });
    function handleMouseMove(e) {
      card.mouseX = e.pageX - cardDom.value.offsetLeft - card.width / 2;
      card.mouseY = e.pageY - cardDom.value.offsetTop - card.height / 2;
    }
    function handleMouseEnter() {
      clearTimeout(mouseLeaveDelay);
    }
    function handleMouseLeave() {
      mouseLeaveDelay = setTimeout(() => {
        card.mouseX = 0;
        card.mouseY = 0;
      }, 1000);
    }

    return {
      cardDom,
      card,
      handleMouseMove,
      handleMouseEnter,
      handleMouseLeave,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "./style.scss";
</style>
