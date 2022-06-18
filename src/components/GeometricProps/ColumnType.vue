<template>
  <h1 class="text-xl font-bold text-sky-600">Tipo de columna</h1>
  <Dropdown v-model="selectedColType" :options="colTypes" optionLabel="type" optionValue="code" placeholder="Escoja la forma geométrica" @change="geometricChange"/>
  <h1 class="font-bold text-sky-600">Dimensiones de columna </h1>
  <keep-alive>
    <component :is="geoComponents[currentGeoComponent]"/>
  </keep-alive>
</template>

<script setup>
import {ref} from "vue";
import InvalidGeoSelect from "./GeometricForm/InvalidGeoSelect.vue";
import RectCol from "./GeometricForm/RectCol.vue";

const selectedColType = ref()

// TODO Agregar iconos svg en la lista desplegable
const colTypes = ref([
  {type: 'Rectangular', code: 'RectCol'},
  {type: 'Circular', code: 'CirCol'},
  {type: 'T', code: 'TeeCol'},
])

let currentGeoComponent =ref("InvalidGeoSelect")
const geoComponents = {
  InvalidGeoSelect,
  RectCol,
}
function geometricChange() {
  currentGeoComponent.value = selectedColType.value;
  console.log(selectedColType.value)
}

</script>
