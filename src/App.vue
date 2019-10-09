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
  * {
    margin: 0;
    padding: 0;
  }
</style>
