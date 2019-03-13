import Vue from 'vue'
import Vuex from 'vuex'

import examModules from './modules/Counter'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        examModules
    },

    strict: process.env.NODE_ENV !== 'production'
})
