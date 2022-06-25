<template>
  <div class="px-2 grid-in-main">
    <h1>Dimensiones de la columna</h1>
    <div class="subcomponent">
      <katex-element
        class="text-white"
        expression="\phi P_n=\phi 0.80 [0.85 f'_c(A_g-A_{st})+f_yA_{st}]"
      />
      <FormKit type="number" label="ϕ" min="0.01" step="0.01"></FormKit>
      <button @click="calcDim">Calcular</button>
      {{ colProps }}
    </div>
  </div>
</template>

<script setup>
import { inject } from "vue";
import { invoke } from "@tauri-apps/api/tauri";

const colProps = inject("colProps");
const calcDim = () => {
  invoke("axial_calculate_dims", {
    l: colProps.value.liveLoad,
    d: colProps.value.deadLoad,
    phi: phi.value,
  });
};
</script>

<style scoped lang="postcss">
div.subcomponent {
  @apply flex flex-col items-center space-y-4  rounded bg-white bg-opacity-10 p-2;
}
</style>
