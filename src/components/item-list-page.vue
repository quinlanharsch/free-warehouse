<template>
  <div id="ItemListPage">
    <h3>Item Types</h3>
    <div class="itemTypes" v-for="(item, itemId) in this.itemTypes" :key="itemId">
      <h4 style="display:inline-block;"><span class="su-id">/{{itemId}}</span> {{item.name}}</h4>
      <input class="w-3" type="text" v-model="item.total" readonly>
      /
      <input class="w-3" type="text" v-model="item.capacity">
    </div>
  </div>
</template>

<script>
import store from '../store.js'
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
