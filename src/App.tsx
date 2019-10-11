/*
 * @Description: 
 * @Author: Jensen
 * @Github: https://github.com/Jensen02
 * @Date: 2019-10-09 22:56:31
 * @LastEditors: Jensen
 * @LastEditTime: 2019-10-09 22:56:31
 */

import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Home from './pages/home/Home';
import Order from './pages/order/Order';
import Ticket from './pages/ticket/Ticket';
import Select from './pages/select/Select'; 

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route path='/order' component={ Order } />
          <Route path='/select' component={ Select } />
          <Route path='/ticket' component={ Ticket } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
