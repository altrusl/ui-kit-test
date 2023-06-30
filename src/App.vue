<script setup>
import { Button, Input, Select  } from "agnostic-vue";
</script>

<template>
  <Button>Go</Button>

  <Input id="1" v-model="message" size="small" placeholder="Enter name…" label="Small input" type="text" />

  <Select :options="[{ value: 'andre', label: 'Andre Agassi' }, { value: 'serena', label: 'Serena Williams'} , { value: 'mac', label: 'John McEnroe'}, { value: 'borg', label: 'Bjorn Borg'}, { value: 'althea', label: 'Althea Gibson'}, { value: 'roger', label: 'Roger Federer'}]" unique-id="sel1" name="select1" label-copy="Select the best tennis player of all time" />
 
</template>

<style scoped>

</style>
