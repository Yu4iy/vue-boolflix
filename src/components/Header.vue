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
			<input  @keyup.enter= "$emit('search', inputSearch)" v-model.trim = "inputSearch" type="text" placeholder="Search">
		</div>
	</div>
</header>
  
</template>

<script>
export default {
data(){
	return{
		inputSearch:'',
		
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
	color: $whitheColor;
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
				font-size: .625rem;
				transition: 0.2s linear;
				color: $colorLightGray;
				cursor: pointer;
				&:hover{
					color: $brandColor;
				}
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
			border: none;
			background: transparent;
			border-bottom: 2px solid $colorLightGray;
			color: $colorLightGray;
			&:focus{
				outline: transparent;
				border-bottom: 2px solid $brandColor;
			}
			
		}
	}
}

</style>