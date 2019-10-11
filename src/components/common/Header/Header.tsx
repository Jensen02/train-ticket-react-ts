import React from 'react';
import { Icon } from 'antd';
import { Func } from '../../../interface/interface';
import './Header.css';

interface IProps {
  title: string,
  onBack: Func,
}

const Header: React.FC<IProps> = (props) => {
  const { title, onBack } = props;
  return (
    <div className='header'>
      <div className='header-back' onClick={onBack}>
        <Icon
          type='left'
          style={{fontSize: '20px'}}
        />
      </div>
      <div className='header-title'>
        <h3>{ title }</h3>
      </div>
    </div>
  );
}

export default Header;