<template>
	<view class="detial">
		<view class="detial-title">
			{{formData.title}}
		</view>
		<view class="detial-header">
			<view class="detial-header__logo">
				<image :src="formData.author.avatar" mode="aspectFill"></image>
			</view>
			<view class="detial-header__content">
				<view class="detial-header__content-title">
					{{formData.author.author_name}}
				</view>
				<view class="detial-header__content-info">
					<text>{{formData.create_time}}</text>
					<text>{{formData.browse_count}} 浏览</text>
					<text>{{formData.thumbs_up_count}} 赞</text>
				</view>
			</view>
		</view>
		<view class="detial-content">
			<view class="detial-html">
				<u-parse :content="formData.content" :noData="noData"></u-parse>
			</view>
		</view>
		<view class="detial-bottom">
			<view class="detial-bottom__input" @click="openComment">
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
		<!-- :maskClick 蒙版点击是否关闭弹窗 -->
		<uni-popup ref="popup" type="bottom" :maskClick="false">
			<view class="popup-wrap">
				<view class="popup-header">
					<text class="popup-header__item" @click="close">取消</text>
					<text class="popup-header__item" @click="submit">发布</text>
				</view>
				<view class="popup-content">
					<textarea class="popup-textarea" maxlength="200" v-model="commentsValue" fixed placeholder="请输入评论内容" />
					<view class="popup-count">
						{{commentsValue.length}}/200
					</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uParse from "@/components/gaoyia-parse/parse.vue"
	export default {
		components:{
			uParse
		},
		data() {
			return {
				formData: {},
				noData: '<p style="text-align:center;color:#666666">详情加载中...</p>',
				//输入框的值
				commentsValue: ''
			}
		},
		onLoad(query) {
			this.formData = JSON.parse(query.params)
			this.getDetial()
		},
		onReady() {
			
		},
		methods: {
			getDetial() {
				this.$api.get_detial({
					article_id: this.formData._id
				}).then(res => {
					const {data} = res
					this.formData = data
					console.log(this.formData)
				})
			},
			//打开评论弹窗
			openComment(){
				this.$refs.popup.open()
			},
			//关闭评论弹窗
			close(){
				this.$refs.popup.close()
			},
			//发布评论
			sunmit(){
				this.$refs.popup.close()
			}
		}
	}
</script>

<style lang="scss">
	.detial {
		padding: 15px 0;
		padding-bottom: 54px;
	}

	.detial-title {
		padding: 0 15px;
		font-size: 18px;
		font-weight: bold;
		color: #333333;
	}

	.detial-header {
		display: flex;
		align-items: center;
		margin-top: 10px;
		padding: 0 15px;

		.detial-header__logo {
			flex-shrink: 0;
			width: 40px;
			height: 40px;
			border-radius: 50%;
			overflow: hidden;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.detial-header__content {
			width: 100%;
			padding-left: 10px;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			font-size: 12px;

			.detial-header__content-title {
				font-size: 14px;
				color: #333333;
			}

			.detial-header__content-info {
				color: #999999;

				text {
					margin-right: 10px;
				}
			}
		}
	}

	.detial-content {
		min-height: 500px;
		margin-top: 20px;
		.detial-html{
			padding: 0 15px;
		}
	}

	.detial-bottom {
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

		.detial-bottom__input {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-left: 10px;
			padding: 0 10px;
			width: 100%;
			height: 30px;
			border: 1px solid #dddddd;
			border-radius: 5px;

			text {
				font-size: 14px;
				color: #999999;
			}
		}

		.detial-bottom__icons {
			display: flex;
			flex-shrink: 0;
			padding: 0 10px;

			.detial-bottom__icons-box {
				position: relative;
				display: flex;
				align-items: center;
				justify-content: center;
				width: 44px;
			}
		}
	}
	.popup-wrap{
		background-color: #FFFFFF;
		.popup-header{
			display: flex;
			justify-content: space-between;
			font-size: 14px;
			color: #666666;
			border-bottom: 1px solid #F5F5F5;
			.popup-header__item{
				height: 50px;
				line-height: 50px;
				padding: 0 15px;
			}
		}
		.popup-content{
			width: 100%;
			padding: 15px;
			box-sizing: border-box;
			.popup-textarea{
				width: 100%;
				height: 200px;
			}
			.popup-count{
				display: flex;
				justify-content: flex-end;
				font-size: 12px;
				color: #999999;
			}
		}
	}
</style>
