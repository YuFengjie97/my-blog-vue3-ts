//定位
interface Pos {
  name: string;
  cooridnate: number[]; //经纬度
}
import View from "ol/View";

import { onMounted, ref } from "vue";
import store from "@/store/index";
import { transform } from "ol/proj";
import { fromLonLat } from "ol/proj";

export default function setPositionTo() {
  const posList = ref<Pos[]>([
    { name: "山东", cooridnate: [117.000923, 36.675807] },
  ]);
  const map = store.state.map;

  function go(cooridnate: number[], zoom: number) {
    // const coor = transform(cooridnate, "EPSG:4326", "EPSG:3857");
    // const view = new View({
    //   projection: "EPSG:4326",
    //   center: cooridnate,
    //   zoom,
    // });

    const coor = fromLonLat(cooridnate);
    const view = map?.getView();

    view?.animate({
      center: coor,
      duration: 1000,
      zoom: 7,
    });
  }

  return { posList, go };
}
