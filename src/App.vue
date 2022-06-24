<script setup>
import PanelMenu from "./components/PanelMenu.vue";
import ColProps from "./components/ColProps.vue";
</script>

<template>
  <div
    class="grid h-screen grid-cols-layout grid-rows-layout bg-violet grid-areas-layout"
  >
    <PanelMenu />
    <ColProps />
  </div>
</template>
