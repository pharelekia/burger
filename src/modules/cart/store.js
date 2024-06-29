export const cartStore = {
    namespaced: true,

    state: {
        total: 1000,
        items: []
    },

    getters: {
        getItems: state => {
            return state.items;
        },

        getTotal: state => {
            return state.total;
        }
    },

    mutations: {
        SET_ITEM: (state, item) => {
            state.items.unshift(item)
        }
    }

}