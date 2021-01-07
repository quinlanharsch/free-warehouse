<template>
  <div id="storageUnitPageSelector">
    <a class="btn" href="/?#/u">/</a>
    <div class="su-selector" v-for="(su, suId) in this.suList" :key="suId">
      <a class="btn" :href="'/?#/u/' + suId.toString()">/{{suId}}</a>
    </div>
    <a class="btn" href="/?#/u+">+</a>
  </div>
</template>

<script>
import store from '../store.js'
import {mapGetters} from 'vuex'

export default {
  store,
  name: 'StorageUnitPageSelector',
  computed: {
    ...mapGetters(['suList'])
  }
}
</script>

<style>
.su-selector{
  display: inline-block;
}
</style>
