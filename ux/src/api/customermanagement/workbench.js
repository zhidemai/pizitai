import request from '@/utils/request'

// 销售简报
export function crmIndexIndex(data) {
  return request({
    url: 'crm/index/index',
    method: 'post',
    data: data
  })
}

// 业绩指标
export function crmIndexAchievementData(data) {
  return request({
    url: 'crm/index/achievementData',
    method: 'post',
    data: data
  })
}

// 销售漏斗
export function crmIndexFunnel(data) {
  return request({
    url: 'crm/index/funnel',
    method: 'post',
    data: data
  })
}

// 销售趋势
export function crmIndexSaletrend(data) {
  return request({
    url: 'crm/index/saletrend',
    method: 'post',
    data: data
  })
}