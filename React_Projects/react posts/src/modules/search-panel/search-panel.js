import React, { Component } from "react";
import "./search-panel.css"
export default class SearchPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            term: ''
        }
    }
    onChange = (e) => {
        const term = e.target.value;
        this.setState({
            term: term
        })
        this.props.onUpdateSearch(term)
    }
    render() {

        return (
            <input
                className="form-control search-input"
                type="text"
                placeholder="Пошук по записам"
                onChange={this.onChange}
            />
        )
    }
}