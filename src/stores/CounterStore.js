import { defineStore } from 'pinia'

// defineStore first agument is going tobe name mostly this is used when wiring up to dev tools

// defineStore second argument we're going to have a object where we can declare the state, any actions, any getters or computed properties, all of that will go here.

// following typical conventions this is very similar to composibles, we might begin with use.
export let useCounterStore = defineStore('counter', {
  // data
  state() {
    return {
      count: 0
    };
  },

  // method
  actions: {
    increment() {
      if (this.count < 10) {
        this.count++;
      }
    }
  },

  // within the context of the store computed property is call getter
  getters: {
    remaining() {
      return 10 - this.count;
    }
  }
});

// import { reactive } from "vue";

// export let counter = reactive({
//     // state or data
//     count: 0,

//     // action or method
//     increment() {
//         if (this.count == 10) {
//             return;
//         }
//         this.count++;
//     }
// });
