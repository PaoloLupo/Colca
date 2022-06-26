<template>
  <div
    class="justify-middle flex flex-row bg-white bg-opacity-10 grid-in-footer row-start-footer"
  >
    <FormKit type="group" v-model="colProps" @update:modelValue="areacol">
      <FormKitSchema :schema="schemaStatusBar" :data="props" />
    </FormKit>
  </div>

  <Canvas />

  <PanelMenu />
</template>

<script setup lang="ts">
import { ref, provide } from "vue";
import PanelMenu from "./PanelMenu.vue";
import Canvas from "./Canvas.vue";

const colT = [
  { label: "Rec", value: 0 },
  { label: "Cir", value: 1 },
  // { label: "T", value: 2 },
];

const concreteT = [
  { label: "210", value: 0 },
  { label: "280", value: 1 },
];

const steelT = [
  { label: "4200", value: 0 },
  { label: "4000", value: 1 },
];

const props = {
  altura: "H (cm)",
  ancho: "W (cm)",
  deadLoad: "Dead Load (kN)",
  liveLoad: "Live Load (kN)",
};

const colProps = ref({});
provide("colProps", colProps);

function areacol() {}

const schemaStatusBar = [
  {
    $cmp: "FormKit",
    props: {
      type: "select",
      id: "hola",
      name: "colType",
      options: colT,
      labelClass: "$reset",
      inputClass: "$reset h-8 w-12 bg-orange text-white border-none",
      innerClass: "$reset",
    },
  },
  {
    $cmp: "FormKit",
    props: {
      type: "number",
      // This one will be parsed:
      label: "$altura",
      name: "colHeight",
      min: "0",
      max: "100",
      step: "5",
      labelClass: "text-xs",
      inputClass:
        "$reset h-8 px-1 w-12  bg-transparent border-none  text-white justify-center",
      innerClass: "$reset",
      // This object will stay raw and be passed as the sectionsSchema prop:
    },
  },
  {
    $cmp: "FormKit",
    props: {
      type: "number",
      // This one will be parsed:
      label: "$ancho",
      name: "colWidth",
      min: "0",
      max: "100",
      step: "5",
      labelClass: "text-xs",
      inputClass:
        "$reset h-8 px-1 w-12 bg-transparent border-none  text-white justify-center",
      innerClass: "$reset",
    },
  },
  {
    $cmp: "FormKit",
    props: {
      type: "select",
      id: "hola",
      name: "conType",
      options: concreteT,
      labelClass: "$reset",
      inputClass: "$reset h-8 w-13 bg-red text-white border-none ",
      innerClass: "$reset",
    },
  },
  {
    $cmp: "FormKit",
    props: {
      type: "select",
      id: "hola",
      name: "steelType",
      options: steelT,
      labelClass: "$reset",
      inputClass: "$reset h-8 w-13 text-white bg-blue border-none ",
      innerClass: "$reset",
    },
  },
  {
    $cmp: "FormKit",
    props: {
      type: "number",
      // This one will be parsed:
      label: "$deadLoad",
      name: "deadLoad",
      min: "0",
      max: "100",
      step: "5",
      labelClass: "text-xs",
      inputClass:
        "$reset h-8 px-1 w-24 bg-transparent border-none  text-white justify-center",
      innerClass: "$reset",
    },
  },
  {
    $cmp: "FormKit",
    props: {
      type: "number",
      // This one will be parsed:
      label: "$liveLoad",
      name: "liveLoad",
      min: "0",
      max: "100",
      step: "5",
      labelClass: "text-xs",
      inputClass:
        "$reset h-8 px-1 w-24 bg-transparent border-none  text-white justify-center",
      innerClass: "$reset",
    },
  },
];
</script>
