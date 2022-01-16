

<template>
	<div class="serial-page">
		<template>
			<main class="main-serials">
				<div class="img-wraper">
					<div class="card-inner" v-for="(film, index) in this.$store.state.movieList" :key="index">
						<Card
							:img = film.poster_path
							:title = film.title
							:vote = film.vote_average
						/>
					</div>
				</div>
			</main>
		</template>
	</div>
</template>

<script>
import Card from '@/components/Card.vue'

export default {
components: {
	Card


  },	
data(){
	return{
	filmList:[],
	}
  },


methods:{
      

    
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
		right: 30px;
		z-index: 20;
		transition: linear 0.1s;
		cursor: pointer;
		&:hover{
			transform: scale(1.3);
		}

	}


}
	


</style>