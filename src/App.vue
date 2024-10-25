<template>
  <header class="header">
    <nav>
      <RouterLink to="/home">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/about/other">About other</RouterLink>
      <RouterLink to="/assessment">Assessment</RouterLink>
    </nav>
    <div class="header__aside">
      <DisplayCounter :counter="counter.count" :slim="true"></DisplayCounter>
    </div>
  </header>

  <main class="main-content">
    <RouterView v-slot="{ Component, route }">
      <Transition :name="directionTransitionName" mode="default">
        <component :is="Component" :key="route.path" />
      </Transition>
    </RouterView>
  </main>
</template>

<script lang="ts" setup>
import { useCounterStore } from "./stores/counter";
import DisplayCounter from "./components/DisplayCounter.vue";
import { routesList } from "./router.ts";
import { computed,  watch } from "vue";
import { useRoute } from "vue-router";
import { useTransitionDirection, ListItem } from "./composables/useTransitionDirection";
//import { RouteRecordNameGeneric, useRoute } from "vue-router";

const route = useRoute();

const counter = useCounterStore();

const routes = [...routesList];

const { direction, resolveDirection}  = useTransitionDirection(routes as ListItem[])  //ref("left");

watch(
  () => route.name,
  (newName, oldName) => {

    const newNameStr = newName ? newName.toString() : "";
    const oldNameStr = oldName ? oldName.toString() : "";

    resolveDirection(oldNameStr, newNameStr)

  }
);

const directionTransitionName = computed(() => {
  return direction.value === "left" ? "slide-left" : direction.value === "right" ? "slide-right" : "fade";
});

</script>

<style lang="scss" scoped>
.header {
  position: sticky;
  display: flex;
  gap: var(--gap-24);

  .active {
    color: #fff;
  }

  nav {
    display: flex;
    gap: var(--gap-24);
  }

  &__aside {
    margin-left: auto;
  }
}
.main-content {
  position: relative;
  display: flex;
  overflow: hidden;
  max-width: 100dvw;
  min-height: 100vh;
}
</style>
