<template>
	<view>
		评论列表
	</view>
</template>

<script>
	export default {
		data() {
			return {
				article_id:''
			}
		},
		onLoad(query) {
			this.article_id = query.id
			this.getComments()
		},
		methods: {
			getComments() {
				this.$api.get_comments({
					article_id: this.article_id
				}).then(res => {
					const {
						data
					} = res
					this.commentsList = data
				})
			}
		}
	}
</script>

<style>

</style>
