<template>
  <div class='StorageUnit'>
    <h4 @click="singlePage()">{{su.name}} <span class="su-id">/{{suId}}</span></h4>
    <div class='hzAlignWrapper'>
      <div v-for="(qty, itemId) in su.itemList" :key="itemId" class="su-item-wrapper">
        <storage-unit-item :itemId='itemId' :qty='qty' :suId='suId'></storage-unit-item>
      </div>
    </div>
  </div>
</template>

<script>
import StorageUnitItem from './storage-unit-item.vue'
export default {
  name: 'StorageUnit',
  components: {
    StorageUnitItem
  },
  props: ['su', 'suId'],
  methods:{
    singlePage(){
      this.$router.push({ path: 'u/' + this.suId.toString() })
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
