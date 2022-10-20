import { unByKey } from "ol/Observable";
import Map from "ol/Map";
import Feature, { FeatureLike } from "ol/Feature";
import { EventsKey } from "ol/events";
import { transform, toLonLat } from "ol/proj";
import { Icon, Style } from "ol/style";

//为hove更换实现方法
import Select from "ol/interaction/Select";
import { altKeyOnly, click, pointerMove } from "ol/events/condition";
import { Fill, Stroke, Circle } from "ol/style";

import store from "@/store/index";

//要素点击事件
export function initFeatureClick(map: Map) {
  const handler = map.on("click", async function(evt) {
    // console.log("坐标:", evt.coordinate);
    const pixel = map.getEventPixel(evt.originalEvent);
    const feature = map.forEachFeatureAtPixel(pixel, function(f) {
      return f;
    });
    if (feature?.get("type") == "iconFeature") {
      store.commit("setClickFeature", feature);
    }
  });
}

//要素hover事件
export function initFeatureHover(map: Map) {
  // 使用forEachFeatureAtPixel获取要素,这个和高亮图层冲突
  //   const handler = map.on("pointermove", function(e) {
  //     const feature = map.forEachFeatureAtPixel(e.pixel, function(f) {
  //       return f;
  //     });
  //     if (feature?.get("type") == "iconFeature") {
  //       callback(feature);
  //     }
  //   });
  //   return handler;
  //------------------------------------------------------
  //使用select,选中要素
  const selectPointerMove = new Select({
    condition: pointerMove,
    style: null, //openlayer ts定义下,没有null,需要自己手动添加
    // hitTolerance: 20,//误差
  });
  map.addInteraction(selectPointerMove);
  selectPointerMove.on("select", function(e) {
    const fs = e.target.getFeatures().getArray();
    if (fs.length > 0) {
      const feature = fs[0];
      const custom = feature.get("custom");
      if (custom != null && custom.type != undefined) {
        if (custom.type == "iconFeature") {
          store.commit("setHoverFeature", feature);
        }
      }
    }
  });
}

//事件销毁
export function destroyHandler(eventHandler: EventsKey): void {
  if (eventHandler != null) {
    unByKey(eventHandler);
  }
}

//地图点击获取坐标
export function getCoordinate(map: Map): EventsKey {
  const handler = map.on("singleclick", function(e) {
    const coordinate = e.coordinate;
    // var point = transform(coordinate, "EPSG:3857", "EPSG:4326");
    const point = toLonLat(coordinate, "EPSG:3857");
    console.log("墨卡托:", coordinate);
    console.log("经纬度:", point);
  });
  return handler;
}
