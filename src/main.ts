import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import 'flowbite'

// @ts-ignore
import Vue3Katex from "@hsorby/vue3-katex"
import 'katex/dist/katex.min.css'

const app = createApp(App);

app.use(Vue3Katex);

app.mount('#app');