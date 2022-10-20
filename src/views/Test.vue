<template>
  <div class="con">
    test
    <br />
    <card-parallax-depth>
      <slot name="header">Canyons</slot>
      <slot name="content">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </slot>
    </card-parallax-depth>
  </div>
</template>
<script>
import { ref } from "vue";
import CardParallaxDepth from "@/components/CardParallaxDepth/CardParallaxDepth.vue";
export default {
  components: { CardParallaxDepth },
  //   setup() {},
};
</script>
<style lang="scss" scoped>
.con {
}
</style>
