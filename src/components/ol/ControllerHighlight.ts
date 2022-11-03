import {
  initHlSource,
  initHlLayer,
  highlightByProperty,
  clearlightByProperty,
} from "@/oljs/areaHighlight";

import { getJsonObj } from "@/oljs/jsonToObj";
import store from "@/store/index";
import Map from "ol/Map";
import GeoJSON from "ol/format/GeoJSON";

import { onMounted, ref } from "vue";
import VectorSource from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector";

export default function controllerHightlight() {
  let map: null | Map = null;
  const provinces = ref([]);
  let hlSource: null | VectorSource = null;
  let hlLayer: null | VectorLayer = null;

  function hightlightByAdcode(bol: boolean, adcode: string): void {
    if (hlSource != null) {
      if (bol) {
        highlightByProperty(hlSource, "adcode", adcode);
      } else {
        clearlightByProperty(hlSource, "adcode", adcode);
      }
    }
  }
  async function getProvices() {
    const res = await getJsonObj("/geojson/100000_full.json");
    provinces.value = res.features;
  }

  onMounted(async () => {
    map = store.state.map;
    hlSource = initHlSource("geojson/100000_full.json");
    hlLayer = initHlLayer(hlSource);
    map?.addLayer(hlLayer);

    await getProvices();
    //添加高亮线条(图层)
  });

  return { provinces, hightlightByAdcode };
}
