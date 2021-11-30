<template>
  <div id="app">
    <Header
     @search = searchValue
    />
    <main>
      <CardList :list = "movieList"/>
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
    CardList
  },


  data(){
    return{
    movieList:[],
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
      }
      
    },

    getMusicList(){
  
    },    

    
  }
}
</script>

<style lang="scss">

</style>
