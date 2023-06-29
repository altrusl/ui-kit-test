<script setup>
import { Button } from 'vant';
import { Field } from 'vant';
import { DropdownMenu, DropdownItem } from 'vant';

const option1 = [
      { text: 'Option1', value: 0 },
      { text: 'Option2', value: 1 },
      { text: 'Option3', value: 2 },
    ];

</script>

<template>
  <Button type="primary" >Button</Button>

  <Field v-model="value" label="Label" placeholder="Text" />

  <dropdown-menu>
  <dropdown-item v-model="value1" :options="option1" />
</dropdown-menu>
</template>

<style scoped>

</style>
