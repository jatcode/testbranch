import React, { Component } from 'react';
import { SreguLabel, MyButton } from '../../components/MyComponents'

class Login extends Component {

	render(){
		return(
			<form>
				<header>Login Form</header>
				<SreguLabel labelFor={'userNombre'} labelName={'usuario'} />
				<MyButton> boton</MyButton>
				<input type='text' name='username' />
				<input type='password' name='username' />
			</form>
		);
	}
}
export default Login;
