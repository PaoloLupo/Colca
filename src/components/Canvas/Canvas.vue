<template xmlns="">
  <div ref="container">
    <div class="col-span-1 bg-violet-light row-start-canvas col-start-canvas">
      <v-stage :config="configKonva">
        <v-layer ref="stage">
          <v-rect :config="configRect" ref="rect" @click="changeDim"></v-rect>
        </v-layer>
      </v-stage>
    </div>
  </div>
  <button @click="changeDim">Add Circle</button>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { onMounted } from "vue";
import { useElementSize } from "@vueuse/core";

const changeDim = () => {
  rect.value.getNode().width(20);
};

const rect = ref();
const container = ref(null);
const { width, height } = useElementSize(container);

const configKonva = ref({
  width: 100,
  height: 100,
});

const configRect = ref({
  x: width.value / 2,
  y: height.value / 2,
  width: 100,
  height: 100,
  fill: "#ccd5ae",
});

watch([width, height], ([w, h]) => {
  configKonva.value.width = w;
  configKonva.value.height = h;
  configRect.value.x = w / 2;
  configRect.value.y = h / 2;
});

onMounted(() => {
  rect.value.getNode();
});
</script>
