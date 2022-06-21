<template>
  <div id="layout">
    <component
      v-for="(_, component) in materialPropsComponents"
      :is="materialPropsComponents[component]"
    />
  </div>
</template>

<script setup>
import GeometricProps from "./GeometricProps/GeometricProps.vue";
import ConcreteProps from "./ConcreteProps/ConcreteProps.vue";

const materialPropsComponents = {
  GeometricProps,
  ConcreteProps,
};
</script>

<style scoped lang="postcss"></style>

<style scoped lang="postcss">
#layout {
  @apply row-span-2 col-span-4 px-5 bg-violet-light;
}
</style>
