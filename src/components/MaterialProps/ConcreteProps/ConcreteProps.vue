<template>
  <SubText text=""/>
  <NumberInput v-model.number="concreteResistance"/>

</template>

<script setup>
import NumberInput from "../../../components/StyledComponents/NumberInput.vue";
import SubText from "../../../components/StyledComponents/SubText.vue";
import {ref} from "vue";
let concreteResistance = ref(210)

</script>