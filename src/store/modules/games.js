import axios from 'axios'
export default { 
    actions:{
        async fetchGames(result){
                const res = await axios.get(`http://localhost:3001/games`); 
                const newGames = res.data;    
                result.commit('updateState', newGames);
        }
    },
    mutations:{
        updateState(state, newGames){
            state.games = newGames
        }
    },
    state:{
        games: []
    },
    getters:{
        allGames(state){
            return state.games
        }
    },
}