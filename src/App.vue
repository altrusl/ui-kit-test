<script setup>
import Button from "primevue/button"
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';

import { ref } from "vue";

const selectedCity = ref();
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);


</script>

<template>
  <Button label="Submit" />

  <InputText type="text" v-model="value" />

  <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" class="w-full md:w-14rem" />

</template>

<style scoped>

</style>
