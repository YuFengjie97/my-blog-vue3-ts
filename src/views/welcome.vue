<template>
  <div class="welcome">
    <div class="main">
      <h1>Welcome</h1>
      <div class="grid">
        <router-link to="/componentCss">CSS组件</router-link>
        <router-link to="/componentChart">图表组件</router-link>
        <router-link to="/demoOpenlayer">Openlayer Demo</router-link>
        <router-link to="/tictactoe">井字棋</router-link>
      </div>

      <h2>页面仿写</h2>
      <div class="grid">
        <router-link to="/pageDeepwork">DeepWork</router-link>
        <router-link to="/pageHtml5_1">响应式_1</router-link>
        <router-link to="/pageHtml5_2">响应式_2</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  // setup() {},
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700&display=swap");

.welcome {
  font-family: "Nunito", sans-serif;
  min-height: 100vh;
  position: relative;
  color: #fff;
  padding: 4rem;
  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #fc4a1a; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #f7b733,
      #fc4a1a
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #f7b733,
      #fc4a1a
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }

  .main {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    h1 {
      display: inline-block;
      font-size: 6rem;
      font-weight: 900;
      padding: 3rem 0;
    }
    h2 {
      display: inline-block;
      font-size: 2.4rem;
      padding: 2rem 0;
    }
    .grid {
      width: 50%;
      height: fit-content;
      display: flex;
      gap: 2px;
      flex-wrap: wrap;
      transform-style: preserve-3d;
      perspective: 800px;
      a {
        font-size: 1.8rem;
        display: inline-block;
        background: #2d3436;
        white-space: nowrap;
        word-break: break-word;
        padding: 1rem 2rem;
        transition: 0.3s;
        &:hover {
          transform: translateY(-6px);
          box-shadow: -6px -6px 12px #fc4a1a, 6px 6px 12px #f7b733;
        }
      }
    }
  }
}
</style>
