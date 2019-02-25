import React, { Component } from 'react';
import './App.css';
import Input from './components/Input/Input';
import Header from './components/Header/Header';
import logo from './assets/mscripts.png';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Axios from 'axios';

class App extends Component {
  
  constructor(props) {
    super(props);
 
     this.handleDateChange = this.handleDateChange.bind(this);
  }
 
  handleDateChange= (date) => {
    this.setState({
      dateOfBirth: date
    });
  }

  state = {
    firstName: "",
    firstNameError: "",
    lastName :"",
    lastNameError: "",
    gender: "",
    dateOfBirth: null,
    dateOfBirthError: "",
    phoneNumber: null,
    phoneNumberError: "",
    email: "",
    emailError: "",
    shortBio: ""
  }
  
  FirstNameChangedHandler = (event) => {
    let name = event.target.value;
    let numbers = /\d/;
    if(numbers.test(name)){
      this.setState({
        firstNameError: " Enter valid first name"
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
        lastNameError: " Enter valid last name"
      })
    }
    else{
      this.setState({
        lastName: event.target.value,
        lastNameError: ""
      });
    }
  }

  GenderChangedHandler = event => {
    let gender = event.target.value;
    let checked = event.target.checked;

    if(checked){
      if(gender==="Male")
        this.setState({
          gender: "M"
        });
      else
        this.setState({
          gender: "F"
        });
    }
      
  }

  DateOfBirthChangeHandler = event => {
    this.setState({
      dateOfBirth: event.target.value
    });
  }
  
  PhoneNumberChangedHandler = (event) => {
    let number = event.target.value;
    let alphabets = /[A-Za-z]/;
    if(alphabets.test(number)){
      this.setState({
        phoneNumberError: " Enter valid phone number"
      });
    }
    else if(number > 9999999999){
      this.setState({
        phoneNumberError: " Enter valid phone number"
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
    let characters = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if(!characters.test(email) && email){
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

  ShortBioChangedHandler = (event) => {
    this.setState({
      shortBio: event.target.value
    });
  }

  FormSubmitHandler = (event) => {
    
    event.preventDefault();

    const data={
      firstName:  this.state.firstName,
      lastName: this.state.lastName,
      gender: this.state.gender,
      dateOfBirth:  this.state.dateOfBirth,
      phoneNumber:  this.state.phoneNumber,
      email:  this.state.email,
      shortBio: this.state.shortBio
    }

    Axios.post('http://localhost:3306/insert',data).then(response=>{
      alert(response.data.status);
    });

    this.setState({
        dateOfBirth: null
      });
    event.target.reset();
  }

  render() {  

    return (
      <div>
      <Header url={logo} />
        <div className="container App">
          <div>
            <div className="row">
              <div className="col-lg-12">
                <h3 >Create an account</h3>
              </div>
            </div>
            <form onSubmit={(event) => {this.FormSubmitHandler(event)}}>
              <div className="row">
                <div className="col-lg-6">
                  <Input 
                    inputType="input" 
                    placeholder="First name" 
                    type="text" 
                    required="required"
                    errorMessage={this.state.firstNameError} 
                    onChange={event => {this.FirstNameChangedHandler(event)}}/>
                </div>
                <div className="col-lg-6">
                  <Input 
                    inputType="input" 
                    placeholder="Last name" 
                    type="text" 
                    errorMessage={this.state.lastNameError}
                    required="required"
                    onChange={event => {this.LastNameChangedHandler(event)}}/>
                </div>
              </div>
              <div className="row">
                  <div className="col-sm-5 col-lg-2 spaceForError">
                    <div className="gender">Gender</div>
                  </div>
                  <div className="col-sm-3 col-lg-2 spaceForError">
                    <Input 
                      inputType="radio"
                      type="radio"
                      gender="Male"
                      required="required"
                      className="gender"
                      onChange={event => {this.GenderChangedHandler(event)}}/>
                  </div>
                  <div className="col-sm-4 col-lg-2 spaceForError">
                    <Input 
                      inputType="radio"
                      type="radio"
                      gender="Female"
                      required="required"
                      className="gender"
                      onChange={event => {this.GenderChangedHandler(event)}}/>
                  </div>
                <div className="col-lg-6 spaceForError">
                    <DatePicker  
                      className="date" 
                      placeholderText="Date Of Birth"
                      selected={this.state.dateOfBirth}
                      showYearDropdown
                      scrollableYearDropdown
                      yearDropdownItemNumber={35}
                      showMonthDropdown
                      useShortMonthInDropdown
                      
                      onChange={this.handleDateChange}/>
                      {this.state.dateOfBirthError}
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <Input 
                    inputType="input" 
                    placeholder="Phone number" 
                    type="tel" 
                    required="required"
                    errorMessage={this.state.phoneNumberError}
                    onChange={event => {this.PhoneNumberChangedHandler(event)}}/>
                </div>
                <div className="col-lg-6">
                  <Input 
                    inputType="input" 
                    placeholder="E-mail" 
                    type="email" 
                    required="required"
                    errorMessage={this.state.emailError}
                    onChange={event => {this.EmailChangedHandler(event)}}/>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <Input 
                    inputType="textarea" 
                    placeholder="Short bio" 
                    required="required"
                    onChange={event => {this.ShortBioChangedHandler(event)}}
                    errorMessage={this.state.shortBioError}/>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <Input inputType="submit" type="submit" name="CREATE ACCOUNT"/>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
