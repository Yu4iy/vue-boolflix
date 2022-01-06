<template>
  <div id="app">
	<Header>	  
	<router-view></router-view>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
export default {
  name: 'App',
  components: {
	Header
  },


  data(){
    return{

    }
  },
 

  methods:{

    
  }
}
</script>

<style lang="scss">
@import "@/styles/globals.scss";
@import '@/styles/variables';

#app{
  background: linear-gradient(0deg, rgba(55,25,25,1) 0%, rgba(0,0,0,1) 100%);
  height: 100%;
  min-height: 100vh;
}
</style>
