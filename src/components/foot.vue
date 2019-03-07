<template>
	<div class="foot fixed">
		<ul>
			<li> <router-link to='/'>首页</router-link></li>
			<li> <router-link to='/manage'> 管理</router-link></li>
			<li> <router-link to='/parchild'>父子</router-link></li>
		</ul>
	</div>
</template>

<style type="text/css" scoped>
	.foot {
		width: 100%;
		height: 50px;
		bottom: 0px;
	}
	ul {
		display: flex;
		height: 100%;
		line-height: 50px;
	}
	ul li {
		display: flex;
		background: #ddd;
	}
</style>