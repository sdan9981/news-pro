<template>
	<view class="navbar">
		<view class="navbar-fiexd">
			<!-- 状态栏 -->
			<view :style="{height: statusBarHeight + 'px'}"></view>
			<!-- 导航栏内容 -->
			<view class="navbar-content" :class="{search:isSerach}"
				:style="{height:navbarHeight+'px',width:windowWidth +'px'}" @click.stop="open">
				<view v-if="isSerach" class="navbar-content__search-icons">
					<uni-icons type="back" size="22" color="#ffffff" @click="back"></uni-icons>
				</view>
				<!-- 不在搜索页 -->
				<view v-if="!isSerach" class="navbar-search">
					<view class="navbar-search-icon">
						<uni-icons type="search" size="16" color="#707070"></uni-icons>
						<!-- <uni-icons type="contact" size="30"></uni-icons> -->
					</view>
					<view class="navbar-search-content">
						uni-app
					</view>
				</view>
				<!-- 在搜索页 -->
				<view v-else="isSerach" class="navbar-search">
					<input type="text" class="navbar-search-content" v-model="val" placeholder="请输入您要搜索的内容" @input="inputChange" />
				</view>
			</view>
		</view>
		<view :style="{height:(navbarHeight+statusBarHeight) + 'px'}"></view>
	</view>
</template>

<script>
	export default {
		name: "navbar",
		props: {
			value:{
				type:[String,Number],
				default:''
			},
			isSerach: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				statusBarHeight: 20,
				navbarHeight: 45,
				windowWidth: 375,
				val: ''
			};
		},
		watch:{
			value(newVal){
				this.val = newVal
			}
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
			this.navbarHeight = (menuButtonInfo.bottom - info.statusBarHeight) + (menuButtonInfo.top - info
				.statusBarHeight);
			this.windowWidth = menuButtonInfo.left
			// #endif
		},
		methods: {
			back(){
				// uni.navigateBack({})
				uni.switchTab({
					url:"/pages/tabbar/index/index"
				})
			},
			open() {
				if (this.isSerach) return
				//此api表示保留当前页面，跳转到某一页面
				uni.navigateTo({
					url: "/pages/home-search/home-search"
				})
			},
			inputChange(e){
				const {value} = e.detail
				this.$emit('input',value)
			}
		}
	}
</script>

<style lang="scss">
	// @import "/common/css/incons.css";
	.navbar {
		.navbar-fiexd {
			position: fixed;
			left: 0;
			top: 0;
			z-index: 99;
			width: 100%;
			background: $mk-base-color;

			.navbar-content {
				padding: 0 15px;
				display: flex;
				justify-content: center;
				align-items: center;
				box-sizing: border-box;

				.navbar-search {
					width: 100%;
					display: flex;
					align-items: center;
					height: 30px;
					background: $uni-bg-color;
					border-radius: 30px;
					padding: 0 15px;

					.navbar-search-icon {
						margin-right: 10px;
					}

					.navbar-search-content {
						width: 100%;
						font-size: 14px;
						color: #999999;
					}
				}

				&.search {
					padding-left: 0;

					.navbar-content__search-icons {
						margin-left: 10px;
						margin-right: 10px;
					}

					.navbar-search {
						border-radius: 5px;
					}
				}
			}
		}
	}
</style>
