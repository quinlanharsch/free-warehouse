<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <ul id="example-1">
      <li v-for="(item, key) in this.$store.suById(0).itemList" :key="item">
        <Item name="key" number="item"></Item>
        {{ item }} - {{ key }}
      </li>
    </ul>
    <Item msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Item from './components/item.vue'

export default {
  name: 'App',
  components: {
    Item
  },
  methods:{
    ...mapActions(['suById'])
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
