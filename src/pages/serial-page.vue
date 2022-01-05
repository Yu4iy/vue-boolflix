<template>
	<div class="serial-page">
		<Header
			@search = searchValue
		/>
		<main class="main-serials">
			<div class="img-wraper">
				<div class="card" v-for="(serials, index) in serialList" :key="index">
					<img 
					:src="`https://image.tmdb.org/t/p/original/${serials.poster_path}`" 
					alt=""
					>
					<div class="card__info">
						<h2 class="card__title">{{serials.name}}</h2>
						<div class="card__vote">{{serials.vote_average}}</div>
						
					</div>	
					<h2 class="card__more">learn More</h2>
					
					
				</div>
			<!-- <img 
			:src="`https://image.tmdb.org/t/p/original/${serialList.poster_path}`" 
			:alt="" -->
			
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
		</main>
		
	</div>
</template>

<script>
import axios from 'axios'
import Header from '@/components/Header.vue'

export default {
components: {
	Header,


  },	
data(){
	return{
	serialList:[],
	}
  },	
methods:{
      searchValue(elem){
        if(elem !== ''){

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

<style lang="scss" scoped>
@import '@/styles/globals';
@import '@/styles/variables';

.img-wraper{
	display: flex;
	flex-wrap: wrap;
	.card{
			flex: 1 0 calc(20% - 30px);
			margin: 15px;
			position: relative;
			background: rgba(88, 16, 16, 0.377);
			display: flex;
			justify-content: center;
			align-items: center;
			border: 3px dotted rgba(194, 25, 25, 0.589);
			transition: linear 0.1s;
			position: relative;
			overflow: hidden;
		&img{
		width: 100%;
		height: 100%;
		height: auto;	
		}
		&::after{
			content: '';
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			z-index: 2;
			background: rgba(0, 0, 0, 0);
			transition: linear 0.2s;
			
		}
		&:hover::after{
			background: rgba(0, 0, 0, 0.822);

			
		}
		&:hover{
			transform: scale(1.05);
		}
		&:hover .card__more{
				transform: scale(1);
			}
		&:hover .card__info{
				transform: scale(1);
				top: 40px;
			}	
		.card__info{
			position: absolute;
			top: -80px;
			z-index: 6;
			font: 700;
			text-align: center;
			padding: 0 5px;
			transform: scale(0);
			transition: top linear 0.2s;

			.card__title{
				color: #fff;
				font-size: 25;
				text-transform: uppercase;
				margin-bottom: 40px;
			}
			.card__vote{
				font-size: 60px;
				line-height: 70px;
				color: rgb(248, 248, 0);
			}

		}
		
		.card__more{
			z-index: 3;
			position: absolute;
			bottom: 10px;
			width: 90%;
			text-align: center;
			background: rgba(0, 0, 0, 0);
			padding: 5px;
			color: red;
			text-transform: uppercase;
			border: 4px solid rgba(255, 0, 0, 0);
			border-radius: 2px;
			transform: scale(0);
			transition: cubic-bezier(0.895, 0.03, 0.685, 0.22) 0.2s;
			cursor: pointer;
			transition: linear 0.2s;
			&:hover{
				border: 4px solid rgb(255, 0, 0);
				background: rgba(0, 0, 0, 0.308);
				color: rgb(255, 0, 0);
				
			}

		}
	}


}

</style>