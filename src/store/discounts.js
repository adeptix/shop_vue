import axios from "axios"
import { API_URL } from "../consts"

export default {
  namespaced: true,
  state: {
    discounts: []
  },

  actions: {
    loadDiscounts({commit}) {
      return new Promise((resolve, reject) => {
        axios
          .get(API_URL + "discounts")
          .then(response => {
            commit("SET_DISCOUNTS", response.data)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    }
  },
  mutations: {
    SET_DISCOUNTS(state, payload) {
      state.discounts = payload
    }
  },
  getters: {
    getDiscountByProductID: (state) => (productID) => {
      return state.discounts.find(d => d.product_id === parseInt(productID))
    }
  }
}
