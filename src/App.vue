<template>
  <header class="header">
    <nav>
      <RouterLink to="/home">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/assessment">Assessment</RouterLink>
    </nav>
    <div class="header__aside">
      <DisplayCounter :counter="counter.count" :slim="true"></DisplayCounter>
    </div>
  </header>

  <main class="container">
    <RouterView />
  </main>
</template>

<script lang="ts">
import { useCounterStore } from "./stores/counter";
import DisplayCounter from './components/DisplayCounter.vue';

export default {
  components: {
    DisplayCounter
  },  
  setup() {
    const counter = useCounterStore();
    return { counter }
  },
};
</script>

<style lang="scss" scoped>
.header {
  position: sticky;
  display: flex;
  gap: var(--gap-24);


  .active {
    color: #fff;
  }

  nav{
    display: flex;
    gap: var(--gap-24);
  }

  &__aside{
    margin-left: auto;
  }
}
</style>