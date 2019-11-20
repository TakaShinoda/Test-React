import React, { Component } from 'react';

class Message extends Component {
    render() {
        return (
            <div>
                <p>ようこそ! {this.props.message}</p>
            </div>
        );
    }
}

export default Message;