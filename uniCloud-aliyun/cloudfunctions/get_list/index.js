
'use strict';
//获取数据库的引用
const db = uniCloud.database();
exports.main = async (event, context) => {
	//接收分类，通过分类筛选数据const{name} = event 与var name = event.name一样
	const {
		name,
		page = 1,
		pageSize = 10
	} = event;
	let matchObj = {}
	if(name !== '全部'){
		matchObj = {
			classify:name
		}
	}
	// 聚合 ，更精细化的处理数据 比如求和，分组，指定哪些字段
	const list = await db.collection('article')
	.aggregate()
	.match(
		matchObj
	)
	.project({
		content:0
	})
	//计算要跳过多少数据
	.skip(pageSize*(page-1))
	.limit(pageSize)
	.end()
	// const list = await db.collection('article')
	// .field({
	// 	//true 表示只返回这个字段 ，false表示不返回
	// 	content:false
	// })
	// .get()	
	//返回数据给客户端
	return {
		code:200,
		msg:"数据请求成功",
		data:list.data
	}
};
