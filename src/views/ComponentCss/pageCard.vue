<template>
  <div class="pageCard">
    <group style="padding:0 6rem">
      <card-3-d />
      <card-3-d bgColor="#e67e22">Hello</card-3-d>
    </group>
    <group style="padding:0 6rem">
      <card-3-d-2 bgColor="#9b59b6" />
      <card-3-d-2 bgColor="#e67e22" title="Hello" />
    </group>
    <group style="padding:0 6rem">
      <card-3-d-3 bgColor="#9b59b6" />
      <card-3-d-3 bgColor="#e67e22" title="Hello" />
    </group>
  </div>
</template>
<script>
import Group from "@/components/Group.vue";
import Card3D from "@/components/card/Card3D.vue";
import Card3D2 from "@/components/card/Card3D2.vue";
import Card3D3 from "@/components/card/Card3D3.vue";

export default {
  components: { Group, Card3D, Card3D2, Card3D3 },
  // setup() {},
};
</script>
<style lang="scss" scoped>
.pageCard {
}
</style>
