<template>
  <div>
    <button
      v-for="(_,tab) in tabs"
      :key="tab"
      class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 active:font-bold active:border-b-blue-500"
      @click="currentTab = tab"
      >
      {{tab}}
    </button>
  </div>

  <keep-alive>
    <component :is="tabs[currentTab]" />
  </keep-alive>

</template>

<script setup>

// Componentes
import WelcomeScreen from './WelcomeScreen.vue';
import MaterialProps from './MaterialProps/MaterialProps.vue';

import {ref} from "vue";
// Inicio predeterminado (Pagina de bienvenida)
let currentTab = ref('WelcomeScreen')

const tabs = {
  WelcomeScreen,
  MaterialProps,
}

</script>