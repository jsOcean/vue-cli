<template>
	<div>
		{{valuesm}}<br>
		{{valuesms}}
		<foot-nav></foot-nav>
	</div>
</template>

<script type="text/javascript">

	import FootNav from '../../components/foot.vue'

	export default {
		components:{
			FootNav
		},
		data(){
			return {
				valuesm:'',
				valuesms:''
			}
			
		},
		mounted:function(){
			console.log(this.$route.params.id);
	        this.valuesm = this.$route.params.id,
	        this.valuesms = this.$route.params.ids
	    }
	}

</script>