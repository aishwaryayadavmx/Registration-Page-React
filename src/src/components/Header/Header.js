import React from 'react';
import './Header.css';

const header = (props) =>{
    return(
        <div>
            <nav className="navbar navbar-expand-sm bg-light navbar-custom">
                    <a className="navbar-brand" href="http://mscripts.com/" target="_blank" rel="noopener noreferrer">
                        <img src={props.url} className="Image" alt="Mscripts logo"/>
                    </a>
                    <span className="navbar-text text">
                        Admin&nbsp;Console
                    </span>
                
            </nav>
            
        </div>
    );
}

export default header;
