<template>
  <div class="mediaPlayer">
    <audio id="audio"></audio>
    <img v-show="!isPlay" class="start" src="./img/play.svg" @click="play" />
    <img v-show="isPlay" class="start" src="./img/pause.svg" @click="pause" />

    <img class="next" src="./img/next_alt.svg" alt="" @click="next" />
    <div class="mp3Info">
      <div class="name">{{ name }}</div>
      <div class="state">
        <span>{{ isPlay ? "Playing..." : "Pause" }}</span>
      </div>
    </div>
    <div class="dance">
      <div class="con" v-show="isPlay">
        <div
          class="box"
          :class="isPlay ? 'boxDance' : ''"
          v-for="index in 4"
          :key="index"
        ></div>
      </div>
    </div>
    <div class="volume">
      <img
        v-show="volume != 0"
        src="./img/speaker.svg"
        alt=""
        @click="slient"
      />
      <img v-show="volume == 0" src="./img/speaker_muted.svg" alt="" />
      <vue-slider
        class="slider"
        v-model="volume"
        direction="btt"
        height="70px"
        tooltip="none"
        :interval="0.1"
        :min="0"
        :max="1"
      />
    </div>
  </div>
</template>
<script>
import { computed, onMounted, ref, watch } from "vue";
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/antd.css";

export default {
  components: {
    VueSlider,
  },
  setup() {
    const volume = ref(0.5);
    function slient() {
      volume.value = 0;
    }
    const mp3List = ref([
      { url: "没有理想的人不伤心.mp3", name: "没有理想的人不伤心" },
      { url: "bensound-creativeminds.mp3", name: "bensound-creativeminds" },
    ]);
    const audioActiveIdnex = ref(0);
    const isPlay = ref(true);
    let audio;

    function play() {
      audio.src = require("./" + mp3List.value[audioActiveIdnex.value].url);
      audio.play();
      isPlay.value = true;
    }
    function pause() {
      audio.pause();
      isPlay.value = false;
    }
    function next() {
      const len = mp3List.value.length;
      if (audioActiveIdnex.value < len - 1) {
        audioActiveIdnex.value++;
        play();
      } else if ((audioActiveIdnex.value = len - 1)) {
        audioActiveIdnex.value = 0;
        play();
      }
    }
    // function getStrByCharLen(str, charLen) {
    //   let newStr = "";
    //   for (const key in str) {
    //     if (charLen <= 0) {
    //       break;
    //     }
    //     newStr += str[key];
    //     if (str.charCodeAt(key) > 255) {
    //       charLen -= 2;
    //     } else {
    //       charLen--;
    //     }
    //   }
    //   return newStr;
    // }
    const name = computed(() => {
      return mp3List.value[audioActiveIdnex.value].name;
    });

    onMounted(() => {
      audio = document.getElementById("audio");
      audio.volume = volume.value;
      audio.loop = true;
      play();
    });
    watch(volume, (volume) => {
      audio.volume = volume;
    });
    return { name, volume, slient, play, next, isPlay, pause };
  },
};
</script>
<style lang="scss" scoped>
.mediaPlayer {
  width: 100%;
  max-width: 375px;
  min-width: 270px;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px 5px 20px;
  background-image: linear-gradient(30deg, #a4b0be, #f1c40f, #4cd137);
  background-size: 300%;
  animation: ani infinite ease-in-out 3s;
  border-radius: 5px;
  position: relative;
  @keyframes ani {
    0% {
      background-position: 0%;
    }
    50% {
      background-position: 100%;
    }
    100% {
      background-position: 0%;
    }
  }
  .start {
    width: 46px;
    cursor: pointer;
  }
  .next {
    width: 16px;
    margin-left: 10px;
    margin-right: 20px;
    cursor: pointer;
  }
  .mp3Info {
    height: 40px;
    width: 50%;
    padding-right: 1rem;
    white-space: nowrap;
    .name {
      font-size: 16px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .state {
      font-size: 14px;
    }
  }
  .volume {
    width: 16px;
    height: 100%;
    position: relative;
    img {
      position: absolute;
      bottom: 5px;
      left: -20px;
      cursor: pointer;
    }
    .slider {
      position: absolute;
      bottom: 6px;
    }
  }
  @media (max-width: 430px) {
    .dance {
      display: none;
    }
  }
  .dance {
    width: 36px;
    height: 20px;
    position: relative;
    margin-right: 20px;
    .con {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      flex-wrap: nowrap;
      .box {
        width: 4px;
        height: 100%;
        background: #fff;
        margin: 0 2px;
      }
      .boxDance {
        animation: dance 1s infinite linear;
      }
      $time: 0.3s;
      .box:nth-of-type(2) {
        animation-delay: $time;
      }
      .box:nth-of-type(3) {
        animation-delay: $time * 2;
      }
      .box:nth-of-type(4) {
        animation-delay: $time * 3;
      }
      @keyframes dance {
        0% {
          height: 0%;
        }
        50% {
          height: 100%;
        }
        100% {
          height: 0%;
        }
      }
    }
  }
}
</style>
