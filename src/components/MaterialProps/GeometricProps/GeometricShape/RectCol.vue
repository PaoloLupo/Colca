<template>
  <div class="flex flex-row gap-4">
    <FormKit type="group" v-model="rectCol">
      <FormKit
          type="number"
          name="altura"
          label="altura (cm)"
          min="0"
          max="100"
          step="5"
          :plugins="[castNumber]"
          @update:modelValue="areacol"
      />
      <FormKit
          type="number"
          name="ancho"
          label="ancho (cm)"
          min="0"
          max="100"
          step="5"
          :plugins="[castNumber]"
      />
    </FormKit>
    <pre wrap>
      {{rectCol.altura}}
      {{rectCol}}

    </pre>

    <label >Resultado en area {{ areacolumna }}</label>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { invoke } from "@tauri-apps/api/tauri";
// @update:modelValue="areacol"

const rectCol = ref({})

const areacolumna = ref();


function areacol() {
  invoke("area_colums", {
    altura: rectCol.value.altura,
    ancho: rectCol.value.ancho,
  }).then((area) => (areacolumna.value = area));
}

const castNumber = (node) => {
  node.hook.input((value, next) => next(Number(value)))
}

const callRust = (node) => {

}


</script>
