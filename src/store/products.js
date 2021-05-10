import axios from "axios"
import { API_URL, PRODUCTS_ON_PAGE as limit } from "../consts"

export default {
  namespaced: true,
  state: {
    products: []
  },

  getters: {
    getProducts: (state) => {
      return state.products
    }
  },

  mutations: {
    SET_PRODUCTS(state, payload) {
      state.products = payload
    }
  },
  actions: {
    getProducts({commit}, page) {
      return new Promise((resolve, reject) => {
        axios
          .get(API_URL + `products?_page=${page}&_limit=${limit}}`)
          .then(response => {
            // commit("SET_CURRENT_PAGE", page)
            // commit("SET_LAST_PAGE", Math.ceil(response.headers["x-total-count"] / limit))
            commit("SET_PRODUCTS", response.data)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },

    createComment({commit, state}, postID) {
      state.currentComment.post_id = postID

      return new Promise((resolve, reject) => {
        axios
          .post(API_URL + "comments", state.currentComment)
          .then(response => {
            commit("CREATE_COMMENT", response.data)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },

    updateComment({commit, state}) {
      return new Promise((resolve, reject) => {
        axios
          .put(API_URL + `comments/${state.currentComment.id}`, state.currentComment)
          .then(response => {
            commit("UPDATE_COMMENT")
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },

    deleteComment({commit}, id) {
      return new Promise((resolve, reject) => {
        axios
          .delete(API_URL + `comments/${id}`)
          .then(response => {
            commit("DELETE_COMMENT", id)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    }
  }
}
