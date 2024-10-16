import { defineStore } from "pinia";

export const useShoppingListStore = defineStore("shoppingList", {
  state: () => {
    return {
      list: [
        {
          id: "item1",
          name: "Item 1",
        },
        {
          id: "item2",
          name: "Item 2",
        },
        {
          id: "item3",
          name: "Item 3",
        },
        {
          id: "item4",
          name: "Item 4",
        },
      ],
    };
  },
  actions: {
    addToList(obj: {name: string; id: string}) {
      const {name, id} = obj
      if(this.list.includes({id, name})) return

      this.list.push({
        id,
        name,
      });
    }
  },
  getters: {},
});
