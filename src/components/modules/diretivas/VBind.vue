<script>
import { exampleVbind, exampleVbindScript } from "@/codes/codesJS.js";
import Prism from "prismjs";

export default {
  data() {
    return {
      code: exampleVbind,
      codeJS: exampleVbindScript,
      src: 'https://cataas.com/cat',
      classExample: ['image-exaple', { 'bg-active': true, 'bg-inactive': false }],
      styleExample: { 'border-radius': ['50px', '50%']},
      // valores do array do style tem prioridade sempre o da direita, se o navegador não interpretar ele, irá para o próximo
    }
  },
  computed: {
    highlightedCode() {
      const vBind = Prism.highlight(this.code, Prism.languages.html, 'html');
      const vBindScript = Prism.highlight(this.codeJS, Prism.languages.javascript, 'javascript');

      return {
        vBind,
        vBindScript
      };
    },
  },
};
</script>

<template>
  <div>
    <p class="types">v-bind</p>
    <p>
      Pode ser utilizada com v-bind ou por : seguida do atributo, por exemplo :class. Com o v-bind você pode passar
      valores dinâmicos para os atributos do elemento.
    </p>

    <pre v-html="highlightedCode.vBind" class="code-block"></pre>
    <pre v-html="highlightedCode.vBindScript" class="code-block"></pre>

    <div class="example">
      <p class="example-title">Exemplo</p>
      <img
        :src="src"
        :class="classExample"
        :style="styleExample"
      >
      <img v-bind="{src: 'https://cataas.com/cat', class: ['image-exaple', 'bg-active'], style: 'border-radius: 50%'}">
    </div>
  </div>
</template>

<style scoped>
.image-exaple {
  width: 200px;
  height: 200px;
  margin: 0 0.5rem;
}

.bg-active {
  border: 3px solid #e89415;
}

.bg-inactive {
  border: 3px solid #1597e8;
}
</style>
