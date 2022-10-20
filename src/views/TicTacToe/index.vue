<template>
  <div class="con">
    <game />
  </div>
</template>
<script>
import { ref } from "vue";
import Game from "./Game.vue";
export default {
  components: {
    Game,
  },
  //   setup() {},
};
</script>
<style lang="scss" scoped>
.con {
}
</style>
