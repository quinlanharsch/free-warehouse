<template>
  <div class='StorageUnit'>
    <h3>{{su.name}}</h3>
    <div class='hzAlignWrapper'>
      <div v-for="(qty, itemId) in su.itemList" :key="itemId" class="item">
        <item :itemId='itemId' :qty='qty' :suId='suId'></item>
      </div>
    </div>
  </div>
</template>

<script>
import Item from './item.vue'
export default {
  name: 'StorageUnit',
  components: {
    Item
  },
  props: ['su', 'suId']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3, p{
  margin: 0;
  padding: 0.2em 0 0.2em 0;
  text-align: left;
}
.hzAlignWrapper{
  padding: 10px 0;
}
.su{
  margin: 10px 0;
}
</style>
