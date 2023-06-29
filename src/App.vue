<script setup>
import { NButton, NInput, NSelect } from 'naive-ui'

const options = [
  {
    label: "Everybody's Got Something to Hide Except Me and My Monkey",
    value: 'song0',
    disabled: true
  },
  {
    label: 'Drive My Car',
    value: 'song1'
  },
  {
    label: 'Norwegian Wood',
    value: 'song2'
  }
];
</script>

<template>
  <n-button>naive-ui</n-button>

  <n-input v-model:value="value" type="text" placeholder="Basic Input" />
    

  <n-select v-model:value="value" :options="options" />
</template>

<style scoped>

</style>
