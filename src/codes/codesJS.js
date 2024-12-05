export const exampleHTML =
`Vue.createApp({
  // objeto do vue
}).mount('#app') // onde o vue irá manipular todos os dados, uma div com id="app"`;

export const exampleVShow = '<p v-show="show">Conteúdo do v-show</p>';

export const exampleVShowScript =
`export default {
  data() {
    return {
      show: true
    };
  },
  methods: {
    showContent() {
      this.show = !this.show;
    }
  }
};`;

export const exampleVIfElse  =
`
  <p v-if="valueProduct === 0" :style="error">O lance tem que ser de pelo menos R$ 1</p>

  <p v-else-if="valueProduct === ''" :style="error">Você precisa ofertar um valor</p>

  <p v-else-if="valueProduct > 0 && valueProduct < 900" :style="warning">Seu valor ofertado de {{ valueProduct }} reais é inferior ao oferecido.</p>

  <p v-else-if="valueProduct == 900" :style="warning">O valor ofertado de {{ valueProduct }} reais é igual ao oferecido, ofereça mais para ganhar!</p>

  <p v-else :style="success">Seu lance ofertado de {{ valueProduct }} reais é superior ao oferecido, o produto pode ser seu!</p>
`;

export const exampleVIfElseScript =
`
data() {
  return {
    valueProduct: '',
  };
},
computed: {
  const valueProduct = this.valueProduct;

  return {
    valueProduct
  };
}
`;
