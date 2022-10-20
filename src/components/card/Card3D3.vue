<template>
  <div class="card3D2">
    <div class="con">
      <div class="up" :style="{ background: bgColor }">
        {{ titleCom }}
      </div>
      <div class="front" :style="frontBg"></div>
      <div class="right" :style="rightBg"></div>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
export default defineComponent({
  props: {
    bgColor: String,
    title: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const titleCom = computed(() => {
      if (props.title != "") {
        return props.title;
      } else {
        return props.bgColor;
      }
    });
    const frontBg = computed(() => {
      return {
        backgroundPosition: "bottom",
        backgroundImage: `linear-gradient(to top,transparent,${props.bgColor})`,
      };
    });
    const rightBg = computed(() => {
      return {
        backgroundPosition: "right",
        backgroundImage: `linear-gradient(to left,transparent,${props.bgColor})`,
      };
    });

    return { titleCom, frontBg, rightBg };
  },
});
</script>
<style lang="scss" scoped>
.card3D2 {
  font-size: 2rem;
  margin: 0 40px;
  .con {
    width: 8rem;
    height: 18rem;
    transform-style: preserve-3d;
    transform: rotateX(60deg) rotateZ(30deg) translateZ(0px);
    position: relative;
    transition: 0.3s;
    cursor: pointer;
    &:hover {
      .up {
        transform: translateZ(2rem);
      }
      .front {
        height: 2rem;
      }
      .right {
        width: 2rem;
      }
    }
  }
  .up {
    width: 100%;
    height: 100%;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid#bdc3c7;
    transform: translateZ(1rem);
    transition: 0.3s;
  }
  .front {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1rem;
    transform-origin: bottom;
    transform: rotateX(-90deg);
    background-size: 200%;
    border: 1px solid#bdc3c7;
    transition: 0.3s;
  }
  .right {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 1rem;
    height: 100%;
    transform-origin: right;
    transform: rotateY(90deg);
    background-size: 200%;
    border: 1px solid#bdc3c7;
    transition: 0.3s;
  }
}
</style>
