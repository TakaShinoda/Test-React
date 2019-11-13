import React, { Component } from 'react';

class Name extends Component {
    constructor(props){
        super(props);
        this.state = {
        name: 'hoge'
        }
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({
            name: e.target.value
        });
    }

    render() {
        return (
            <div>
                <input type='text' onChange={this.onChange} placeholder="名前を入力" />
                <p>こんにちは！ {this.state.name}さん</p>
            </div>
        );
    }
}

export default Name;