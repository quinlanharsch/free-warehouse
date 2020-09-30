<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <ul id="example-1">
      <li v-for="(qty, name) in this.$store.getters.suById(0).itemList" :key="name">
        <Item :name="name" :number="qty"></Item>
      </li>
    </ul>
    <Item msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Item from './components/item.vue'
import store from './store/index.js'

export default {
  store,
  name: 'App',
  components: {
    Item
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
