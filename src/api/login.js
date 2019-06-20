import request from '@/utils/request';

/**
 * 
 * @param {*} params 
 * 
 * 登录
 */
export function loginRequest(params){
    return request({
        url: '/admin/admin/login',
        method : 'post',
        data: params
    })
}
/**
 * 退出登录
 */
export function loginOutRequest(params){
    return request({
        url: 'loginout',
        method: 'get',
        params
    })
}