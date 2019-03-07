import {fetch} from './fetch';
import api from './url';

export function look(issuer,userId) { 

	 let data = {
	 	currentUserId:userId, //传过去的参数
      	aaa:issuer
	 }
  return fetch({
    //api.Hallowmas 引用url.js里面的数据
    url: api.Hallowmas,
    method: 'post',//请求方法
    data:data
    /*params:{
      currentUserId:userId, //传过去的参数
      aaa:issuer
    }*/
  })
}

export function jsons() { 

  return fetch({
    //api.Hallowmas 引用url.js里面的数据
    url: api.json,
    method: 'get',//请求方法
    /*params:{
      currentUserId:userId, //传过去的参数
      aaa:issuer
    }*/
  })
}