import request from '@/utils/request'

/**
 * 获取省列表
 */
export function getProvincesListRequest() {
    return request({
      url: '/district/district/provinces',
      method: 'get',
      params: {
        size: 100,
        desc: false
      }
    })
  }
  

  /**
 * 根据 code 获取市列表或者区列表
 */
export function getChildrenListRequest(params) {
    return request({
      url: '/district/district/children',
      method: 'get',
      params: params
    })
  }