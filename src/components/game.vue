<template>
    <div>
        <p>{{games[curID].title}}</p>
    </div>
</template>


<script> 
import axios from "axios"; 
export default { 
  data() { 
    return { 
      games: [], 
      curID: this.$route.params.id-1
    }; 
  }, 
  async created() { 
    try { 
      const res = await axios.get(`http://localhost:3001/games`); 
      this.games = res.data;    
    } catch (e) { 
      console.error(e); 
    } 
  } 
}; 
</script>