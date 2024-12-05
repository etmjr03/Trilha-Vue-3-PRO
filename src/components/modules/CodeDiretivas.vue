<template>
  <div>
    <span class="subtitle">Diretivas</span>
    <p class="question">Quais são as diretivas?</p>
    <p class="types">v-show</p>
    <p>
      v-show é uma condição que enquanto for verdadeira exibirá o elemento, se for false irá aplicar o estilo
      display: none no elemento
    </p>
    <pre v-html="highlightedCode.vShow" class="code-block"></pre>
  </div>
</template>

<script>
import Prism from 'prismjs';
import { exampleVShow } from '@/codes/codesJS.js';

export default {
  data() {
    return {
      code: exampleVShow,
    };
  },
  computed: {
    highlightedCode() {
      const vShow = Prism.highlight(this.code, Prism.languages.html, 'html');

      return {
        vShow
      };
    },
  },
};
</script>
