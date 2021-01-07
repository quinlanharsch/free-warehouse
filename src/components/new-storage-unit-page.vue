<template>
  <div id="NewStorageUnitPage">
    <h3>Storage Units</h3>
    <storage-unit-page-selector></storage-unit-page-selector>
    <br/>
    <div>Name: <input type="text" v-model="this.newSu.name"> /{{nextSuId}}</div>
    <div v-for="(qty, itemId) in this.newSu.itemList" :key="itemId">
      <div>{{itemId}} {{qty}}</div>
    </div>
    <button class="btn" @click="add()">add</button>
  </div>
</template>

<script>
import store from '../store.js'
import StorageUnitPageSelector from './storage-unit-page-selector'
import {mapGetters} from 'vuex'

export default {
  store,
  name: 'NewStorageUnitPage',
  components: {
    StorageUnitPageSelector
  },
  data: function () {
    return {
      newSu: {
        name:"New Storage Unit",
        itemList: {}
      },
    }
  },
  computed: {
    ...mapGetters(['suList', 'itemTypes', 'itemNameById']),
    nextSuId: function() {
      var k = Object.keys(this.suList)
      for(var j=0; j<k.length;j++) k[j] = +k[j]
      var lowest = -1
      for (var i = 0;  i < k.length;  i++) {
        if (k[i] != i) {
          lowest = i; break
        }
      }
      if (lowest == -1) { lowest = k[k.length - 1] + 1 }
      console.log(lowest);
      return lowest
    }
  },
  methods: {
    add(){
      this.suList[this.nextSuId] = this.newSu
      this.$router.push({ path: '/u/' + this.nextSuId.toString() })
    }
  },
  created(){
    //Populate newSu.itemList
    for (var key of Object.keys(this.itemTypes)){
      this.newSu.itemList[key] = 0
    }
  }
}
</script>

<style>
</style>
