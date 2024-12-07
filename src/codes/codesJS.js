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
`<p v-if="valueProduct === 0" :style="error">O lance tem que ser de pelo menos R$ 1</p>

<p v-else-if="valueProduct === ''" :style="error">Você precisa ofertar um valor</p>

<p v-else-if="valueProduct > 0 && valueProduct < 900" :style="warning">Seu valor ofertado de {{ valueProduct }} reais é inferior ao oferecido.</p>

<p v-else-if="valueProduct == 900" :style="warning">O valor ofertado de {{ valueProduct }} reais é igual ao oferecido, ofereça mais para ganhar!</p>

<p v-else :style="success">Seu lance ofertado de {{ valueProduct }} reais é superior ao oferecido, o produto pode ser seu!</p>
`;

export const exampleVIfElseScript =
`data() {
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

export const exampleVFor =
`<select v-model="users[0].name" class="select-users">
   <option v-for="user in users" :key="user.name" :value="user.name">{{ user.name }} - {{ user.profile }}</option>
</select>
`

export const exampleVForScript =
`data() {
  return {
    users: [
      {
        name: 'Junin',
        profile: 'Admin',
      },
      {
        name: 'July',
        profile: 'Admin',
      },
      {
        name: 'Usuário de teste',
        profile: 'Tester',
      }
    ]
  }
}
`;

export const exampleVbind =
`<img :src="src" :class="classExample" :style="styleExample">
<img v-bind="{src: 'https://cataas.com/cat', class: ['image-exaple', 'bg-active'], style: 'border-radius: 50%'}">
`;

export const exampleVbindScript =
`data() {
    return {
      code: exampleVbind,
      codeJS: exampleVbindScript,
      src: 'https://cataas.com/cat',
      classExample: ['image-exaple', { 'bg-active': true, 'bg-inactive': false }],
      styleExample: { 'border-radius': ['50px', '50%']},
      // valores do array do style tem prioridade sempre o da direita, se o navegador não interpretar ele, irá para o próximo
    }
  }
`;
