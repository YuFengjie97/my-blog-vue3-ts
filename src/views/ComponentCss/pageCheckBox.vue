<template>
  <div class="pageCheckBox">
    <group>
      <change-color id="changeColor" />
      <gravity id="gravity" />
      <transparent id="transparent" />
      <yes-no id="yesno" />
    </group>
  </div>
</template>
<script lang="ts">
import Group from "@/components/Group.vue";
import ChangeColor from "@/components/checkbox/ChangeColor.vue";
import Gravity from "@/components/checkbox/Gravity.vue";
import Transparent from "@/components/checkbox/Transparent.vue";
import YesNo from "@/components/checkbox/YesNo.vue";

import { ref } from "vue";
export default {
  components: { Group, ChangeColor, Gravity, Transparent, YesNo },
  //   setup() {},
};
</script>
<style lang="scss" scoped>
.pageCheckBox {
}
</style>
