<template>
  <img :src="getImageURL()" alt="icon"/>
</template>

<script>
export default {
  name: "ProductImage",
  props: ["image_url"],
  methods: {
    getImageURL() {
      if (!this.image_url || this.image_url.length === 0) {
        return require(`@/assets/products/noimg.png`)
      }

      return require(`@/assets/products/${this.image_url}`)
    }
  },
}
</script>

<style scoped>
img {
  width: 100%;
  margin: auto;
}
</style>
