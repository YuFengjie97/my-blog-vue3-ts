import Feature, { FeatureLike } from "ol/Feature";
import Point from "ol/geom/Point";
import VectorSource from "ol/source/Vector";
import { Icon, Style } from "ol/style";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import { unByKey } from "ol/Observable";
import Map from "ol/Map";
import { EventsKey } from "ol/events";
import { transform, toLonLat } from "ol/proj";

//为hove更换实现方法
import Select from "ol/interaction/Select";
import { altKeyOnly, click, pointerMove } from "ol/events/condition";
import { Fill, Stroke, Circle } from "ol/style";

export interface FeatureObj {
  id: string;
  name?: string;
  type?: string;
  pngIcon: string;
  coordinate: number[];
  info: object;
}
//自定义回调函数规范
enum IconAnchorUnits {
  FRACTION = "fraction",
  PIXELS = "pixels",
}

//创建图标要素
export function createFeature(feature: FeatureObj): Feature {
  const iconFeature = new Feature({
    geometry: new Point(feature.coordinate),
    custom: feature, //将feature对象绑在custom属性上
  });
  const iconStyle = new Style({
    image: new Icon({
      anchor: [0.5, 46],
      anchorXUnits: IconAnchorUnits.FRACTION,
      anchorYUnits: IconAnchorUnits.PIXELS,
      src: feature.pngIcon,
      scale: 0.8, //显示完整大小,然后缩放
    }),
  });
  iconFeature.setStyle(iconStyle);
  iconFeature.setId(feature.id);
  iconFeature.set("type", feature.type);
  return iconFeature;
}

//批量创建图标要素
export function createFeatures(features: FeatureObj[]): Feature[] {
  const arr: Feature[] = [];
  features.forEach((f) => {
    const item = createFeature(f);
    arr.push(item);
  });
  return arr;
}
