import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import PrimeVue from 'primevue/config'
import Button from "primevue/button";
import MenuBar from "primevue/menubar";

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';

const app = createApp(App);

app.use(PrimeVue);

app.component('Button',Button);
app.component('Menubar',MenuBar);
app.mount('#app');