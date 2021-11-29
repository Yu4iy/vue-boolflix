<template>
  <div id="app">
    <Header
     @search = searchValue
    />
    <div v-for="(card, index) in result" :key= '`card-${index}`'  >
    <Card
      :Titolo = card.title
      :TitoloOriginale = card.original_title
      :Lingua = card.original_language
      :Voto = card.vote_average
      
    />

    </div>
   
  </div>
</template>

<script>
import axios from 'axios'
import Header from './components/Header.vue'
import Card from './components/Card.vue'

export default {
  name: 'App',
  components: {
    Header,
    Card
  },


  data(){
    return{
    inputValue:'',
    result:[],
    lang:["en", "it"]
    }
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

</style>
