import { defineStore } from "pinia";

export const useShoppingListStore = defineStore("shoppingList", {
  state: () => {
    return {
      list: [
        {
          id: "item1",
          name: "Chicken",
          type: "meat"
        },
        {
          id: "item2",
          name: "Bread",
          type: "bakery"
        },
        {
          id: "item3",
          name: "Beef",
          type: "meat"
        },
        {
          id: "item4",
          name: "Apple",
          type: "fruit"
        },
      ],
    };
  },
  actions: {
    addToList(obj: {name: string; type: string; id: string}) {
      const {name, id, type} = obj
      if(this.list.includes({id, name, type})) return

      this.list.push({
        id,
        name,
        type
      });
    }
  },
  getters: {
    meats(state) {
      return state.list.filter((item) => item.type === "meat")
    }
  },
});
