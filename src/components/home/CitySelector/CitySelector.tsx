/*
 * @Description: 城市列表浮层
 * @Author: Jensen
 * @Github: https://github.com/Jensen02
 * @Date: 2019-10-11 17:59:13
 * @LastEditors: Jensen
 * @LastEditTime: 2019-10-11 21:35:09
 */

import React, { useState, useMemo, useEffect, useCallback } from 'react';
import classnames from 'classnames';
import { Input, Icon } from 'antd';
import './CitySelector.css';

import { Section, Item } from '../../../interface/interface';
// import { getCityList } from '../../../actions/home_action';
// import { on } from 'cluster';

// 城市选项组件
interface ItemProps {
  name: string,
  onSelect: any,
}
const CityItem: React.FC<ItemProps> =  (props) => {
  const { name, onSelect } = props;
  return (
    <li className='city-li' onClick={() => onSelect(name)}>
      { name }
    </li>
  );
}

// 城市列表块组件
interface SectionProps {
  title: string,
  onSelect: any,
  cities: Array<Item>,
}
const CitySection: React.FC<SectionProps> = (props) => {
  const { title, onSelect, cities } = props;

  return (
    <ul className='city-ul'>
      <li className='city-li' key='title' data-cate={title}>
        { title }
      </li>
      {
        (cities && cities.length > 0) && cities.map((city) => {
          return (
          <CityItem
            name={city.name}
            key={city.name}
            onSelect={onSelect}
          />);
        })
      }
    </ul>
  );
}

interface AlphaProps {
  alpha: string,
  toAlpha: any,
}
const AlphaIndex: React.FC<AlphaProps> = (props) => {
  const { alpha, toAlpha } = props;
  return (
    <i
      className='city-index-item'
      key={alpha}
      onClick={() => toAlpha(alpha)}
    >{alpha}</i>
  );
}

// 城市列表组件
interface ListProps {
  cityData: Array<Section>,
  onSelect: any,
}
const CityList: React.FC<ListProps> = (props) => {
  const { cityData, onSelect } = props;

  const toAlpha = (alpha: string) => {
    const ele = document.querySelector(`[data-cate='${alpha}']`);
    ele && ele.scrollIntoView();
  }

  const alphaArr = Array.from(new Array(26), (item, index) => {
    return String.fromCharCode(65 + index);
  })

  return (
    <div className='city-list'>
      <div className='city-cate'>
        {
          cityData && cityData.map(section => {
            return (
            <CitySection
              key={section.title}
              title={section.title}
              cities={section.citys}
              onSelect={onSelect}
            />);
          })
        }
      </div>
      <div className="city-index">
        {
          alphaArr.map(alpha => {
            return (
              <AlphaIndex alpha={alpha} toAlpha={toAlpha} />
            );
          })
        }
      </div>
    </div>
  );
}

// 顶部搜索栏组件
interface CitySelectorProps {
  show: boolean,
  cityData: Array<Section>,
  isLoading: boolean,
  onBack: any,
  onSelect: any,
  getCityList: any,
}
const CitySelector: React.FC<CitySelectorProps> = (props) => {
  const {
    show,
    onBack,
    onSelect,
    isLoading,
    cityData,
    getCityList
  } = props;

  const [searchKey, setSearchKey] = useState('');
  const key = useMemo(() => {
    return searchKey.trim();
  }, [searchKey]);

  const outputCityList = () => {
    if(isLoading) {
      return (
        <div>loading...</div>
      );
    }

    if(cityData) {
      return (
        <CityList
          cityData={cityData}
          onSelect={onSelect}
        />
      );
    }

    return (
      <div>error</div>
    );
  }

  useEffect(() => {
    if(!show || isLoading || cityData) {
      return;
    }
    getCityList();
  }, [show, isLoading, cityData]);


  return (
    <div className={classnames('city-selector', {hidden: !show})}>
      <div className='city-fixd'>
        <div className='city-search'>
          <div className='search-back' onClick={() => onBack()}>
            <Icon
              type='left'
              style={{fontSize: '20px'}}
            />
          </div>
          <div className='search-input-wrapper'>
          <Input
            placeholder="请输入城市名称"
            className='search-input'
            value={searchKey}
            onChange={(e) => { setSearchKey(e.target.value) }}
            allowClear
            prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />}
          />
          </div>
        </div>
      </div>
      { outputCityList() }
    </div>
  );
}

export default CitySelector;