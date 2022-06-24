<template>
  <div id="tabs">
    <button
      v-for="tab in listTabs"
      :key="tab"
      :class="{
        rightTab: isRightTab(tab.id),
        selected: isSelected(tab.id),
        leftTab: isLeftTab(tab.id),
      }"
      @click="selectedTab = tab"
    >
      {{ tab.title }}
    </button>
  </div>

  <keep-alive>
    <component :is="tabs[selectedTab.id]" />
  </keep-alive>
</template>

<script setup lang="ts">
import { ref } from "vue";
// Componentes
import AxialDesign from "./AxialDesign.vue";
import MaterialProps from "./MaterialProps/MaterialProps.vue";
import DiagPlotting from "./Plotting/DiagPlotting.vue";

const tabs = [AxialDesign, MaterialProps, DiagPlotting];

const listTabs = [
  { id: 0, title: "Axial" },
  { id: 1, title: "Propiedades" },
  { id: 2, title: "Diagrama" },
];

const selectedTab = ref(listTabs[0]);

//  Formating tabs
const isRightTab = (index: number) => {
  return index === 0;
};

const isSelected = (index: number) => {
  return index === selectedTab.value.id;
};

const isLeftTab = (index: number) => {
  return index === tabs.length - 1;
};
</script>

<style scoped lang="postcss">
#tabs {
  @apply grid-in-header;
}

button {
  @apply my-1 inline-flex border-violet-light bg-violet-light py-[10px] px-[12px] text-center font-bold text-white hover:ring-green-dark  sm:py-2 sm:px-6;
}

button.rightTab {
  @apply rounded-l-lg;
}

button.selected {
  @apply border border-red bg-orange text-white;
}

button.leftTab {
  @apply rounded-r-lg;
}
</style>
