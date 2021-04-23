<template>
	<view class="detial">
		<view class="detial-title">
			我是一个前端开发者，我到底要不要学node开发
		</view>
		<view class="detial-header">
			<view class="detial-header__logo">
				<image src="../../static/logo.png" mode="aspectFill"></image>
			</view>
			<view class="detial-header__content">
				<view class="detial-header__content-title">
					拉稀
				</view>
				<view class="detial-header__content-info">
					<text>2021-03-15 12:12:12</text>
					<text>1024 浏览</text>
					<text>201 赞</text>
				</view>
			</view>
		</view>
		<view class="detial-content">
			详情数据
		</view>
		<view class="detial-bottom">
			<view class="detial-bottom__input">
				<text>谈谈你的看法</text>
				<uni-icons type="compose" size="16" color="#d81e06"></uni-icons>
			</view>
			<view class="detial-bottom__icons">
				<view class="detial-bottom__icons-box">
					<uni-icons type="chat" color="#d81e06" size="22"></uni-icons>
				</view>
				<view class="detial-bottom__icons-box">
					<uni-icons type="heart" color="#d81e06" size="22"></uni-icons>
				</view>
				<view class="detial-bottom__icons-box">
					<uni-icons type="hand-thumbsup" color="#d81e06" size="22"></uni-icons>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.detial{
		padding: 15px 0;
		padding-bottom: 54px;
	}
	.detial-title{
		padding: 0 15px;
		font-size: 18px;
		font-weight: bold;
		color: #333333;
	}
	.detial-header{
		display: flex;
		align-items: center;
		margin-top: 10px;
		padding: 0 15px;
		.detial-header__logo{
			flex-shrink: 0;
			width: 40px;
			height: 40px;
			border-radius: 50%;
			overflow: hidden;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.detial-header__content{
			width: 100%;
			padding-left: 10px;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			font-size: 12px;
			.detial-header__content-title{
				font-size: 14px;
				color: #333333;
			}
			.detial-header__content-info{
				color: #999999;
				text{
					margin-right: 10px;
				}
			}
		}
	}
	.detial-content{
		height: 1000px;
		border: 1px solid #ef0000;
	}
	.detial-bottom{
		position: fixed;
		bottom: 0;
		left: 0;
		display: flex;
		align-items: center;
		width: 100%;
		height: 44px;
		border-top: 1px solid #F5F5F5;
		background-color: #FFFFFF;
		box-sizing: border-box;
		.detial-bottom__input{
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-left: 10px;
			padding: 0 10px;
			width: 100%;
			height: 30px;
			border: 1px solid #dddddd;
			border-radius: 5px;
			text{
				font-size: 14px;
				color: #999999;
			}
		}
		.detial-bottom__icons{
			display: flex;
			flex-shrink: 0;
			padding: 0 10px;
			.detial-bottom__icons-box{
				position: relative;
				display: flex;
				align-items: center;
				justify-content: center;
				width: 44px;
			}
		}
	}
</style>
