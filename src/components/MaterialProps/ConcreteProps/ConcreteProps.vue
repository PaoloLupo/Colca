<template>
  <div class="m-2 p-2 shadow-inner">
    <SubText text="Propiedades del concreto armado" />
    <NumberInput
      min="0"
      max="100"
      step="5"
      v-model.number="concreteResistance"
      name="f'c"
      units="kN/m2"
    />
  </div>
</template>

<script setup>
import NumberInput from "../../../components/StyledComponents/NumberInput.vue";
import SubText from "../../../components/StyledComponents/SubText.vue";
import { ref } from "vue";
let concreteResistance = ref(210);
</script>
