import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import 'flowbite'

import VueKonva from 'vue-konva'

// @ts-ignore
import Vue3Katex from "@hsorby/vue3-katex"
import 'katex/dist/katex.min.css'

const app = createApp(App);
app.use(VueKonva);
app.use(Vue3Katex);

app.mount('#app');