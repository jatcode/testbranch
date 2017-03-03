import React from 'react';
import './layout.css'

export function Header (props){
  return (
    <div className="header">
        <div className="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
            <a className="pure-menu-heading" href="">{'PB_0.0.2'}</a>
            <ul className="pure-menu-list">
                {/* <li className="pure-menu-item pure-menu-selected"><a href="#" className="pure-menu-link">Home</a></li> */}
                {/* <li className="pure-menu-item"><a href="#" className="pure-menu-link">Tour</a></li>
                <li className="pure-menu-item"><a href="#" className="pure-menu-link">Sign Up</a></li> */}
                {props.children}
            </ul>
        </div>
    </div>
  );
}

export function Container (props){
  return (
    <div className="content-wrapper">
      
      {props.children}
    </div>
  );
}
export function Content (props){
  return (
    <div className="content">
      
      {props.children}
    </div>
  );
}

export function Footer (props){
  return (
    <div className="footer l-box is-center">
        RulesWare CopyRights 2017 
        {props.children}
    </div>
  );
}

