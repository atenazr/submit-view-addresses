import { createApp } from 'vue'
import App from './App.vue'


import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import OpenLayersMap from 'vue3-openlayers'
import 'vue3-openlayers/dist/vue3-openlayers.css'

import store from './store/addresses/index.js'
import router from './router.js'

import BaseSpinner from './components/ui/BaseSpinner.vue'

const app = createApp(App);

app.component('base-spinner',BaseSpinner);

app.use(router);
app.use(store);
app.use(OpenLayersMap);
app.mount('#app')
