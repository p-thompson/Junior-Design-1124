import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './Login';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route } from 'react-router-dom';
import CreateAccount from './CreateAccount';
import ForgotPassword from './ForgotPassword';
import Dashboard from './dashboard';
import AccountPersonalization from './AccountPersonalization';
import SearchScreen from './SearchScreen';
import ProfileView from './ProfileView';
import SpecificProfileView from './SpecificProfileView';
import SpecificProfileView2 from './SpecificProfileView2';
import UpdateAccount from './UpdateAccount';
ReactDOM.render(
  <BrowserRouter>
    <Route exact path="/" component={Login} />
    <Route path='/createaccount' component={CreateAccount}/>
    <Route path="/forgotpassword" component={ForgotPassword}/>
    <Route path="/searchscreen" component={SearchScreen}/>
    <Route path='/dashboard' component={Dashboard}/>

    <Route path = '/accountpersonalization' component={AccountPersonalization}/>
    <Route path = '/updateaccount' component={UpdateAccount}/>

    <Route path='/profiles' component={ProfileView}/>
    <Route path='/profileselection' component={SpecificProfileView}/>
    <Route path='/profileselection2' component={SpecificProfileView2}/>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
