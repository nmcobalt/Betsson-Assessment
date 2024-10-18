<template>
  <h2>{{ msg }}</h2>

  <div class="card">
    <h3>A simple counter to store the current count:</h3>

    <hr />
    <h3>The shopping list:</h3>

    <div class="shopping-list">
      <ShoppingListItem v-for="item in shoppingList.list" :key="item.id" :item="item"></ShoppingListItem>
    </div>

    <hr />

    <h3>The meats on the list:</h3>

    <div class="shopping-list">
      <ShoppingListItem v-for="item in shoppingList.meats" :key="item.id" :item="item"></ShoppingListItem>
    </div>
  </div>
</template>

<script lang="ts">
import { useShoppingListStore } from "../stores/shoppingList";
import ShoppingListItem from "./ShoppingListItem.vue";

export default {
  name: "HelloWorld",
  components: {
    ShoppingListItem,
  },
  setup() {
    const shoppingList = useShoppingListStore();
    return { shoppingList };
  },
  props: {
    msg: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      count: 0,
    };
  },
};
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
.shopping-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
