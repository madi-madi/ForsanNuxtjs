<template>
	<div>
		<h3>Forsan from {{ name }}</h3>
		<NLink to="/"> Home</NLink>
	</div>
</template>
<script>
	export default{
		asyncData(){
			return {
				name:process.static? 'static':(process.server?'server':'client')
			}
		},
		head:{

		}
	}
</script>