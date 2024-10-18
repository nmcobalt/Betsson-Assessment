<template>
  <div>
    <h2>A simple counter to store the current count:</h2>

    <DisplayCounter :counter="counter.count"></DisplayCounter>    

    <button type="button" @click="counter.decrement()">decrease counter</button>
    <button type="button" @click="counter.increment()">increase counter</button>

  </div>
</template>


<script lang="ts">
import { useCounterStore } from "../stores/counter";
import DisplayCounter from "./DisplayCounter.vue";

export default {
  name: 'ControlCounter',
  components:{
    DisplayCounter
  },
  setup() {
    const counter = useCounterStore();
    return { counter }
  },
  data() {
    return {
      count: 0
    }
  }
}
</script>