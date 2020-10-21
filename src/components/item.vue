<template>
  <div class='item'>
    <div class="hzAlignWrapper">
      <div class='left hzAlignInner'>
        {{this.itemNameById(itemId)}}
      </div>
      <div class='right hzAlignInner'>
        <!-- todo make this a component -->
        <div v-if="!this.storageMode">
          <div class="btn" @click="onAquire()">＋</div>
          <input type="text" v-model="quantity">
          <div class="btn" v-if="!this.storageMode" @click="onConsume()">－</div>
        </div>
        <div v-else-if="this.storageMode && (this.suId != '0')">
          <div class="btn" @click="onRetrieve()">⇊</div>
          <input type="text" v-model="quantity">
          <div class="btn" @click="onStore()">⇈</div>
        </div>
        <div v-else>
          <div class="btn">⋅</div>
          <input type="text" v-model="quantity">
          <div class="btn">⋅</div>
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
    ...mapState(['storageMode']),
    quantity: {
      get() {
        return this.$store.state.suList[this.suId].itemList[this.itemId];
      },
      set(value) {
        this.$store.commit('updateQuantity',
          {'suId': this.suId, 'itemId': this.itemId, 'qty':value}
        );
      },
    },
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
<style scoped>
.hzAlignWrapper{
  margin: 10px 0
}
</style>
