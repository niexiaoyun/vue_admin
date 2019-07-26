import Vue from 'vue'
import Vuex from 'vuex'
import search from './modules/search'
import getters from './getters'

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        search
    },
    getters
})

export default store