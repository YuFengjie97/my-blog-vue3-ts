<template>
  <div class="mdCodeCon" v-html="md"></div>
</template>
<script>
import { onMounted } from "vue";
import hljs from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";
export default {
  props: {
    md: String,
  },
  setup() {
    onMounted(() => {
      hljs.highlightAll();
    });
  },
};
</script>
<style lang="scss" scoped>
.mdCodeCon {
  width: 100%;
  ::v-deep(.hljs) {
    width: 100%;
    font-size: 1rem;
    margin: 1em 0;
    border-radius: 0.8em;
    padding: 1em;
    font-family: Consolas;
  }
}
</style>
