<template>
  <div class="flex flex-row space-x-5">
    <div class="basis-9/12 flex-col space-y-4 ">
      <component v-for="(_,component) in materialPropsComponents" :is="materialPropsComponents[component]" />
    </div>
    <Canvas/>
  </div>

</template>

<script setup>
import GeometricProps from "./GeometricProps/GeometricProps.vue";
import ConcreteProps from "./ConcreteProps/ConcreteProps.vue";
import Canvas from '../Canvas/Canvas.vue';

const materialPropsComponents = {
  GeometricProps,
  ConcreteProps
}
</script>