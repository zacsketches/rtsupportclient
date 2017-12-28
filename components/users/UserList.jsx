import React, {Component} from 'react';
import User from './User.jsx';

class UserList extends Component{
	render(){
		return (
			<ul>{
				this.props.users.map( u =>{
					return (
						<User 
							key={u.id}
							user={u}
							{...this.props}
						/>
					)
				})
			}</ul>
		)
	}
}

UserList.propTypes = {
	users: React.PropTypes.array.isRequired
}

export default UserList