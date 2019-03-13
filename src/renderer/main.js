import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'
import $ from "jquery";
import "../../node_modules/bootstrap/dist/js/bootstrap"
// import "../../node_modules/bootstrap/dist/css/bootstrap.css"

if (!process.env.IS_WEB) Vue.use(require('vue-electron'));
Vue.http = Vue.prototype.$http = axios;
Vue.$ = Vue.prototype.$ = $;
Vue.config.productionTip = false;
/* eslint-disable no-new */

let devInnerHeight = 1080.0;// 开发时的InnerHeight
let devDevicePixelRatio = 1.0;// 开发时的devicepixelratio
let devScaleFactor = 1.3; // 开发时的ScaleFactor
let scaleFactor = require('electron').screen.getPrimaryDisplay().scaleFactor;
let zoomFactor = (window.innerHeight / devInnerHeight) * (window.devicePixelRatio / devDevicePixelRatio) * (devScaleFactor / scaleFactor)
require('electron').webFrame.setZoomFactor(zoomFactor);

new Vue({
    components: {App},
    router,
    store,
    template: '<App/>'
}).$mount('#app');
