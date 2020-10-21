<template>
  <div id="storageUnitPage">
    <div v-for="(su, suId) in this.suList" :key="suId">
      <storage-unit :su="su" :su-id="suId"></storage-unit>
    </div>
  </div>
</template>

<script>
import store from '../store/index.js'
import StorageUnit from './storage-unit.vue'
import {mapGetters} from 'vuex'

export default {
  store,
  name: 'StorageUnitPage',
  components: {
    StorageUnit
  },
  computed: {
    ...mapGetters(['suList'])
  }
}
</script>

<style>

</style>
