

<template>
	<div class="serial-page">
		
		<Header @search = searchValue />

		<template v-if = showInfo>
				<h2>SerieTV</h2>
			<main class="main-serials" v-if='serialList.length > 0  '>
				<div class="img-wraper">
					<div @click="getItem(index)" class="card-inner" v-for="(serials, index) in serialList" :key="index">
						<Card
							:img = serials.poster_path
							:title = serials.name
							:vote = serials.vote_average
							@closeModal = closeModal
						/>
					</div>
				</div>
			</main>
			
			<div class="title" v-else>
				<h3 class="title__text">SerieTV!</h3>
				<div v-show="badResult">SCUSA NON ABBIAMO TROVATO NIENTE</div>
			</div>
		</template>

			

		<div v-else @mouseover="setsBg(serialItem)"  class="more-info-modal" id="more-info-modal" ref="tests">
			<div class="more-info-modal__wraper">
				<div class="container">
					<ul>
						<li class="more-info-modal__name">{{serialItem.name||serialItem.original_name}}</li>
						<li class="more-info-modal__rating"><span>imdb</span> {{serialItem.vote_average}}</li>
						<li><p class="more-info-modal__description">{{serialItem.overview}}</p></li>
						<li class="more-info-modal__year">Anno: {{year}}</li>
						<li class="more-info-modal__lang">Lingua: {{serialItem.original_language}}</li>
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
import Card from '@/components/Card.vue'

export default {
components: {
	Header,
	Card


  },	
data(){
	return{
	serialList:[],
	watch:[],
	serialItem:{},
	showInfo:true,
	year:null,
	badResult:false
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
          .then(res => {this.serialList =   res.data.results
		if(this.serialList == 0){
				this.badResult = true
			}   
		})
		}

      },
	getItem(index){
		this.serialItem = this.serialList[index]
		this.getYear()
	},

	setsBg(serialItem){
		this.$refs.tests.style.background = `url(https://image.tmdb.org/t/p/original/${serialItem.backdrop_path})`;
		this.$refs.tests.style.backgroundSize = 'cover';
	},
	getYear(){
		this.year = this.serialItem.first_air_date.split('', 4).join('');
	},
	closeModal(){
		this.showInfo = !this.showInfo
	}
     

    
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
	padding: 91px 0 0 0;




}
.title{
	display: flex;
	flex-direction: column;
	height: 90vh;
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
	height: 100vh;
	position: relative;
	padding: 141px 0 0 0;
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
		top: 120px;
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