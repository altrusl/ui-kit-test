<script setup>
import { Button } from '@flavorly/vanilla-components' 
import { Select, Input } from '@flavorly/vanilla-components'
import { ref } from 'vue'
const value = ref(undefined)
const options = [
  { value: 'vue', text: 'Vue' },
  { value: 'not_react', text: 'Not React' },
  { value: [{ anotherObject: true, nested: 'deep' }], text: 'Vue?' },
  {
    value: 'seprator',
    text: 'Other Frameworks',
    children: [
      { value: 'not_svelt', text: 'Not Svelt' },
      { value: 'not_angular', text: 'Neither Angular' },
    ],
  },
]
</script>

<template>
  <Button>Continue</Button>

  <Input
        v-model="value"
        placeholder="Dead simple"
      />

  <Select
        v-model="value"
        placeholder="Please choose your stack"
        feedback="You can add SVGs as addons before & After"
        :options="options"
      />
</template>

<style scoped>

</style>
