<template>
  <div class="componentChart">
    <page-con v-bind="option">
      <h1 id="circleSingle"></h1>
      <group>
        <circle-single v-bind="circle" />
        <div class="form">
          <div class="item">
            <label>尺寸:</label>
            <vue-slider
              style="flex:1"
              v-model="circle.size"
              :lazy="true"
              :interval="0.1"
              :min="50"
              :max="200"
            />
          </div>
          <div class="item">
            <label>进度条色:</label>
            <input type="color" v-model="circle.stroke" />
          </div>
          <div class="item">
            <label>进度条宽度:</label>
            <vue-slider
              style="flex:1"
              v-model="circle.strokeWidth"
              :interval="0.1"
              :min="1"
              :max="20"
            />
          </div>
          <div class="item">
            <label>背景填充色:</label>
            <input type="color" v-model="circle.fill" />
          </div>
          <div class="item">
            <label>数值(0-1的小数):</label>
            <vue-slider
              style="flex:1"
              v-model="circle.num"
              :interval="0.1"
              :min="0"
              :max="1"
            />
          </div>
          <div class="item">
            <label>进度条背景色:</label>
            <input type="color" v-model="circle.bgColor" />
          </div>
          <div class="item">
            <label>进度条背景宽度:</label>
            <vue-slider
              style="flex:1"
              v-model="circle.bgWidth"
              :interval="0.1"
              :min="1"
              :max="20"
            />
          </div>
          <div class="item">
            <label>文本色:</label>
            <input type="color" v-model="circle.color" />
          </div>
        </div>
      </group>

      <h1 id="circleMore"></h1>
      <group>
        <circle-more v-bind="circleMoreOps" />
        <div class="form">
          <div class="item">
            <label>基准半径 :</label>
            <vue-slider
              style="flex:1"
              v-model="circleMoreOps.rBase"
              :lazy="true"
              :interval="1"
              :min="30"
              :max="60"
            />
          </div>
          <div class="item">
            <label>粗细 :</label>
            <vue-slider
              style="flex:1"
              v-model="circleMoreOps.strokeWidth"
              :lazy="true"
              :interval="1"
              :min="5"
              :max="20"
            />
          </div>
          <div class="item">
            <label>间隔 :</label>
            <vue-slider
              style="flex:1"
              v-model="circleMoreOps.gap"
              :lazy="true"
              :interval="1"
              :min="5"
              :max="20"
            />
          </div>
          <div
            class="item"
            v-for="item in circleMoreOps.list"
            :key="item.index"
          >
            <label :style="{ color: item.color }">{{ item.label }} :</label>
            <vue-slider
              style="flex:1"
              v-model="item.val"
              :lazy="true"
              :interval="0.1"
              :min="0"
              :max="1"
            />
          </div>
        </div>
      </group>

      <h1 id="progressBar"></h1>
      <group>
        <progress-bar v-bind="progressBarOps" />
        <div class="form">
          <div class="item">
            <label>百分比 :</label>
            <vue-slider
              style="flex:1"
              v-model="progressBarOps.num"
              :lazy="true"
              :interval="0.01"
              :min="0"
              :max="1"
            />
          </div>
        </div>
      </group>

      <h1 id="progressCube"></h1>
      <group style="background:#d0d0d0">
        <progress-cube v-bind="progressCubeOps" />
        <div class="form">
          <div class="item">
            <label>进度条色:</label>
            <input type="color" v-model="progressCubeOps.color" />
          </div>
          <div class="item">
            <label>进度:</label>
            <vue-slider
              style="flex:1"
              v-model="progressCubeOps.num"
              :lazy="true"
              :interval="0.1"
              :min="0"
              :max="1"
            />
          </div>
        </div>
      </group>

      <h1 id="echartPie"></h1>
      <group>
        <echart-pie v-bind="echartPieOps" />
        <div class="form">
          <div class="item">
            <label>类型:</label>
            <select v-model="echartPieOps.seriesBase.type">
              <option value="pie">饼图</option>
              <option value="ring">环图</option>
            </select>
          </div>
          <div class="item">
            <label>边框:</label>
            <select v-model="echartPieOps.seriesBase.border">
              <option value="true">是</option>
              <option value="false">否</option>
            </select>
          </div>
          <div class="item">
            <label>玫瑰图:</label>
            <select v-model="echartPieOps.seriesBase.rose">
              <option value="true">是</option>
              <option value="false">否</option>
            </select>
          </div>
          <div class="item" v-show="echartPieOps.seriesBase.type == 'ring'">
            <label>
              内半径:
            </label>
            <vue-slider
              style="flex:1"
              v-model="echartPieOps.seriesBase.r1"
              :lazy="true"
              :interval="0.1"
              :min="0.1"
              :max="0.4"
            />
          </div>
          <div class="item">
            <label>
              <span v-show="echartPieOps.seriesBase.type == 'ring'">
                外半径:
              </span>
              <span v-show="echartPieOps.seriesBase.type == 'pie'">半径:</span>
            </label>
            <vue-slider
              style="flex:1"
              v-model="echartPieOps.seriesBase.r2"
              :lazy="true"
              :interval="0.1"
              :min="0.5"
              :max="0.8"
            />
          </div>
          <div
            class="item"
            v-for="(item, index) in echartPieOps.seriesBase.data"
            :key="index"
          >
            <label>{{ item.name }}:</label>
            <vue-slider
              style="flex:1"
              v-model="item.value"
              :lazy="true"
              :interval="1"
              :min="0"
              :max="100"
            />
          </div>
        </div>
      </group>
    </page-con>
  </div>
</template>
<script>
import { reactive } from "vue";
import PageCon from "@/components/PageCon.vue";

import CircleSingle from "@/components/chart/CircleSingle.vue";
import CircleMore from "@/components/chart/CircleMore";
import ProgressBar from "@/components/chart/ProgressBar";
import ProgressCube from "@/components/chart/ProgressCube";
import EchartPie from "@/components/chart/EchartPie/index";

import Group from "@/components/Group.vue";
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/antd.css";

export default {
  components: {
    PageCon,
    Group,
    VueSlider,
    CircleSingle,
    CircleMore,
    ProgressBar,
    ProgressCube,
    EchartPie,
  },
  setup() {
    const option = reactive({
      title: "图表组件",
      navList: [
        { name: "单圆进度", divId: "circleSingle" },
        { name: "多圆进度", divId: "circleMore" },
        { name: "平面进度", divId: "progressBar" },
        { name: "立体进度", divId: "progressCube" },
        { name: "饼图", divId: "echartPie" },
      ],
    });
    const circle = reactive({
      size: 100,
      stroke: "#ffbe76",
      strokeWidth: 10,
      fill: "#353b48",
      num: 0.6,
      bgColor: "#7ed6df",
      bgWidth: 6,
      color: "#f6e58d",
    });

    const circleMoreOps = reactive({
      rBase: 60,
      strokeWidth: 10,
      gap: 20,
      list: [
        { index: 0, label: "毛衣", color: "#00a8ff", val: 0.8 },
        { index: 1, label: "袜子", color: "#9c88ff", val: 0.8 },
        { index: 2, label: "貂皮大衣", color: "#fbc531", val: 0.8 },
        { index: 3, label: "棉裤", color: "#4cd137", val: 0.8 },
        { index: 4, label: "羊毛内裤", color: "#487eb0", val: 0.8 },
        { index: 5, label: "刺猬护甲", color: "#e84118", val: 0.8 },
      ],
    });

    const progressBarOps = reactive({
      num: 0.85,
      width: 300,
    });

    const progressCubeOps = reactive({
      color: "#ec008c",
      num: 0.85,
    });

    const echartPieOps = reactive({
      seriesBase: {
        border: "false",
        type: "pie",
        rose: "false",
        r1: 0.4, //内半径
        r2: 0.6, //外半径
        data: [
          { value: 100, name: "搜索引擎" },
          { value: 73, name: "直接访问" },
          { value: 58, name: "邮件营销" },
          { value: 48, name: "联盟广告" },
          { value: 30, name: "视频广告" },
        ],
      },
    });

    return {
      option,
      circle,
      echartPieOps,
      circleMoreOps,
      progressBarOps,
      progressCubeOps,
    };
  },
};
</script>
<style lang="scss" scoped>
.componentChart {
  .form {
    color: #fff;
    .item {
      width: 20em;
      display: flex;
      align-items: center;
      label {
        width: 8em;
        text-align: right;
        margin-right: 1em;
      }
      label + * {
        color: #000;
      }
    }
  }
}
</style>
