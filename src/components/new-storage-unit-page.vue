<template>
  <div id="NewStorageUnitPage">
    <h3>Storage Units</h3>
    <storage-unit-page-selector></storage-unit-page-selector>
    <br/>
    <h5>
      <input class="w-75" type="text" v-model="newSu.name">
      <span class="su-id">/{{nextSuId}}</span>
    </h5>
    <div v-for="(qty, itemId) in newSu.itemList" :key="itemId">
      <div>
        {{itemNameById(itemId)}}
        <span class="su-id">:{{itemId}}</span>
        <input class="w-3" type="text" v-model="newSu.itemList[itemId]"/></div>
    </div>
    <button class="btn" @click="add()">add</button>
  </div>
</template>

<script>
import store from '../store.js'
import StorageUnitPageSelector from './storage-unit-page-selector'
import {mapGetters, mapMutations} from 'vuex'

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
      return lowest
    }
  },
  methods: {
    ...mapMutations(['updateQuantity']),
    add(){
      this.suList[this.nextSuId.toString()] = {
        name:this.newSu.name,
        itemList: {}
      }
      for (var key of Object.keys(this.itemTypes)){
        this.suList[this.nextSuId].itemList[key] = 0
      }
      for(var itemId in this.newSu.itemList) this.updateQuantity({
        'suId': this.nextSuId,
        'itemId': itemId,
        'qty': this.newSu.itemList[itemId]
      })
      this.$router.push({ path: 'u/' + this.nextSuId.toString() })
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
