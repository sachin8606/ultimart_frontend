import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Switch,Route} from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AboutProduct from './AboutProduct';
import UserLog from './UserLog';
import CartUser from './CartUser';
import Signup from './Signup';
ReactDOM.render(
    <>
    <BrowserRouter>
    <Switch>
    <Route exact path = '/' component={App}/>
    <Route exact path = '/AboutProduct' component={AboutProduct}/>
    <Route exact path = '/UserLog' component={UserLog}/>
    <Route exact path = '/CartUser' component={CartUser}/>
    <Route exact path = '/sign-up' component={Signup}/>
    </Switch>
    </BrowserRouter>
    </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
