<template>
  <div id="storageUnitPage">
    <h3>Storage Units</h3>
    <storage-unit-page-selector></storage-unit-page-selector>
    <br/>

    <div v-for="(su, suId) in this.suList" :key="suId">
      <storage-unit :su="su" :su-id="suId"></storage-unit>
    </div>
  </div>
</template>

<script>
import store from '../store.js'
import StorageUnit from './storage-unit.vue'
import StorageUnitPageSelector from './storage-unit-page-selector'
import {mapGetters} from 'vuex'

export default {
  store,
  name: 'StorageUnitPage',
  components: {
    StorageUnit,
    StorageUnitPageSelector
  },
  computed: {
    ...mapGetters(['suList'])
  }
}
</script>
