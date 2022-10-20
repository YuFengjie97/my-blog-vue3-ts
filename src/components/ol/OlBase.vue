<template>
  <div class="olMap">
    <div id="openlayerEl"></div>
  </div>
</template>
<script lang="ts">
import "ol/ol.css";

import { defineComponent, ref, onMounted } from "vue";
import store from "@/store/index";
import Map from "ol/Map";
import { initMap } from "@/oljs/map";
import Feature, { FeatureLike } from "ol/Feature";
import { EventsKey } from "ol/events";

export default defineComponent({
  setup() {
    let map: null | Map = null;
    //点击要素事件传入的函数
    function clickFun(feature: FeatureLike): void {
      console.log(feature);
    }

    onMounted(() => {
      //地图初始化
      map = initMap("openlayerEl");
      store.commit("initMap", map);
      console.log("olBaseMap,map初始化完成");
    });
  },
});
</script>
<style lang="scss" scoped>
.olMap {
  widows: 100%;
  #openlayerEl {
    width: 100%;
    height: 100vh;
  }
}
</style>
