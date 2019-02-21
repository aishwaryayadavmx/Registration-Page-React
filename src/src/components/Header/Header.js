import React from 'react';
import './Header.css';

const header = (props) =>{
    return(
        <div>
            <nav className="navbar navbar-expand-sm bg-light navbar-custom">
                <a className="navbar-brand" href="#">
                    <img src={props.url} className="Image"/>
                </a>
                <span className="navbar-text text">
                    Admin Console
                </span>
            </nav>
        </div>
    );
}

export default header;
