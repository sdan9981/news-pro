<template>
	<swiper class="home-swiper" :current="activeIndex" @change="change">
		<swiper-item v-for="(item,index) in tab" :key="index" class="swiper-item">
			<list-item :list="listCatchData[index]" :load="load[index]" @loadmore="loadmore"></list-item>
		</swiper-item>
	</swiper>
</template>

<script>
	import listItem from "@/components/list/list-item.vue";
	export default {
		name:"list",
		components:{
			listItem
		},
		props:{
			tab:{
				type:Array,
				default(){
					return []
				}
			},
			activeIndex:{
				type:Number,
				default:0
			}
		},
		data() {
			return {
				list:[],
				//由于js限制
				listCatchData:{},
				load:{},
				pageSize:10
			};
		},
		watch:{
			tab(newVal){
				if(newVal.length === 0) return
				this.getList(this.activeIndex)
			}
		},
		//onLoad在页面  created在组件里写
		created() {
			//TODO tab还没有赋值
			// this.getList(0)
		},
		methods:{
			loadmore(){
				if(this.load[this.activeIndex].loading === 'noMore') return
				this.load[this.activeIndex].page++;
				this.getList(this.activeIndex)
			},
			change(e){
				const {current} = e.detail
				this.$emit('change',current);
				//TODO 当数据不存在或者长度是0的情况下，才去请求数据
				if(!this.listCatchData[current] || this.listCatchData[current] === 0){
					this.getList(current)
				}
			},
			getList(current){
				if(!this.load[current]){
					this.load[current]={
						page:1,
						loading:'loading'
					}
				}
				this.$api.get_list({
					name:this.tab[current].name,
					page:this.load[current].page,
					pageSize:this.pageSize
				}).then(res=>{
					const {data} = res;
					if(data.length === 0){
						let oldLoad = {};
						oldLoad.loading = 'noMore';
						oldLoad.page = this.load[current].page
						this.$set(this.load,current,oldLoad)
						this.$forceUpdate()  //强制渲染页面
					}
					let oldList = this.listCatchData[current] || [];
					oldList.push(...data)
					// this.list = data
					// this.listCatchData[current] = data
					//懒加载
					this.$set(this.listCatchData,current,oldList)
				})
			}
		}
	}
</script>

<style lang="scss">
	.home-swiper{
		height: 100%;
	}
</style>
