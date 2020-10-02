<template>
  <div class='item'>
    <div class="hzAlignWrapper">
      <div class='left hzAlignInner'>
        {{this.itemNameById(itemId)}}
      </div>
      <div class='right hzAlignInner'>
        <div v-if="!this.storageMode">
          <a class='btn' @click="onAquire()">＋</a>
          {{qty}}
          <a class='btn' v-if="!this.storageMode" @click="onConsume()">－</a>
        </div>
        <div v-else-if="this.storageMode && (this.suId != '0')">
          <a class='btn' @click="onRetrieve()">⇊</a>
          {{qty}}
          <a class='btn' @click="onStore()">⇈</a>
        </div>
        <div v-else>
          <a class='btn'>⋅</a> {{qty}} <a class='btn'>⋅</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapState} from 'vuex'

export default {
  name: 'Item',
  props: ['itemId', 'qty', 'suId'],
  data: function () {
    return {
      count: 0
    }
  },
  computed: {
    ...mapGetters(['itemNameById']),
    ...mapState(['storageMode'])
  },
  methods: {
    onAquire: function() {
      this.$store.commit('acquireItem',
        {'suId': this.suId, 'itemId': this.itemId, 'qty':1}
      )
    },
    onConsume: function() {
      this.$store.commit('consumeItem',
        {'suId': this.suId, 'itemId': this.itemId, 'qty':1}
      )
    },
    onRetrieve: function() {
      this.$store.commit('retrieveItem',
        {'suId': this.suId, 'itemId': this.itemId, 'qty':1}
      )
    },
    onStore: function() {
      this.$store.commit('storeItem',
        {'suId': this.suId, 'itemId': this.itemId, 'qty':1}
      )
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- <style scoped>
</style> -->
