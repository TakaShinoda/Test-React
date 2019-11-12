import React, { Component } from 'react';

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            input: 'hoge'
        }
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({
            input: e.target.value
        });
    }

    render() {
        return (
            <div>
                <input type='text' onChange={this.onChange} placeholder="名前を入力" />
                <p>こんにちは！{this.state.input}さん</p>
            </div>
        );
    }
}

export default Form;