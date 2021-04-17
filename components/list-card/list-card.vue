<template>
	<view @click="open">
		<!-- 基础卡片 -->
		<view v-if="item.mode === 'base'" class="list-card">
			<view class="list-card-image">
				<image :src="item.cover[0]" mode="aspectFill"></image>
			</view>
			<view class="list-card-content">
				<view class="listcard-content-title">
					<text>
						{{item.title}}
					</text>
					<likes :item="item"></likes>
				</view>
				<view class="listcard-content-des">
					<view class="listcard-content-des-label">
						<view class="listcard-content-des-label-item">
							{{item.classify}}
						</view>
					</view>
					<view class="listcard-content-des-browse">
						{{item.browse_count}}浏览
					</view>
				</view>
			</view>
		</view>
		<!-- 多图模式 -->
		<view v-if="item.mode === 'column'" class="list-card mode-column">
			<view class="list-card-content">
				<view class="listcard-content-title">
					<text>
						{{item.title}}
					</text>
					<likes :item="item"></likes>
				</view>
				<view class="list-card-image">
					<view v-if="index < 3" v-for="(item,index) in item.cover" :key="item._id" class="list-card-image__item">
						<image :src="item" mode="aspectFill"></image>
					</view>
				</view>
				<view class="listcard-content-des">
					<view class="listcard-content-des-label">
						<view class="listcard-content-des-label-item">
							{{item.classify}}
						</view>
					</view>
					<view class="listcard-content-des-browse">
						{{item.browse_count}}浏览
					</view>
				</view>
			</view>
		</view>
		<!-- 大图模式 -->
		<view v-if="item.mode === 'image'" class="list-card mode-image">
			<view class="list-card-image">
				<image :src="item.cover[0]" mode="aspectFill"></image>
			</view>
			<view class="list-card-content">
				<view class="listcard-content-title">
					<text>
						{{item.title}}
					</text>
					<likes :item="item"></likes>
				</view>
				<view class="listcard-content-des">
					<view class="listcard-content-des-label">
						<view class="listcard-content-des-label-item">
							{{item.classify}}
						</view>
					</view>
					<view class="listcard-content-des-browse">
						{{item.browse_count}}浏览
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"list-card",
		props:{
			item:{
				type:Object,
				default(){
					return {}
				}
			}
		},
		data() {
			return {
				
			};
		},
		methods:{
			open(){
				console.log("打开详情页面")
			}
		}
	}
</script>

<style lang="scss">
	.list-card{
		display: flex;
		padding: 10px;
		margin: 10px;
		border-radius: 5px;
		box-shadow: 0 0 5px rgba($color: #000000, $alpha: 0.1);
		box-sizing: border-box;
		.list-card-image{
			flex-shrink: 0;
			width: 60px;
			height: 60px;
			border-radius: 5px;
			overflow: hidden;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.list-card-content{
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			padding-left: 10px;
			width: 100%;
			.listcard-content-title{
				position: relative;
				padding-right: 30px;
				font-size: 14px;
				color: #333333;
				font-weight: 400;
				line-height: 1.2;
				text{
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-box-orient:vertical;
					-webkit-line-clamp:2
				}
			}
			.listcard-content-des{
				display: flex;
				justify-content: space-between;
				font-size: 12px;
				.listcard-content-des-label{
					display: flex;
					.listcard-content-des-label-item{
						padding: 0 5px;
						margin-right: 5px;
						border-radius: 15px;
						color: $mk-base-color;
						border: 1px solid $mk-base-color;
					}
				}
				.listcard-content-des-browse{
					color: #999999;
					line-height: 1.5;
				}
			}
		}
		&.mode-column{
			.list-card-content{
				width: 100%;
				padding-left: 0;
			}
			.list-card-image{
				display: flex;
				margin-top: 10px;
				width: 100%;
				height: 70px;
				.list-card-image__item{
					margin-left: 10px;
					width: 100%;
					border-radius: 5px;
					overflow: hidden;
					&:first-child{
						margin-left: 0;
					}
					image{
						width: 100%;
						height: 100%;
					}
				}
			}
			.listcard-content-des{
				margin-top: 10px;
			}
		}
		&.mode-image{
			flex-direction: column;
			.list-card-image{
				width: 100%;
				height: 100px;
			}
			.list-card-content{
				padding-left: 0;
				margin-top: 10px;
				.listcard-content-des{
					display: flex;
					align-items: center;
					margin-top: 10px;
				}
			}
		}
	}
</style>
