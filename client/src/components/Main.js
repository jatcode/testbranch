import React, { Component } from 'react';
import {  MyLinkItem } from './MyComponents'
import { Header/*, Container*/ } from '../layout/index'
import { Container } from 'semantic-ui-react'

class Main extends Component {
	render(){
		return (
			<div>
					<Header>
						<MyLinkItem toValue='/' label='Home'/>
						<MyLinkItem toValue='/userlist' label='User List'/>
						<MyLinkItem toValue='/adduser' label='Add User'/>
					</Header> 
					<div className='content-wrapper'>
						<Container textAlign='justified'>
							{React.cloneElement(this.props.children, this.props)}
						</Container>
					</div>
			</div>
		);
	}
};

export default Main;