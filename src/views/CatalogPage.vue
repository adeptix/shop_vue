<template>
  <div class="container">
    <h3>Товары</h3>
    <div class="grid">
      <product-card v-for="p in products" :key=p.id :product="p"/>
    </div>
  </div>
</template>

<script>
import ProductCard from "../components/ProductCard"
import { mapActions, mapGetters } from "vuex"

export default {
  name: "CatalogPage",
  components: {ProductCard},
  data() {
    return {
      products2: [
        {
          id: 0,
          name: "Футболка мужская",
          brand: "lamborghini",
          price: 100000,
          category_id: 0,
          image_url: "jeans1.png",
          gender: "мужской",
          color: "красный",
          material: "хлопок",
          model: "футболка",
          season: "лето",
          code: "1110151050",
          country: "Индонезия"
        }, {
          id: 1,
          name: "Футболка мужская",
          brand: "lamborghini",
          price: 100000,
          category_id: 0,
          image_url: "jeans1.png",
          gender: "мужской",
          color: "красный",
          material: "хлопок",
          model: "футболка",
          season: "лето",
          code: "1110151050",
          country: "Индонезия"
        }, {
          id: 2,
          name: "Футболка мужская",
          brand: "lamborghini",
          price: 100000,
          category_id: 0,
          image_url: "jeans1.png",
          gender: "мужской",
          color: "красный",
          material: "хлопок",
          model: "футболка",
          season: "лето",
          code: "1110151050",
          country: "Индонезия"
        },
        {
          id: 3,
          name: "Футболка мужская",
          brand: "lamborghini",
          price: 100000,
          category_id: 0,
          image_url: "jeans1.png",
          gender: "мужской",
          color: "красный",
          material: "хлопок",
          model: "футболка",
          season: "лето",
          code: "1110151050",
          country: "Индонезия"
        }, {
          id: 4,
          name: "Футболка мужская",
          brand: "lamborghini",
          price: 100000,
          category_id: 0,
          image_url: "jeans1.png",
          gender: "мужской",
          color: "красный",
          material: "хлопок",
          model: "футболка",
          season: "лето",
          code: "1110151050",
          country: "Индонезия"
        }, {
          id: 5,
          name: "Футболка мужская",
          brand: "lamborghini",
          price: 100000,
          category_id: 0,
          image_url: "jeans1.png",
          gender: "мужской",
          color: "красный",
          material: "хлопок",
          model: "футболка",
          season: "лето",
          code: "1110151050",
          country: "Индонезия"
        }
      ]
    }
  },

  computed: {
    ...mapGetters({
      products: "products/getProducts"
    })
  },

  methods: {
    ...mapActions({
      loadPosts: "products/getProducts"
    })
  },

  mounted() {
    // const page = parseInt(this.$route.query.page, 10) || 1;
    this.loadPosts(1)
  }
}
</script>

<style scoped>
.grid {
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 250px);
  grid-gap: 10px;
}

@media (max-width: 1124px) {
  .container {
    max-width: 970px;
  }

  .grid {
    grid-template-columns: repeat(auto-fit, 230px);
  }
}

@media (max-width: 992px) {
  .container {
    max-width: 750px;
  }

  .grid {
    grid-template-columns: repeat(auto-fit, 180px);
  }
}

@media (max-width: 767px) {
  .container {
    max-width: none;
  }
}
</style>
