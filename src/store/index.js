import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        cart: [],
        parts: null,
    },
    mutations: {
        addRobotToCart(state, robot) {
            state.cart.push(robot);
        },
        updateParts(state, parts) {
            state.parts = parts;
        }
    },
    actions: {
        getParts({ commit }) {
            axios.get('/api/parts').then((result) => {
                commit('updateParts', result.data);
            }).catch(console.error());
        },
        addRobotToCart({ commit, state }, robot) {
            const cart = [...state.cart, robot];
            return axios.post('/api/cart', cart).then(() => {
                commit('addRobotToCart', robot);
            }).catch(console.error());
        }
    },
     getters: {
         cartSaleItems(state) {
             return state.cart.filter(item => item.head.onSale 
                || item.leftArm.onSale 
                || item.rightArm.onSale 
                || item.core.onSale 
                || item.base.onSale);
         }
     }
});
