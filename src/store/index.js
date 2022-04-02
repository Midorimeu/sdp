import Vue from 'vue'
import Vuex from 'vuex'
import games from './modules/games'
import users from './modules/users'

Vue.use(vuex)

export default new Vuex.Store({
    modules: {
        games, users
    }
})