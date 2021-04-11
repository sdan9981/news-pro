<template>
	<view>
		<navbar></navbar>
		<tab :list="tabList"></tab>
	</view>
</template>

<script>
	//easyCom 如果目录是一致的，components/组件名/组件名.vue 可以不去引用，直接使用组件
	// import navbar from "@/components/navbar/navbar.vue"
	export default {
		// components:{
		// 	navbar
		// },
		data() {
			return {
				title: 'Hello',
				tabList:[]
			}
		},
		onLoad() {
			this.getLabel();
		},
		methods: {
			//调用云函数方法
			getLabel(){
				this.$api.get_label({
					name:'get_label'
				}).then((res)=>{
					const {data} = res;
					this.tabList = data
				})
			}
		}
	}
</script>

<style lang="scss">
	
</style>
