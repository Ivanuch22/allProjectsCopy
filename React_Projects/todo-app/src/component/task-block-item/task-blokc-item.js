import React, { Component } from "react";
import './style.css'
export default class TaskBlockItem extends Component {

    render() {
        const { text, checkBox } = this.props.data
        if (checkBox) {
            return (
                <>
                    <div className="block-checkbox">
                        <input checked type="checkbox" onChange={this.props.toggleCheckBox} />
                    </div>
                    <p className="block-title">{text}  <span onClick={this.props.deleteItem} className="block-button">Удалить</span> </p>
                </>
            )
        } else {
            return (
                <>
                    <div className="block-checkbox">
                        <input type="checkbox" onChange={this.props.toggleCheckBox} />
                    </div>
                    <p className="block-title">{text}  <span onClick={this.props.deleteItem} className="block-button">Удалить</span> </p>
                </>
            )
        }

    }
}
