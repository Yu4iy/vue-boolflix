<template>
		<div class="img-wraper">
			<img 
			:src="`https://image.tmdb.org/t/p/original/${img}`" 
			:alt="Titolo"
			>
			<!-- <div class="card">
				<div class="inf" >
					<h3>Titolo:{{Titolo}}</h3>
					<h4>Titolo Originale:{{TitoloOriginale}}</h4>

					<div class="rating">
						<div class="star2">Voto: <i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i></div>
						
						<div class="star">
							Voto: <i v-for="(star, index) in getRating" :key="index" class="fas fa-star"></i>
						</div>
					</div>
					<p>{{info}}</p>
				</div>
			</div> -->
		</div>
</template>

<script>
export default {
props:{
	Titolo:String,
	TitoloOriginale:String,
	Lingua:String,
	Voto:Number,
	img:String,
	info:String
},
computed:{
	flag(){
		return this.lang.includes(this.Lingua)? true : false
	},

	getRating(){
		let rating = Math.round(this.Voto / 2)
		return rating
		
	}
},
 data(){
    return{
    lang:["en", "it"],
	
    }
  },
}


</script>

<style lang="scss" scoped>
@import '@/styles/variables';






		img{
			width: 225px; 
			height: 350px; 
			object-fit: cover;
			padding: 1px;
		}

			
	
</style>