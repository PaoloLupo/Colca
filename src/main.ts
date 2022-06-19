import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import 'flowbite'

// @ts-ignore
import config from '../formkit.config.js' // Libreria para los inputs
import { plugin, defaultConfig } from '@formkit/vue'

import VueKonva from 'vue-konva'    // Libreria Canvas

// @ts-ignore
// import Vue3Katex from "@hsorby/vue3-katex"
// import 'katex/dist/katex.min.css'

const app = createApp(App)

app.use(VueKonva)
app.use(plugin, defaultConfig(config))

app.mount('#app')