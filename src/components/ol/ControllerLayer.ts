import { onMounted, ref } from "vue";
import { getMock } from "@/api/index";
import { LayerObj, createVecLayer, toggleLayerById } from "@/oljs/layer";
import VectorLayer from "ol/layer/Vector";
import store from "@/store/index";
import Map from "ol/Map";

export default function controllerLayer() {
  let map: null | Map = null;
  const layers = ref<LayerObj[]>([]);

  async function getLayers() {
    //服务端获取layer
    const res = await getMock("/layers");
    layers.value = res.data;
  }

  function toggleLayer(id: string, bol: boolean) {
    toggleLayerById(map as Map, id, bol);
    const overlayers = map?.getOverlays();

    overlayers?.forEach((overlayer) => {
      if (overlayer != null) {
        overlayer.setPosition(undefined);
      }
    });
  }

  onMounted(async () => {
    await getLayers();
    map = store.state.map;
    //生成对应的vectorLayer
    layers.value.forEach((layer) => {
      const vecLayer = createVecLayer(layer);
      map?.addLayer(vecLayer);
    });
  });
  return { layers, toggleLayer };
}
