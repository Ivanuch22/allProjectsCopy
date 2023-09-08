import React, { Component } from "react";
import './style.css'
import AddItem from "../add-item";
import TaskBlock from "../task-block";

export default class App extends Component {
    state = {
        data: [],
        id: 0
    }
    addItem = (text, checkBox = false, id) => {
        const newObj = {
            text: text, checkBox: checkBox, id: id
        }
        this.setState(({ data }) => {
            const newArr = [...data, newObj];
            return {
                data: newArr,
                id: ++this.state.id
            }
        })
    }
    toggleCheckBox = (id) => {
        this.setState(({ data }) => {
            const index = data.findIndex(element => element.id === id)
            const old = data[index];
            const newItem = { ...old, checkBox: !old.checkBox };
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
            return {
                data: newArr
            }
        })
    }
    deleteItem = (id) => {
        this.setState(({ data }) => {
            let index = data.findIndex(element => element.id === id)
            const before = data.slice(0, index);
            const after = data.slice(index + 1);
            const newArr = [...before, ...after];
            for (let index = 0; index < newArr.length; index++) {
                newArr[index].id = index
            }
            return { data: newArr, id: newArr.length }

        })
    }
    componentDidUpdate() {
        this.setData()
    }
    componentDidMount() {
        this.getData()
    }
    setData = () => {
        localStorage.setItem("data", JSON.stringify(this.state.data))
    }
    getData = () => {
        const data = JSON.parse(localStorage.getItem('data'));
        if (data !== null && data !== []) {
            let id = data.length;
            localStorage.clear()
            this.setState({
                data: data,
                id: id
            })
        }
    }

    render() {
        return (
            <div className="block">
                <h1 className="title">Need to do </h1>
                <div className="block">
                    <TaskBlock
                        data={this.state.data}
                        toggleCheckBox={this.toggleCheckBox}
                        deleteItem={this.deleteItem} />

                    <AddItem
                        id={this.state.id}
                        addItem={this.addItem} />

                </div>

            </div>
        )
    }
}

