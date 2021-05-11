<template>
  <div class="discount">
    <div class="price" v-bind:class="{discount_price: haveDiscount}">{{ actualPrice }} руб.</div>
    <div v-if="haveDiscount" class="old_price">{{ price }} руб.</div>
  </div>
</template>

<script>
export default {
  name: "DiscountCard",
  props: ["discount", "price"],

  computed: {
    haveDiscount: function () {
      return this.discount !== undefined
    },
    actualPrice: function () {
      const price = this.price

      if (!this.haveDiscount) {
        return price
      }

      return this.discount.percent / 100 * price
    }
  }
}
</script>

<style scoped>
.discount{
  display: flex;
  flex-direction: row;
}

.price {
  font-weight: bold;
  font-size: 20px;
}

.old_price {
  text-decoration: line-through;
  color: #868686;
  font-weight: bold;
  font-size: 16px;
  /*align-self: center;*/
}

.discount_price {
  color: #BA1219
}
</style>
