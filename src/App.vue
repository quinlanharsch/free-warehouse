<template>
  <div id="app">
    <ol>
      <li v-for="(item, itemId) in this.itemList" :key="itemId">
        {{itemId}} | {{item}}
      </li>
    </ol>
    <div v-for="(su, suId) in this.suList" :key="suId">
      <storage-unit :su="su" :su-id="suId"></storage-unit>
    </div>
  </div>
</template>

<script>
import store from './store/index.js'
import StorageUnit from './components/storage-unit.vue'
import {mapGetters} from 'vuex'

export default {
  store,
  name: 'App',
  components: {
    StorageUnit
  },
  computed: {
    ...mapGetters(['suList', 'itemList'])
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
