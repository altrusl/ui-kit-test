<script setup>
// model: ref(null),
const options = [
  'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
]
</script>

<template>
  <q-btn color="white" text-color="black" label="Standard" />

  <q-input v-model="text" label="Standard" />

  <q-select v-model="model" :options="options" label="Standard" />
</template>

<style scoped>

</style>
