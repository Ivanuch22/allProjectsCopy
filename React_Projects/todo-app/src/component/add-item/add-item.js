import React, { Component } from "react";
import './style.css'
export default class AddItem extends Component {
    state = {
        text: '',
    }
    onChangeValue = (e) => {
        this.setState({
            text: e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.text, false, this.props.id);
        this.setState({
            text: ''
        })

    }
    render() {
        return (
            <form
                className="block-bottom"
                onSubmit={this.onSubmit}>
                <input
                    placeholder="Type some text"
                    className="block-input"
                    type="text"
                    value={this.state.text}
                    onChange={this.onChangeValue} />
                <button type="submit">add</button>
            </form>

        )
    }
}