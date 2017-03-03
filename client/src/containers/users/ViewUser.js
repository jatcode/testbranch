import React,{Component} from 'react';
import { browserHistory } from 'react-router';
import { Card, Icon, Image, Button, Label } from 'semantic-ui-react'


export default class ViewUser extends Component {
	
	componentDidMount() {
		this.props.getSingleUser(this.props.params.id);
		// console.log('Viewing...',this.props.params.id);
	}
	onEditUserClick(){
		browserHistory.push(`/updateuser/${this.props.params.id}`);
  }
	onDeletePostClick(){
    this.props.deleteUser(this.props.params.id);
  }

    render() {
			const userItem = this.props.currUser;
				if (!userItem.hasOwnProperty('firstName')) {
				 return (<p>Loading...</p>)
				}
				const {
					firstName, lastName, email, username,
					description, roleName, picture, racis,
					geoLocation
				} = userItem;
        return (
					
	        <div >
 						<Card fluid>							
							<Card.Content>
				        {/* <Image floated='right' size='big' src='http://semantic-ui.com/images/avatar/large/steve.jpg' /> */}
								<Image  size='big' src={picture} />
								<Card.Header>
									{firstName} {lastName}
								</Card.Header>
								<Label as='a' size='large'>
									<Icon name='user' />
									{username}
								</Label>
								<Label as='a' size='large'>
									<Icon name='mail' />
									<b>{email}</b>
								</Label>
							</Card.Content>
							<Card.Description>
								{description.split('\n').map((d, i) => <p key={i}>{d}</p>)}
							</Card.Description>
							<Card.Content>
				        <Card.Meta>
				        </Card.Meta>
								<a><Icon size='large' name='protect' />{roleName}</a>
								<a><Icon  size='large' name='universal access' />{racis}</a>
								<a><Icon  size='large' name='marker' />Lat:<b>{geoLocation.latitude}</b> ,
								Long:<b> {geoLocation.longitude}</b></a>
				      </Card.Content>
				      <Card.Content extra>
				        <div className='ui two buttons'>
				          <Button basic color='green' onClick={this.onEditUserClick.bind(this)}>Edit User</Button>
				          <Button basic color='red' onClick={this.onDeletePostClick.bind(this)}>Delete user</Button>
				        </div>
				      </Card.Content>
						</Card>
	        </div>
        );
    }
}