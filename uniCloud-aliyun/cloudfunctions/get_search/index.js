'use strict';
//获取数据库的引用
const db = uniCloud.database();
//聚合操作符
const $ = db.command.aggregate
exports.main = async (event, context) => {
	//接收分类，通过分类筛选数据const{name} = event 与var name = event.name一样
	const {
		user_id,
		value,
	} = event;
	let matchObj = {}
	//获取用户表的数据
	const userinfo = await db.collection('user').doc(user_id).get();
	const article_likes_ids = userinfo.data[0].article_likes_ids
	// 聚合 ，更精细化的处理数据 比如求和，分组，指定哪些字段
	const list = await db.collection('article')
		.aggregate()
		//追加字段
		.addFields({
			//in()方法判断某个数组里是否包含某个字段 有true没有false
			is_like: $.in(['$_id', article_likes_ids])
		})
		.project({
			content: 0
		})
		.match({
			title: new RegExp(value)
		})
		.end()
	//返回数据给客户端
	return {
		code: 200,
		msg: "数据请求成功",
		data: list.data
	}
};
