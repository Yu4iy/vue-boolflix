<template>
<div>
	<ul >
      <li class="maine-img">
			<img 
			:src="`https://image.tmdb.org/t/p/original/${img}`" 
			:alt="Titolo"
			>
			</li>
      <li>Titolo Originale:{{TitoloOriginale}}</li>
      <li v-if="flag" >Lingua: <img class="lang" :src="require(`@/assets/${Lingua}.png`)" alt=""></li>
      <li v-else>Lingua:{{Lingua}}</li>
      <li>Voto: {{Voto}}</li>
    </ul>
</div>
</template>

<script>
export default {
props:{
	Titolo:String,
	TitoloOriginale:String,
	Lingua:String,
	Voto:Number,
	img:String
},
computed:{
	flag(){
		return this.lang.includes(this.Lingua)? true : false
	}
},
 data(){
    return{
    lang:["en", "it"]
    }
  },
}


</script>

<style lang="scss" scoped>
	.lang{
		width: 30px;
	}
	.maine-img{
		img{
			height: 340px;
			width: 250px;
		}
	}
</style>