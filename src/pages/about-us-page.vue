<template>
  <div class="about">
    <h1>About</h1>
    Current counter is

    <ControlCounter></ControlCounter>
  </div>
</template>

<script lang="ts">
import { useCounterStore } from "../stores/counter";
import ControlCounter from "../components/ControlCounter.vue";

export default {
  name: "about-us",
  components: {
    ControlCounter,
  },
  setup() {
    const counter = useCounterStore();
    return { counter };
  },
};
</script>

<style scoped>
.about {
  width: 100dvw;
  flex-shrink: 0;
  background-color: coral
}
</style>
