export const cartStore = {
    namespaced: true,

    state: {
        items: []
    },

    getters: {
        getItems: state => {
            return state.items;
        },

        getTotal: state => {
            let sum = 0;
            for (const el of state.items) {
                sum += el.price;
            }
            return sum
        }
    },

    mutations: {
        SET_ITEM: (state, item) => {
            state.items.unshift(item)
        },

        REMOVE_ITEM: (state, index) => {
            state.items.splice(index, 1)
        }
    }

}