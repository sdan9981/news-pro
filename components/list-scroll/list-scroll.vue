<template>
	<view class="scroll">
		<scroll-view class="list-scroll" scroll-y :style="{height:windowHeight-(statusBarHeight+navbarHeight+windowBottom)+'px'}" @scrolltolower="loadmore">
			<view>
				<slot></slot>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name:"list-scroll",
		data() {
			return {
				"statusBarHeight" : 20,
				"navbarHeight" : 45,
				"windowHeight" : 736,
				"windowBottom" : 50
			};
		},
		created(){
			//获取手机系统信息
			const info = uni.getSystemInfoSync()
			this.statusBarHeight = info.statusBarHeight;
			this.windowHeight = info.windowHeight
			//跨终端兼容
			// #ifndef H5 || APP-PLUS || MP-ALIPAY
			//获取胶囊的位置
			const menuButtonInfo = uni.getMenuButtonBoundingClientRect();
			//（胶囊底部高度 - 状态栏高度） + （胶囊顶部高度 - 状态栏高度)
			this.navbarHeight = (menuButtonInfo.bottom - info.statusBarHeight) +(menuButtonInfo.top - info.statusBarHeight);
			// #endif
			// #ifdef H5 || APP-PLUS
			this.windowBottom = info.windowBottom
			// #endif
		},
		methods:{
			loadmore(){
				this.$emit('loadmore');
			}
		}
	}
</script>

<style lang="scss">
	.scroll{
		display: flex;
		flex: auto;
		overflow: hidden;
		box-sizing: border-box;
		.list-scroll{
			height: 100%;
			display: flex;
			flex-direction: column;
		}
	}
</style>
