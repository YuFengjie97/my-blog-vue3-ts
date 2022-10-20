<template>
  <div class="pageCon">
    <div class="head">
      <router-link to="/welcome">
        <i class="fa fa-home" aria-hidden="true"></i>
      </router-link>
      {{ title }}
    </div>
    <div class="main scroller">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import router from "@/router/index";
export default {
  props: {
    title: String,
    navList: Array,
  },
  setup() {
    const leftShow = ref(false);
    const currentPath = ref(router.currentRoute.value.path);
    return { leftShow, currentPath };
  },
};
</script>
<style lang="scss" scoped>
.pageCon {
  font-size: 1rem;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  .head {
    width: 100%;
    height: 8rem;
    font-size: 2.4rem;
    display: flex;
    display: flex;
    align-items: center;
    padding-left: 6rem;
    position: sticky;
    top: 0;
    left: 0;
    background: #f7b733; /* fallback for old browsers */
    color: #fff;
    z-index: 900;
    .fa {
      font-size: 3rem;
      padding: 1rem;
      text-align: center;
      color: #fff;
      border-radius: 100%;
      margin-right: 2rem;
    }
    .fa-home {
      display: inline-block;
      transition: 0.3s;
      background: #fc4a1a;
      &:hover {
        color: #f7b733;
      }
    }
  }
  .main {
    width: 100%;
    height: calc(100vh - 8rem);
    overflow-x: hidden;
    overflow-y: auto;
  }
}
</style>
