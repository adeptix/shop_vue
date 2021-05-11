<template>
  <router-link class="p_card" tag="div" :to="{name: 'ProductPage', params: {id: product.id}}">
    <div class="wrapper">
      <product-image :image_url="product.image_url"/>
    </div>
    <div class="card_footer">
      <discount-card class="discount_card" :discount="discount" :price="product.price"/>
      <span class="brand">{{ product.brand }}</span>
      <span class="name">{{ product.name }}</span>
      <div v-if="haveDiscount" class="percent">{{ discount.percent }}%</div>
    </div>
  </router-link>
</template>

<script>
import { mapGetters } from "vuex"
import ProductImage from "./ProductImage"
import DiscountCard from "./DiscountCard"

export default {
  name: "ProductCard",
  components: {DiscountCard, ProductImage},
  props: ["product"],
  methods: {

  },

  computed: {
    ...mapGetters({
      getDiscount: "discounts/getDiscountByProductID"
    }),

    discount: function () {
      return this.getDiscount(this.product.id)
    },
    haveDiscount: function () {
      return this.discount !== undefined
    },
  }
}
</script>

<style scoped>
.p_card {
  cursor: pointer;
  padding: 5px;
  background: white;
  display: flex;
  flex-direction: column;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}

.p_card:hover{
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}

.wrapper {
  display: flex;
  align-items: center;
  flex-grow: 1;
}

.card_footer {
  display: grid;
  grid-template-columns: repeat(2, auto);
  padding: 5px;
}

.discount_card {
  grid-column: 1 / -1;
}

.discount {
  justify-content: space-between;
}

.price {
  grid-column: 1;
  grid-row: 1;
  font-weight: bold;
  font-size: 20px;
}

.old_price {
  grid-column: 2;
  grid-row: 1;
  text-decoration: line-through;
  color: #868686;
  font-weight: bold;
  font-size: 16px;
  align-self: center;
}

.brand {
  grid-row: 2;
  font-weight: 300;
  font-size: 14px;
  padding-top: 2px;
}

.name {
  padding-top: 3px;
  grid-row: 3;
  grid-column: 1;
  font-weight: normal;
  font-size: 16px;
}

.percent {
  grid-row: 3;
  grid-column: 2;
  background: #BA1219;
  color: white;
  justify-self: center;
  align-self: center;
}

</style>
