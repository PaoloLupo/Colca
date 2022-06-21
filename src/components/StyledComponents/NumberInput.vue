<template>
  <div class="relative flex flex-auto">
    <FormKit
      type="number"
      id="floating_outlined"
      name="name"
      label="title"
      value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      v-bind="$attrs"
    />
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: String,
  units: String,
  modelValue: Number,
});

defineEmits(["update:modelValue"]);
</script>
