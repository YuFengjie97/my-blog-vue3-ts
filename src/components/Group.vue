<template>
  <div class="group">
    <slot></slot>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  //   setup() {},
};
</script>
<style lang="scss" scoped>
.group {
  font-size: 1rem;
  width: 100%;
  padding: 4rem 6rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  background-color: #333;
}
@media screen and(max-width:740px) {
  .group {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
