<template>
<div>
	<ul >
      <li>Titolo: {{Titolo}}</li>
      <li>Titolo Originale:{{TitoloOriginale}}</li>
      <li v-if="flag" >Lingua: <img :src="require(`@/assets/${Lingua}.png`)" alt=""></li>
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
	img{
		width: 30px;
	}
</style>