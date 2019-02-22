import React from 'react';
import '../Input/Input.css';

const input = (props) => {
    
    let inputElement = null;
    let icon = null;
    let radioButtonField = null;

    if(props.errorMessage!=="")
        icon = <i className="fas fa-exclamation-circle"></i>;
    else
        icon = null;

    switch(props.inputType){
        case('input'):
            inputElement = <div className="spaceForError">
                                <input className="InputElement" 
                                    placeholder={props.placeholder} 
                                    type={props.type} 
                                    required={props.required}
                                    onBlur={props.onChange} 
                                />
                                <p className="error">
                                    {icon}
                                    {props.errorMessage}
                                </p>
                            </div>;
            break;
        case('textarea'):
            inputElement = <div className="spaceForError">
                                <textarea className="InputElement" 
                                    placeholder={props.placeholder} 
                                    required={props.required}
                                    onChange={props.onChange}
                                />
                            </div>;
            break;
        case('radio'):
            if(props.gender === "Male")
                radioButtonField="customRadio1";
            else
                radioButtonField="customRadio2";
            inputElement = <div className={props.className}>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type={props.type} required={props.required} checked={props.checked} 
                                        onChange={props.onChange} className="custom-control-input" id={radioButtonField} 
                                        name="gender" value={props.gender} />
                                    <label className="custom-control-label" htmlFor={radioButtonField}>{props.gender}</label>
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