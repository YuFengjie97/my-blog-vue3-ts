<template>
  <!-- hover要素产生弹框 -->
  <div class="featureHover">
    <!-- 容器用来定位与隐显 -->
    <div class="featureHoverCon" ref="container">
      <!-- 内容 -->
      <div class="content">
        {{ name }}
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import store from "@/store/index";
import Map from "ol/Map";
import { popupInit, popupShow } from "@/oljs/popup";
import {
  computed,
  defineComponent,
  onMounted,
  ref,
  watch,
  watchEffect,
} from "vue";
import Overlay from "node_modules/@types/ol/Overlay";
import { FeatureLike } from "ol/Feature";
import { initFeatureHover } from "@/oljs/event";

export default defineComponent({
  setup() {
    let map: null | Map = null;
    let popup: null | Overlay = null;
    const container = ref<HTMLElement>();

    const name = ref("");

    //计算属性不生效,因为第一次获取到的是null,为什么之后也不生效呢?
    // const feature = computed(() => {
    //   const hoverFeature = store.state.hoverFeature;
    //   if (hoverFeature !== null) {
    //     console.log(hoverFeature);

    //     console.log(hoverFeature?.get("custom"));
    //     return hoverFeature;
    //   } else {
    //     return "";
    //   }
    // });

    watch(
      () => store.state.hoverFeature,
      (f) => {
        const custom = f?.get("custom");
        popupShow(popup as Overlay, custom.coordinate);
        name.value = custom.name;
      }
    );

    onMounted(() => {
      map = store.state.map;
      //初始化事件
      initFeatureHover(map as Map);
      popup = popupInit(map as Map, container.value as HTMLElement);
    });

    return { container, name };
  },
});
</script>
<style lang="scss" scoped>
.featureHoverCon {
  position: absolute;
  transform: translate(-50%, -200%);
  .content {
    font-size: 1.5rem;
    height: 4rem;
    width: fit-content;
    padding: 0 1em;
    background: #fff;
    border-radius: 2em;
    white-space: nowrap;
    display: flex;
    align-items: center;
    box-shadow: 0 0 3px #00d2d3, 0 3px 6px #00d2d3;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      bottom: -3px;
      left: 50%;
      transform: translateX(-50%) rotateZ(45deg);
      width: 10px;
      height: 10px;
      background: #fff;
    }
  }
}
</style>
