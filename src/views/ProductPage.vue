<template>
  <div class="container">
    <div class="p_page" v-if="product">
      <div class="page_grid">
        <div class="wrapper">
          <product-image :image_url="product.image_url"/>
        </div>
        <div class="p_info">
          <div class="name">{{ product.name }}</div>
          <div class="brand">Бренд: {{ product.brand }}</div>
          <discount-card :discount="discount" :price="product.price"/>
          <button @click="addToBasket">Добавить в корзину</button>

          <span>О товаре:</span>
          <span>пол: <b>{{ product.gender }}</b></span>
          <span>цвет: <b>{{ product.color }}</b></span>
          <span>материал: <b>{{ product.material }}</b></span>
          <span>модель (тип): <b>{{ product.model }}</b></span>
          <span>сезон: <b>{{ product.season }}</b></span>
          <span>артикул:<b> {{ product.code }}</b></span>
          <span>страна-производитель: <b>{{ product.country }}</b></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import ProductImage from "../components/ProductImage"
import DiscountCard from "../components/DiscountCard"

export default {
  name: "ProductPage",
  components: {DiscountCard, ProductImage},
  computed: {
    ...mapGetters({
      getProduct: "products/getProductByID",
      getDiscount: "discounts/getDiscountByProductID"
    }),

    product: function () {
      return this.getProduct(this.$route.params.id)
    },

    discount: function () {
      return this.getDiscount(this.product.id)
    }
  },

  methods: {
    addToBasket() {

    }
  }
}
</script>

<style scoped>
.page_grid {
  display: grid;
  margin-top: 50px;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 250px);
  grid-gap: 50px;
  background: white;
  padding-bottom: 40px;
  padding-top: 20px;
}

.name {
  margin-top: 20px;
  font-weight: normal;
  font-size: 20px;
}

.brand {
  margin-top: 12px;
  font-size: 14px;
  margin-bottom: 12px;
}

.discount {
  flex-direction: column;
}

.p_info {
  display: flex;
  flex-direction: column;
}

.p_info span {
  margin: 5px 0;
  font-size: 15px;
}

.p_info button {
  margin-top: 30px;
  margin-bottom: 30px;
  background: #BA1219;
  color: white;
  border-radius: 2px;
  border: none;
  padding: 10px;
  cursor: pointer;
  outline: none;
}

.p_info button:hover {
  background: darkred;
}
</style>
