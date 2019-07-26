import request from '@/utils/request'


/**
   * 获取设备列表
   */
  export function getDeviceListsRequest(params) {
    return request({
      url: '/manager/device/list',
      method: 'get',
      params
    })
  }