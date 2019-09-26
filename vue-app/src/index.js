import Vue from 'vue';
import App from './App.vue';
import VueCustomElement from 'vue-custom-element';

Vue.use(VueCustomElement);

Vue.customElement("vue-app", App)