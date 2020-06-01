import Vue from "vue";
import Vuex from "vuex";

import { productGetters, manufacturerGetters } from "./getters";
import {
  productMutations,
  cartMutations,
  manufacturerMutations
} from "./mutations";
import { productActions, manufacturerActions } from "./actions";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    cart: [],
    showLoader: false,
    product: {},
    products: [],
    manufacturers: []
  },
  mutations: {
    ...productMutations,
    ...cartMutations,
    ...manufacturerMutations
  },
  actions: {
    ...productActions,
    ...manufacturerActions
  },
  modules: {},
  getters: {
    ...productGetters,
    ...manufacturerGetters
  }
});
