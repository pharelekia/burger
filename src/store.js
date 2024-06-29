import {createStore} from "vuex";
import {cartStore} from "@/modules/cart/store.js";

export  default createStore({
    state: {},
    mutations: {
        increment (state) {
            state.count++
        }
    },

    modules: {
        cartStore
    }
})