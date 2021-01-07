<template>
  <div id="storageUnitSinglePage">
    <h3>Storage Units</h3>
    <storage-unit-page-selector></storage-unit-page-selector>
    <br/>

    <storage-unit v-if="$route.params.suid != 0"
    :su="this.suById(0)"
    :su-id="0">
    </storage-unit>
    <storage-unit
    :su="this.suById($route.params.suid)"
    :su-id="$route.params.suid">
    </storage-unit>
  </div>
</template>

<script>
import store from '../store.js'
import StorageUnit from './storage-unit.vue'
import StorageUnitPageSelector from './storage-unit-page-selector'
import {mapGetters} from 'vuex'

export default {
  store,
  name: 'StorageUnitSinglePage',
  components: {
    StorageUnitPageSelector,
    StorageUnit
  },
  computed: {
    ...mapGetters(['suList', 'suById'])
  }
}
</script>

<style>

</style>
