<template>
		<div class="img-wraper">
			<img 
			:src="`https://image.tmdb.org/t/p/original/${img}`" 
			:alt="Titolo"
			>
			<div class="card">
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
			</div>
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




		.img-wraper{
			position: relative;
			.card{
				transition: ease-in 0.1s;
				position: absolute;
				padding: 1rem;
				display: flex;
				flex-direction: column;
				width: 100%;
				height: 100%;
				top: 0;
				left: 0;
				&:hover{
				background: rgba(121, 28, 28, 0.877);

				}
				&:hover .inf{
							transform: translateY(0); 
				
						}
				.inf{
					height: 100%;
					transform: translateY(120%); 
					transition: ease-in 0.3s;
					overflow: auto;

				}
				
					h3{
						font-size: 1rem ;
					}
					h4{
						font-size: .75rem ;
						margin: .2125rem 0 .3125rem 0;

					}
					p{
						font-size: .625rem;
						
					}
					.rating{
						margin: .3125rem 0;
						
						.star{
							font-size: .625rem;
						}
						.star2{
							position: absolute;
							font-size: .625rem;
						}
					}
					
				
			}
		}

		img{
			width: 225px; 
			height: 350px; 
			object-fit: cover;
			padding: 1px;
		}

			
	
</style>