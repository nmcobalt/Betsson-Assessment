<template>
  <div>
    <div class="display-counter" :class="[slimClass]">{{ counter }}</div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, computed } from "vue";

const { counter, slim } = defineProps({
  counter: Number,
  slim: Boolean,
});

const slimClass = computed(() => {
  return slim ? "display-counter--slim" : "";
})



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

  &--slim{
    padding: 4px 12px;
    min-width: 50px;
    margin: 0;
    @include fs(16);
  }
}
</style>
