<template>
  <div id="app">
    <CardTable />
  </div>
</template>

<script>
import CardTable from '@/components/CardTable'

export default {
  name: 'app',
  components: {
    CardTable
  }
}
</script>

<style>
  @import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
</style>
