<template>
  <label class="font-bold text-sky-600">{{ text }}</label>
</template>

<script setup lang="ts">
defineProps({
  text: String,
});
</script>
