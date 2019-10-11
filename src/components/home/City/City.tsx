import React from 'react';
import { Icon } from 'antd';
import './City.css';

interface IProps {
  from: string,
  to: string,
  showCitySelector: any,
  exchangeFromTo: any,
}

const City: React.FC<IProps> = (props) => {
  const {
    from,
    to,
    showCitySelector,
    exchangeFromTo
  } = props;

  return (
    <div className='city'>
      <div className='city-from' onClick={() => showCitySelector(true)}>
        <input
          type="text"
          name="from"
          readOnly
          value={from}
        />
      </div>
      <div className='city-switch' onClick={() => exchangeFromTo()}>
        <Icon type='swap' style={{ fontSize: '25px' }}/>
      </div>
      <div className='city-to' onClick={() => showCitySelector(false)}>
      <input
          type="text"
          name="to"
          readOnly
          value={to}
        />
      </div>
    </div>
  );
}

export default City;