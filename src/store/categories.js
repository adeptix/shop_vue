import axios from "axios"
import { API_URL } from "../consts"

export default {
  namespaced: true,
  state: {
    categories: []
  },

  actions: {
    loadCategories({commit}) {
      return new Promise((resolve, reject) => {
        axios
          .get(API_URL + "categories")
          .then(response => {
            commit("SET_CATEGORIES", response.data)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    }
  },
  mutations: {
    SET_CATEGORIES(state, payload) {
      state.categories = payload
    }
  },
  getters: {
    getIDByName: (state) => (name) => {
      const category = state.categories.find(c => c.name === name)
      if (category !== undefined) {
        return category.id
      }
    },
    getCategories: (state) => {
      return state.categories
    },

    getCategoryByID: (state) => (id) => {
      return state.categories.find(c => c.id === parseInt(id))
    }
  }
}
