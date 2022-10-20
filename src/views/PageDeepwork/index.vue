<template>
  <div class="deepworkd">
    <div class="main">
      <div class="inner">
        <img src="./img/logo.png" alt="" />
        <h1>
          Deepwork
          <span>.fm</span>
        </h1>
        <h2>
          <span>
            The ultimate work playlist.
            <strong style="letter-spacing: 0.6px">Except it's a radio.</strong>
          </span>
          <br />
          <span>
            With weeks of unique, carefully selected tunes.
          </span>
        </h2>
        <media-player />
        <div class="playOps">
          <div class="heading">our channels</div>
          <button
            v-for="(item, index) in bts"
            :key="index"
            @click="activeIndex = index"
            :class="activeIndex == index ? 'btActive' : ''"
          >
            <img :src="require('./img/' + item.img)" alt="" />
            <div>
              <span>{{ item.title }}</span>
              <span>{{ item.des }}</span>
            </div>
          </button>
        </div>
        <div class="icons">
          <a href="#">
            <i class="fa fa-twitter" aria-hidden="true"></i>
          </a>
          <a href="#">
            <i class="fa fa-facebook" aria-hidden="true"></i>
          </a>
          <a href="#">
            <i class="fa fa-instagram" aria-hidden="true"></i>
          </a>
          <a href="#">
            <i class="fa fa-envelope-o" aria-hidden="true"></i>
          </a>
          <a href="#">
            <i class="fa fa-youtube" aria-hidden="true"></i>
          </a>
          <a href="#">
            <i class="fa fa-spotify" aria-hidden="true"></i>
          </a>
          <a href="#">
            <i class="fa fa-soundcloud" aria-hidden="true"></i>
          </a>
        </div>
        <p class="foot" style="text-align:justify">
          <span style="line-height:2.8rem">
            <strong>Copyright notice</strong>
          </span>
          <br />
          <span>
            这个网页是仿照
            <em>https://deepwork.fm</em>
            练习网页布局写的,只有两首歌,巴拉巴拉balalbalalbla All streamed
            tracks were found publicly available with
            <em>"free download &amp; use"</em>
            option and labeled either
            <em>"royalty free"</em>
            ,
            <em>"no copyright requirements"</em>
            or
            <em>"public domain"</em>
            by the uploader. All streamed content is an intellectual property of
            it's respective owners. Deepwork.fm always shows the track artist
            (if found). Please do
            <strong>
              <a
                href="mailto:%63%6f%70%79%72%69%67%68%74%40%64%65%65%70%77%6f%72%6b%2e%66%6d"
              >
                let me know
              </a>
            </strong>
            if you encountered any copyrighted tunes on this site so I can
            resolve the issue. This is a non-profit project, I pay for the
            hosting myself.
          </span>
          <br />
          <br />
          <span>Audio wave icon designed by Freepik</span>
        </p>
        <p class="foot">
          <span>
            Made by
            <a href="https://twitter.com/petrnagy">Petr Nagy</a>
          </span>
          <br />
          <span>v0.0.24 (open beta)</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import MediaPlayer from "./MediaPlayer.vue";
export default {
  components: { MediaPlayer },
  setup() {
    const activeIndex = ref(0);
    const bts = ref([
      {
        img: "random.png",
        title: "Random",
        des: "You work, we pick the tracks.",
      },
      {
        img: "calm.png",
        title: "My happy place",
        des: "Relaxing and peaceful tunes. You do your thing.",
      },
      {
        img: "energetic.png",
        title: "Boost!",
        des: "Absorb good vibes & energy from our electronic channel.",
      },
      {
        img: "epic.png",
        title: "Epic Quest",
        des: "Best companion for your wild adventures.",
      },
      {
        img: "nature.png",
        title: "Nature",
        des: "We have evolved to love ambient sounds.",
      },
    ]);
    return { activeIndex, bts };
  },
};
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
