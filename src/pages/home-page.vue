<template>
  <div>
    <h1>home</h1>
   
    <HelloWorld v-if="hasHallow" msg="Vite + Vue" />

    <button @click="toggleHelloWord()">toggleHelloWord</button>
  </div>
</template>

<script lang="ts">
import HelloWorld from "../components/HelloWorld.vue";

export default {
  components:{
    HelloWorld
  },
  data(){
    return {
      hasHallow: true
    }
  },
  methods: {
    toggleHelloWord(){
      this.hasHallow = !this.hasHallow
    }
  }
};
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
