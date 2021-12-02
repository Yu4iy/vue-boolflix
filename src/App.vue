<template>
  <div id="app">
    <Header
     @search = searchValue
    />
    <main>
      <CardList 
      :movieList = movieList
      :serialList = serialList
      />
    </main>
 
   
  </div>
</template>

<script>
import axios from 'axios'
import Header from '@/components/Header.vue'
import CardList from '@/components/CardList.vue'

export default {
  name: 'App',
  components: {
    Header,
    CardList,
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

main{
  background:  $colorBg;
}
</style>
