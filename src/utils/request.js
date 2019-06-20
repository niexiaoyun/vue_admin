import axios from 'axios';
import {getToken} from './auth';
import {stringify} from 'querystring';
import { Message } from 'element-ui'

//创建axios实例
const service = axios.create({
    baseURL : process.env.VUE_APP_BASEURL,
    timeout: 10000 //请求超时时间
})

//请求拦截器
service.interceptors.request.use(
    config =>{
        config.headers['admin-token'] = getToken();
        return config;
    },
    error =>{
        Promise.reject(error);
    }
)

//响应拦截器
service.interceptors.response.use(
    response =>{
        const res = response.data
         if (res.code !== '0000') {
         Message({
           message: res.msg,
           type: 'error',
           duration: 5 * 1000
         })
         // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
         if (res.code === '0004' || res.code === '0005' || res.code === '0007') {
           //直接跳转到登录页面
         }
         return Promise.reject(res)
       } else {
         return response.data
       }
    },
    error=>{
        const showMessage =  stringify(error).indexOf('errError: timeout') === -1 ? "请求超时" : error.message;
            Message({
                message: showMessage,
                type: 'error',
                duration: 5 * 1000
              })
        }
)

export default service;