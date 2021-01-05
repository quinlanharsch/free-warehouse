<template>
  <div class='StorageUnit'>
    <h3 @click="singlePage()">{{su.name}} <span class="su-id">/{{suId}}</span></h3>
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
  props: ['su', 'suId'],
  methods:{
    singlePage(){
      this.$router.push({ path: '/u/' + this.suId.toString() })
    },
    // TODO: FIX!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    preventInvalidInput(event) {
      let value = event.target.value;
      // Check if value is number
      let isValid = +value == +value;

      if (!isValid) {
        // input event is not cancellable by preventDefault()
        // so we have to use the below approach to reset the current value to previous one
        var resetEvent = document.createEvent('Event');
        resetEvent.initEvent('input', true, true);
        event.target.value = event.target._value;
        event.target.dispatchEvent(resetEvent);
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3, p{
  margin: 0;
  padding: 0.4em 0;
  text-align: left;
}
.hzAlignWrapper{
  padding: 10px 0;
}
.su{
  margin: 10px 0;
}
.su-id{
  font-size: 0.6em;
  color: lightgray;
}
.item{
  margin: 5px 0;
}
</style>
