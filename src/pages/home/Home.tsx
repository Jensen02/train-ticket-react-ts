/*
 * @Description: 首页
 * @Author: Jensen
 * @Github: https://github.com/Jensen02
 * @Date: 2019-10-10 17:50:28
 * @LastEditors: Jensen
 * @LastEditTime: 2019-10-11 20:09:52
 */

import React, { useCallback, useMemo } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './Home.css';

import {
  showCitySelector,
  exchangeFromTo,
  hideSelectorCity,
  getCityList,
  setSelectedCity
} from '../../actions/home_action';
import { Props } from '../../interface/interface';

import Header from '../../components/common/Header/Header';
import City from '../../components/home/City/City';
import CitySelector from '../../components/home/CitySelector/CitySelector';
// import DateSelector from '../../components/home/DateSelector/DateSelector';


interface IProps {
  home: any,
}

const Home: React.FC<IProps & Props> = (props) => {
  const {
    from,
    to,
    cityData,
    isLoadingCityData,
    isCitySelectorVisible,
  } = props.home;
  const { dispatch } = props;
  
  const onBack = useCallback(() => {
    props.history.goBack();
  }, []);
  const cbs = useMemo(() => {
    return bindActionCreators({
      showCitySelector,
      exchangeFromTo
    }, dispatch);
  }, [])
  
  const citySelectorCbs = useMemo(() => {
    return bindActionCreators({
      onBack: hideSelectorCity,
      onSelect: setSelectedCity,
      getCityList
    }, dispatch);
  }, [])
  
  return ( 
    <div className='home'>
      <Header title='火车票' onBack={onBack}/>
      <City
        from={from}
        to={to}
        { ...cbs }
      />
      <CitySelector
        cityData={cityData}
        isLoading={isLoadingCityData}
        show={isCitySelectorVisible}
        {...citySelectorCbs}
      />
      <h1>首页</h1>
    </div>
  );
}

export default connect(
  function mapStateToprops(state) {
    return state;
  },
  function mapDispatchToProps(dispatch) {
    return { dispatch };
  })(Home);