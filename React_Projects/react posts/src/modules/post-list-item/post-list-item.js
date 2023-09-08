import React, { Component } from "react";
import "./post-list-item.scss"


export default class PostListItem extends Component {
    render = () => {
        //Деструктурулізація з statec
        const { label, Delete, toggleImportant, toggleLike, important, like } = this.props;
        //Добавлення класів до елемента
        let classNames = "app-list-item d-flex justify-content-between";
        //провірка на наявність this, якщо є добавляється клас 
        if (important) {
            classNames += " important";
        }
        if (like) {
            classNames += " like";
        }
        //створення елемента
        return (
            <div className={classNames}
                onDoubleClick={toggleLike}
            >
                <span
                    className="app-list-item-label"
                >{label}</span>
                <div className="d-flex justify-content-center align-items-center" >
                    <button
                        onClick={toggleImportant}
                        type="button"
                        className="btn-star btn-sm">
                        <i className="fa-solid fa-star"></i>
                    </button>
                    <button
                        type="button"
                        onClick={Delete}
                        className="btn-trash btn-sm">
                        <i className="fa-regular fa-trash-can"></i>
                    </button>
                    <i className="fa-solid fa-heart"></i>
                </div>
            </ div>
        )
    }
}
