import React, { Component } from "react";
import "./post-add-form.css"
export default class PostAddForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
    }
    onValueChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addPost(this.state.value)
        this.setState({
            value: ''
        })
    }
    render = () => {
        return (
            <form
                onSubmit={this.onSubmit}
                className="bottom-panel d-flex"
            >
                <input
                    type="text"
                    placeholder="Про що ви думаєте зараз"
                    className="form-control new-post-label"
                    onChange={this.onValueChange}
                    value={this.state.value}
                />
                <button
                    type="submit"
                    className="btn btn-outline-secondary"
                >Добавить</button>
            </form>
        )
    }

}