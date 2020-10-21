<template>
  <div id="ItemListPage">
    <h3>Item Types</h3>
    <br/>
    <p class="itemTypes" v-for="(item, itemId) in this.itemTypes" :key="itemId">
      {{itemId}}. {{item.name}}, {{item.total}}/{{item.capacity}}
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
