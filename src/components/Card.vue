<template>
<div>
	<ul >
		<li class="maine-img">
			<div class="img-wraper">
				<img 
				:src="`https://image.tmdb.org/t/p/original/${img}`" 
				:alt="Titolo"
				>
				<div class="info">
					<h3>Titolo:{{Titolo}}</h3>
					<h4>Titolo Originale:{{TitoloOriginale}}</h4>
					<div>Voto: 
						<div class="rating">
							<div class="star2"><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i></div>
							<div class="star">
								<i v-for="(star, index) in getRating" :key="index" class="fas fa-star"></i>
							</div>
						</div>
					</div>
				</div>	
			</div>
		</li>
      
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
	ul{
		padding: 50px 0;
		display: flex;
		justify-content: center;
	}
	.lang{
		width: 30px;
	}
	.maine-img{
		position: relative;
		width: 193px;
		height: 300px;
		overflow: hidden;
		.img-wraper{

			img{
				width: 193px; 
				height: 300px; 
				object-fit: cover;
				padding: 1px;
			}

			.info{
				position: absolute;
				width: 100%;
				height: 100%;
				color: transparent;
				transform: translate(-50%, -50%);
				background: rgba(106, 142, 35, 0);
				border: 3px solid rgba(0, 0, 0, 0);
				top: 50%;
				transition:  linear 0.2s;
				left: 50%;
				.rating{
					position: relative;
					.star{
						position: absolute;
						left: 0;
					}
					.star2{
						position: absolute;
						left: 0;
					}
				}
			
			}
			&:hover .info{
				color: #fff;
				height: 100%;
				background: rgba(28, 105, 177, 0.548);
				border: 3px solid rgb(0, 0, 0);
		
	
			}
		}
	}
</style>