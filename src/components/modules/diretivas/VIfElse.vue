<script>
import Prism from 'prismjs';
import { exampleVIfElse, exampleVIfElseScript } from '@/codes/codesJS.js';

export default {
  data() {
    return {
      show: true,
      valueProduct: '',
      src: 'https://imgnike-a.akamaihd.net/1920x1920/0117777UA9.jpg',
      error: { 'color': '#f80000' },
      warning: { 'color': '#e89415' },
      success: { 'color': '#04ec4d' },
      code: exampleVIfElse,
      codeJS: exampleVIfElseScript
    };
  },
  computed: {
    highlightedCode() {
      const vIfElse = Prism.highlight(this.code, Prism.languages.html, 'html');
      const vIfElseScript = Prism.highlight(this.codeJS, Prism.languages.html, 'html');
      const valueProduct = this.valueProduct;

      return {
        vIfElse,
        vIfElseScript,
        valueProduct
      };
    },
  },
};
</script>

<template>
  <div>
    <p class="types">v-if</p>
    <p>
      v-if é uma condição e se for verdadeira irá exibir o conteúdo, se for falso irá remover
      o conteúdo do html, diferente do v-show que apenas irá comentar o conteúdo
    </p>

    <p class="types">v-else-if</p>
    <p>
      v-else-if é uma condição específica e tem o mesmo comportamento que o v-if
    </p>

    <p class="types">v-else</p>
    <p>
      v-else quando nenhuma das condições do v-if ou v-else forem verdadeiras ele exibirá o conteúdo
    </p>

    <pre v-html="highlightedCode.vIfElse" class="code-block"></pre>
    <pre v-html="highlightedCode.vIfElseScript" class="code-block"></pre>

    <div class="example-sneaker">
      <span class="example-title">Exemplo</span>
      <p>Dê um lance por esse produto, existe um lance de R$ 900.</p>

      <div class="imagem-box">
        <img :src="src" alt="Tênis Nike" class="imagem">
      </div>

      <input
        v-model="valueProduct"
        @keyup.enter="showContent"
        type="number"
        class="input-value"
        placeholder="Digite seu lance"
      />

      <p v-if="valueProduct === 0" :style="error">O lance tem que ser de pelo menos R$ 1</p>
      <p v-else-if="valueProduct === ''" :style="error">Você precisa ofertar um valor</p>

      <p v-else-if="valueProduct > 0 && valueProduct < 900" :style="warning">
        Seu valor ofertado de {{ valueProduct }} reais é inferior ao oferecido.
      </p>

      <p v-else-if="valueProduct == 900" :style="warning">
        O valor ofertado de {{ valueProduct }} reais é igual ao oferecido, ofereça mais para ganhar!
      </p>

      <p v-else :style="success">
        Seu lance ofertado de {{ valueProduct }} reais é superior ao oferecido, o produto pode ser seu!
      </p>
    </div>
  </div>
</template>

<style scoped>
.example-sneaker {
  margin: 1rem 0;
  text-align: center;
}

.imagem-box {
  margin: 1rem 0;
}

.imagem {
  width: 200px;
  height: 200px;
  border-radius: 50%;
}

.input-value {
  margin: 1rem 0;
  padding: 0.5rem 0;
  text-align: center;
  outline: none;
  box-shadow: none;

  border: none;
  border-radius: 5px;
}
</style>
