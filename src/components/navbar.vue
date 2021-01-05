<template>
  <div class='navbar navbar-light bg-light'>
    <a class="navbar-brand h1" href="/">
      <img src="/img/icons/icon.svg"
      style="display: inline-block; height: 1.2em;"
      alt="*^^">
      Freehouse
    </a>

    <form class="form-inline">
      <a class="btn" href="/i">/i</a>
      <a class="btn" href="/u">/u</a>
    </form>

    <form class="form-inline">
      <button class='btn'
        @click="this.toggleStorageMode">
        {{this.storageMode?"⇅":"±"}}
      </button>
      <a class='btn'
        :href= "'data:text/csv;charset=utf-8,' + this.csvData"
        target = "_blank"
        download = "store_data.csv">
        csv
      </a>
    </form>
  </div>
</template>

<script>
import {mapState, mapMutations, mapGetters} from 'vuex'
export default {
  name: 'Navbar',
  components: {
  },
  computed: {
    ...mapState(['storageMode']),
    ...mapGetters(['csvData'])
  },
  methods: {
    ...mapMutations(['toggleStorageMode'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
