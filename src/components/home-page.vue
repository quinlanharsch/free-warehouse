<template>
  <div id="homePage">
    <h3>Home</h3>
    <br/>
    <p>
      Welcome to Freehouse, the lightweight inventory management system.
      Navigate to the two invenory views here.
      <br/><br/>
      <a class="btn" href="?#/i">/i</a>
      The <b><a href="?#/i">Item List</a></b>
      displays item totals. Edit capacities here.
      <br/><br/>
      <a class="btn" href="?#/u">/u</a>
      The <b><a href="?#/u">Storage Unit List</a></b>
      displays storerooms, vehicles, etc.
    </p>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>
