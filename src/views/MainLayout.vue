<template>
  <div>
    <header>
      <div class="container align_container">
        <tabs :categories="categories"/>
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"
import Tabs from "../components/Tabs"

export default {
  name: "MainLayout",
  components: {Tabs},
  methods: {
    ...mapActions({
      loadDiscounts: "discounts/loadDiscounts",
      loadCategories: "categories/loadCategories",
      loadProducts: "products/loadProducts",
    })
  },

  computed: {
    ...mapGetters({
      categories: "categories/getCategories"
    })
  },

  mounted() {
    this.loadDiscounts()
    this.loadCategories()
    this.loadProducts()
  }
}
</script>

<style scoped>
header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 50;
  height: 40px;
  background-color: white;
  display: flex;
}

.align_container {
  margin: auto 20px;
}
</style>
