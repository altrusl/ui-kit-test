<script setup>
</script>

<template>
  <a-button type="primary">Primary Button</a-button>

  <a-input v-model:value="value" placeholder="Basic usage" />

  <a-select
      ref="select"
      v-model:value="value1"
      style="width: 120px"
    >
      <a-select-option value="jack">Jack</a-select-option>
      <a-select-option value="lucy">Lucy</a-select-option>
      <a-select-option value="disabled" disabled>Disabled</a-select-option>
      <a-select-option value="Yiminghe">yiminghe</a-select-option>
    </a-select>
</template>

<style scoped>

</style>
