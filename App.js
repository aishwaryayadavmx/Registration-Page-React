import React, { Component } from 'react';
import './App.css';
import Input from './components/Input/Input';
import Header from './components/Header/Header';
import logo from './assets/mscripts.png';

class App extends Component {
  
  state = {
    styles: {}
  }

  inputChangedHandler = (placeholder) => {
    const styling={
      placeholderColor: "#898989",
        labelColor: "#4AA2CC",
        labelSize: "14px",
        fontStyle: "normal",
        useBorderColor: true,
        inInput: true,
        timeMove: 200 
    }
    this.setState(
      {styles: styling}
    )
    
  }
  
  render() {
    let placeholders = {
      firstName: "First name",
      lastName: "Last name",
      email: "E-mail",
      phoneNumber: "Phone number",
    }
    

    return (
      <div>

     <Header url={logo} />
      <div className="container App">
        <div>
          <div className="row">
            <div className="col-sm-6">
              <Input style={this.state.styles} inputType="input" placeholder={placeholders.firstName} type="text" onchange={() => this.inputChangedHandler(placeholders.firstName)}/>
            </div>
            <div className="col-sm-6">
              <Input style={this.state.styles} inputType="input" placeholder={placeholders.lastName} type="text" onchange={() => this.inputChangedHandler(placeholders.lastName)}/>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2">
              <label>Gender</label>
            </div>
            <div className="col-sm-2">
              <label><Input inputType="radio" value="Male" type="radio" checked="checked" name="radio"/>Male</label>
            </div>
            <div className="col-sm-2">
              <label><Input inputType="radio" value="Female" type="radio" name="radio"/>Female</label>
            </div>
            <div className="col-sm-6">
              <Input inputType="input" placeholder="Date of birth"/>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <Input inputType="input" placeholder="Phone number" type="tel"/>
            </div>
            <div className="col-sm-6">
              <Input inputType="input" placeholder="E-mail" type="email"/>
            </div>
          </div>
          <div className="row">
            <div>
              <Input inputType="textarea" placeholder="Short bio"/>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
