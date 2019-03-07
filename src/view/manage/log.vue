<template>
	<div>
		日志
		{{valuesm}}
	</div>
</template>

<script type="text/javascript">
	export default {
		data(){
			return {
				valuesm:''
			}
		},
		mounted:function () {
			this.valuesm = this.$route.params.id
		}
	}
</script>