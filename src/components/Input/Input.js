import React from 'react';
import '../Input/Input.css';

const input = (props) => {
    
    let inputElement = null;
    let icon = null;

    if(props.errorMessage!=""){
        icon = <i class="fas fa-exclamation-circle"></i>;
    }   
    else
        icon = null;
        
    switch(props.inputType){
        case('input'):
            inputElement = <div className="space">
                                <input className="InputElement" {...props} />
                                <p className="error">
                                    {icon}
                                    {props.errorMessage}
                                </p>
                            </div>;
            break;
        case('textarea'):
            inputElement = <div className="space"><textarea className="InputElement" {...props}/></div>;
            break;
        case('radio'):
            inputElement = <input  {...props} />;
            break;
        case('submit'):
            inputElement = <button  className=" submitButton" {...props}>{props.name}</button>;
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