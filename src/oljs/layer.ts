//跟layer,feature,事件相关

import Feature, { FeatureLike } from "ol/Feature";
import Point from "ol/geom/Point";
import VectorSource from "ol/source/Vector";
import { Icon, Style } from "ol/style";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import { unByKey } from "ol/Observable";
import Map from "ol/Map";
import { EventsKey } from "ol/events";
import { transform, toLonLat } from "ol/proj";
import { createFeatures } from "./feature";

//为hove更换实现方法
import Select from "ol/interaction/Select";
import { altKeyOnly, click, pointerMove } from "ol/events/condition";
import { Fill, Stroke, Circle } from "ol/style";

//自定义要素规范
export interface FeatureObj {
  id: string;
  name?: string;
  type?: string;
  pngIcon: string;
  coordinate: number[];
  info: object;
}

//自定义图层规范
export interface LayerObj {
  id: string;
  name?: string;
  type: string;
  featureList: FeatureObj[];
}

//创建栅格图层
export function createVecLayer(layer: LayerObj): VectorLayer {
  const vectorLayer = new VectorLayer({
    source: new VectorSource({ features: createFeatures(layer.featureList) }),
  });
  vectorLayer.set("id", layer.id);
  vectorLayer.set("type", layer.type);
  vectorLayer.setVisible(false); //默认隐藏图层
  return vectorLayer;
}

//控制所有图层显示与否
export function hiddenLayers(map: Map, bol: boolean) {
  map.getLayers().forEach((layer) => {
    layer.setVisible(bol);
  });
}

//控制某一图层的显示与否
export function toggleLayerById(map: Map, id: string, bol: boolean) {
  map.getLayers().forEach((layer) => {
    if (layer.get("id") == id) {
      layer.setVisible(bol);
    }
  });
}
