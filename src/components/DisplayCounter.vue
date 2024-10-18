<template>
  <div>
    <button ref="counter" class="display-counter">{{ counter }}</button>
  </div>
</template>

<script lang="ts" setup>
import { useTemplateRef, onMounted } from "vue";

// type DivType = InstanceType<typeof HTMLButtonElement>

const btn = useTemplateRef<HTMLButtonElement>("counter");

const { counter } = defineProps({
  counter: Number,
});

const printClicked = (e: Event) => {
  console.log("clicked", e.target);
};

onMounted(() => {
  console.log("mounted");
  btn.value?.addEventListener("click", printClicked);
});
</script>

<style lang="scss" scoped>
.display-counter {
  background-color: var(--color-primary, red);
  margin: 20px auto;
  max-width: 200px;
  border-radius: 4px;

  @include scr-phones {
    max-width: none;
    background-color: yellow;
  }
  @include scr-tablets {
    background-color: blueviolet;
  }
}
</style>
