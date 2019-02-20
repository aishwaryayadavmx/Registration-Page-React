import React from 'react';
import './Header.css';

const header = (props) =>{
    return(
        <div className="container">
            <div className="row col-sm-12">
                <img src={props.url} className="Image"/>
                <div className="text">Admin Console</div>
            </div>
            
        </div>
    );
}

export default header;
