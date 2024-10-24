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

  <main class="main-content">
    <RouterView v-slot="{ Component, route }">
      <Transition :name="directionTransitionName" mode="out-in">
        <component :is="Component" :key="route.path" />
      </Transition>
    </RouterView>
  </main>
</template>

<script lang="ts">
import { useCounterStore } from "./stores/counter";
import DisplayCounter from "./components/DisplayCounter.vue";
import router from "./router.ts";

//import { NavigationHookAfter, RouterView } from "vue-router";

export default {
  components: {
    DisplayCounter,
  },
  setup() {
    const counter = useCounterStore();
    return { counter };
  },
  data(){
    return {
      direction: "left"
    }
  },
  mounted() {
    console.log(router.getRoutes())
  },
  methods: {
    getPathIndex(path: string) {
      const index = router.getRoutes().findIndex((route) => route.path === path);
      return index >= 0 ? index : 0;
    },
    resolveDirection(fromIndex: number, toIndex: number) {
      this.direction = fromIndex > toIndex ? "left" : "right";
    }
  },
  computed: {
    directionTransitionName() {
      return this.direction === "left" ? "slide-left" : "slide-right";
    }
  },
  watch: {
      '$route': function (from, to) {

        this.resolveDirection(this.getPathIndex(from.path), this.getPathIndex(to.path))

        // console.log("from", from, "to", to);
        new Promise((resolve) => {
          resolve(true);
          //window.resolveRouteChange = resolve;
        }).then(() => {
          // route changed and page DOM mounted!
        });
      }
    }
  
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

  nav {
    display: flex;
    gap: var(--gap-24);
  }

  &__aside {
    margin-left: auto;
  }
}
.main-content {
  display: flex;
  overflow: hidden;
  max-width: 100dvw;
}
</style>
