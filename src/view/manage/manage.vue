<template>
	<div>
		
		<table>
			<tr>
				<th>姓名</th>
				<th>年龄</th>
			</tr>
			<tr v-for="id in peoples">
				<td>{{id.name}}</td>
				<td>{{id.age}}</td>
			</tr>
		</table>
		<div id="sss">
			sdsdsds
		</div>
		<button v-on:click="add">添加</button>

		<div>{{dddd}}</div>

		<input type="text" name=""  v-model="names">

		<input type="text" name=""  v-model="ids">


		<button v-on:click="color">颜色</button>


<div class="layui-form">
  <div class="layui-form-item">
    <div class="layui-inline">
      <label class="layui-form-label">中文版</label>
      <div class="layui-input-inline">
        <input type="text" class="layui-input" id="test1" placeholder="yyyy-MM-dd">
      </div>
    </div>
    <div class="layui-inline">
      <label class="layui-form-label">国际版</label>
      <div class="layui-input-inline">
        <input type="text" class="layui-input" id="test1-1" placeholder="yyyy-MM-dd">
      </div>
    </div>
  </div>
</div>
		



		<foot-nav></foot-nav>
	</div>
</template>

<script type="text/javascript">
	import FootNav from '../../components/foot.vue'
	import {test,ss} from '../../assets/js/test.js'
	import {look} from '../../components/axios/api.js'
	export default {
		components:{
			FootNav
		},
		data(){
			return {
				peoples:[{'name':"ones",'age':"12"},{'name':"two",'age':"12"}],
				names:"",
				dddd:"ssss",
				ids:""
			}
		},
		methods:{
			add(){
				console.log(1);
				
				var sss = this.names;
				var ids = this.ids;
				console.log(sss);
				//this.$router.push({name:'values',params:{id:sss,ids:ids}});
				this.$router.push({
		          	path: `/values/${sss}/${ids}`,
		        })
			},
			color(){
				$("#sss").css("color","red");
				//$("#myModal").modal('show');
				ss(3);
				layer.msg("111111");
				//top.layer.msg('媒体收藏成功！', {icon: 1}
				debugger;
				look("111","fdsafdsa").then(function(){
					console.log("请求成功");
				}).catch(function(){
					console.log("请求失败");
				})

			}
		},
		mounted:function(){
	      	var a = [];
			for (var i = 0; i < 10; i++) {
			  a[i] = function () {
			    console.log(i);
			  };
			}
			a[2]();
	    }
	}
</script>