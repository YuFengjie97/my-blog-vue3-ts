<template>
  <div class="example" style="padding:0">
    <div class="options">
      <h4>省份高亮</h4>
      <div class="group">
        <ol-button
          v-for="(item, index) in provinces"
          :key="index"
          :title="item.properties.name"
          @cc="hightlightByAdcode($event, item.properties.adcode)"
        />
      </div>
      <h4>图层切换</h4>
      <div class="group">
        <ol-button
          v-for="(item, index) in layers"
          :key="index"
          :title="item.name"
          @cc="toggleLayer(item.id, $event)"
        />
      </div>
    </div>
    <ol-base />
    <feature-hover />
    <feature-click />
  </div>
</template>
<script lang="ts">
import OlBase from "@/components/ol/OlBase.vue";
import controllerHighlight from "@/components/ol/ControllerHighlight";
import colorZone from "@/components/ol/ColorZone";
import controllerLayer from "@/components/ol/ControllerLayer";
import { defineComponent, ref } from "vue";
import OlButton from "@/components/ol/OlButton.vue";
import FeatureHover from "@/components/ol/FeatureHover.vue";
import FeatureClick from "@/components/ol/FeatureClick.vue";
export default defineComponent({
  components: {
    OlBase,
    OlButton,
    FeatureHover,
    FeatureClick,
  },
  setup() {
    return { ...controllerHighlight(), ...colorZone(), ...controllerLayer() };
  },
});
</script>
<style lang="scss" scoped>
.example {
  position: relative;
  .options {
    position: absolute;
    top: 80px;
    left: 15px;
    width: 200px;
    height: 80vh;
    overflow: auto;
    background: transparent;
    z-index: 1;
    backdrop-filter: blur(20px);
    padding: 20px 0;
  }
}
</style>
