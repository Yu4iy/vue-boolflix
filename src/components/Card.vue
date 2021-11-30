<template>
<div>
	<ul >
      <li class="maine-img">
			<img 
			:src="`https://image.tmdb.org/t/p/original/${img}`" 
			:alt="Titolo"
			>
			</li>
      <li>Titolo:{{Titolo}}</li>
      <li>Titolo Originale:{{TitoloOriginale}}</li>
      <li>
			Lingua: 
			<img v-if="flag" class="lang" :src="require(`@/assets/${Lingua}.png`)" alt="">
			<span v-else >Lingua:{{Lingua}}</span>
      </li>
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