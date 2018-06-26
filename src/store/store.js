import Vue from 'vue'
import Vuex from 'vuex'

import axios from '@/plugins/axios'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        data: {}
    },
    mutations: {
        SET_DATA(state, payload) {
            state.data = { ...payload }
        },
    },
    actions: {
        async saveData({ commit }, params) {
             const res = await axios.post(`http://wap-novel.com/api/login`,params)
            if (res) {
                commit('SET_DATA', res.data)
            }
        }
    }
})

export default store