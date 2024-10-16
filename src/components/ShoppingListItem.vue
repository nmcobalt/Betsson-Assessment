<template>
  <div class="shopping-list-item">{{ item.name }}</div>
</template>

<script lang="ts">
export default {
  props: {
    item: {
      type: Object,
      required: true,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.shopping-list-item{
  border-radius: 4px;
  background-color: #ccc;
  color: #222;
  padding: 8px;
}
</style>