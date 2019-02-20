import React from 'react';
import '../Input/Input.css';

const input = (props) => {
    
    let inputElement = null;

    switch(props.inputType){
        case('input'):
            inputElement = <input className="InputElement" {...props} onchange={props.onchange}/>;
            break;
        case('textarea'):
            inputElement = <textarea className="InputElement" {...props} onchange={props.onchange}/>;
            break;
        case('radio'):
            inputElement = <input  {...props} />;
            break;
        default:
            inputElement = <input className="InputElement" {...props} onchange={props.onchange}/>;
    }
    
    return(
        <div>
            {inputElement}
        </div>
    );
};

export default input;