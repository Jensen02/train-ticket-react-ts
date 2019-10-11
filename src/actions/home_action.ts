/*
 * @Description: 首页所有的actions
 * @Author: Jensen
 * @Github: https://github.com/Jensen02
 * @Date: 2019-10-09 22:55:52
 * @LastEditors: Jensen
 * @LastEditTime: 2019-10-11 21:00:28
 */
import { 
  ACTION_FROM,
  ACTION_TO,
  ACTION_IS_CITY_SELECTOR_VISIBLE,
  ACTION_CURRENT_SELECTING_CITY,
  ACTION_IS_LOADING_CITY_DATA,
  ACTION_CITY_DATA,
  ACTION_IS_DATE_SELECTOR_VISIBLE,
  ACTION_DEPART_DATE,
  ACTION_HIGH_SPEED
 } from './action_types';
 import { getCities } from '../axios/api';

export const setFrom = (city: string) => {
  return {
    type: ACTION_FROM,
    payload: city,
  }
}

export const setTo = (city: string) => {
  return {
    type: ACTION_TO,
    payload: city,
  }
}

export const setIsLoadingCityData = (isLoadingCityData: boolean) => {
  return {
    type: ACTION_IS_LOADING_CITY_DATA,
    payload: isLoadingCityData,
  }
}

export const setCityData = (cityData: any) => {
  return {
    type: ACTION_CITY_DATA,
    payload: cityData,
  }
}

export const setHighSpeed = () => {
  return (dispatch: any, getState: any) => {
    const { highSpeed } = getState().home;
    dispatch({
      type: ACTION_HIGH_SPEED,
      payload: !highSpeed,
    });
  }
}

export const showCitySelector = (currentSelectingCity: boolean) => {
  return (dispatch: any) => {
    dispatch({
      type: ACTION_IS_CITY_SELECTOR_VISIBLE,
      payload: true,
    });

    dispatch({
      type: ACTION_CURRENT_SELECTING_CITY,
      payload: currentSelectingCity,
    });
  }
}

export const hideSelectorCity = () => {
  return {
    type: ACTION_IS_CITY_SELECTOR_VISIBLE,
    payload: false,
  }
}

export const setSelectedCity = (city: string) => {
  return (dispatch: any, getState: any) => {
    const { currentSelectingCity } = getState().home;

    if(currentSelectingCity) {
      dispatch(setFrom(city));
    } else {
      dispatch(setTo(city));
    }

    dispatch(hideSelectorCity());
  }
}

export const showSelectorDate = () => {
  return {
    type: ACTION_IS_DATE_SELECTOR_VISIBLE,
    payload: true,
  }
}

export const hideSelectorDate = () => {
  return {
    type: ACTION_IS_DATE_SELECTOR_VISIBLE,
    payload: false,
  }
}

export const setDepartDate = (departDate: string) => {
  return {
    type: ACTION_DEPART_DATE,
    payload: departDate,
  }
}

export const exchangeFromTo = () => {
  return (dispatch: any, getState: any) => {
    const { from, to } = getState().home;
    dispatch(setFrom(to));
    dispatch(setTo(from));
  }
}

export const getCityList = () => {
  return (dispatch: any, getState: any) => {
    const { isLoadingCityData } = getState().home;
    if(isLoadingCityData) {
      return;
    }
    const cacheStr: string = String(localStorage.getItem('city_data_cache'));
    const cache = JSON.parse(cacheStr);

    if( cache && (Date.now() < cache.expires)) {
      dispatch(setCityData(cache.city_data.cityList));
      return;
    }
  
    dispatch(setIsLoadingCityData(true));
    getCities().then(res => {
      const cityList = res.data.data;
      localStorage.setItem('city_data_cache', JSON.stringify({
        expires: Date.now() + 5 * 60 * 60 * 1000,
        city_data: cityList
      }));
      dispatch(setCityData(cityList));
      dispatch(setIsLoadingCityData(false));
    }).catch(() => {
      dispatch(setIsLoadingCityData(false));
    })
  }
}
