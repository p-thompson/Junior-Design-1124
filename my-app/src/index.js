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
import SpecificProfileViewSearch from './SpecificProfileViewSearch';
import CreateTask from './CreateTask';
import UpdateAccount from './UpdateAccount';
ReactDOM.render(
  <BrowserRouter>
    <Route exact path="/" component={Login} />
    <Route path='/createaccount' component={CreateAccount}/>
    <Route path="/forgotpassword" component={ForgotPassword}/>
    <Route path="/searchscreen" component={SearchScreen}/>
    <Route path='/dashboard' component={Dashboard}/>
    <Route path="/createtask" component={CreateTask}/>

    <Route path = '/accountpersonalization' component={AccountPersonalization}/>
    <Route path = '/updateaccount' component={UpdateAccount}/>

    <Route path='/profiles' component={ProfileView}/>
    <Route path='/profileselection' component={SpecificProfileView}/>
    <Route path='/profileselection2' component={SpecificProfileView2}/>
    <Route path='/profileselectionsearch' component={SpecificProfileViewSearch}/>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
