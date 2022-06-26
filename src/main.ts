import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";

// @ts-ignore
import config from "../formkit.config.js"; // Libreria para los inputs
import { plugin, defaultConfig } from "@formkit/vue";

import VueKonva from "vue-konva"; // Libreria Canvas

// @ts-ignore
import Vue3Katex from "@hsorby/vue3-katex";
import "katex/dist/katex.min.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faSquareCaretDown } from "@fortawesome/free-regular-svg-icons";

library.add(faSquareCaretDown);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);

app.use(VueKonva);
app.use(Vue3Katex);
app.use(plugin, defaultConfig(config));

app.mount("#app");
