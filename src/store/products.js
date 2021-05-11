import axios from "axios"
import { API_URL } from "../consts"

export default {
  namespaced: true,
  state: {
    products: [],
    // products : [
    //   {
    //     id: 0,
    //     name: "Футболка мужская",
    //     brand: "lamborghini",
    //     price: 100000,
    //     category_id: 0,
    //     image_url: "jeans1.png",
    //     gender: "мужской",
    //     color: "красный",
    //     material: "хлопок",
    //     model: "футболка",
    //     season: "лето",
    //     code: "1110151050",
    //     country: "Индонезия"
    //   }, {
    //     id: 1,
    //     name: "Футболка мужская",
    //     brand: "lamborghini",
    //     price: 100000,
    //     category_id: 0,
    //     image_url: "jeans1.png",
    //     gender: "мужской",
    //     color: "красный",
    //     material: "хлопок",
    //     model: "футболка",
    //     season: "лето",
    //     code: "1110151050",
    //     country: "Индонезия"
    //   }, {
    //     id: 2,
    //     name: "Футболка мужская",
    //     brand: "lamborghini",
    //     price: 100000,
    //     category_id: 0,
    //     image_url: "jeans1.png",
    //     gender: "мужской",
    //     color: "красный",
    //     material: "хлопок",
    //     model: "футболка",
    //     season: "лето",
    //     code: "1110151050",
    //     country: "Индонезия"
    //   },
    //   {
    //     id: 3,
    //     name: "Футболка мужская",
    //     brand: "lamborghini",
    //     price: 100000,
    //     category_id: 0,
    //     image_url: "jeans1.png",
    //     gender: "мужской",
    //     color: "красный",
    //     material: "хлопок",
    //     model: "футболка",
    //     season: "лето",
    //     code: "1110151050",
    //     country: "Индонезия"
    //   }, {
    //     id: 4,
    //     name: "Футболка мужская",
    //     brand: "lamborghini",
    //     price: 100000,
    //     category_id: 0,
    //     image_url: "jeans1.png",
    //     gender: "мужской",
    //     color: "красный",
    //     material: "хлопок",
    //     model: "футболка",
    //     season: "лето",
    //     code: "1110151050",
    //     country: "Индонезия"
    //   }, {
    //     id: 5,
    //     name: "Футболка мужская",
    //     brand: "lamborghini",
    //     price: 100000,
    //     category_id: 0,
    //     image_url: "jeans1.png",
    //     gender: "мужской",
    //     color: "красный",
    //     material: "хлопок",
    //     model: "футболка",
    //     season: "лето",
    //     code: "1110151050",
    //     country: "Индонезия"
    //   }
    // ]
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
