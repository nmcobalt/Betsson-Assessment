<template>
  <div>
    <div class="display-counter">{{ counter }}</div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";

const { counter } = defineProps({
  counter: Number,
});


onMounted(() => {
  console.log("mounted");
});
</script>

<style lang="scss" scoped>
.display-counter {
  display: inline-block;
  padding: 10px 20px;
  min-width: 150px;
  background-color: var(--color-primary, red);
  margin: 20px auto;
  max-width: 200px;
  border-radius: 4px;
  @include fs(24,24,400, white);

  @include scr-phones {
    max-width: none;
    background-color: yellow;
  }
  @include scr-tablets {
    background-color: blueviolet;
  }
}
</style>
