<template>
  <div id="app">
    <ul>
      <li><router-link to="/home">Home</router-link></li>
      <li><router-link to="/restaurants">Restaurants</router-link></li>
      <li><router-link :to="{name: 'recommended-restaurant', params: {id: 1}}">Recommended Restaurant</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
