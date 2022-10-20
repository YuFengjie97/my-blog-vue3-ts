import { createStore } from "vuex";
import Map from "ol/Map";
import Feature, { FeatureLike } from "ol/Feature";

interface StateInterFace {
  map: null | Map;
  //要素触发点击事件和hover事件时,保存的要素信息(自定义的)
  clickFeature: null | Feature;
  hoverFeature: null | Feature;
}

const state: StateInterFace = {
  map: null,
  clickFeature: null,
  hoverFeature: null,
};

export default createStore({
  state,
  mutations: {
    initMap: (state, map) => {
      state.map = map;
    },
    setClickFeature: (state, feature) => {
      state.clickFeature = feature;
    },
    setHoverFeature: (state, feature) => {
      state.hoverFeature = feature;
    },
  },
  actions: {},
  modules: {},
});
