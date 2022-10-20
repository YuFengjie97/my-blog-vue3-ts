<template>
  <div class="echartPieCon" ref="conRef"></div>
</template>
<script lang="ts">
import { defineComponent, onMounted, PropType, ref, watch } from "vue";
import * as echarts from "echarts";
interface Item {
  value: number;
  name: string;
}
interface SeriesBase {
  border: string;
  type: string;
  rose: string;
  r1: number; //内半径
  r2: number; //外半径
  data: Array<Item>;
}
export default defineComponent({
  props: {
    seriesBase: {
      type: Object as PropType<SeriesBase>,
    },
  },
  setup(props) {
    let chart: any | null = null; //echart图表,全局
    const conRef = ref();

    const option = {
      tooltip: {
        trigger: "item",
      },
      legend: {
        top: "0%",
        left: "center",
        textStyle: {
          color: "#fff",
        },
      },
      series: [
        {
          name: "访问来源",
          type: "pie",
          roseType: "",
          itemStyle: {},
          radius: (props.seriesBase as SeriesBase).r2 * 100 + "%" || ["", ""],
          data: (props.seriesBase as SeriesBase).data,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    };

    watch(
      () => props.seriesBase,
      () => {
        console.log("改变");

        const r1 = (props.seriesBase as SeriesBase).r1 * 100 + "%";
        const r2 = (props.seriesBase as SeriesBase).r2 * 100 + "%";
        const radius = props.seriesBase?.type == "pie" ? r2 : [r1, r2];

        const border =
          props.seriesBase?.border == "true"
            ? { borderRadius: 10, borderColor: "#fff", borderWidth: 2 }
            : { borderRadius: 0, borderColor: "#fff", borderWidth: 0 };

        const roseType = props.seriesBase?.rose == "true" ? "area" : "";

        option.series[0].radius = radius;
        option.series[0].itemStyle = border;
        option.series[0].roseType = roseType;

        console.log(option);

        chart.setOption(option);
      },
      { deep: true }
    );

    onMounted(() => {
      chart = echarts.init(conRef.value as HTMLElement);
      chart.setOption(option);
    });

    return { conRef };
  },
});
</script>

<style lang="scss">
.echartPieCon {
  width: 400px;
  height: 400px;
}
</style>
