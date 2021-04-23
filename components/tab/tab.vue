<template>
	<view class="tab">
		<scroll-view scroll-x="true" class="tab-scroll">
			<view class="tab-scroll-box">
				<view v-for="(item,index) in list" :key="index" class="tab-scroll-item"
					:class="{active:activeIndex === index}" @click="clickTab(item,index)">
					{{item.name}}
				</view>
			</view>
		</scroll-view>
		<view class="tab-icons" @click="open">
			<uni-icons type="gear" size="26" color="#707070"></uni-icons>
		</view>
	</view>
</template>

<script>
	export default {
		name: "tab",
		props: {
			list: {
				type: Array,
				default () {
					return []
				}
			},
			tabIndex: {
				type: Number,
				default: 0
			}
		},
		//watch可以监听data  props里的值得变化
		watch: {
			tabIndex(newVal) {
				this.activeIndex = newVal
			}
		},
		data() {
			return {
				activeIndex: 0
			};
		},
		onLoad() {},
		methods: {
			clickTab(item, index) {
				this.activeIndex = index;
				this.$emit('tab', {
					data: item,
					index: index
				})
			},
			open() {
				uni.navigateTo({
					url: "/pages/home-label/home-label"
				})
			}
		}
	}
</script>

<style lang="scss">
	.tab {
		display: flex;
		width: 100%;
		background: $uni-bg-color;
		border-bottom: 1px solid #F5F5F5;
		box-sizing: border-box;

		.tab-scroll {
			flex: 1;
			overflow: hidden;
			box-sizing: border-box;

			.tab-scroll-box {
				display: flex;
				align-items: center;
				height: 45px;
				box-sizing: border-box;

				.tab-scroll-item {
					flex-shrink: 0;
					padding: 0 10px;
					color: #333333;
					font-size: 14px;

					&.active {
						color: $mk-base-color;
					}
				}
			}
		}

		.tab-icons {
			position: relative;
			display: flex;
			align-items: center;
			justify-content: center;
			width: 45px;

			&::after {
				content: '';
				position: absolute;
				top: 12px;
				bottom: 12px;
				left: 0;
				width: 1px;
				background-color: #ddd;
			}
		}
	}
</style>
