<template>
<header>
	<div class="container">
		<ul>
			<img src="@/assets/log.png" alt="">
			<li @click="$router.push('/')">Home</li>
			<li @click="$router.push('serials')">Serials</li>
			<li @click="$router.push('movies')">Movies </li>
		</ul>
		<div class="search">
			<input  @keyup.enter= "$emit('search', inputSearch) ,clearInput()" v-model.trim = "inputSearch" type="text" ref="input" placeholder="Search">
			<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class=" search-icon bi bi-search" viewBox="0 0 16 16">
				<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
			</svg>
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
},

methods:{
	clearInput(){
		this.inputSearch = ''
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
	box-shadow: 5px -4px 15px 0px rgba(255, 0, 0, 0.39);
	position: fixed;
	width: 100%;
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
				font-size: 1.1 25rem;
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
		position: relative;
		input{
			border-radius: 20px;
			padding: 5px 15px 5px 10px ;
			background: transparent;
			border: 2px solid $colorLightGray;
			color: $colorLightGray;
			margin: 0 5px 0 0 ;
			&:focus{
				outline: transparent;
				border: 2px solid $brandColor;
			}
		}
		.search-icon{
				position: absolute;
				right: 14px;
				
			}
	}
}

</style>