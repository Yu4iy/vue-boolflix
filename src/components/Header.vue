<template>
<header>
	<div class="container">
		<ul>
		<img src="@/assets/log.png" alt="">
			<li>Home</li>
			<li>SerieTV</li>
			<li>Originali</li>
			<li>Agiunti di Recente</li>
			<li>Download</li>
		</ul>
		<div class="search">
			<input :class="filter.active? 'active' : '' "  @keyup.enter= "$emit('search', inputSearch)" v-model.trim = "inputSearch" type="text">
			<button :class="filter.active? 'active' : '' " @click = "filter.active = !filter.active">Cerca</button>
		</div>
	</div>
</header>
  
</template>

<script>
export default {
data(){
	return{
		inputSearch:'',
		filter:{
			active:false
		}
	}
}
}
</script>

<style lang="scss" scoped>
@import '@/styles/globals';
@import '@/styles/variables';
header{
	padding: 10px;
	background-color: #000000;
	z-index: 3;
	color: #ffffff;;
	text-transform: uppercase;
	div{
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: relative;

		ul{
			display: flex;
			align-items: center;
			flex-wrap: wrap;
			li{
				margin: 0 1rem 0 0;
				
				&:last-child{
					margin: 0;

				}
			}
		}
	}
	img{
		width: 70px;
		margin-right: 3rem;

	}
	.search{
		position: absolute;
		right: 0;
		input{
			width: 0;
			height: 2rem;
			border-bottom-left-radius: 10px;
			border-top-left-radius: 10px;
			border: none;
			transition: width linear 0.3s;
			background: rgb(180, 178, 178);
			&:focus{
				outline: none;
				background:rgb(255, 255, 255);

			}
			&.active{
				width: 6.25rem;
			}

		}
		button{
			font-size: 10px;
			height: 2.2rem;
			width: 2.2rem;
			border: none;
			border-top-right-radius: 30%;
			border-bottom-right-radius: 30%;
			border-top-left-radius: 10%;
			border-bottom-left-radius: 10%;
			left: 20px;
			background: rgb(255, 255, 255);
			transition: linear 0.2s;
			&.active{
				background: rgb(110, 107, 107);
			}
		}
	}
}

</style>