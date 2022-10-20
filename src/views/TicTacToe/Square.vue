<template>
  <div class="square">
    {{ value }}
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  props: {
    value: String,
  },
  //   setup() {},
};
</script>
<style lang="scss" scoped>
.square {
  width: 100px;
  height: 100px;
  border-radius: 5px;
  border: 2px solid #1abc9c;

  font-size: 50px;
  font-weight: 800;
  text-align: center;
  line-height: 100px;
}
</style>
