<template>
  <Menu :model="items" class="basis-1/12" />
  <keep-alive>
    <component :is="tabs[currentTab]" class="grow  m-5 p-5  border border-b-cyan-500  shadow-lg"/>
  </keep-alive>

</template>

<script setup>
import {ref} from "vue";
import WelcomeScreen from './WelcomeScreen.vue';
import ColumnGeoProps from './GeometricProps/ColumnGeoPropsMenu.vue';

let currentTab = ref('WelcomeScreen')

const tabs = {
  WelcomeScreen,
  ColumnGeoProps
}


const items = ref([
  {
    key: '0',
    label: 'Propiedades',
    icon: 'pi pi-fw pi-user-plus',
    items: [{
      key: '2_0',
      label: 'Columna',
      command: () => {
        currentTab.value = 'ColumnGeoProps'
      }
    }],

  }
])

</script>