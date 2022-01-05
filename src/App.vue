<template>
  <div id="app">
 
    <!-- <Header
     @search = searchValue
    /> -->
    <router-view>
      
    </router-view>
  <!--   <main>
      <CardList 
      :movieList = movieList
      :serialList = serialList
    
      />
      
    </main>
  -->
   <!-- <startPage/> -->
  </div>
</template>

<script>
import axios from 'axios'
// import Header from '@/components/Header.vue'
// import startPage from '@/components/start-page.vue'

export default {
  name: 'App',
  components: {
    // Header,
    // CardList,
    // startPage
  },


  data(){
    return{
    movieList:[],
    serialList:[],
    lang:["en", "it"]
    }
  },
 

  methods:{
      searchValue(elem){
        if(elem !== ''){
        axios
          .get('https://api.themoviedb.org/3/search/movie',{
            params: {
              api_key: 'bcb47ae21b247fb462aab053c0af2cb3',
              query: elem,
              language: 'it-IT'
            }
          }
          )
          .then(res => {this.movieList =   res.data.results})

        axios
          .get('https://api.themoviedb.org/3/search/tv',{
            params: {
              api_key: 'bcb47ae21b247fb462aab053c0af2cb3',
              query: elem,
              language: 'it-IT'
            }
          }
          )
          .then(res => {this.serialList =   res.data.results})
        }
        

        
      }

     

    
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
