<template>
  <div class='item'>
    <p>{{itemNameById(itemId)}} | {{qty}}</p>
    <a @click="onAquire()">[+]</a>
    <a @click="onConsume()">[-]</a>
    <a @click="onRetrieve()">[@]</a>
    <a @click="onStore()">[#]</a>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'

export default {
  name: 'Item',
  props: ['itemId', 'qty', 'suId'],
  data: function () {
    return {
      count: 0
    }
  },
  computed: {
    ...mapGetters(['itemNameById'])
  },
  methods: {
    ...mapMutations(['acquireItem']),
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
.itemWrapper{
  padding: 10px
}
.item{
  background-color: white;
  margin: 10px 0;
}
</style>
