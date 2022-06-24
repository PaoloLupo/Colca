<template>
  <div class="p-2 grid-in-main">
    <h1>Cargas</h1>
    <div class="justify-left flex flex-col items-center bg-violet-light">
      <katex-element
        class="text-normal text-white"
        v-katex="'\\phi P_n = \\phi  0.80[0.85 f_c'"
        macros="{\\a: 'carga'}"
      ></katex-element>
    </div>
    {{ carga }}
  </div>
</template>

<script setup>
import { ref, provide } from "vue";
const carga = "dasd";
</script>

<style scoped></style>
