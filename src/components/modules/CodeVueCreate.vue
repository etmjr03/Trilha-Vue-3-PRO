<script>
import Prism from 'prismjs';
import { exampleHTML } from "@/codes/codesJS.js";

export default {
  data() {
    return {
      exampleHTML
    };
  },
  computed: {
    highlightedCode() {
      return Prism.highlight(this.code, Prism.languages.html, 'html');
    },
  },
};
</script>

<template>
  <div>
    <span class="subtitle">Onde o vue se inicia</span>

    <p class="question">Como o vue é criado?</p>

    <pre v-html="exampleHTML" class="code-block"></pre>
  </div>
</template>

<style scoped>

</style>
