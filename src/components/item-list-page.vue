<template>
  <div id="ItemListPage">
    <h3>Item Types</h3>
    <br/>
    <p class="itemTypes" v-for="(item, itemId) in this.itemTypes" :key="itemId">
      <span class="btn">{{itemId}}</span> {{item.name}} <input type="text" v-model="item.total" readonly>/<input type="text" v-model="item.capacity">
    </p>
  </div>
</template>

<script>
import store from '../store/index.js'
import {mapGetters} from 'vuex'

export default {
  store,
  name: 'ItemListPage',
  components: {
  },
  computed: {
    ...mapGetters(['itemTypes'])
  }
}
</script>

<style>

</style>
