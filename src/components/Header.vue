<template>
<header>
	<div class="container">
		<input v-model.trim = "inputSearch" type="text">
		<button @click = "$emit('search', inputSearch)">Cerca</button>
	</div>
</header>
  
</template>

<script>
export default {
data(){
	return{
		inputSearch:''
	}
}
}
</script>

<style lang="scss" scoped>
@import '@/styles/globals';
@import '@/styles/variables';
header{
	display: flex;
	justify-content: center;
	padding: 1rem 0;
	background-color: $brandColor;
	input{
		width: 31.25rem;
		height: 3.125rem;
		padding: .3125rem;
	}
	button{
		height: 3.125rem;
		padding: 0 2rem;
	}
}

</style>