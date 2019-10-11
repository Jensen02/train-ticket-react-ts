/*
 * @Description: 定义所有的 actionTypes
 * @Author: Jensen
 * @Github: https://github.com/Jensen02
 * @Date: 2019-10-09 22:55:41
 * @LastEditors: Jensen
 * @LastEditTime: 2019-10-10 17:11:19
 */

// 定义 action 结构
export interface Action {
  type: string,
  payload: any,
}

 /************************ 首页相关 ************************/

export const ACTION_FROM: string = 'ACTION_FROM';                                           // 出发城市
export const ACTION_TO: string = 'ACTION_TO';                                               // 到达城市
export const ACTION_IS_CITY_SELECTOR_VISIBLE: string = 'ACTION_IS_CITY_SELECTOR_VISIBLE';   // 是否打开城市选择浮层
export const ACTION_CURRENT_SELECTING_CITY: string = 'ACTION_CURRENT_SELECTING_CITY';       // 选择出发或者到达城市
export const ACTION_IS_LOADING_CITY_DATA: string = 'ACTION_IS_LOADING_CITY_DATA'            // 是否正在加载城市数据
export const ACTION_CITY_DATA: string = 'ACTION_CITY_DATA';                                 // 城市选择浮层的城市数据
export const ACTION_IS_DATE_SELECTOR_VISIBLE: string = 'ACTION_IS_DATE_SELECTOR_VISIBLE';   // 是否打开日期选择浮层
export const ACTION_DEPART_DATE: string = 'ACTION_DEPART_DATE'                              // 选择出发日期
export const ACTION_HIGH_SPEED: string = 'ACTION_HIGH_SPEED';                               // 是否选择只查看高铁