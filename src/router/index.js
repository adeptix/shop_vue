import Vue from 'vue'
import VueRouter from 'vue-router'
import MainLayout from "../views/MainLayout"
import CatalogPage from "../views/CatalogPage"
import ProductPage from "../views/ProductPage"

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '',
        name: "AllCatalogPage",
        component: CatalogPage
      },
      {
        path: ':type',
        name: "CatalogPage",
        component: CatalogPage
      },
      {
        path: 'product/:id',
        name: "ProductPage",
        component: ProductPage
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
