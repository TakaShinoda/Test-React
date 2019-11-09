import React, { Component } from 'react';

class Count extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
        this.doAdd = this.doAdd.bind(this);
    }

    doAdd() {
        this.setState({
            count: this.state.count +1
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.doAdd}>+1ボタン</button>
                <p>{this.state.count}</p>
            </div>
        );
    }
}

export default Count;