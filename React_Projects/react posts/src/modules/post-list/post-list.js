import React from "react";
import PostListItem from "../post-list-item/post-list-item";
import './post-list.css';

const PostList = ({ posts, Delete, toggleImportant, toggleLike }) => {
    //запис  усіх li у константу elements з данними з масива
    const elements = posts.map((item) => {
        //Витягується окремо ід масива, і сам обєкт без ід 
        const { id, ...itemProps } = item
        //створення блоку li з данними з масива
        console.log(toggleImportant)
        return (
            <li key={id} className="list-group-item">
                <PostListItem
                    Delete={() => Delete(id)}
                    toggleImportant={() => toggleImportant(id)}
                    toggleLike={() => toggleLike(id)}
                    {...itemProps} />
            </li>
        )
    })
    //створення цільнього блоку ul з li елементами 
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}


export default PostList;