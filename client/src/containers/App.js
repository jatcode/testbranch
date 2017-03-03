import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import  * as userActionCreators  from '../containers/users/actions';
import Main from '../components/Main';

function mapStateToProps(state){
    return {
      users: state.users,
      currUser: state.currUser, 
		};
}

function mapDispatchToProps(dispatch){
		return bindActionCreators({...userActionCreators}, dispatch);
}

const App = connect (mapStateToProps,mapDispatchToProps)(Main);

export default App;
