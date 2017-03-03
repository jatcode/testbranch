import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Home from './components/Home';
import AddUser from './containers/users/AddUser';
import UpdateUser from './containers/users/UpdateUser';
import ViewUser from './containers/users/ViewUser';
import UserList from './containers/users/index';

const routes = (
	<Route path='/' component={App}>
		<IndexRoute component={Home}/>
		<Route path="/userlist" component={UserList}/>
		<Route path="/adduser" component={AddUser}/>
		<Route path="/viewuser/:id" component={ViewUser}/>
		<Route path="/updateuser/:id" component={UpdateUser}/>
	</Route>
)
export default routes
