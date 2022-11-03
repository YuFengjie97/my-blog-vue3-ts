import Fill from "ol/style/Fill";
import GeoJSON from "ol/format/GeoJSON";
import Stroke from "ol/style/Stroke";
import Style from "ol/style/Style";
import VectorSource from "ol/source/Vector";
import { Vector as VectorLayer } from "ol/layer";
import Feature, { FeatureLike } from "ol/Feature";

//高亮样式
const highlightStyle = new Style({
  fill: new Fill({
    color: "rgba(162, 155, 254,0.3)",
  }),
  stroke: new Stroke({
    color: "#61f2ff",
    width: 3,
  }),
});

//空白样式
const blankStyle = new Style({
  stroke: new Stroke({
    color: "transparent",
  }),
});

//地图source
export function initHlSource(url: string) {
  console.log(process.env);
  
  const source = new VectorSource({
    url: process.env.VUE_APP_PublicPath + url,
    format: new GeoJSON(),
  });

  return source;
}
export function initHlLayer(source: VectorSource) {
  const layer = new VectorLayer({
    source,
    style: blankStyle, //初始化时,去掉默认样式
  });
  return layer;
}

//消除指定source下所有要素的样式,vecSource
export function clearStyle(source: VectorSource): void {
  const featureList = source.getFeatures();
  if (featureList.length > 0) {
    featureList.forEach((f) => {
      f.setStyle(blankStyle);
    });
  }
}

//触发要素高亮,通过id
export function highlightById(source: VectorSource, id: string): void {
  const feature = source.getFeatureById(id);
  if (feature != null) {
    feature.setStyle(highlightStyle);
  }
}
//触发要素高亮,通过Feature
export function highlightByFeature(
  source: VectorSource,
  feature: Feature
): void {
  if (source != null) {
    clearStyle(source);
  }
  if (feature != null) {
    feature.setStyle(highlightStyle);
  }
}
//触发要素高亮,通过某个属性
export function highlightByProperty(
  source: VectorSource,
  property: string,
  val: string
): void {
  const features = source.getFeatures();
  features.forEach((f) => {
    if (f.get(property) == val) {
      f.setStyle(highlightStyle);
    }
  });
}
//消除要素高亮,通过某个属性
export function clearlightByProperty(
  source: VectorSource,
  property: string,
  val: string
): void {
  const features = source.getFeatures();
  features.forEach((f) => {
    if (f.get(property) == val) {
      f.setStyle(blankStyle);
    }
  });
}
