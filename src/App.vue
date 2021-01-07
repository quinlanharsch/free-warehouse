<template>
  <div id="app">
    <navbar></navbar>
    <router-view class='content-wrapper'></router-view>
  </div>
</template>

<script>
import store from './store.js'
import Navbar from './components/navbar.vue'
import {mapGetters} from 'vuex'

export default {
  store,
  name: 'App',
  components: {
    Navbar
  },
  computed: {
    ...mapGetters(['suList', 'itemTypes']),
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;

  user-select: none;
  box-sizing: border-box;
}
.content-wrapper{
  padding-top: 10px;
  max-width: 480px;
  margin: auto;
}
h1, h2, h3, h4, h5, h6{
  margin: 0;
  padding: 0.4em 0;
  text-align: left;
}
h1:hover, h2:hover, h3:hover, h4:hover, h5:hover, h6:hover, p:hover, div:hover{
  cursor: default;
}
.btn{
  margin: 2px;
  min-width: 30px;
  padding: 3px 5px;
  border: 1px solid #ff9c66;
  background-color: #ff9c66;
  color: white;
  border-radius: 2px;
  font-family:inherit;
  font-size: inherit;
}
.btn:hover{
  background-color: #ff8847;
  border-color: #ff8847;
  cursor: pointer;
}
.hzAlignWrapper{
  padding: 1em 0;
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
  border: 0;
  border-bottom: 2px solid #ff9c66;
  text-align: center;
  font-family:inherit;
  font-size: inherit;
}
input[type=text].w-3{
  width: 3em;
}
input[type=text].w-20{
  width: 20em;
}
.su{
  margin: 10px 0;
}
.su-id{
  font-size: 0.6em;
  color: lightgray;
}
.su-selector{
  display: inline-block;
}
</style>
