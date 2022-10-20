<template>
  <div class="swipper">
    <div class="content">
      <h3>adventure is worthwhile</h3>
      <p>dicover new places with us, adventure awaits</p>
      <a href="#" class="btn">discover more</a>
    </div>

    <div class="controls">
      <span
        class="vid-btn"
        v-for="index in videos.length"
        :class="index - 1 == active ? 'active' : ''"
        :key="index"
        @click="active = index - 1"
      ></span>
    </div>

    <div class="video-container">
      <video
        :src="require('./assets/' + videos[active])"
        id="video-slider"
        loop
        autoplay
        muted
      ></video>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue';
export default {
  setup() {
    const videos = ref([
      'vid-1.mp4',
      'vid-2.mp4',
      'vid-3.mp4',
      'vid-4.mp4',
      'vid-5.mp4',
    ])
    const active = ref(0)
    return { active, videos }
  },
};
</script>
<style lang='scss' scoped>
@import "./public.scss";

.swipper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  .content {
    text-align: center;
    h3 {
      padding-bottom: 0.4em;
      font-size: 5em;
      font-weight: bold;
      text-transform: uppercase;
    }
    p {
      font-size: 3em;
    }
    margin-bottom: 6em;
  }
  .controls {
    border-radius: 5em;
    background: rgba(0, 0, 0, 0.7);
    padding: 1.5em;
    .vid-btn {
      display: inline-block;
      width: 2em;
      height: 2em;
      border-radius: 50%;
      margin: 0 0.8em;
      background: #fff;
      cursor: pointer;
    }
    .active {
      background: var(--orange);
    }
  }
  .video-container {
    video {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      z-index: -1;
      object-fit: cover;
    }
  }
}
</style>