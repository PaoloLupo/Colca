import { createApp } from 'vue'
import App from './App.vue'
import './index.css';

// @ts-ignore
import Vue3Katex from "@hsorby/vue3-katex"
import 'katex/dist/katex.min.css'

// Importando Prime Vue
import PrimeVue from 'primevue/config'
import Button from "primevue/button";
import InputNumber from "primevue/inputnumber";
import Menu from "primevue/menu";
import Dropdown from "primevue/dropdown";
import 'primevue/resources/themes/lara-light-teal/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

const app = createApp(App);

app.use(PrimeVue);
app.use(Vue3Katex);


app.component('Button',Button);
app.component('InputNumber',InputNumber);
app.component('Menu',Menu);
app.component('Dropdown',Dropdown);
app.mount('#app');