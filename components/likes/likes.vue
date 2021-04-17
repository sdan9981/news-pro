<template>
	<view>
		<view class="icons" @click.stop="likeTab">
			<uni-icons size="20" color="#f07373" :type="like ? 'heart-filled' : 'heart'"></uni-icons>
		</view>
	</view>
</template>

<script>
	export default {
		name: "likes",
		props: {
			item: {
				type: Object,
				default () {
					return {}
				}
			}
		},
		data() {
			return {
				like: false
			};
		},
		watch: {
			item(newVal) {
				this.like = this.item.is_like
			}
		},
		created() {
			this.like = this.item.is_like
		},
		methods: {
			likeTab() {
				this.like = !this.like
				this.setUpdateLikes();
			},
			//调用云函数
			setUpdateLikes() {
				uni.showLoading()
				this.$api.update_like({
					user_id: '60726b2e1a30730001d7765e',
					article_id: this.item._id
				}).then(res => {
					uni.hideLoading();
					uni.showToast({
						title: this.like ? '收藏成功' : '取消收藏',
						icon: 'none'
					})
				}).catch(err => {
					uni.hideLoading()
				})
			}
		}
	}
</script>

<style lang="scss">
	.icons {
		position: absolute;
		top: 0;
		right: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 20px;
		height: 20px;
	}
</style>
