<template xmlns="">
  <div ref="container" class="space-y-2 grid-in-canvas">
    <h1>Canvas</h1>
    <div class="rounded bg-white bg-opacity-5">
      <v-stage :config="configKonva">
        <v-layer ref="stage">
          <v-rect :config="configRect" ref="rect"></v-rect>
        </v-layer>
      </v-stage>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, inject } from "vue";
import { onMounted } from "vue";
import { useElementSize } from "@vueuse/core";

const changeDim = () => {
  rect.value.getNode().width(colProps.value.width);
  rect.value.getNode().height(colProps.value.height);
};
const colProps = inject("colProps");
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

watch([colProps.value.width, colProps.value.height], ([w, h]) => {
  configRect.value.width = w;
  configRect.value.height = h;
});

onMounted(() => {
  rect.value.getNode();
});
</script>
