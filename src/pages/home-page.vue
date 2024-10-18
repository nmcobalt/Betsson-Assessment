<template>
  <div>
    <h1>home</h1>
    
   
    <ShoppingList v-if="hasList" msg="My shopping list" />

    <button @click="toggleHelloWord()">toggle ShoppingList</button>
  </div>
</template>

<script lang="ts">
import ShoppingList from "../components/ShoppingList.vue";

export default {
  components:{
    ShoppingList
  },
  data(){
    return {
      hasList: true
    }
  },
  methods: {
    toggleHelloWord(){
      this.hasList = !this.hasList
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
