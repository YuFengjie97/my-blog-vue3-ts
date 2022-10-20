import Mock, { mock, Random } from "mockjs";
const baseURL = "/mock";
import provinces from "./province";
import icon1 from "@/assets/featureIcon/01.png";
import icon2 from "@/assets/featureIcon/02.png";
import icon3 from "@/assets/featureIcon/03.png";
import icon4 from "@/assets/featureIcon/04.png";

import { FeatureObj, LayerObj } from "@/oljs/layer";

const iconList = [icon1, icon2, icon3, icon4];

//获取中国境内的随机坐标
function getRandomCoordinate(): number[] {
  return [Random.float(74, 129, 14), Random.float(18, 53, 13)];
}

function createLayer(pngIcon: string, name: string): LayerObj {
  const layer: LayerObj = {
    id: Random.id(),
    name,
    type: "iconLayer",
    featureList: [],
  };
  for (let j = 0; j < 8; j++) {
    const item: FeatureObj = {
      id: Random.id(),
      name: Random.name(),
      pngIcon,
      type: "iconFeature",
      coordinate: getRandomCoordinate(),
      info: { des: Random.paragraph(1, 2) },
    };
    layer.featureList.push(item);
  }
  return layer;
}

//返回4个图层
mock(baseURL + "/layers", "get", function() {
  const layers = [];
  const name = ["蓝", "红", "黄", "绿"];
  for (let i = 0; i < 4; i++) {
    const layer = createLayer(iconList[i], name[i]);
    layers.push(layer);
  }
  return layers;
});
