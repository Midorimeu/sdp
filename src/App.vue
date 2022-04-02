<template>
  <div id="app">
    <!-- <div class="out"></div> -->
    <navbar />
    <router-view/>
  </div>
</template>


<script>
import navbar from './components/navbar'
export default {
  components:{
    navbar
  }
}
</script>