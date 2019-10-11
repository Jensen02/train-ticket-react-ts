/*
 * @Description: 首页reducer
 * @Author: Jensen
 * @Github: https://github.com/Jensen02
 * @Date: 2019-10-09 22:55:16
 * @LastEditors: Jensen
 * @LastEditTime: 2019-10-10 20:21:39
 */
import {
  Action,
  ACTION_FROM,
  ACTION_TO,
  ACTION_IS_CITY_SELECTOR_VISIBLE,
  ACTION_CURRENT_SELECTING_CITY,
  ACTION_IS_LOADING_CITY_DATA,
  ACTION_CITY_DATA,
  ACTION_IS_DATE_SELECTOR_VISIBLE,
  ACTION_DEPART_DATE,
  ACTION_HIGH_SPEED
} from '../actions/action_types';
import { HomeState } from '../interface/interface';

const homeInitData = {
  from: '北京',
  to: '西安',
  isCitySelectorVisible: false,
  currentSelectingCity: false,
  cityData: null,
  isLoadingCityData: false,
  isDateSelectorVisible: false,
  highSpeed: false,
  departDate: '2019-10-12'
}

/**
 * @description: 首页相关reducer
 * @param {type} 
 * @return: 
 */
const homeReducer = (state: HomeState = homeInitData, action: Action) => {
  const { type, payload } = action;

  switch(type) {
    case ACTION_FROM:
      return {
        ...state,
        from: payload,
      }
    case ACTION_TO:
      return {
        ...state,
        to: payload,
      }
    case ACTION_IS_CITY_SELECTOR_VISIBLE:
      return {
        ...state,
        isCitySelectorVisible: payload,
      }
    case ACTION_CURRENT_SELECTING_CITY:
      return {
        ...state,
        currentSelectingCity: payload,
      }
    case ACTION_IS_LOADING_CITY_DATA:
      return {
        ...state,
        isLoadingCityData: payload,
      }
    case ACTION_CITY_DATA:
      return {
        ...state,
        cityData: payload,
      }
    case ACTION_IS_DATE_SELECTOR_VISIBLE:
      return {
        ...state,
        isDateSelectorVisible: payload,
      }
    case ACTION_DEPART_DATE:
      return {
        ...state,
        departDate: payload,
      }
    case ACTION_HIGH_SPEED:
      return {
        ...state,
        highSpeed: payload,
      }
    default:
      return state;
  }
}

export default homeReducer;