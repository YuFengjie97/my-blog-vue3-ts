<template>
  <div class="featureClick">
    <div class="featureClickCon" ref="container">
      <div class="content">
        <i class="fa fa-times" aria-hidden="true" @click="close"></i>
        <div class="box">
          <div class="label">名称:</div>
          <div class="info">{{ name }}</div>
        </div>
        <div class="box">
          <div class="label" style="width: 100%">描述:</div>
          <div class="info des scroller">
            {{ info.des }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import store from "@/store/index";
import Map from "ol/Map";
import { popupInit, popupShow } from "@/oljs/popup";
import { defineComponent, onMounted, ref, watch } from "vue";
import Overlay from "node_modules/@types/ol/Overlay";
import { FeatureLike } from "ol/Feature";
import { initFeatureClick } from "@/oljs/event";

export default defineComponent({
  setup() {
    let map: null | Map = null;
    let popup: null | Overlay = null;
    const container = ref<HTMLElement>();

    const name = ref("");
    const info = ref({});

    watch(
      () => store.state.clickFeature,
      (f) => {
        const custom = f?.get("custom");
        popupShow(popup as Overlay, custom.coordinate);
        name.value = custom.name;
        info.value = custom.info;
      }
    );

    function close() {
      popup?.setPosition(undefined);
    }

    onMounted(() => {
      map = store.state.map;
      initFeatureClick(map as Map);
      popup = popupInit(map as Map, container.value as HTMLElement);
    });

    return { container, name, info, close };
  },
});
</script>
<style lang="scss" scoped>
.featureClickCon {
  position: absolute;
  transform: translate(-50%, -130%);
  .content {
    font-size: 1.3rem;
    // ----------------
    width: 16rem;
    height: 15rem;
    padding: 1rem 1rem;
    background: #fff;
    border-radius: 1rem;
    white-space: nowrap;
    display: flex;
    flex-wrap: wrap;
    // flex-direction: column;
    // align-items: flex-start;
    justify-content: flex-start;
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
    .fa-times {
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
      cursor: pointer;
    }
    .box {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: center;
      .label {
        font-family: "Courier New", Courier, monospace;
        font-weight: bold;
      }
      .des {
        white-space: pre-wrap;
        width: 100%;
        height: 8rem;
        overflow-y: auto;
      }
    }
  }
}
</style>
