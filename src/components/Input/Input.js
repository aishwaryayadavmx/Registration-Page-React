import React from 'react';
import '../Input/Input.css';

const input = (props) => {
    
    let inputElement = null;

    switch(props.inputType){
        case('input'):
            inputElement = <input className="InputElement" {...props} onChange={props.changed}/>;
            break;
        case('textarea'):
            inputElement = <textarea className="InputElement" {...props} onChange={props.changed}/>;
            break;
        case('radio'):
            inputElement = <input  {...props} />;
            break;
        case('submit'):
            inputElement = <button  className="InputElement submitButton" {...props}>{props.name}</button>;
            break;
        default:
            inputElement = <input className="InputElement" {...props} onChange={props.changed}/>;
    }
    
    return(
        <div>
            {inputElement}
        </div>
    );
};

export default input;