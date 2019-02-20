import React from 'react';
import './Header.css';

const header = (props) =>{
    return(
        <div>
            <nav className="navbar navbar-expand-sm bg-light navbar-dark navbar-custom">
                <a className="navbar-brand" href="#">
                    <img src={props.url} className="Image"/>
                </a>
                <ul className="navbar-nav">
                    <li className="text">
                        Admin Console
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default header;
