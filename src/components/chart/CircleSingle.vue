<template>
  <div class="circle" :style="`width:${svgSize}px;height:${svgSize}px`">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      :style="`width:${svgSize}px;height:${svgSize}px`"
    >
      <!-- 进度圆环背景 -->
      <circle
        :cx="center"
        :cy="center"
        :r="rCom"
        :fill="fill"
        :stroke-width="bgWidth"
        :stroke="bgColor"
      />
      <!-- 进度圆环 -->
      <circle
        :cx="center"
        :cy="center"
        :r="rCom"
        fill="transparent"
        :stroke="stroke"
        :stroke-width="strokeWidth"
        :stroke-dasharray="dasharray"
        stroke-linecap="round"
      />
    </svg>
    <span :style="`color:${color}`">{{ num * 100 }} %</span>
  </div>
</template>
<script>
import { computed, onMounted, ref } from "vue";
export default {
  props: {
    size: {
      type: Number,
      default: 100,
    },
    stroke: {
      type: String,
      default: "red",
    },
    strokeWidth: {
      type: Number,
      default: 10,
    },
    fill: {
      type: String,
      default: "#fff",
    },
    num: {
      type: Number,
      default: 0.6,
    },
    bgColor: {
      type: String,
      default: "gray",
    },
    bgWidth: {
      type: Number,
      default: 6,
    },
    color: {
      type: String,
      default: "#000",
    },
  },
  setup(props) {
    //svg比外部容器要大,给内部circle留出额外空间
    const svgSize = computed(() => parseInt(props.size) + 30);
    //计算svg中心坐标
    const center = computed(() => svgSize.value / 2);
    //计算半径时,用props的size
    const rCom = computed(() => props.size / 2);

    const dasharray = computed(() => {
      const l = Math.PI * 2 * rCom.value;
      return [l * props.num, l * (1 - props.num)];
    });

    return { svgSize, center, rCom, dasharray };
  },
};
</script>
<style lang="scss" scoped>
.circle {
  position: relative;
  * {
    box-sizing: border-box;
  }

  svg {
    position: absolute;
    circle {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      transition: 1s;
      transition-timing-function: ease-in-out;
      transform: rotate(-90deg);
      transform-origin: center;
    }
  }
  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: inline-block;
    line-height: calc(100% + 40px - 10px);
    font-size: 22px;
  }
}
</style>
