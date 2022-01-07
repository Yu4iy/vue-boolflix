<template>
	<div class="card">
		<div class="card__vote">{{vote}}</div>

		<img 
		:src="`https://image.tmdb.org/t/p/original/${img}`" 
		alt=""
		v-if="img !== null"
		>
		<img v-else src="../assets/img-not-found.png" alt="">
		
		<div class="card__info" >
			<h2 class="card__title">{{title}}</h2>
		</div>	
		<h2  @click="$emit('closeModal')"  class="card__more">learn More</h2>

	</div>
</template>

<script>
export default {
props:{
	title:String,
	vote:Number,
	img:String,
},
computed:{
	// flag(){
	// 	return this.lang.includes(this.Lingua)? true : false
	// },

	// getRating(){
	// 	let rating = Math.round(this.Voto / 2)
	// 	return rating
		
	// }
},
 data(){
    return{
//     lang:["en", "it"],
	
    }
  },
}


</script>

<style lang="scss" scoped>
@import '@/styles/variables';
	.card{
		flex: 1 0 calc(20% - 30px);
		max-width: 250px;
		height: 375px;
		margin: 15px;
		position: relative;
		background: rgba(88, 16, 16, 0.377);
		display: flex;
		justify-content: center;
		align-items: center;
		border: 3px dotted rgba(194, 25, 25, 0.589);
		transition: linear 0.2s;
		position: relative;
		overflow: hidden;
		img{
		width: 100%;
		}
		.card__vote{
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 20px;
			background: rgba(153, 51, 51, 0.13);
			max-width: 40px;
			max-height: 40px;
			width: 100%;
			height: 100%;
			color: rgb(248, 248, 0);
			position: absolute;
			top: -50px;
			right: -50px;
			border-radius:0px 0px 0px 10px;
			border-left: 3px dotted rgb(143, 22, 22);
			border-bottom: 3px dotted rgb(102, 16, 16);
			z-index: 35;
			transition: linear 0.2s;
			
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
		&:hover .card__vote{
				top: 0px;
				right: 0px;
			}
		&:hover .card__more{
				transform: scale(1);
			}
		&:hover .card__info{
				transform: scale(1);
				top: 80px;
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
</style>