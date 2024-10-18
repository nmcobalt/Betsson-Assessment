<template>
  <header>
    <nav>
      <RouterLink to="/home">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/assessment">Assessment</RouterLink>
    </nav>
  </header>

  <main class="container">
    <RouterView />
  </main>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss" scoped>
header {
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
}
</style>