<template>
	<view class="navbar">
		<view class="navbar-fiexd">
			<!-- 状态栏 -->
			<view :style="{height: statusBarHeight + 'px'}"></view>
			<!-- 导航栏内容 -->
			<view class="navbar-content" :style="{height:navbarHeight+'px',width:windowWidth +'px'}" @click="open">
				<view class="navbar-search">
					<view class="navbar-search-icon">	
						<uni-icons type="search" size="16" color="#707070"></uni-icons>
						<!-- <uni-icons type="contact" size="30"></uni-icons> -->
					</view>
					<view class="navbar-search-content">
						uni-app
					</view>
				</view>
			</view>
		</view>
		<view :style="{height:(navbarHeight+statusBarHeight) + 'px'}"></view>
	</view>
</template>

<script>
	export default {
		name:"navbar",
		data() {
			return {
				"statusBarHeight" : 20,
				"navbarHeight" : 45,
				"windowWidth" : 375
			};
		},
		created() {
			//获取手机系统信息
			const info = uni.getSystemInfoSync()
			this.statusBarHeight = info.statusBarHeight;
			this.windowWidth = info.windowWidth
			//跨终端兼容
			// #ifndef H5 || APP-PLUS || MP-ALIPAY
			//获取胶囊的位置
			const menuButtonInfo = uni.getMenuButtonBoundingClientRect();
			//（胶囊底部高度 - 状态栏高度） + （胶囊顶部高度 - 状态栏高度)
			this.navbarHeight = (menuButtonInfo.bottom - info.statusBarHeight) +(menuButtonInfo.top - info.statusBarHeight);
			this.windowWidth = menuButtonInfo.left
			// #endif
		},
		methods:{
			open(){
				//此api表示保留当前页面，跳转到某一页面
				uni.navigateTo({
					url:"/pages/home-search/home-search"
				})
			}
		}
	}
</script>

<style lang="scss">
	// @import "/common/css/incons.css";
	.navbar{
		.navbar-fiexd{
			position: fixed;
			left: 0;
			top: 0;
			z-index: 99;
			width: 100%;
			background: $mk-base-color;
			.navbar-content{
				padding: 0 15px;
				display: flex;
				justify-content: center;
				align-items: center;
				box-sizing: border-box;
				.navbar-search{
					width: 100%;
					display: flex;
					align-items: center;
					height: 30px;
					background: $uni-bg-color;
					border-radius: 30px;
					padding: 0 15px;
					.navbar-search-icon{
						margin-right: 10px;
					}
					.navbar-search-content{
						font-size: 12px;
						color: #999999;
					}
				}
			}
		}
	}
</style>
