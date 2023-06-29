<script setup>
const options = [
        "one",
        "two",
        "three",
        "nine",
      ];
</script>

<template>
  <va-button> Button </va-button>

  <va-input
      v-model="value"
      class="mb-6"
    />

    <va-select
      v-model="value"
      :options="options"
    />
</template>

<style scoped>

</style>
