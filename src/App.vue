<script setup>
import PanelMenu from "./components/PanelMenu.vue";
import StatusBar from "./components/StatusBar.vue";

import Canvas from "./components/Canvas/Canvas.vue";
</script>

<template>
<div class="h-screen grid grid-areas-layout grid-cols-layout grid-rows-layout bg-violet">
  <PanelMenu />
  <StatusBar />

  <Canvas/>
</div>

</template>
