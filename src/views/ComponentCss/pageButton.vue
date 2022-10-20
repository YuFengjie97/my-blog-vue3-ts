<template>
  <div class="pageButton">
    <group>
      <bt-1>Hello</bt-1>
      <bt-2></bt-2>
      <bt-3></bt-3>
      <bt-4></bt-4>
      <bt-5></bt-5>
    </group>
    <group>
      <bt-cool></bt-cool>
      <bt-cool color="#81ecec">Hello</bt-cool>
      <bt-cool color="#fd79a8">World</bt-cool>
    </group>
    <group>
      <bt-flash></bt-flash>
      <bt-flash>Hello</bt-flash>
      <bt-flash>World</bt-flash>
    </group>
    <group>
      <bt-neno></bt-neno>
      <bt-neno color="#81ecec">Hello</bt-neno>
      <bt-neno color="#fd79a8">World</bt-neno>
    </group>

    <group>
      <bt-cyberpunk></bt-cyberpunk>
      <bt-cyberpunk bg="#3498db" info="Hello"></bt-cyberpunk>
      <bt-cyberpunk bg="#8e44ad" info="World"></bt-cyberpunk>
    </group>
  </div>
</template>
<script>
import Group from "@/components/Group.vue";
import Bt1 from "@/components/button/Bt1.vue";
import Bt2 from "@/components/button/Bt2.vue";
import Bt3 from "@/components/button/Bt3.vue";
import Bt4 from "@/components/button/Bt4.vue";
import Bt5 from "@/components/button/Bt5.vue";
import BtCool from "@/components/button/BtCool.vue";
import BtFlash from "@/components/button/BtFlash.vue";
import BtNeno from "@/components/button/BtNeno.vue";
import BtCyberpunk from "@/components/button/BtCyberpunk.vue";

export default {
  components: {
    Group,
    Bt1,
    Bt2,
    Bt3,
    Bt4,
    Bt5,
    BtCool,
    BtFlash,
    BtNeno,
    BtCyberpunk,
  },
  // setup() {},
};
</script>
<style lang="scss" scoped>
.pageButton {
}
</style>
