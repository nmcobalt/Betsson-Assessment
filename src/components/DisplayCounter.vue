<template>
  <div>{{ counter }}</div>
</template>

<script lang="ts">
export default {
  name: 'DisplayCounter',
  props: {
    counter: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss" scoped>
div{
  background-color: var(--color-primary, red);
  margin: 20px auto;
  max-width: 200px;
  border-radius: 4px;
}
</style>