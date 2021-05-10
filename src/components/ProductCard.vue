<template>
  <div class="p_card">
    <div class="wrapper">
      <img :src="getImageURL()" alt="icon"/>
    </div>
    <div class="card_footer">
      <span class="price" v-bind:class="{discount_price: haveDiscount}">{{ actualPrice }} руб.</span>
      <span v-if="haveDiscount" class="old_price">{{ product.price }} руб.</span>
      <span class="brand">{{ product.brand }}</span>
      <span class="name">{{ product.name }}</span>
      <div v-if="haveDiscount" class="percent">{{ discount.percent }}%</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  name: "ProductCard",
  props: ["product"],
  methods: {
    getImageURL() {
      if (!this.product.image_url || this.product.image_url.length === 0) {
        return require(`@/assets/products/noimg.png`)
      }

      return require(`@/assets/products/${this.product.image_url}`)
    }
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
    actualPrice: function () {
      const price = this.product.price

      if (!this.haveDiscount) {
        return price
      }

      return this.discount.percent / 100 * price
    }
  }
}
</script>

<style scoped>
.p_card {
  padding: 5px;
  background: white;
  display: flex;
  flex-direction: column;
}

.wrapper img {
  width: 100%;
  margin: auto;
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

.discount_price {
  color: #BA1219
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
