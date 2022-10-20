<template>
  <div class="pageMenu">
    <group style="padding:0 6rem">
      <menu-bar />
    </group>
    <group>
      <div class="treeMenuCon">
        <tree-node :node="tree" />
      </div>
    </group>
  </div>
</template>
<script lang="ts">
import Group from "@/components/Group.vue";
import MenuBar from "@/components/menu/MenuBar.vue";
import TreeNode from "@/components/menu/TreeNode.vue";

import { ref } from "vue";
export default {
  components: { Group, MenuBar, TreeNode },
  setup() {
    const tree = ref({
      level: 0,
      label: "",
      childs: [
        {
          label: "1级菜单",
          childs: [
            {
              label: "2级菜单",
              childs: [
                {
                  label: "3级菜单",
                  childs: [
                    { label: "4级菜单" },
                    { label: "4级菜单" },
                    { label: "4级菜单" },
                    { label: "4级菜单" },
                  ],
                },
                { label: "3级菜单" },
                { label: "3级菜单" },
              ],
            },
            {
              label: "2级菜单",
              childs: [
                { label: "3级菜单" },
                { label: "3级菜单" },
                { label: "3级菜单" },
              ],
            },
          ],
        },
        {
          label: "1级菜单",
          childs: [
            { label: "2级菜单" },
            { label: "2级菜单" },
            { label: "2级菜单" },
            { label: "2级菜单" },
          ],
        },
      ],
    });

    return { tree };
  },
};
</script>
<style lang="scss" scoped>
.pageMenu {
  .treeMenuCon {
    width: fit-content;
    height: 30em;
    overflow-y: auto;
  }
}
</style>
