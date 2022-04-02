<template>
    <div class="bg-black p-10 ">
        <div class="container mx-auto">
            <div class="flex justify-between items-center">
                <div class="flex w-1/3">
                    <img width="40" height="40" src="https://www.metacritic.com/images/icons/metacritic-icon.svg" alt="">
                    <img width="110" height="30" src="https://www.metacritic.com/images/icons/metacritic-wordmark.svg" alt="">
                </div>
                <div class="w-1/3">
                    <input class="rounded-lg bg-black text-white font-bold uppercase" type="text" placeholder="search...">

                </div>
                <div class="flex justify-between w-1/3 text-white font-bold uppercase">
                    <p>Games</p>
                    <p>Movies</p>
                    <p>Tv</p>
                    <p>Music</p>

                    <p @click="allUsers[0].auth=true" v-if="allUsers[0].auth = false">Sign In</p>
                    <div class="relative">
                    <p @mouseover="active=1" v-if="allUser.auth==false"></p>
                        <div class="absolute red-500 p-3 left-0 top-100 text-white" v-if="allUser.auth==false">
                            <p>{{allUsers[0].id}}</p>
                            <p>{{allUser[0].login}}</p>
                            <p>{{allUser[0].name}}</p>
                            <p>{{allUser[0].email}}</p>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
    data(){
        return{
            active: 1
            
        }
    },


    computed: mapGetters(['allUsers']),
    methods: mapActions(['fetchUsers']),
    async mounted() {
        this.fetchUsers();
    }
};


</script>