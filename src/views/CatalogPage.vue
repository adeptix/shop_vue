<template>
  <div class="catalog">
    <div class="container">
      <h3>{{ currentCategory }}</h3>
      <div class="grid">
        <product-card v-for="p in products" :key=p.id :product="p"/>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "../components/ProductCard"
import { mapActions, mapGetters } from "vuex"

export default {
  name: "CatalogPage",
  components: {ProductCard},

  computed: {
    ...mapGetters({
      productsByCategoryID: "products/getProductsByCategoryID",
      getCategoryID: "categories/getIDByName",
      getCategory: "categories/getCategoryByID"
    }),

    products: function () {
      const categoryID = this.parseCategory(this.$route.params.type)
      return this.productsByCategoryID(categoryID)
    },

    currentCategory: function () {
      const categoryID = this.parseCategory(this.$route.params.type)
      if (categoryID === undefined) {
        return "Все товары"
      }

      const category = this.getCategory(categoryID)
      if (!category) {
        return "Все товары"
      }

      return category.label
    }
  },

  methods: {
    ...mapActions({
      loadPosts: "products/loadProducts"
    }),

    parseCategory(query) {
      if (!query) {
        return
      }

      return this.getCategoryID(query)
    }
  },
}
</script>

<style scoped>
.grid {
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 250px);
  grid-gap: 10px;
  margin-bottom: 30px;
}

.catalog {
  padding-top: 40px;
}

</style>
