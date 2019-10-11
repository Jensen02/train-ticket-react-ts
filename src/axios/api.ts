/*
 * @Description: api
 * @Author: Jensen
 * @Github: https://github.com/Jensen02
 * @Date: 2019-10-11 18:05:59
 * @LastEditors: Jensen
 * @LastEditTime: 2019-10-11 18:14:15
 */
import { httpGet } from './axios';

export const getCities = async () => {
  return await httpGet('/api/v1/train/cities');
}