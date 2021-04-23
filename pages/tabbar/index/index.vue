<template>
	<view class="home">
		<navbar></navbar>
		<tab :list="tabList" :tabIndex="tabIndex" @tab="tab"></tab>
		<view class="home-list">
			<list :tab="tabList" :activeIndex="activeIndex" @change="change"></list>
		</view>
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
				tabList: [],
				tabIndex: 0,
				activeIndex: 0
			}
		},
		onLoad() {
			uni.$on('labelChange', (res) => {
				this.tabList = []
				this.tabIndex = 0
				this.activeIndex = 0
				this.getLabel();
			})
			this.getLabel();
		},
		methods: {
			change(current) {
				this.tabIndex = current
				this.activeIndex = current
			},
			tab({
				data,
				index
			}) {
				this.activeIndex = index
			},
			//调用云函数方法
			getLabel() {
				this.$api.get_label().then((res) => {
					const {
						data
					} = res;
					data.unshift({
						name: '全部'
					})
					this.tabList = data
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
		display: flex;
	}

	.home {
		display: flex;
		flex-direction: column;
		flex: 1;

		.home-list {
			flex: 1;
			box-sizing: border-box;
		}
	}
</style>
