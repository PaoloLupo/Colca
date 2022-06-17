<template>
  <div class="grid-cols-1">
    <div>
      <label for="alturacol">Altura</label>
      <InputNumber id="alturacol" suffix=" cm" showButtons mode="decimal" :min="0" :max="100" :step="5" v-model="alturacol" @update:model-value="areacol"/>
    </div>
    <div>
      <label for="anchocol">Ancho</label>
      <InputNumber id="anchocol" suffix=" cm" showButtons mode="decimal" :min="0" :max="100" :step="5" v-model="anchocol" @update:model-value="areacol"/>
    </div>
    <div>
      <label for="anchocol">Resultado en area {{areacolumna}} </label>
    </div>

  </div>

</template>

<script setup lang="ts">

import {invoke} from '@tauri-apps/api/tauri'
import {reactive, ref} from "vue";
const alturacol  = ref(30)
const anchocol = ref(30)
const areacolumna = ref(0)

function areacol(){
  invoke('area_colums', {altura: alturacol.value, ancho: anchocol.value}).then((area) => areacolumna.value = area )

}
</script>

<style scoped>

</style>