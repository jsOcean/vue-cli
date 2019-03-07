<template>
	<div>
		<router-link to='/parchild/log'>log</router-link></li>
		<router-link to='/parchild/reg'> reg</router-link></li>
		<router-view></router-view>

		<input type="text" name="" v-model="vals">

		<button type="button" v-on:click="adda">添加</button>

		<!-- <select v-model="selected" name="fruit" >
		    <option selected value="www.runoob.com">Runoob</option>
		    <option value="www.google.com">Google</option>
		 </select> -->

		<select v-model="selected" name="fruit">
		    <option v-for="option in optionsList" :value='option.value'>{{option.key}}</option>
		 </select>

		 {{selected}}
		<div v-show="selected == 'taobao'">
			v-if taobao
		</div>


		<div>
			
		</div>

		<foot-nav></foot-nav>
	</div>
</template>

<script type="text/javascript">
	
	import FootNav from '../../components/foot.vue'
	import {jsons} from '../../components/axios/api.js'

	export default {
		components:{
			FootNav
		},
		data(){
			return {
				vals:'',
				selected:"alibaba",
				optionsList:[]
			}
		},
		methods:{
			adda(){
				var lets = this.vals;
				/*(this.selected);*/
				this.$router.push({
				 	path:`/parchild/log/${lets}`,
				});
				jsons().then(function(data){
					console.log(data);
				}).catch(function(){
					console.log("请求失败");
				})
			},
			request() {
		       
		        this.optionsList = [{
					key:'选择',
					value:'Select'
					},{
					key:'淘宝',
					value:'taobao'
					},{
					key:'京东',
					value:'jingd'
					},{
					key:'阿里巴巴',
					value:'alibaba'
					},{
					key:'亚马逊',
					value:'amazon'
					},{
					key:'苏宁',
					value:'suning'
					},{
					key:'拼多多',
					value:'pinduoduo'
				}]
		    }
		},
		mounted:function(){


			this.request();
		}
	}



</script>

