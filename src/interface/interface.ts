/*
 * @Description: 定义接口类型
 * @Author: Jensen
 * @Github: https://github.com/Jensen02
 * @Date: 2019-10-10 20:09:47
 * @LastEditors: Jensen
 * @LastEditTime: 2019-10-11 19:29:32
 */
export interface Props {
  dispatch: any,
  history: any,
  location: any,
  match: any,
  staticContext: any,
}

export interface HomeState {
  from: string,
  to: string,
  isCitySelectorVisible: boolean,
  currentSelectingCity: boolean,
  cityData: null,
  isLoadingCityData: boolean,
  isDateSelectorVisible: boolean,
  highSpeed: boolean,
  departDate: string
}

export interface Func {
  (): any,
}
export interface Item {
  name: string,
}
export interface Section {
  citys: Array<Item>,
  title: string,
}