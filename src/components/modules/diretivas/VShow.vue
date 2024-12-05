<script>
import Prism from 'prismjs';
import { exampleVShow, exampleVShowScript } from '@/codes/codesJS.js';

export default {
  data() {
    return {
      code: exampleVShow,
      codeJS: exampleVShowScript,
      show: true
    };
  },
  methods: {
    showContent() {
      this.show = !this.show;
    }
  },
  computed: {
    highlightedCode() {
      const vShow = Prism.highlight(this.code, Prism.languages.html, 'html');
      const vShowScript = Prism.highlight(this.codeJS, Prism.languages.html, 'html');

      return {
        vShow,
        vShowScript
      };
    },
  },
};
</script>

<template>
  <div>
    <p class="types">v-show</p>
    <p>
      v-show é uma condição que enquanto for verdadeira exibirá o elemento, se for false irá aplicar o estilo
      display: none no elemento
    </p>

    <pre v-html="highlightedCode.vShow" class="code-block"></pre>
    <pre v-html="highlightedCode.vShowScript" class="code-block"></pre>

    <div class="example">
      <span class="example-title">Exemplo</span>
      <button @click="showContent" class="button-example">{{ show ? 'Esconder' : 'Mostrar' }}</button>
      <p v-show="show">Conteúdo do v-show</p>
    </div>
  </div>
</template>

<style scoped>
.button-example {
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  font-size: 0.8rem;
  text-transform: uppercase;

  background: #1597e8;
  color: #FFF;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.button-example:hover {
  background: #FFF;
  color: #1597e8;
}
</style>
