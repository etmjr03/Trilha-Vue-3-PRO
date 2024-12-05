
# Vue 3 Pro

Projeto com finalidade de estudo para reforçar a base de conhecimento inicial do Vue 3 até adquirir conhecimentos mais avançados.




## Código

1. Como o Vue é criado?

```js
Vue.createApp({
    // objeto do vue
}).mount('#app') // onde o vue irá manipular todos os dados, uma div com id="app"
```

2. Como utilizar variáveis?

- As variáveis são criadas dentro de uma função data() que deve retornar um objeto com as variáveis (*atributo = variável*) e para printar as variáveis você deve usar a expressão *{{}}*

- script
```js
data() {
    return {
        title: 'Título'
    }
}
```

- template

```html
<h1>{{ title }}</h1>
```

3. Quais são as diretivas?

- Primeiro é interessante lembrar que diretivas são instruções aplicadas no layout e iniciam com v- e é seguido pelo nome da diretiva, exemplo: v-nome-da-diretiva. Também pode utilizar operadores nas condições

- *v-show* é uma condição e se for verdadeira irá exibir o conteúdo, se for falsa irá aplicar um style="display: none;" no elemento e esconde-lo

```html
<div v-show="true"></div>
```

- *v-if* é uma condição e se for verdadeira irá exibir o conteúdo, se for falso irá remover o conteúdo do html, diferente do v-show que apenas irá comentar o conteúdo

```html
<div v-if="true"></div>
```

- *v-else-if é uma condição específica e tem a mesmo comportamento que o *v-if*

```html
<div v-else-if="true"></div>
```

- *v-else* quando nenhuma das condições do v-if ou v-else forem verdadeiras ele exibirá o conteúdo

```html
<div v-else></div>
```

* Com exceção do *v-show*, as outras diretivas citadas podem ser utilizadas na tag <template> é geralmente utilizado para substituir uma <div> pai que não será necessário no layout