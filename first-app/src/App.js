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
    
    <div class="row">
      <Helmet>
        <style>{'body { background-color: LightBlue; }'}</style>
      </Helmet>
      <h1 class="font-weight-bold py-3 mb-4">
        <center>Account Settings</center>
      </h1>
      <div class="profile">
        <tr>
          <div class = "propic">
          </div>
        </tr>
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
            </div>
            <div class = "save">
              <button class="savechanges">Save Changes</button>
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
