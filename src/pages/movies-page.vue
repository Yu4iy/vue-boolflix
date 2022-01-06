

<template>
	<div class="serial-page">
		
		<Header @search = searchValue />

		<template v-if = showInfo>
			<main class="main-serials" v-if='filmList.length > 0  '>
				<div class="img-wraper">
					<div @click="getItem(index)" class="card" v-for="(film, index) in filmList" :key="index">
						<img 
						:src="`https://image.tmdb.org/t/p/original/${film.poster_path}`" 
						alt=""
						>
						<div class="card__info" >
							<h2 class="card__title">{{film.title}}</h2>
							<div class="card__vote">{{film.vote_average}}</div>
						</div>	
						<h2  @click="showInfo = !showInfo"  class="card__more">learn More</h2>
					</div>
				</div>
			</main>
			
			<div class="title" v-else>
				<h3 class="title__text">Films!</h3>
			</div>
		</template>

			

		<div v-else @mouseover="setsBg(filmItem)"  class="more-info-modal" id="more-info-modal" ref="tests">
			<div class="more-info-modal__wraper">
				<div class="container">
					<ul>
						<li class="more-info-modal__name">{{filmItem.title}}</li>
						<li class="more-info-modal__rating"><span>imdb</span> {{filmItem.vote_average}}</li>
						<li><p class="more-info-modal__description">{{filmItem.overview}}</p></li>
						<li class="more-info-modal__year">Anno: {{year}}</li>
						<li class="more-info-modal__lang">Lingua: {{filmItem.original_language}}</li>
					</ul>

					
				</div>
				
			</div>
			<svg @click="showInfo = !showInfo" xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="red" class=" close bi bi-x-circle" viewBox="0 0 16 16">
				<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
				<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
			</svg>
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
	filmList:[],
	watch:[],
	filmItem:{},
	showInfo:true,
	year:null

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
          .then(res => {this.filmList =   res.data.results})
        }
        
      },
	getItem(index){
		this.filmItem = this.filmList[index]
		this.getYear()
	},

	setsBg(filmItem){
		this.$refs.tests.style.background = `url(https://image.tmdb.org/t/p/original/${filmItem.backdrop_path})`;
		this.$refs.tests.style.backgroundSize = 'cover';
	},
	getYear(){
		this.year = this.filmItem.release_date.split('', 4).join('');
	},

     

    
  }
}

</script>

<style lang="scss" scoped>
@import '@/styles/globals';
@import '@/styles/variables';
.serial-page{
	position: relative;
}
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
		img{
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
		margin-left: 20px;
	}


}
.more-info-modal{
	width: 100%;
	height: calc(100vh - 91px);
	position: relative;
	padding: 40px 0 0 0 ;
	&::after{
		content: '';
		background: linear-gradient(90deg, rgba(4, 4, 4, 0.918) 50%, rgba(18, 18, 18, 0.76) 66%, rgba(0,0,0,0) 100%);
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 0;


	}
	.more-info-modal__wraper{
		position: relative;
		max-width:600px;
		color: #fff;
		z-index: 6;
	}

	.more-info-modal__name{
		font-size: 2rem;
	}
	.more-info-modal__description{
		font-size: .795rem;
	}
	.more-info-modal__rating{
		margin-bottom: 10px;
		span{
			border: 1px solid gray ;
			padding: 1px  2px;
			border-radius: 5px;
			text-transform: uppercase;

		}
	}
	li{
		font-size: 15px;
		margin-bottom: 10px;

	}
	.close{
		position: absolute;
		top: 20px;
		right: 50px;
		z-index: 20;
		transition: linear 0.1s;
		cursor: pointer;
		&:hover{
			transform: scale(1.3);
		}

	}


}
	


</style>