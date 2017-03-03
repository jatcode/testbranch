import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';
import { startCase, toLower } from 'lodash/string'
import { withGoogleMap, Marker, GoogleMap } from "react-google-maps";
import { List, Image } from 'semantic-ui-react'

export const MyLink = ({toValue, label}) =>
  <div className='ui compact menu'>
    <Link to={ toValue } className='link item'>
      {label}
    </Link>
  </div>
export const MyLinkItem = ({toValue, label}) =>
    <Link to={ toValue } className='pure-menu-item '>
      <span className='pure-menu-link mylink'>
        {label}
      </span>
    </Link>
export const MenuList = (props) =>
    <div className="pure-menu pure-menu-horizontal">
      <div className="pure-menu-list">
        {props.children}
      </div>
    </div>
export function initialCapitalCase(string) {
  return startCase(toLower(string));
}

export function MyInput({input, meta: { touched, error }, ...custom}) {

  const hasError = touched && error;
  return (
      <div className="formContainer pure-control-group">
        <label >{initialCapitalCase(input.name)}</label>
        <input className="formItem" {...input} {...custom} />
        {/* {hasError && <Message error header='Error' content={error} />} */}
        {/* {hasError && <span>{error}</span> } */}
        {hasError && <MyMessage message={error} />}
      </div>
  );
}
export function MyTextarea({input, meta: { touched, error }, ...custom}) {
  const hasError = touched && error;
  return (
      <div className="formContainer">
        <label >{initialCapitalCase(input.name)}</label>
        <textarea  rows="15" className="formItem" {...input} {...custom} placeholder='contente' />
        {hasError && <span>{error}</span>}
      </div>
  );
}
export function MyMessage(props){
  const { message } = props;
  return (
    <span className='message pure-form-message-inline'>{message}</span>
  );
}
export class MyFileInput extends Component {
    constructor(props){
      super(props);
      this.onChange = this.onChange.bind(this);
    }
    onChange(e){
      const { input:{ onChange } }= this.props;
      onChange(e.target.files[0]);
    }
    render(){
      const { input: { value }} = this.props
      return(
        <input type="file" value={value} onChange={this.onChange} />
      );
    }
  }
export function MySelect({options}){
  return (
    <select >
      <option value="">Select a racis...</option>
      {options.map(option=>
        <option value={option} key={option}>{option}</option>
      )}
    </select>
  );
}
export const SimpleMap= withGoogleMap(props =>(
  <GoogleMap
    
    defaultZoom={8}
    defaultCenter={{lat:13.66191391961704,lng:-89.25284385681152}}
    onClick={props.onMapClick}
  > 
  <Marker
    defaultPosition={{lat:13.66191391961704,lng:-89.25284385681152}}
    draggable={true}
    // {...marker}
    // onRightClick={() => props.onMarkerRightClick(index)}
    onClick={props.onMarkerClick}
  />
    
  </GoogleMap>));  

export const SingleListItem= (
  {_id, firstName, lastName, description, email, 
    picture, racis='T',username,geoLocation:{longitude,latitude}},i,myFunc)=>
      <List.Item key={i} onClick={(e)=>myFunc(e, _id)}>
        <Image avatar src={picture} />
        <List.Content>
          <List.Header as='a'>{firstName} {lastName}</List.Header>
          <List.Description><a><b>{username}</b></a> - <b>{email}</b>  </List.Description>
        </List.Content>
      </List.Item>

export function ReguLabel(props){
  return(
    <label className={`ui pointing label ${props.className}`} htmlFor={props.labelFor} >{props.labelName}</label>
  );
}

export const SreguLabel= styled(ReguLabel)`
  
  
`;
export const ReguInput = styled.input`
  width: 100%;
  border-bottom: 1px solid lightgrey;
`
;
export const MyButton = styled.button`
  background: white;
  color:palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
export function ReguInputSet(){
  
}
