<template>
  <div id="app">
    <Header
     @search = searchValue
    />
    <ul v-for="(card, index) in result" :key= '`card-${index}`' >
      <li>Titolo: {{card.title}}</li>
      <li>Titolo: Originale:{{card.original_title}}</li>
      <li>Lingua: {{card.original_language}}</li>
      <li>Voto: {{card.vote_average}}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  },


  data(){
    return{
    inputValue:'',
    result:[]
    }
  },
  created(){
    
  },

  methods:{
    searchValue(elem){
      this.inputValue = elem
      this.getMusicList()
    },

    getMusicList(){
      axios
      .get('https://api.themoviedb.org/3/search/movie',{
        params:{
          api_key: 'bcb47ae21b247fb462aab053c0af2cb3',
          query:`${this.inputValue}`,
          language: 'it-IT'
        }
      }
      )
      .then(res => {this.result =   res.data.results})
      
      
    },    

    
  }
}
</script>

<style lang="scss">
#app {
 
}
</style>
