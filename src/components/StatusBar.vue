<template>
<div class="grid-in-footer row-start-footer flex flex-row justify-middle space-x-2 bg-blue-dark ">
  <FormKit  type="group" v-model="recCol" @update:modelValue="areacol" >
    <FormKitSchema :schema="schemaStatusBar" :data="props" />
  </FormKit>


</div>
</template>

<script setup lang="ts">

import {ref} from "vue";

const colT= [
  { label: "Rec", value: 0 },
  // { label: "Cir", value: 1 },
  // { label: "T", value: 2 },
];

const props = {
  altura: 'H (cm)',
  ancho: 'W (cm)',
}

const recCol = ref({});

function areacol() {
  console.log("areacol");
}

const schemaStatusBar = [
  {
    $cmp: 'FormKit',
    props: {
      type: 'select',
      id: 'hola',
      name: 'column',
      options: colT,
      labelClass: '$reset',
      inputClass: '$reset h-8 w-12 bg-yellow border-none font-bold text-yellow-dark',
      innerClass: '$reset',
    }
  },
  {
    $cmp: 'FormKit',
    props: {
      type: 'number',
      // This one will be parsed:
      label: '$altura',
      min: '0',
      max: '100',
      step: '5',
      labelClass: 'text-xs',
      inputClass: '$reset h-8 w-12  bg-transparent border-none  font-bold text-white justify-center',
      innerClass: '$reset',
      // This object will stay raw and be passed as the sectionsSchema prop:
    },
  },
  {
    $cmp: 'FormKit',
    props: {
      type: 'number',
      // This one will be parsed:
      label: '$ancho',
      min: '0',
      max: '100',
      step: '5',
      labelClass: 'text-xs',
      inputClass: '$reset h-8 w-12 bg-transparent border-none  font-bold text-white justify-center',
      innerClass: '$reset',
      // This object will stay raw and be passed as the sectionsSchema prop:

    },
  },
]


</script>


