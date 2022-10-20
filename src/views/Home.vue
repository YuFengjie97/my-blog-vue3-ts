<template>
  <div class="home">
    <router-view class="homeView"></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="scss" scoped>
.home {
  .homeView {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }
}
</style>
