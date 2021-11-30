import React from 'react';
import "./Container.css";
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
const Trigger = ({ triggerText, buttonRef, showModal }) => {
  return (
    <MuiThemeProvider>
      <RaisedButton 
        backgroundColor='#0077c0' 
        variant="contained"
        fullWidth 
        style={{margin: '15px 0'}}
        labelColor='white'
        className="btn btn-lg btn-danger center modal-button"
        ref={buttonRef}
        onClick={showModal}
      >
        {triggerText}
      </RaisedButton >
    </MuiThemeProvider>
  );
};
export default Trigger;