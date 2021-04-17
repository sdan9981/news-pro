<template>
	<view>
		<view class="icons" @click.stop="likeTab">
			<uni-icons size="20" color="#f07373" type="heart"></uni-icons>
		</view>
	</view>
</template>

<script>
	export default {
		name:"likes",
		data() {
			return {
				
			};
		},
		methods:{
			likeTab(){
				console.log(" ’≤ÿ≥…π¶")
			}
		}
	}
</script>

<style lang="scss">
	.icons{
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
