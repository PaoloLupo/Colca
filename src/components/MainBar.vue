<template>
  <div>
    <Menubar :model="items">
      <template #start>
        <img src="../../src-tauri/icons/Square44x44Logo.png" alt="logo" height="40" class="mx-8">
      </template>
    </Menubar>
  </div>

</template>

<script setup lang="ts">
import {ref} from "vue";
const items = ref([
  {
    label:'File',
    icon:'pi pi-fw pi-file',
  }
])
</script>

<style scoped>

</style>