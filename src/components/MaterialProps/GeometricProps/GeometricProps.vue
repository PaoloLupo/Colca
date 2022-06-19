<template>
  <h1 class="text-xl font-bold text-sky-600">Tipo de columna</h1>

  <Listbox v-model="selectedColType" >
    <ListboxButton>{{ selectedColType.name }}</ListboxButton>
    <ListboxOptions >
      <ListboxOption
          v-for="colType in colTypes"
          :key="colType"
          :value="colType"
          :disabled="colType.unavailable"
      >
        {{ colType.name }}
      </ListboxOption>
    </ListboxOptions >
  </Listbox>

  <h1 class="font-bold text-sky-600">Dimensiones de columna </h1>
  <keep-alive>
    <component :is="listShapeComponents[selectedColType.id]"/>
  </keep-alive>
</template>

<script setup>
import {ref} from "vue";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
  ListboxLabel,
} from '@headlessui/vue';

import InvalidGeoSelect from "./GeometricShape/InvalidGeoSelect.vue";
import RectCol from "./GeometricShape/RectCol.vue";

const listShapeComponents = [
    RectCol,
    InvalidGeoSelect,
    InvalidGeoSelect,
]

const colTypes = [
  { id: 0, name: 'Rectangular', unavailable: false },
  { id: 1, name: 'Circular', unavailable: false},
  { id: 2, name: 'T', unavailable: false},
]
let selectedColType = ref(colTypes[0])


</script>
