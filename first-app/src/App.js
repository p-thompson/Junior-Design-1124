import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Helmet from 'react-helmet';
import './App.css';

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    
    <div class="body">
      <Helmet>
        <style>{'body { background-color: LightGreen; }'}</style>
      </Helmet>
      <h1 class="font-weight-bold py-3 mb-4">
        <center>Account Settings</center>
      </h1>
      <div class="profile">
        <div class="inner">
          <div class="propic">
            <div class = "img">
              <img src="https://tr.rbxcdn.com/7238712e1a7d1a9a0e140643d9323c03/420/420/Avatar/Png" alt="MyPic" width="170px"></img>
            </div>
          </div>
          <div class="prop">
            
          </div>
          <div class="personal">
              <tr class="bio">Name: Jeffrey Etoile</tr>
              <tr class = "bio">Bio: Loves Dogs, Cooking</tr>
              <tr class="bio">Rating: 4.98/5</tr>     
          </div>  
        </div>
        <div class = "changling">
          <th class = "change">Change Name</th>
        </div>
        <div class = "changling">
          <th class = "change">Change Bio</th>
        </div>
        <div class = "changling">
          <th class = "change">Change Contact Information</th>
        </div>  
        <div class = "changling">
          <th class = "change">Change Username/Password</th>
        </div>        
      </div>
      <div class = "roletable">
        <table>
          <h3 class="font-weight-bold py-3 mb-4">
              <leftCenter>Choose a Role</leftCenter>
          </h3>
          <tr>
            <div class= "roles">
              <th>Parent</th>
              <th>Volunteer</th>
            </div>
          </tr>
          <tr>
            <h4 class="font-weight-bold py-3 mb-4">
              <leftCenter>Times Needed/Availability:</leftCenter>
            </h4>
            <tr>
              <th class = "tofrom">To:</th>
              <div class="dropdown">
                <button class="dropbtn">Choose Time</button>
                <div class="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>
              <th class = "tofrom">From:</th>
              <div class="dropdown">
                <button class="dropbtn">Choose Time</button>
                <div class="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>
              <h4 class="font-weight-bold py-3 mb-4">
                <leftCenter>  </leftCenter>
              </h4>   
            </tr>
          </tr>
          <tr>
            <div class = "services">  
              <h4 class="servicetitle">
                <leftCenter>Services:</leftCenter>
              </h4>
              <label class="container">Childcare
                <input type="checkbox" checked="checked"></input>
                <span class="checkmark"></span>
              </label>
              <label class="container">Looking for Work
                <input type="checkbox" checked="checked"></input>
                <span class="checkmark"></span>
              </label>
              <label class="container">Carpooling
                <input type="checkbox" checked="checked"></input>
                <span class="checkmark"></span>
              </label>
              <label class="container">Food Providers
                <input type="checkbox" checked="checked"></input>
                <span class="checkmark"></span>
              </label>
            </div>
            <div class = "save">
              <button class="savechanges">Save All Changes</button>
            </div>
          </tr>
        </table> 
      </div>
    </div>    
  );
}
 /*
  return (
    <div className="Login" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
      <Helmet>
        <style>{'body { background-color: SeaGreen; }'}</style>
      </Helmet>
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email:{' '}</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password:{'   '}</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="Forgot Password?">
          <Form.Label>Forgot Password?</Form.Label>
          {/* <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /> }
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
}
*/



export default App;
