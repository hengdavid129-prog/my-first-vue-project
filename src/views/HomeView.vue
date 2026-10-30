<script setup>
import Quiz from '@/components/Quiz/Quiz.vue';
</script>

<template>
  <main>
    <Quiz :quiz="{ name: 'My First Quiz', questions: [] }" />
  </main>
</template>

<!-- <script setup>
import TabbableTextarea from '@/components/TabbableTextarea.vue'
import { ref } from 'vue'

let comment = ref('test value')

setTimeout(() => {
  comment.value = 'it works!';
}, 2000);
</script>

<template>
  <main>
    <form>
      <TabbableTextarea v-model="comment" style="width: 100%; height: 300px" />
    </form>
  </main>
</template> -->

<!-- <script setup>

function onTabPress(e) {
  let textarea = e.target

  let val = textarea.value,
    start = textarea.selectionStart,
    end = textarea.selectionEnd;

    textarea.value = val.substring(0, start) + "\t" + val.substring(end);

    textarea.selectionStart = textarea.selectionEnd = start + 1;
}
</script>

<template>
  <main>
    <form>
      <textarea @keydown.tab.prevent="onTabPress" style="width: 100%; height: 300px;">Hi there</textarea>
    </form>
  </main>
</template> -->

<!-- <script setup>
  // import { ref, watch } from "vue";
  import { useStorage } from "@/composables/useStorage";

  let food = useStorage('food', 'tacos');
  let age = useStorage('age', 18);

  let obj = useStorage('obj', { one: 'one' });

  setTimeout(() => {
    obj.value.one = 'CHANGED';
  }, 3000);

  // let food = ref(localStorage.getItem('food'));
  // let age = ref(localStorage.getItem('age'));

  // watch(food, (val) => {
  //   write('food', val);
  // });

  // watch(age, (val) => {
  //   write('age', val)
  // });

  // function write(key, val) {
  //   localStorage.setItem(key, val);
  // }

  // setTimeout(() => {
  //   food.value = 'changed';
  //   age.value = '19'
  // }, 2000);
</script> -->

<!-- <template>
  <main>
    <p>
      What is your favorite food? <input type="text" v-model="food">
    </p>
    <p>
      How old are you? <input type="text" v-model="age">
    </p>
  </main>
</template> -->

<!-- <script setup>
// import flash from '@/mixins/flash';
import { useFlash } from '@/composables/useFlash';

// export default {
//   // mixins: [flash]
//   setup() {
//     let { flash } = useFlash();

//     return { flash }
//   }
// }

let { flash } = useFlash();
</script>

<template>
  <main>
    <p>
      <button @click="flash('Test', 'It Works!')">Click Me</button>
    </p>
  </main>
</template> -->

<!-- <script setup>
  import TheWelcome from '@/components/TheWelcome.vue';
  import { ref } from 'vue';

  let message = ref("Hello, World!");

  // setTimeout(() => {
  //   message.value = "I Have Been changed";
  // }, 2000);

  let doSomething = () => {
    alert('doing it now');
  };

</script> -->

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

<!-- <template> -->
<!-- <main> -->
<!-- <TheWelcome /> -->

<!-- <p>{{ message }}</p> -->
<!-- <p> -->
<!-- <input type="text" v-model="message"> -->
<!-- <button @click="doSomething">Click Me</button> -->
<!-- </p> -->
<!-- </main> -->
<!-- </template> -->
