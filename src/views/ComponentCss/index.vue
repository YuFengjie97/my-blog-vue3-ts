<template>
  <page-con v-bind="option">
    <h1 id="pageButton"></h1>
    <page-button />
    <h1 id="pageCard"></h1>
    <page-card />
    <h1 id="pageMenu"></h1>
    <page-menu />
    <h1 id="pageCheckBox"></h1>
    <page-check-box />
  </page-con>
</template>
<script>
import { reactive, ref } from "vue";
import PageCon from "@/components/PageCon.vue";
import PageButton from "./pageButton.vue";
import PageCard from "./pageCard.vue";
import PageMenu from "./pageMenu.vue";
import pageCheckBox from "./pageCheckBox.vue";

export default {
  components: { PageCon, PageButton, PageCard, PageMenu, pageCheckBox },
  setup() {
    const option = reactive({
      title: "Css组件",
      navList: [
        { name: "按钮", divId: "pageButton" },
        { name: "卡片", divId: "pageCard" },
        { name: "菜单", divId: "pageMenu" },
        { name: "开关", divId: "pageCheckBox" },
      ],
    });
    return { option };
  },
};
</script>
<style lang="scss" scoped></style>
