import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import { connect } from 'react-redux';
import PhoneInput from 'react-phone-number-input';

import Input from './components/Input/Input';
import Header from './components/Header/Header';
import logo from './assets/mscripts.png';
import './App.css';
import "react-datepicker/dist/react-datepicker.css";
import 'react-phone-number-input/style.css';

class App extends Component {
      
  render() {  

    return (
      <div>
      <Header url={logo} />
        <div className="container App">
          <div>
            <div className="row">
              <div className="col-lg-12">
                <h3>Create an account</h3>
              </div>
            </div>
            <form onSubmit={this.props.FormSubmitHandler}>
              <div className="row">
                <div className="col-lg-6">
                  <Input 
                    inputType="input" 
                    placeholder="First name" 
                    type="text" 
                    required="required"
                    errorMessage={this.props.firstNameError} 
                    onChange={this.props.FirstNameChangedHandler}/>
                </div>
                <div className="col-lg-6">
                  <Input 
                    inputType="input" 
                    placeholder="Last name" 
                    type="text" 
                    errorMessage={this.props.lastNameError}
                    required="required"
                    onChange={this.props.LastNameChangedHandler}/>
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
                      onChange={this.props.GenderChangedHandler}/>
                  </div>
                  <div className="col-sm-4 col-lg-2 spaceForError">
                    <Input 
                      inputType="radio"
                      type="radio"
                      gender="Female"
                      required="required"
                      className="gender"
                      onChange={this.props.GenderChangedHandler}/>
                  </div>
                <div className="col-lg-6 spaceForError">
                    <DatePicker  
                      className="date" 
                      placeholderText="Date Of Birth"
                      selected={this.props.dateOfBirth}
                      showYearDropdown
                      scrollableYearDropdown
                      yearDropdownItemNumber={30}
                      maxDate={new Date()}
                      showMonthDropdown
                      useShortMonthInDropdown
                      title="Date of Birth (DD/MM/YYYY)"
                      onChange={this.props.DateChangedHandler}/>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 ">
                  <div className="spaceForError">
                    <PhoneInput
                      placeholder="Phone number"
                      value={ this.props.phoneNumber }
                      required="required"
                      className="phone"
                      title="Phone number"
                      onChange={this.props.PhoneNumberChangedHandler }
                      />
                      <p className="error">
                          {this.props.icon}
                          {this.props.phoneNumberError}
                      </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <Input 
                    inputType="input" 
                    placeholder="E-mail" 
                    type="email" 
                    required="required"
                    errorMessage={this.props.emailError}
                    onChange={this.props.EmailChangedHandler}/>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <Input 
                    inputType="textarea" 
                    placeholder="Short bio" 
                    required="required"
                    onChange={this.props.ShortBioChangedHandler}
                    errorMessage={this.props.shortBioError}/>
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

const mapStateToProps = state => {
  return {
    firstName: state.firstName,
    firstNameError: state.firstNameError,
    lastName : state.lastName,
    lastNameError: state.lastNameError,
    gender: state.gender,
    dateOfBirth: state.dateOfBirth,
    dateOfBirthError: state.dateOfBirthError,
    phoneNumber: state.phoneNumber,
    phoneNumberError: state.phoneNumberError, 
    email: state.email,
    emailError: state.emailError,
    shortBio: state.shortBio,
    icon: state.icon
  };
};

const mapDispatchToProps = dispatch => {
  return {
    FirstNameChangedHandler: (event) => dispatch({type: 'fNameChanged', event: event}),
    LastNameChangedHandler: (event) => dispatch({type: 'lNameChanged', event: event}),
    GenderChangedHandler: (event) => dispatch({type: 'genderChanged', event: event}),
    DateChangedHandler: (event) => dispatch({type: 'dateChanged', event: event}),
    PhoneNumberChangedHandler: (event) => dispatch({type: 'pNumberChanged', event: event}),
    EmailChangedHandler: (event) => dispatch({type: 'emailChanged', event: event}),
    ShortBioChangedHandler: (event) => dispatch({type: 'sBioChanged', event: event}),
    FormSubmitHandler: (event) => dispatch({type: 'formSubmit', event: event})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
