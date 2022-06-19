<template>
  <div class="flex flex-row space-x-4 items-center">
    <label for="alturacol">Altura</label>
    <NumberInput min="0" max="100" step="5" v-model.number="alturacol" @update:modelValue="areacol"/>
    <label  for="anchocol">Ancho</label>
    <NumberInput min="0" max="100" step="5" v-model.number="anchocol" @update:modelValue="areacol"/>
    <label for="anchocol">Resultado en area {{ areacolumna }} </label>
  </div>
</template>

<script setup >

import {ref} from "vue";
import {invoke} from "@tauri-apps/api/tauri";
import NumberInput from "../../../StyledComponents/NumberInput.vue"

const alturacol  = ref(0)
const anchocol = ref(0)
const areacolumna = ref(0)
const lol = ref(0)

function areacol(){
  invoke('area_colums', {altura: alturacol.value, ancho: anchocol.value}).then((area) => areacolumna.value  = area )
}

</script>
