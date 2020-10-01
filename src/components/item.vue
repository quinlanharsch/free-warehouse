<template>
  <div class='item'>
    <div class="itemWrapper">
      <div class='itemName innerItem'>
        {{this.itemNameById(itemId)}}
      </div>
      <div class='counter innerItem'>
        <div v-if="!this.storageMode">
          <a class='btn' @click="onAquire()">+</a>
          {{qty}}
          <a class='btn' v-if="!this.storageMode" @click="onConsume()">-</a>
        </div>
        <div v-else-if="this.storageMode && (this.suId != '0')">
          <a class='btn' @click="onRetrieve()">&#8650;</a>
          {{qty}}
          <a class='btn' @click="onStore()">&#8648;</a>
        </div>
        <div v-else>
          <a class='btn'>_</a> {{qty}} <a class='btn'>_</a>
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
<style scoped>
.item{
  border: 1px solid red;
}
.itemWrapper{
  padding: 0.8em;
  margin: 2px 0;
  position: relative;
}
.innerItem{
  position: absolute;
}
.itemName{
  left: 0.2em;
  top: 0.2em;
  display: inline-block;
}
.counter{
  right: 0.2em;
  top: 0.2em;
  display: inline-block;
}
.btn{
  border: 1px solid blue;
  min-width: 10px;
  min-height: 10px;
  border-radius: 2px;
}
</style>
