<template>
	<view class="home">
		<navbar :isSerach="true" @input="change"></navbar>
		<view class="home-list">
			<view class="label-box" v-if="history">
				<view class="label-header">
					<text class="label-title">搜索历史</text>
					<text class="label-clear">清空</text>
				</view>
				<view v-show="historyList.length > 0" class="label-content">
					<view class="label-content__item" v-for="(item,index) in historyList" :key="index">
						{{item.name}}
					</view>
				</view>
				<view v-show="historyList.length <= 0" class="no-data">
					没有搜索历史
				</view>
			</view>
			<list-scroll v-else class="list-scroll">
				<list-card :item="item" @click="setHistory" v-for="item in searchList" :key="item._id"></list-card>
			</list-scroll>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	export default {
		data() {
			return {
				value: '',
				history: true,
				searchList: []
			}
		},
		computed: {
			...mapState(['historyList'])
		},
		methods: {
			setHistory() {
				this.$store.dispatch('set_history',{
					name:this.value
				})
			},
			change(value) {
				this.value = value
				if (!value) {
					clearTimeout(this.timer);
					this.getSearch(value)
					return
				}
				//做标记
				if (!this.mark) {
					this.mark = true;
					this.timer = setTimeout(() => {
						this.mark = false
						this.getSearch(value)
					}, 1000)
				}
			},
			testBtn() {
				this.$store.dispatch('set_history', {
					name: 'test'
				})
			},
			getSearch(value) {
				if (!value) {
					this.searchList = [];
					this.history = true;
					return
				}
				this.history = false
				this.$api.get_search({
					value: value
				}).then(res => {
					const {
						data
					} = res;
					this.searchList = data
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
		display: flex;
		background-color: #F5F5F5;
	}

	.home {
		display: flex;
		flex-direction: column;
		flex: 1;
		border: 1px solid #ef0000;

		.label-box {
			background-color: $uni-bg-color;
			margin-bottom: 10px;

			.label-header {
				display: flex;
				justify-content: space-between;
				font-size: 14px;
				color: #666666;
				padding: 10px 15px;
				border-bottom: 1px solid #F5F5F5;

				.label-title {
					color: $mk-base-color;
				}

				.label-clear {
					color: #30b33a;
					font-weight: bold;
				}
			}

			.label-content {
				display: flex;
				flex-wrap: wrap;
				padding: 15px;
				padding-top: 0;

				.label-content__item {
					padding: 2px 10px;
					margin-top: 12px;
					margin-right: 12px;
					border-radius: 5px;
					border: 1px solid #666666;
					font-size: 14px;
					color: #666666;
				}
			}
		}
	}

	.no-data {
		height: 200px;
		line-height: 200px;
		width: 100%;
		text-align: center;
		font-size: 12px;
		color: #666666;
	}
</style>
