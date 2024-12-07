<script>
import VShow from "@/components/modules/diretivas/VShow.vue";
import VIfElse from "@/components/modules/diretivas/VIfElse.vue";
import VFor from "@/components/modules/diretivas/VFor.vue";
import VBind from "@/components/modules/diretivas/VBind.vue";

export default {
  components: {
    VShow,
    VIfElse,
    VFor,
    VBind
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
    <VFor />
    <VBind />
  </div>
</template>
