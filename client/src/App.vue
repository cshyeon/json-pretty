<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
body {
  margin: 0;
  // overflow-y: scroll; //To show scrollbar always
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<style lang="scss" scoped>
@media all {
}

@media all and (max-width: 1280px) {
}

@media all and (max-width: 640px) {
}

@media all and (max-width: 480px) {
}

@media all and (max-width: 320px) {
}
</style>
