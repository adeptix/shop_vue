import axios from "axios"
import { API_URL } from "../consts"

export default {
  namespaced: true,
  state: {
    products: [],
  },

  getters: {
    getProductsByCategoryID: (state) => (categoryID) => {
      if (categoryID === undefined) {
        return state.products
      }

      return state.products.filter(p => p.category_id === categoryID)
    },

    getProductByID: (state) => (id) => {
      return state.products.find(p => p.id === parseInt(id))
    }
  },

  mutations: {
    SET_PRODUCTS(state, payload) {
      state.products = payload
    }
  },
  actions: {
    loadProducts({commit}) {
      return new Promise((resolve, reject) => {
        axios
          .get(API_URL + "products")
          .then(response => {
            commit("SET_PRODUCTS", response.data)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    }
  }
}
