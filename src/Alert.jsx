import React, { Component } from 'react';

class Alert extends Component {
    constructor(props){
        super(props);
        this.state = ({
            notification: 'himuka'
        });
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        alert(this.state.notification);
    }

    render() {
        return (
            <div>
                <button onClick={this.onClick}>
                    アラート
                </button>
            </div>
        );
    }
}

export default Alert;