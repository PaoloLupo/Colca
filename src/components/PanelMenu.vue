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
import WelcomeScreen from "./WelcomeScreen.vue";
import MaterialProps from "./MaterialProps/MaterialProps.vue";
import DiagPlotting from "./Plotting/DiagPlotting.vue";

const tabs = [WelcomeScreen, MaterialProps, DiagPlotting];

const listTabs = [
  { id: 0, title: "Home" },
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
  @apply col-span-5 row-span-1;
}

button {
  @apply py-[10px] sm:py-2 my-1 px-[12px] sm:px-6 inline-flex font-bold border-violet-light text-center text-white  bg-violet-light hover:ring-green-dark;
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
