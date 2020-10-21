<template>
  <div class='navbar navbar-light bg-light'>
    <a class="navbar-brand h1" href="#">
      <img src="/img/icons/icon.svg"
      style="display: inline-block; height: 1.2em;"
      alt="*^^">
      Freehouse
    </a>

    <form class="form-inline">
      <button class='btn'
        @click="this.toggleStorageMode">
        {{this.storageMode?"⇅":"±"}}
      </button>
      <button class='btn'
        :href= "'data:text/csv;charset=utf-8,' + this.csvData"
        target = "_blank"
        download = "store_data.csv">
        csv
      </button>
    </form>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'Navbar',
  components: {
  },
  computed: {
    ...mapState(['storageMode'])
  },
  methods: {
    ...mapMutations(['toggleStorageMode'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
