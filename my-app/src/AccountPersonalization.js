import React, { useState } from "react";
import Helmet from 'react-helmet';
import './AccountPersonalization.css';
import { Typography } from '@material-ui/core';
import VillageNavBar from './VillageNavBar';

function AccountPersonalization() {

  return (
  
    <div class="body">
      <Helmet>
        <style>{'body { background-color: LightGreen; }'}</style>
      </Helmet>
      <h1 class="title">
        <center><Typography component="h1" variant="h6" color="inherit" noWrap >Account Personalization</Typography></center>
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
              <leftCenter><center><Typography component="h1" variant="h6" color="inherit" noWrap >Choose a Role:</Typography></center></leftCenter>
          </h3>
          <tr>
            <div class= "roles">
              <th>Parent</th>
              <th>Volunteer</th>
            </div>
          </tr>
          <tr>
            <h4 class="font-weight-bold py-3 mb-4">
              <leftCenter><center><Typography component="h1" variant="h6" color="inherit" noWrap >Times Needed/Availability:</Typography></center></leftCenter>
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
          <VillageNavBar/>
        </table> 
      </div>
    </div>    
  );
}



export default AccountPersonalization;
