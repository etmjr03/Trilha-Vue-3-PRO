<script>
import VShow from "@/components/modules/diretivas/VShow.vue";
import VIfElse from "@/components/modules/diretivas/VIfElse.vue";

export default {
  components: {
    VShow,
    VIfElse
  }
};
</script>

<template>
  <div>
    <span class="subtitle">Diretivas</span>
    <p class="question">Quais são as diretivas?</p>
    <p>
      Primeiro é interessante lembrar que diretivas são instruções aplicadas no layout e iniciam com v-
      e é seguido pelo nome da diretiva, exemplo: v-nome-da-diretiva. Também pode utilizar operadores nas condições
    </p>

    <VShow />
    <VIfElse />
  </div>
</template>
