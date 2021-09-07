// All necessary imports;
import React, {Component} from 'react';
import {Helmet} from 'react-helmet'
import './App.css';
import Login from "./Login";
import CreateAccount from "./CreateAccount";
import ForgotPassword from "./ForgotPassword";

class App extends Component {
render() {
    return (
      <div className= "App">
        <Helmet>
        <title>ItTakesAVillage</title>
      </Helmet>
      <Login/>
      </div>
    );
  }
}
export default App;