import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './Login';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route } from 'react-router-dom';
import CreateAccount from './CreateAccount';
import ForgotPassword from './ForgotPassword';

ReactDOM.render(
  <BrowserRouter>
    <Route exact path="/" component={Login} />
    <Route path='/createaccount' component={CreateAccount}/>
    <Route path="/forgotpassword" component={ForgotPassword}/>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
