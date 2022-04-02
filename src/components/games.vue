<template> 
    <div class="container mx-auto"> 
        <div class="flex items-start justify-between pt-4 pb-8 border-b border-gray-30" v-for="game in games" :key="game.id"> 
            <div @click="$router.push({name: 'singleGame', params: {id: game.id}})" class="relative w-max mr-4">
                <img :src="game.img" alt="">
                <img class="abs" src="https://www.metacritic.com/images/icons/mc-mustplay.svg" alt="">
            </div>
            <div class="w-full">
                <h1 class="text-xl font-bold mb-3">{{game.id}} {{game.title}}</h1>
                <p class="font-bold">Platform: <span class="font-normal text-gary-500">{{game.platform}}</span></p>
                <p class="font-normal text-gary-500 mb-5">{{game.date}}</p>
                <p>{{game.desc}}</p>
            </div>
            <div  class="w-1/5 text-right">
            <p class="bg-green-500 w-max p-3 text-bold text-white text-xl rounded-lg">{{game.meta }}</p>
        </div> </div>
        <form action="">
            <input v-model="form.title" placeholder="Enter title..." class="border border-gray-300 p-2 text-xl my-2 w-full" type="text"> 
            <input v-model="form.platform" placeholder="Enter platform..." class="border border-gray-300 p-2 text-xl my-2 w-full" type="text"> 
            <input v-model="form.date" placeholder="Enter date..." class="border border-gray-300 p-2 text-xl my-2 w-full" type="text"> 
            <input v-model="form.desc" placeholder="Enter desc..." class="border border-gray-300 p-2 text-xl my-2 w-full" type="text"> 
            <input v-model="form.meta" placeholder="Enter meta..." class="border border-gray-300 p-2 text-xl my-2 w-full" type="text"> 
            <input v-model="form.user" placeholder="Enter user..." class="border border-gray-300 p-2 text-xl my-2 w-full" type="text"> 
            <input v-model="form.video" placeholder="Enter video..." class="border border-gray-300 p-2 text-xl my-2 w-full" type="text"> 
            <input v-model="form.img" placeholder="Enter img..." class="border border-gray-300 p-2 text-xl my-2 w-full" type="text"> 
            <input v-model="form.genre" placeholder="Enter genre..." class="border border-gray-300 p-2 text-xl my-2 w-full" type="text"> 
            <input v-model="form.mustplay" placeholder="Enter mustplay..." class="border border-gray-300 p-2 text-xl my-2 w-full" type="text"> 

            <button @click="addGame()">Submit</button>
        </form>
    </div> 
</template> 
 
<script> 


import axios from "axios"; 
import{mapActions, mapGetters} from 'vuex'
export default { 
data() { 
    return { 
      games: [], 
      form: { 
          title: '', 
          platform: '', 
          date: '', 
          desc: '', 
          meta: '', 
          user: '', 
          video: '', 
          img: '', 
          genre: '', 
          mustplay: '' 
  },
      baseURL: `http://localhost:3001/games`
    }; 
  }, 
  // async created() { 
  //   try { 
  //     const res = await axios.get(`http://localhost:3001/games`); 
  //     this.games = res.data;    
  //   } catch (e) { 
  //     console.error(e); 
  //   } 
  // },
  computed: mapGetters(['allGames']),
  async mounted(){
    this.fetchGames();
  },
methods: { 
  ...mapActions(['fetchGames']),
    async addGame() { 
      try { 
        const res = await axios.post(this.baseURL, { 
          title: this.form.title, 
          platform: this.form.platform, 
          date: this.form.date, 
          desc: this.form.desc, 
          meta: this.form.meta, 
          user: this.form.user, 
          video: this.form.video, 
          img: this.form.img, 
          genre: this.form.genre, 
          mustplay: this.form.mustplay, 
        }); 
        this.games = [...this.games, res.data]; 
      } catch (e) { 
        console.error(e); 
      } 
    }, 
  },
}; 

</script>