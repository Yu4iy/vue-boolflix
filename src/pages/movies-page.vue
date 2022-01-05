<template>
	<div class="serial-page">
		<Header
			@search = searchValue
		/>
		<main class="main-serials" v-if='movieList.length > 0  '>
			<div class="img-wraper">
				<div class="card" v-for="(movie, index) in movieList" :key="index">
					<img 
					:src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`" 
					alt=""
					>
					<div class="card__info">
						<h2 class="card__title">{{movie.name}}</h2>
						<div class="card__vote">{{movie.vote_average}}</div>
					</div>	
					<h2 class="card__more">learn More</h2>
				</div>
			</div>
		</main>
		<div class="title" v-else>
			<svg xmlns="http://www.w3.org/2000/svg" width="66" height="66" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
				<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
			</svg>
			<h3 class="title__text">Inizia la tua ricerca!</h3>
		</div>
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
	movieList:[],
	watch:[]
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

	

     

    
  }
}

</script>

<style lang="scss" scoped>
@import '@/styles/globals';
@import '@/styles/variables';

.img-wraper{
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	.card{
			flex: 1 0 calc(20% - 30px);
			max-width: 250px;
			max-height: 400px;
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
.title{
	display: flex;
	height: 70vh;
	justify-content: center;
	align-items: center;
	color: #fff;
	.title__text{
		font-size: 3.5rem;
		text-transform: uppercase;
		margin-left: 20px;
	}


}
</style>