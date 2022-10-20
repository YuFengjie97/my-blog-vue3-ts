<template>
  <div class="treeNode ">
    <div
      class="label"
      @click="toggleChilds"
      :class="`menu${node.level}`"
      v-if="node.hasOwnProperty('label') && node.label != ''"
    >
      {{ node.label }}
      <span v-if="node.hasOwnProperty('childs') && node.childs.length != 0">
        ({{ node.childs.length }})
      </span>
      <i
        v-if="node.hasOwnProperty('childs') && node.childs.length != 0"
        class="fa fa-chevron-up"
        :class="isHidden ? '' : 'down'"
        aria-hidden="true"
      ></i>
    </div>
    <div
      class="childs"
      :class="isHidden ? 'childsHidden' : ''"
      v-if="node.hasOwnProperty('childs') && node.childs.length != 0"
    >
      {{ childs }}
      <div class="child" v-for="(item, index) in node.childs" :key="index">
        <tree-node :node="{ ...item, level: levelAdd }" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, ref } from "vue";

interface Node {
  level: number;
  label: string;
  child: Node[];
}

export default defineComponent({
  name: "tree-node",
  props: {
    node: {
      type: Object as PropType<Node>,
    },
  },
  setup(props) {
    const levelAdd = ref((props.node as Node).level + 1);

    const isHidden = ref(false);
    function toggleChilds() {
      isHidden.value = !isHidden.value;
    }

    return { toggleChilds, isHidden, levelAdd };
  },
});
</script>
<style lang="scss" scoped>
.treeNode {
  font-size: 2rem;
  min-width: 10em;
  .label {
    cursor: pointer;
    color: #fff;
    padding: 8px 10px;
    border-bottom: 2px solid #000;
    position: relative;
    .fa {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%) rotateZ(0deg);
      transition: 0.3s;
    }
    .down {
      transform: translateY(-50%) rotateZ(180deg);
    }
  }
  .childs {
    max-height: 100vh;
    transition: 0.7s;
    overflow: hidden;
  }
  .childsHidden {
    max-height: 0px;
  }
  // .menu0 {
  //   background: #1abc9c;
  //   font-size: 18px;
  // }
  .menu1 {
    background: #2ecc71;
    font-size: 18px;
  }
  .menu2 {
    background: #3498db;
    font-size: 16px;
    padding-left: 16px;
  }
  .menu3 {
    background: #9b59b6;
    font-size: 14px;
    padding-left: 20px;
  }
  .menu4 {
    background: #e74c3c;
    font-size: 12px;
    padding-left: 24px;
  }
}
</style>
