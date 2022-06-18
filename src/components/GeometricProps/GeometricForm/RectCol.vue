<template>
  <div class="flex flex-row space-x-4 items-center">
    <label for="alturacol">Altura</label>
    <InputNumber id="alturacol" suffix=" cm" showButtons mode="decimal" :min="0" :max="100" :step="5" v-model="alturacol" @update:modelValue="areacol" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus"/>
    <label  for="anchocol">Ancho</label>
    <InputNumber id="anchocol" suffix=" cm" showButtons mode="decimal" :min="0" :max="100" :step="5" v-model="anchocol" @update:modelValue="areacol" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus"/>
    <label for="anchocol">Resultado en area {{areacolumna}} </label>
    <div v-katex="'\\frac{a_i}{1+x} holaqe'"></div>
  </div>
</template>

<script setup>

import {ref} from "vue";
import {invoke} from "@tauri-apps/api/tauri";

const alturacol  = ref(0)
const anchocol = ref(0)
const areacolumna = ref(0)

function areacol(){
  invoke('area_colums', {altura: alturacol.value, ancho: anchocol.value}).then((area) => areacolumna.value = area )
}

</script>
