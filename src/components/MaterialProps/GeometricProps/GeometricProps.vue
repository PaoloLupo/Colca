<template>
  <h1>Tipo de columna</h1>
  <FormKit
    type="select"
    label="Tipo de columna"
    name="columnGeoType"
    placeholder="Escoja el tipo de columna"
    v-model="columnGeoType"
    :options="colTypes"
  />

  <h1>Dimensiones de columna</h1>

  <keep-alive>
    <component :is="listShapeComponents[columnGeoType]" />
  </keep-alive>
</template>

<script setup>
import { ref } from "vue";

import InvalidGeoSelect from "./GeometricShape/InvalidGeoSelect.vue";
import RectCol from "./GeometricShape/RectCol.vue";

const listShapeComponents = [RectCol, InvalidGeoSelect, InvalidGeoSelect];

const colTypes = [
  { label: "Rectangular", value: 0 },
  { label: "Circular", value: 1 },
  { label: "T", value: 2 },
];

const columnGeoType = ref([0]);
</script>
