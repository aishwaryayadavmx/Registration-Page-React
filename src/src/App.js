import React, { Component } from 'react';
import './App.css';
import Input from './components/Input/Input';
import Header from './components/Header/Header';
import logo from './assets/mscripts.png';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class App extends Component {
  
  constructor(props) {
    super(props);
 
     this.handleDateChange = this.handleDateChange.bind(this);
  }
 
  handleDateChange= (date) => {
    
    let day="";
    let month="";
    let year="";
    let dob=null;

    day = date.toString().split(" ")[2];
    month = date.toString().split(" ")[1];
    year = date.toString().split(" ")[3];

    if(month == "Jan")
      month = "01";
    else if(month == "Feb")
      month = "02";
    else if(month == "Mar")
      month = "03";
    else if(month == "Apr")
      month = "04";
    else if(month == "May")
      month = "05";
    else if(month == "Jun")
      month = "06";
    else if(month == "Jul")
      month = "07";
    else if(month == "Aug")
      month = "08";
    else if(month == "Sep")
      month = "09";
    else if(month == "Oct")
      month = "10";
    else if(month == "Nov")
      month = "11";
    else if(month == "Dec")
      month = "12";

    dob = new Date(year+"-"+month+"-"+day);
    console.log(dob);
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

  GenderChangedHandler = event => {
    let gender = event.target.value;
    let checked = event.target.checked;

    if(checked)
      this.setState({
        gender: gender
      });
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

  ShortBioChnagedHandler = (event) => {
    this.setState({
      shortBio: event.target.value
    });
  }

  FormSubmitHandler = (event) => {

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
                <div className="col-lg-6">
                  {/* <Input 
                    inputType="input" 
                    placeholder="Date of birth" 
                    required
                    errorMessage={this.state.dateOfBirthError}
                    onChange={event => {this.DateOfBirthChangeHandler(event)}}/> */}
                    <DatePicker  
                      className="date spaceForError" 
                      placeholderText="Date Of Birth"
                      selected={this.state.dateOfBirth}
                      onChange={this.handleDateChange}/>
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
                    onChange={event => {this.ShortBioChnagedHandler(event)}}
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
