<template>
  <div id="tabs">
    <button
      v-for="tab in listTabs"
      :key="tab"
      :class="{
        selected: isSelected(tab.id),
      }"
      @click="selectedTab = tab"
    >
      <font-awesome-icon icon="fa-regular fa-square-caret-down" />
      {{ tab.title }}
    </button>
  </div>

  <keep-alive>
    <component :is="tabs[selectedTab.id]" />
  </keep-alive>
</template>

<script setup>
import { ref } from "vue";
// Componentes
import AxialDesign from "./AxialDesign.vue";
import DiagPlotting from "./DiagPlotting.vue";

const tabs = [AxialDesign, DiagPlotting];

const listTabs = [
  { id: 0, title: "Axial" },
  { id: 2, title: "Diagrama" },
];

const selectedTab = ref(listTabs[0]);

//  Formating tabs
const isRightTab = (index) => {
  return index === 0;
};

const isSelected = (index) => {
  return index === selectedTab.value.id;
};

const isLeftTab = (index) => {
  return index === tabs.length - 1;
};
</script>

<style scoped lang="postcss">
#tabs {
  @apply flex flex-col  space-y-2 p-1 grid-in-sidebar;
}

button {
  @apply rounded text-left font-light text-white sm:py-2 sm:px-6;
}

button.selected {
  @apply bg-white bg-opacity-5 text-white;
}
</style>
