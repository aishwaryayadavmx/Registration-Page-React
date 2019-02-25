import { isValidPhoneNumber } from 'react-phone-number-input';
import React from 'react';

const initialState = {
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
    shortBio: "",
    icon: null
}

const reducer = (state = initialState, action) => {
    let numbers = /\d/;
    switch(action.type){
        case 'fNameChanged':
            let name = action.event.target.value;
            if(numbers.test(name)){
                initialState.firstNameError =  " Enter valid first name";
                return {
                    ...initialState
                }
            }
            else{
                initialState.firstName = action.event.target.value;
                initialState.firstNameError = "";
                return {
                    ...initialState
                }
            }
        case 'lNameChanged':
            let lname = action.event.target.value;
            if(numbers.test(lname)){
                initialState.lastNameError = " Enter valid last name";
                return {
                    ...initialState
                }
            }
            else{
                initialState.lastName = action.event.target.value;
                initialState.lastNameError = "";
                return {
                    ...initialState
                }
            }
        case 'genderChanged':
            let gender = action.event.target.value;
            let checked = action.event.target.checked;

            if(checked){
                if(gender==="Male")
                {
                    initialState.gender = "M";
                    return{
                        ...initialState
                    }
                }
                else
                {
                    initialState.gender = "F";
                    return{
                        ...initialState
                    }
                }    
            }
            break;
        case 'dateChanged':
            initialState.dateOfBirth = action.event;
            return{
                ...initialState
            }
        case 'pNumberChanged':
            let pNumber = action.event;
            if(initialState.phoneNumberError !== "")
                initialState.icon = <i className="fas fa-exclamation-circle"></i>;
            else
                initialState.icon = null;
            if(pNumber){
                if(!isValidPhoneNumber(pNumber)){
                    initialState.phoneNumberError = " Enter valid phone number";
                }
                else{
                    initialState.phoneNumber = pNumber;
                    initialState.phoneNumberError = "";
                    initialState.icon = null;
                }
            }
            return{
                ...initialState
            }
        case 'emailChanged':
            let email = action.event.target.value;
            let characters = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            
            if(!characters.test(email) && email){
                initialState.emailError = " Enter valid email address";
                return{
                    ...initialState
                }
            }
            else{
                initialState.email = email;
                initialState.emailError = "";
                return{
                    ...initialState
                }
            }
        case 'sBioChanged':
            initialState.shortBio = action.event.target.value;
            return{
                ...initialState
            }
        default: return{
            ...initialState
        }
    }
}

export default reducer;