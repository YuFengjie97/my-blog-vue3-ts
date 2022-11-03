//分层设色图
import Fill from "ol/style/Fill";
import GeoJSON from "ol/format/GeoJSON";
import Stroke from "ol/style/Stroke";
import Style from "ol/style/Style";
import VectorSource from "ol/source/Vector";
import { Vector as VectorLayer } from "ol/layer";
import Feature, { FeatureLike } from "ol/Feature";

import { onMounted } from "vue";
import store from "@/store/index";

export default function colorZone() {
  const style1 = new Style({
    fill: new Fill({
      color: "rgba(12, 94, 43,.8)",
    }),
    stroke: new Stroke({
      color: "#fff",
      width: 2,
    }),
  });

  const style2 = new Style({
    fill: new Fill({
      color: "rgba(54, 146, 78,.8)",
    }),
    stroke: new Stroke({
      color: "#fff",
      width: 2,
    }),
  });

  const style3 = new Style({
    fill: new Fill({
      color: "rgba(159, 207, 151,.8)",
    }),
    stroke: new Stroke({
      color: "#fff",
      width: 2,
    }),
  });

  const style4 = new Style({
    fill: new Fill({
      color: "rgba(184, 215, 177,.8)",
    }),
    stroke: new Stroke({
      color: "#fff",
      width: 2,
    }),
  });

  const layers: VectorLayer[] = [];
  function initColorLayer(url: string, style: Style) {
    const layer = new VectorLayer({
      source: new VectorSource({
        url: process.env.VUE_APP_PublicPath + url,
        format: new GeoJSON(),
      }),
      style,
    });
    layers.push(layer);
  }

  onMounted(() => {
    console.log("colorzone");

    const map = store.state.map;
    initColorLayer("geojson/370000_1.json", style1);
    initColorLayer("geojson/370000_2.json", style2);
    initColorLayer("geojson/370000_3.json", style3);
    initColorLayer("geojson/370000_4.json", style4);
    layers.forEach((layer) => {
      map?.addLayer(layer);
      layer.setZIndex(1);
    });
  });

  return {};
}
