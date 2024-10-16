<template>
  <h1>About</h1>
  Current counter is 
  
  <DisplayCounter :counter="counter.count"></DisplayCounter>
</template>

<script lang="ts">
import { useCounterStore } from "../stores/counter";
import DisplayCounter from "../components/DisplayCounter.vue";

export default {
  name: 'about-us',
  components:{
    DisplayCounter
  },
  setup() {
    const counter = useCounterStore();
    return { counter }
  }
}
</script>