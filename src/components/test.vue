<template>
<div>
    <!-- <p v-if="switcher===0">First</p>
    <p v-else>Second</p>
    <button @click="switchtext()">Switch</button>
    {{conn}}
    <div v-for="i of arr" :key="i">
        <p>{{i}}</p>        //{{инфо}}-вывод
    </div> -->
    <!-- <div class="list_decimal" v-for="i of todos" :key="i">
        <div v-for="j of arr" :key="j">
        <p>{{j}}. {{i.name}}</p>
    </div>
    </div> -->
    <!-- <ul>
        <li v-for="i of todos">{{i.name}}</li>
    </ul> -->

</div>
</template>

<script>

import axios from 'axios'
export default{
    // props: ['conn'],
    data(){
        return {
            switcher: 0,
            arr: [1, 2, 3, 4],
            todos: []
        }
    },  
    async created() {
    try {
      const res = await axios.get(`http://localhost:3001/todos`);
      this.todos = res.data;
    } catch (e) {
      console.error(e);
    }
  },
    methods: {
        switchtext () {
            if(this.switcher===0){
                this.switcher=1;
            }
            else{
                this.switcher=0;
            }
        }
    }
}
</script>