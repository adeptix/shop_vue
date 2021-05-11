<template>
  <div class="tabs">
    <router-link
      to="/"
      class="tab"
      tag="button"
      v-bind:class="{active_tab: isHere()}">Все товары
    </router-link>
    <router-link
      v-for="c in categories" :key=c.id
      :to="{name: 'CatalogPage', params: {type: c.name}}"
      v-bind:class="{active_tab: isHere(c.name)}"
      class="tab"
      tag="button"
    >{{ c.label }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Tabs",
  props: ["categories"],

  methods: {
    isHere(name) {
      return this.$route.params.type === name
    }
  }
}
</script>

<style scoped>
.tabs {
  display: flex;
  flex-direction: row;
}

.tabs_mobile {

}

.tab {
  padding: 5px;
  outline: none;
  cursor: pointer;
  background: none;
  border: none;
  font-family: Roboto, sans-serif;
}

.active_tab {
  border-bottom: 2px solid #BA1219;
}

.tab:hover {
  background: #a5a4a4;
}

</style>
