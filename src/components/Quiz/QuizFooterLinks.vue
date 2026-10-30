<script setup>
import { inject } from 'vue';

defineProps({ quiz: Object });

// let key = inject('key');
// let {name, changeName} = inject('name');

// setTimeout(() => {
//     name.value = 'A New Name';
// })

let quiz = inject('quiz')
</script>

<template>
    <div>
        <h5>{{ quiz.name }}</h5>
         <!-- <h5>{{ key }}</h5> -->
          <!-- <h5>{{ name }}</h5> -->
           <!-- <button @click="changeName">{{ name }}</button> -->

        <ul>
            <li><a href="#">Get a Job</a></li>
            <li><a href="#">Contact Us</a></li>
        </ul>
    </div>
</template>