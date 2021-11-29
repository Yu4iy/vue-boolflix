<template>
<header>
	<div class="container">
		<input type="text">
		<button>Cerca</button>
	</div>
</header>
  
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '@/styles/globals';
header{
	display: flex;
	justify-content: center;
	padding: 1rem 0;
	background-color: cadetblue;
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