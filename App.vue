<script>
	export default {
		onLaunch: function() {
			//正常情况是后台提供一个登录接口或者标识，我们再用这个接口去操作
			this.$api.get_user({
				user_id:"60726b2e1a30730001d7765e"
			}).then(res=>{
				const {data} = res
				this.$store.dispatch('set_userinfo',data)
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import 'components/gaoyia-parse/parse.css'
</style>
