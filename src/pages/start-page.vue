<template>
  <div class="start-page">
	<img class="start-page__logo" src="@/assets/log.png" alt="">
	<button v-show="startBtn" class="start-page__btn" @click="startBtn = !startBtn"  >INIZIA LA RICERCA</button>
	<div class="start-page__links">
		<button class="start-page__btn" v-show="!startBtn" @click="$router.push({name:'serial-page'})" href="">SerieTV</button>
		<button class="start-page__btn" v-show="!startBtn" @click="$router.push({name:'movies-page'})" href="">Films</button>
	</div>
  </div>
</template>

<script>
export default {
	data(){
		return{
			startBtn:true	
		}
	}

}
</script>

<style lang="scss" scoped>
@import '@/styles/globals';
@import '@/styles/variables';

	.start-page{
		background:  $colorBg;
		height: 100vh;
		background: rgb(22, 22, 22);
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 100px ;
		.start-page__logo{
			margin-bottom: 40px;
		}
		&__btn{
			font-weight: 700;
			color: red;
			font-size: 35px;
			border: 4px solid red;
			padding: 10px 20px;
			border-radius: 10px 2px 10px 2px;
			transition: linear 0.2s;
			background: transparent;
			cursor: pointer;
			min-width: 130px;
			&:hover{
				color: white;
				border: 4px solid rgb(255, 255, 255);
				background: red;
			}
		}
		.start-page__links button{
			font-weight: 700;
			color: red;
			font-size: 20px;
			margin-top: 40px;
			border: 4px solid red;
			padding: 10px 20px;
			border-radius: 2px 2px 2px 2px;
			transition: linear 0.2s;
			background: transparent;
			cursor: pointer;
			margin: 0 25px 0 0; 
			
			&:last-child{
				margin: 0;
			}
			&:hover{
				color: white;
				border: 4px solid rgb(255, 255, 255);
				background: red;
			}
		}
	}
</style>