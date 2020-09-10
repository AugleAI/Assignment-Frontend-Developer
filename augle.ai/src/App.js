import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Top from './components/Top';
import SidebarNav from './components/SidebarNav';
import EmployeeStat from './components/EmployeeStat';
import Attendance from './components/Attendance';
import Abnormal from './components/Abnormal';

const App = () => {
  return (
    <BrowserRouter>
      <SidebarNav />
      <Top />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/log' component={EmployeeStat} />
        <Route exact path='/attendance' component={Attendance} />
        <Route exact path='/abnormal' component={Abnormal} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;