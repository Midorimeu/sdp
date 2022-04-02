<template>
  <div class>
    <!-- <calculator /> -->
    <!-- <tictac /> -->
    <!-- <spaceship /> -->
    <!-- <carousel /> -->
    <!-- <test v-bind:conn="hello"/>  -->
    <games />
    <!-- <tictaktoe /> -->
  </div>
</template>

<script>
// import calculator from '@/components/calculator.vue'
// import tictac from '@/components/tictactoe.vue'
// import spaceship from '@/components/spaceship'
//import carousel from '@/components/carousel'
// import test from '@/components/test'
import games from '@/components/games'
// import tictactoe from '@/components/tictactoe'
export default {
  // name: 'HomeView',
  components: {
    // calculator,
    // tictac,
    //spaceship,
    //carousel,
    // test
    games,
  }
  // ,data(){
  //   return{
  //     hello: 'Hello from another component'
  //   }
  // }
}
</script>
