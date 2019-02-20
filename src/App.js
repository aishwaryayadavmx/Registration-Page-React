import React, { Component } from 'react';
import './App.css';
import Input from './components/Input/Input';
import Header from './components/Header/Header';
import logo from './assets/mscripts.png';

class App extends Component {
  
  state = {
    firstName: "",
    firstNameError: "",
    lastName :"",
    lastNameError: "",
    gender: "",
    dateOfBirth: "",
    dateOfBirthError: "",
    phoneNumber: "",
    phoneNumberError: "",
    email: "",
    emailError: "",
    shortBio: "",
    shortBioError: ""
  }
  
  FirstNameChangedHandler = (event) => {
    let name = event.target.value;
    let numbers = /\d/;
    if(numbers.test(name)){
      this.setState({
        firstNameError: " First name cannot contain numbers"
      })
    }
    else{
      this.setState({
        firstName: event.target.value,
        firstNameError: ""
      });
    }
  }

  LastNameChangedHandler = (event) => {
    let name = event.target.value;
    let numbers = /\d/;
    if(numbers.test(name)){
      this.setState({
        lastNameError: " Last name cannot contain numbers"
      })
    }
    else{
      this.setState({
        lastName: event.target.value,
        lastNameError: ""
      });
    }
  }

  PhoneNumberChangedHandler = (event) => {
    let number = event.target.value;
    let alphabets = /[A-Za-z]/;
    if(alphabets.test(number)){
      this.setState({
        phoneNumberError: " Phone number cannot contain alphabets"
      });
    }
    else if(number > 9999999999){
      this.setState({
        phoneNumberError: " Phone number cannot contain more than 10 digits"
      });
    }
    else{
      this.setState({
        phoneNumber: event.target.value,
        phoneNumberError: ""
      });
    }
  }

  EmailChangedHandler = (event) => {
    let email = event.target.value;
    let characters = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!characters.test(email)){
      this.setState({
        emailError: " Enter valid email address"
      });
    }
    else{
      this.setState({
        email: event.target.value,
        emailError: ""
      });
    }
  }

  render() {    

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
              <Input 
                inputType="input" 
                placeholder="First name" 
                type="text" 
                errorMessage={this.state.firstNameError} 
                onChange={event => {this.FirstNameChangedHandler(event)}}/>
            </div>
            <div className="col-sm-6">
              <Input 
                inputType="input" 
                placeholder="Last name" 
                type="text" 
                errorMessage={this.state.lastNameError}
                onChange={event => {this.LastNameChangedHandler(event)}}/>
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
              <Input 
                inputType="input" 
                placeholder="Date of birth" 
                errorMessage={this.state.dateOfBirthError}/>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <Input 
                inputType="input" 
                placeholder="Phone number" 
                type="tel" 
                errorMessage={this.state.phoneNumberError}
                onChange={event => {this.PhoneNumberChangedHandler(event)}}/>
            </div>
            <div className="col-sm-6">
              <Input 
                inputType="input" 
                placeholder="E-mail" 
                type="email" 
                errorMessage={this.state.emailError}
                onChange={event => {this.EmailChangedHandler(event)}}/>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <Input inputType="textarea" placeholder="Short bio" errorMessage={this.state.shortBioError}/>
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
