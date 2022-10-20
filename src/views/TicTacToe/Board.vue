<template>
  <div class="board">
    <square-block
      v-for="(item, index) in square"
      :key="index"
      :value="item"
      @click="handler(index)"
    />
  </div>
</template>
<script>
import SquareBlock from "./Square.vue";

export default {
  components: {
    SquareBlock,
  },
  props: {
    square: Array,
  },
  setup(props, { emit }) {
    function handler(index) {
      emit("squareClick", index);
    }
    return { handler };
  },
};
</script>
<style lang="scss" scoped>
.board {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
  row-gap: 4px;
  column-gap: 4px;
}
</style>
