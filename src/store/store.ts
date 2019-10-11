/*
 * @Description: store
 * @Author: Jensen
 * @Github: https://github.com/Jensen02
 * @Date: 2019-10-09 22:40:02
 * @LastEditors: Jensen
 * @LastEditTime: 2019-10-10 20:19:13
 */
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import homeReducer from '../reducers/home_reducer';

const reducer = combineReducers({
  home: homeReducer,
});

const store = createStore(reducer, applyMiddleware(thunk)); 

export default store;