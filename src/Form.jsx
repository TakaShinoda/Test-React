import React, { Component } from 'react';

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            input: ''
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
                <input type='text' onChange={this.onChange} />
                {this.state.input}
            </div>
        );
    }
}

export default Form;