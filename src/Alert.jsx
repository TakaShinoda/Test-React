import React, { Component } from 'react';

class Alert extends Component {
    constructor(props){
        super(props);
        this.state = ({
            notification: 'アラート'
        });
        this.doAlert = this.doAlert.bind(this);
    }

    doAlert() {
        alert(this.state.notification);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.doAlert}>
                    <input type="submit" value="アラート" />
                </form>
            </div>
        );
    }
}

export default Alert;