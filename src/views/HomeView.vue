<script setup>
  import TheWelcome from '@/components/TheWelcome.vue';
  import { ref } from 'vue';

  let message = ref("Hello, World!");

  // setTimeout(() => {
  //   message.value = "I Have Been changed";
  // }, 2000);

  let doSomething = () => {
    alert('doing it now');
  };

</script>

<!-- <script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script> -->

<!-- <script>
  import TheWelcome from '@/components/TheWelcome.vue';
  import { ref } from 'vue';

  export default {
    components: { TheWelcome },

    setup() {
      let message = ref("Hello, World!");

      setTimeout(() => {
        message.value = "I Have Been changed";
      }, 2000);

      return {
        message,
      };
    }

    // data() {
    //   return {
    //     message: "Hello World",
    //   };
    // },

    // mounted() {
    //   alert("I have been mounted");
    // }
  }
</script> -->

<template>
  <main>
    <TheWelcome />

    <p>{{ message }}</p>
    <p>
      <!-- <input type="text" v-model="message"> -->
      <button @click="doSomething">Click Me</button>
    </p>
  </main>
</template>
