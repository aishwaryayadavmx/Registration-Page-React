import React, { Component } from 'react';
import './App.css';
import Input from './components/Input/Input';
import Header from './components/Header/Header';
import logo from './assets/mscripts.png';

class App extends Component {
  
  state = {
    styles: {}
  }

  inputChangedHandler = (event,placeholder) => {
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
            <div className="col-sm-12">
              <h1 >Create an account</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <Input style={this.state.styles} inputType="input" placeholder={placeholders.firstName} type="text" changed={(event) => this.inputChangedHandler(event,placeholders.firstName)}/>
            </div>
            <div className="col-sm-6">
              <Input style={this.state.styles} inputType="input" placeholder={placeholders.lastName} type="text" changed={(event) => this.inputChangedHandler(event,placeholders.lastName)}/>
            </div>
          </div>
          <div className="row">
              <div className="col-sm-2 containers">
                <div className="gender">Gender</div>
              </div>
              <div className="col-sm-2">
                <div class="containers">Male
                  <input type="radio" checked="checked" name="radio" />
                  <span class="checkmark"></span>
                </div>
              </div>
              <div className="col-sm-2">
                <div class="containers">Female
                  <input type="radio" name="radio" />
                  <span class="checkmark"></span>
                </div>
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
            <div className="col-sm-12">
              <Input inputType="textarea" placeholder="Short bio"/>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <Input inputType="submit" type="submit" name="CREATE ACCOUNT"/>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
