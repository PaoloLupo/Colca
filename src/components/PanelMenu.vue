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
  @apply mx-2 grid-in-header;
}

button {
  @apply text-center  text-white sm:py-2 sm:px-6;
}

button.rightTab {
  @apply rounded-l;
}

button.selected {
  @apply border  border-transparent border-b-orange bg-white bg-opacity-10 text-white;
}

button.leftTab {
  @apply rounded-r;
}
</style>
