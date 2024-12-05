<script>
import { exampleVFor, exampleVForScript } from "@/codes/codesJS.js";
import Prism from "prismjs";

export default {
  data() {
    return {
      code: exampleVFor,
      codeJS: exampleVForScript,
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
  },
  computed: {
    highlightedCode() {
      const vFor = Prism.highlight(this.code, Prism.languages.html, 'html');
      const vForScript = Prism.highlight(this.codeJS, Prism.languages.html, 'html');

      return {
        vFor,
        vForScript
      };
    },
  },
};
</script>

<template>
  <div>
    <p class="types">v-for</p>
    <p>
      Essa diretiva é responsável por percorrer um array e acessar os índices dos objetos, você pode utilizar
      para criar vários options de um select, por exemplo
    </p>

    <pre v-html="highlightedCode.vFor" class="code-block"></pre>
    <pre v-html="highlightedCode.vForScript" class="code-block"></pre>

    <div class="example">
      <p class="example-title">Exemplo</p>
      <p>Selecione um usuário</p>
      <select v-model="users[0].name" class="select-users">
        <option v-for="user in users" :key="user.name" :value="user.name">
          {{ user.name }} - {{ user.profile }}
        </option>
      </select>
    </div>
  </div>
</template>

<style scoped>
.select-users {
  padding: 0.5rem 0;
  text-align: center;
  outline: none;
  box-shadow: none;

  border: none;
  border-radius: 5px;
}
</style>
