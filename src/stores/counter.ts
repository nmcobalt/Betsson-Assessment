import { defineStore  } from "pinia";
import { increment, decrement } from "../lib/increment-decrement";
import { MAX_COUNTER_VALUE, MIN_COUNTER_VALUE } from "../lib/constants";

export const useCounterStore = defineStore("counter", {
    state: () => {
        return { count: 0 };
    },
    actions: {
        increment(val = 1) {
            this.count = increment({ currentValue: this.count, volume: val, maxValue: MAX_COUNTER_VALUE });
            console.log("increment triggered:", this.$state);
        },

        decrement(val = 1) {
            this.count = decrement({ currentValue: this.count, volume: val, minValue: MIN_COUNTER_VALUE });         
            console.log("decrement triggered:", this.$state);

        },
        reset() {
            this.count = 0;
        },
    },
    getters: {
        getCounter(): number {
            return this.count;
        }
    }
});