<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style>

.container {
  max-width: 1124px;
  margin: auto;
}

body {
  background: #E5E5E5;
  font-family: Roboto, sans-serif;
  font-style: normal;
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
