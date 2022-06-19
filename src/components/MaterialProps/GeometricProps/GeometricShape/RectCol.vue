<template>
  <div class="flex flex-row space-x-4 items-center">
<!-- Las dimensiones estan en cm-->
<!-- TODO Colocar un sufijo de cm para mejor vizualizacion-->
    <NumberInput min="0" max="100" step="5" v-model.number="alturacol" @update:modelValue="areacol" name="Altura" units="kN/m2"/>
    <NumberInput min="0" max="100" step="5" v-model.number="anchocol" @update:modelValue="areacol" name="Ancho" units="cm"/>
    <label for="anchocol">Resultado en area {{ areacolumna }} </label>

  </div>
</template>

<script setup >

import {ref} from "vue";
import {invoke} from "@tauri-apps/api/tauri";
import NumberInput from "../../../../components/StyledComponents/NumberInput.vue"

const alturacol  = ref()
const anchocol = ref()
const areacolumna = ref()

function areacol(){
  invoke('area_colums', {altura: alturacol.value, ancho: anchocol.value}).then((area) => areacolumna.value  = area )
}

</script>
