import React from 'react';
import '../Input/Input.css';

const input = (props) => {
    
    let inputElement = null;
    let icon = null;

    if(props.errorMessage!==""){
        icon = <i className="fas fa-exclamation-circle"></i>;
    }   
    else
        icon = null;

    switch(props.inputType){
        case('input'):
            inputElement = <div className="space">
                                <input className="InputElement" 
                                    placeholder={props.placeholder} 
                                    type={props.type} 
                                    required={props.required}
                                    onChange={props.onChange} 
                                />
                                <p className="error">
                                    {icon}
                                    {props.errorMessage}
                                </p>
                            </div>;
            break;
        case('textarea'):
            inputElement = <div className="space">
                                <textarea className="InputElement" 
                                    placeholder={props.placeholder} 
                                    required={props.required}
                                    onChange={props.onChange}
                                />
                            </div>;
            break;
        case('radio'):
            inputElement = <div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type={props.type} className="custom-control-input" id="customRadio1" name="gender" value="Male"/>
                                    <label class="custom-control-label" for="customRadio1">Male</label>
                                </div>
                                <div class="custom-control custom-radio custom-control-inline">
                                    <input type={props.type} class="custom-control-input" id="customRadio2" name="gender" value="Female" />
                                    <label class="custom-control-label" for="customRadio2">Female</label>
                                </div>
                            </div>;                            
            break;
        case('submit'):
            inputElement = <button  className=" submitButton" type={props.type} name={props.name}>{props.name}</button>;
            break;
        default:
            inputElement = <input className="InputElement" {...props}/>;
    }
    
    return(
        <div>
            {inputElement}
        </div>
    );
};

export default input;