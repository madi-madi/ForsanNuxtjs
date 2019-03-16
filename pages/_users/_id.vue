<template>
	<h3> welcome {{ id }} </h3>
</template>
<script >
	export default{
		asyncData(){
			return{id:'ID'}
		},
	async	validate ({ params }) {
		// Must be a number
		return /^\d+$/.test(params.id)
		 throw new Error('Under Construction!')
		}
	}
</script>