

<template>
	<div class="serial-page">
		

		<template>
			<main class="main-serials"  >
				<div class="img-wraper">
					<div class="card-inner" v-for="(serial, index) in this.$store.state.serialList" :key="index">
						<Card
							:img = serial.poster_path
							:title = serial.name
							:vote = serial.vote_average
							:elem = serial
							:index = index 
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
computed:{

},
data(){
	return{
	serialList:[],
	}
  },


methods:{

       
  },

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