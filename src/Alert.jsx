import React, { Component } from 'react';

class Alert extends Component {
    constructor(props){
        super(props);
        this.doAlert = this.doAlert.bind(this)
    }

    doAlert() {
        alert(this.props.message)
    }

    render() {
        return (
            <div>
                <button onClick={this.doAlert}>
                    アラート
                </button>
            </div>
        );
    }
}

export default Alert;