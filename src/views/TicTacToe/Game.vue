<template>
  <div class="game">
    <div class="board">
      <div class="status">
        {{ status }}
      </div>
      <board :square="currentSquare" @squareClick="handler" />
    </div>

    <div class="recorder">
      <h1>历史回溯,点击跳转:</h1>
      <div
        v-for="(item, index) in history"
        :key="index"
        @click="goHistory(index)"
      >
        <button class="mb-2 text-white bg-gray-700" v-if="index != 0">
          第{{ index }}步,Palyer:{{ item.player }},坐标:{{ item.coordinate }}
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { computed, ref } from "vue";
import Board from "./Board";

//判断胜负
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (
      squares[a] != null &&
      squares[a] &&
      squares[a] === squares[b] &&
      squares[a] === squares[c]
    ) {
      return squares[a];
    }
  }
  return null;
}

//对应坐标
const coordinateObj = {
  1: [1, 1],
  2: [1, 2],
  3: [1, 3],
  4: [2, 1],
  5: [2, 2],
  6: [2, 3],
  7: [3, 1],
  8: [3, 2],
  9: [3, 3],
};

export default {
  components: {
    Board,
  },
  setup() {
    // const square = ref(Array(9).fill(null));
    const history = ref([{ square: Array(9).fill(null) }]); //预存了初始状态的历史
    const currentSquare = ref(Array(9).fill(null));
    let isNextX = true;
    const status = ref("Next Player is:X");

    function handler(index) {
      //点击前,如果有winner,return
      if (calculateWinner(history.value[history.value.length - 1].square)) {
        return;
      }
      //没有胜者,点击
      else {
        //这个block没有棋子
        if (currentSquare.value[index] === null) {
          //落子
          currentSquare.value[index] = isNextX ? "X" : "O";
          //存入历史
          history.value.push({
            square: [...currentSquare.value],
            player: currentSquare.value[index],
            coordinate: coordinateObj[index + 1],
          });

          //落完这子有胜者
          if (calculateWinner(currentSquare.value)) {
            status.value = `Winner is ${isNextX ? "X" : "O"}`;
          }
          //无胜者,切换下一位
          else {
            isNextX = !isNextX;
            status.value = `Next Player is:${isNextX ? "X" : "O"}`;
          }
        }
      }
    }

    function goHistory(index) {
      currentSquare.value = history.value[index].square;
    }

    return { history, handler, status, currentSquare, goHistory };
  },
};
</script>
<style lang="scss" scoped>
.game {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 4rem;
  gap: 4rem;
  .status {
    font-size: 4rem;
    padding: 5px 10px;
    font-size: 20px;
  }
  button {
    display: block;
    padding: 5px 10px;
    font-size: 20px;
  }
  .recorder {
    font-size: 2rem;
    h1 {
      text-align: left;
      margin: 2rem 0;
    }
  }
}
</style>
