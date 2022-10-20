import Map from "ol/Map";
import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";
import View from "ol/View";

//map相关
export function initMap(domId: string): Map {
  const map = new Map({
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
    ],
    target: domId,
    view: new View({
      projection: "EPSG:4326",
      center: [108.405285, 39.904989],
      zoom: 4,
    }),
  });
  return map;
}
