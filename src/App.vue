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
import { watch } from "vue";
import { useRoute } from "vue-router";
import { useTransitionDirection, ListItem } from "./composables/useTransitionDirection";
import { useTransitionDirectionClassNames } from "./composables/useTransitionDirectionClassNames";
//import { RouteRecordNameGeneric, useRoute } from "vue-router";

const route = useRoute();

const counter = useCounterStore();

const routes: ListItem[] = routesList.map((route) => ({
  name: (route.name && typeof route.name === "string") ? route.name : "",
}));

const { direction, resolveDirection}  = useTransitionDirection(routes as ListItem[], "name")  //ref("left");

const { directionTransitionName } = useTransitionDirectionClassNames(direction)

watch(
  () => route.path,
  (newPath, oldPath) => {

    const getBaseName = (path: string) => {
      const segments = path.split("/");
      return segments[1] || ""; // Get the base segment, or "" if it's the root path
    };

    const newNameStr = getBaseName(newPath)?.toString() ?? "";
    const oldNameStr = getBaseName(oldPath)?.toString() ?? "";

    resolveDirection(oldNameStr, newNameStr)

  }
);

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
