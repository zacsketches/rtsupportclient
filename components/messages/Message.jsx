import React, {Component} from 'react';
import fecha from 'fecha';

class Message extends Component{
	render() {
		let {message} = this.props;
		let createdAt = fecha.format(message.createdAt, 'HH:mm:ss MM/DD/YY');
		return (
			<li className='message'>
				<span className='author'><strong>{message.author}</strong></span>
				<span className='timestamp'>{createdAt}</span>
				<br/>
				<span className='body'>{message.body}</span>
			</li>
		)
	}
}

Message.propTypes = {
	message: React.PropTypes.object.isRequired
}

export default Message