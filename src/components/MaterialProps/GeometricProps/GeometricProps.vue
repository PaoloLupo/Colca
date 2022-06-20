<template>
  <div class="m-2 p-2  ">
    <h1 class="text-xl font-bold text-sky-600">Tipo de columna</h1>

    <Listbox v-model="selectedColType" >
      <ListboxButton>{{ selectedColType.title }}</ListboxButton>
      <ListboxOptions >
        <ListboxOption
            v-for="colType in colTypes"
            :key="colType"
            :value="colType"
            :disabled="colType.unavailable"
        >
          {{ colType.title }}
        </ListboxOption>
      </ListboxOptions >
    </Listbox>

    <h1 class="font-bold text-sky-600">Dimensiones de columna </h1>
    <keep-alive>
      <component :is="listShapeComponents[selectedColType.id]"/>
    </keep-alive>
  </div>


</template>

<script setup>
import {ref} from "vue";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue';

import InvalidGeoSelect from "./GeometricShape/InvalidGeoSelect.vue";
import RectCol from "./GeometricShape/RectCol.vue";

const listShapeComponents = [
    RectCol,
    InvalidGeoSelect,
    InvalidGeoSelect,
]

const colTypes = [
  { id: 0, title: 'Rectangular', unavailable: false },
  { id: 1, title: 'Circular', unavailable: false},
  { id: 2, title: 'T', unavailable: false},
]
let selectedColType = ref(colTypes[0])


</script>

<style scoped lang="postcss">

</style>
