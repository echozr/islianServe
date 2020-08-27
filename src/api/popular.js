/**
 * @description 期刊模块接口列表
 * @author zr
 */
import base from './base' // 导入接口域名列表
import axios from '@/http'// 导入http中创建的axios实例
import qs from 'qs' // 根据需求是否导入qs模块

const popular = {
  // 新增期刊
  addPopular (params) {
    return axios.post(`${base.api}/popular/addPopular`, qs.stringify(params))
  },
  // 获取期刊列表
  getPopularList (params) {
    return axios.get(`${base.api}/popular/getPopularList`, { params })
  },
  // 点击删除期刊
  deletePopular (params) {
    return axios.delete(`${base.api}/popular/deletePopular`, { params })
  },
  // 根据ID获取期刊基本信息
  getPopularInfoById (params) {
    return axios.get(`${base.api}/popular/getPopularInfoById`, { params })
  },
  // 修改期刊
  updatePopular (params) {
    return axios.post(`${base.api}/popular/updatePopular`, qs.stringify(params))
  }

}

export default popular
