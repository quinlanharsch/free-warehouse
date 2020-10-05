<template>
  <div id="app">
    <div class="hzAlignWrapper">
      <h2 class="hzAlignInner left">Free-Warehouse</h2>
      <button class='hzAlignInner right' @click="this.toggleStorageMode">
        {{this.storageMode?"⇅":"±"}}
      </button>
    </div>
    <br/>
    <h3>Item Types</h3>
    <br/>
    <p class="itemTypes" v-for="(item, itemId) in this.itemTypes" :key="itemId">
      {{itemId}}. {{item.name}}, {{item.total}}/{{item.capacity}}
    </p>
    <br/>
    <div v-for="(su, suId) in this.suList" :key="suId">
      <storage-unit :su="su" :su-id="suId"></storage-unit>
    </div>
  </div>
</template>

<script>
import store from './store/index.js'
import StorageUnit from './components/storage-unit.vue'
import {mapGetters, mapState, mapMutations} from 'vuex'

export default {
  store,
  name: 'App',
  components: {
    StorageUnit
  },
  computed: {
    ...mapGetters(['suList', 'itemTypes']),
    ...mapState(['storageMode'])
  },
  methods: {
    ...mapMutations(['toggleStorageMode'])
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
  max-width: 480px;
  margin: auto;
  user-select: none;
  box-sizing: border-box;
}
h1, h2, h3, h4, h5, h6{
  margin: 0;
}
h1:hover, h2:hover, h3:hover, h4:hover, h5:hover, h6:hover, p:hover, div:hover{
  cursor: default;
}
.itemTypes{
  padding: 0.2em 0;
  margin: 2px 0;
}
button{
  width: 20px;
  padding: 3px;
  border: 1px solid #ff9c66;
  background-color: #ff9c66;
  color: white;
  border-radius: 2px;
  font-family:inherit;
  font-size: inherit;
}
button:hover{
  background-color: #ff8847;
  border-color: #ff8847;
  cursor: pointer;
}

.hzAlignWrapper{
  padding: 0.8em 0;
  margin: 2px 0;
  position: relative;
}
.hzAlignInner{
  position: absolute;
}
.left{
  left: 0;
  top: 0.2em;
  display: inline-block;
}
.right{
  right: 0;
  top: 0.2em;
  display: inline-block;
}

input[type=text]{
  padding: 3px;
  margin: 0 2px;
  width: 5em;
  border: 0;
  font-family:inherit;
  font-size: inherit;
}
</style>
