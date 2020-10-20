//使用mockjs提供mock数据接口

import Mock from 'mockjs'
import data from './data.json'

//返回goods的接口
Mock.mock('/shopgoods',{code:0,data:data.goods})

Mock.mock('/shopratings',{code:0,data:data.ratings})

Mock.mock('/shopinfo',{code:0,data:data.info})