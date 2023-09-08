import React, { Component } from "react";
import './style.css'
import TaskBlockItem from "../task-block-item";
export default class TaskBlock extends Component {

    render() {
        const elements = this.props.data.map((item, id) => {
            if (!item.text && !item.text.lenght > 0) {
                return;
            }
            return (
                <li key={id} className='block-line' >
                    <TaskBlockItem
                        data={item}
                        toggleCheckBox={() => this.props.toggleCheckBox(id)}
                        deleteItem={() => this.props.deleteItem(id)}
                    />
                </li>
            )
        })
        return (
            <ul>
                {elements}
            </ul>
        )
    }
}
