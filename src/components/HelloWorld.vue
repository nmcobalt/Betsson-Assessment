<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    
    <DisplayCounter :counter="counter.count"></DisplayCounter>    

    <button type="button" @click="counter.decrement()">decrease counter</button>
    <button type="button" @click="counter.increment()">increase counter</button>

    <div class="shopping-list">
      <ShoppingListItem v-for="item in shoppingList.list" :key="item.id" :item="item"></ShoppingListItem>
    </div>
    
    
  </div>

</template>

<script lang="ts">
import { useCounterStore } from "@/stores/counter";
import { useShoppingListStore } from "../stores/shoppingList";
import DisplayCounter from "./DisplayCounter.vue";
import ShoppingListItem from "./ShoppingListItem.vue";

export default {
  name: 'HelloWorld',
  components:{
    DisplayCounter,
    ShoppingListItem
  },
  setup() {
    const counter = useCounterStore();
    const shoppingList = useShoppingListStore();
    return { counter, shoppingList }
  },
  props:{
    msg: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      count: 0
    }
  }
}
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
.shopping-list{
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
