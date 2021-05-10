import Vue from 'vue'
import Vuex from 'vuex'
import basket from "./basket"
import categories from "./categories"
import products from "./products"
import discounts from "./discounts"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {basket, categories, products, discounts}
})
