<template>
  <h1>About</h1>
  Current counter is 
  
  <ControlCounter></ControlCounter>
</template>

<script lang="ts">
import { useCounterStore } from "../stores/counter";
import ControlCounter from "../components/ControlCounter.vue";

export default {
  name: 'about-us',
  components:{
    ControlCounter
  },
  setup() {
    const counter = useCounterStore();
    return { counter }
  }
}
</script>