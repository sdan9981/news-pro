//批量导出文件    #require.context(directory,useSubdirectories,regExp) directory:表示检索的目录 useSubdirectories：表示是否检索子文件夹 regExp:匹配文件的正则表达式,一般是文件名
const requireApi = require.context(
	//api目录的相对路径
	'.',
	//是否查询子目录
	false,
	//查询文件的后缀
	/.js$/
)

const module = {}

requireApi.keys().forEach((key,index)=>{
	if(key === './index.js') return
	Object.assign(module,requireApi(key))    //Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。
})

export default module