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

<script lang="ts">
import { useCounterStore } from "./stores/counter";
import DisplayCounter from "./components/DisplayCounter.vue";
import { routesList } from "./router.ts";

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
      direction: "left",
      routes: [...routesList]
    }
  },
  mounted() {
   // console.log(router.getRoutes())
  },
  methods: {
    getPathIndex(name: string) {
      const index = this.routes.findIndex((route) => route.name === name);
      //console.log(name, index, this.routes)
      return index ? index : 0;
    },
    resolveDirection(fromIndex: number, toIndex: number) {
      this.direction = fromIndex > toIndex ? "right" : (fromIndex < toIndex ? "left" : "none");
    }
  },
  computed: {
    directionTransitionName() {
      return this.direction === "left" ? "slide-left" : (this.direction === "right" ? "slide-right" : "fade");
    }
  },
  watch: {
      '$route': function (to, from) {
         //console.log("from", from.name, this.getPathIndex(from.name), "to", to.name, this.getPathIndex(to.name));

        this.resolveDirection(this.getPathIndex(from.name), this.getPathIndex(to.name))

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
  position: relative;
  display: flex;
  overflow: hidden;
  max-width: 100dvw;
  min-height: 100vh;
}
</style>
