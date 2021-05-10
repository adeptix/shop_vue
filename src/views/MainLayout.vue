<template>
  <div>
    <div>header</div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions } from "vuex"

export default {
  name: "MainLayout",
  methods: {
    ...mapActions({
      loadDiscounts: "discounts/loadDiscounts"
    })
  },
  mounted() {
    this.loadDiscounts()
  }
}
</script>

<style scoped>

</style>
