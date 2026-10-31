<script setup>
// import flash from '@/mixins/flash';
// import { useFlash } from '@/composables/useFlash';
import { useCounterStore } from '@/stores/CounterStore'

let counter = useCounterStore();

// export default {
//   mixins: [flash]
// }
// let { flash } = useFlash();
</script>

<template>
  <div>
    <p>
      <!-- <button @click="flash('Yay!', 'It Works On the About Page!', 'info')">Click Me</button> -->
      About Page. The current count is {{ counter.count }}
    </p>
  </div>
</template>

<!-- <template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style> -->
